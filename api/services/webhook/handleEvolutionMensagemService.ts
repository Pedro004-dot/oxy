import prisma from "../../../lib/prisma";
import { randomUUID } from "crypto";
import { processarMidiaEvolution } from "../utils/processarMidiaEvolutionService";

interface EvolutionPayload {
  from: string;
  fromMe: boolean;
  id: string;
  text?: string;
  type: string;
  timestamp?: number;
  url?: string;
  url_documento?: string;
}

/**
 * Mapeia os tipos de mensagem da Evolution API para os tipos internos do sistema
 * @param evolutionType Tipo de mensagem recebido da Evolution API
 * @returns Tipo interno padronizado da mensagem
 */
function mapMessageType(evolutionType: string): string {
  switch (evolutionType) {
    case "conversation":
      return "texto";
    case "audioMessage":
      return "audio";
    case "documentMessage":
      return "documento";
    case "imageMessage":
      return "imagem";
    case "videoMessage":
      return "video";
    default:
      return "desconhecido";
  }
}

/**
 * Processa mensagens recebidas da Evolution (WhatsApp)
 * Suporta mensagens de texto e multimídia (áudio, documento, imagem, vídeo)
 * Cria paciente se necessário, conversa se não existir, e registra a mensagem
 */
export async function handleEvolutionMensagemService(payload: EvolutionPayload): Promise<void> {
  try {
    // Validação inicial do payload
    if (!payload.from) throw new Error("Telefone ausente no payload");
    if (!payload.type) throw new Error("Tipo de mensagem ausente no payload");
    if (!payload.id) throw new Error("ID da mensagem ausente no payload");

    const telefone = payload.from.replace(/[^\d]/g, "");

    // 1. Busca ou cria paciente
    let paciente = await prisma.app_paciente.findUnique({ where: { telefone } });

    if (!paciente) {
      paciente = await prisma.app_paciente.create({
        data: {
          id: randomUUID(),
          telefone,
          nome: "Paciente WhatsApp",
          createdAt: new Date()
        }
      });
    }

    // 2. Busca ou cria conversa ativa
    let conversa = await prisma.app_conversa.findFirst({
      where: {
        pacienteId: paciente.id,
        status: { in: ["recebida", "em_atendimento"] }
      }
    });

    if (!conversa) {
      conversa = await prisma.app_conversa.create({
        data: {
          id: randomUUID(),
          pacienteId: paciente.id,
          clinicaId: paciente.clinicaId,
          status: "recebida",
          ultimoContatoEm: new Date()
        }
      });
    }

    // 3. Processa mensagem
    const evolutionType = payload.type;
    const autorTipo = payload.fromMe ? "usuario" : "paciente";
    
    // Mapeia o tipo da mensagem para o padrão interno
    const tipo = mapMessageType(evolutionType);

    let conteudo: string;

    if (evolutionType === "conversation") {
      // Para mensagens de texto, usa o campo text diretamente
      conteudo = payload.text || "";
      if (!conteudo.trim()) {
        throw new Error("Conteúdo vazio em mensagem de texto");
      }
    } else if (evolutionType === "documentMessage" && payload.url_documento) {
      // Para documentos, processa o arquivo vindo do url_documento
      conteudo = await processarMidiaEvolution(payload.url_documento, tipo);
    } else if (payload.url) {
      // Para áudio, vídeo, imagem
      conteudo = await processarMidiaEvolution(payload.url, tipo);
    } else {
      throw new Error(`URL ausente para mensagem do tipo ${tipo}`);
}
    

    // 4. Processa o timestamp
    let recebidaEm = new Date();
    if (payload.timestamp) {
      const timestamp = Number(payload.timestamp);
      if (!isNaN(timestamp) && isFinite(timestamp)) {
        // Verifica se o timestamp está em milissegundos ou segundos
        const timestampMs = timestamp.toString().length > 10 
          ? timestamp 
          : timestamp * 1000;
        const dateFromTimestamp = new Date(timestampMs);
        
        // Verifica se a data gerada é válida
        if (dateFromTimestamp.toString() !== 'Invalid Date') {
          recebidaEm = dateFromTimestamp;
        }
      }
    }

    // 5. Cria a mensagem
    const mensagemId = randomUUID();

    await prisma.app_mensagem.create({
      data: {
        id: mensagemId,
        conversaId: conversa.id,
        autorTipo,
        conteudo,
        tipo,
        whatsappMsgId: payload.id,
        recebidaEm,
        criadaEm: new Date()
      }
    });
    
    // 5b. Se for mídia, criar registro em app_midia
    if (tipo !== 'texto') {
      await prisma.app_midia.create({
        data: {
          id: randomUUID(),
          mensagem_id:  mensagemId  || "",
          url: conteudo,
          tipo,
          nome: `${tipo}-${mensagemId}` // ou nome original se disponível
        }
      });
    }

    // 6. Atualiza a conversa
    await prisma.app_conversa.update({
      where: { id: conversa.id },
      data: { ultimoContatoEm: new Date() }
    });
  } catch (error) {
    console.error("Erro ao processar mensagem da Evolution:", error);
    throw new Error(`Erro ao processar mensagem do WhatsApp: ${(error as Error).message}`);
  }
}
