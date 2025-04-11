import prisma from '../../../lib/prisma';
import { CreateMensagemInput, Mensagem } from '../../models/schema.model';
import { randomUUID } from 'crypto';

/**
 * Service responsável por criar uma nova mensagem
 * @param data Dados da mensagem a ser criada
 * @returns Mensagem criada
 * @throws Error se os dados forem inválidos ou se houver erro na criação
 */
export async function createMensagemService(data: CreateMensagemInput): Promise<Mensagem> {
  // Validações de negócio
  if (!data.conversaId) {
    throw new Error('ID da conversa é obrigatório');
  }

  if (!data.conteudo || data.conteudo.trim().length === 0) {
    throw new Error('Conteúdo da mensagem é obrigatório');
  }

  if (!data.autorTipo || !['paciente', 'usuario', 'ia'].includes(data.autorTipo)) {
    throw new Error('Tipo de autor inválido');
  }

  try {
    // Verifica se a conversa existe
    const conversa = await prisma.app_conversa.findUnique({
      where: { id: data.conversaId }
    });

    if (!conversa) {
      throw new Error('Conversa não encontrada');
    }

    // Cria a mensagem
    const mensagem = await prisma.app_mensagem.create({
      data: {
        id: randomUUID(),
        conversaId: data.conversaId,
        autorTipo: data.autorTipo,
        autorId: data.autorId,
        conteudo: data.conteudo,
        tipo: data.tipo || 'texto',
        whatsappMsgId: data.whatsappMsgId,
        recebidaEm: data.recebidaEm,
        criadaEm: new Date()
      }
    });

    return mensagem;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao criar mensagem:', error);
    throw new Error('Erro ao criar mensagem no banco de dados');
  }
} 