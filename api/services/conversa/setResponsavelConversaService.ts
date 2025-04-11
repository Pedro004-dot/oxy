import prisma from '../../../lib/prisma';
import { Conversa, SetResponsavelConversaInput } from '../../models/schema.model';

/**
 * Service responsável por definir o responsável por uma conversa
 * @param id ID da conversa a ser atualizada
 * @param data ID do usuário responsável
 * @returns Conversa atualizada
 * @throws Error se a conversa não existir, usuário não existir ou houver erro na atualização
 */
export async function setResponsavelConversaService(id: string, data: SetResponsavelConversaInput): Promise<Conversa> {
  try {
    // Verifica se a conversa existe
    const existingConversa = await prisma.app_conversa.findUnique({
      where: { id }
    });

    if (!existingConversa) {
      throw new Error('Conversa não encontrada');
    }

    // Verifica se o usuário existe
    const usuario = await prisma.app_usuario.findUnique({
      where: { id: data.responsavelAtendimentoId }
    });

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    // Atualiza o responsável e o horário do último contato
    const conversa = await prisma.app_conversa.update({
      where: { id },
      data: {
        responsavelAtendimentoId: data.responsavelAtendimentoId,
        ultimoContatoEm: new Date()
      },
      include: {
        app_paciente: {
          select: {
            id: true,
            nome: true,
            telefone: true,
            cpf: true,
            dataNascimento: true
          }
        },
        app_usuario: {
          select: {
            id: true,
            nome: true,
            email: true,
            papel: true
          }
        }
      }
    });

    return conversa;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao definir responsável da conversa:', error);
    throw new Error('Erro ao atualizar conversa no banco de dados');
  }
} 