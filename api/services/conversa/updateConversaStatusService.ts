import prisma from '../../../lib/prisma';
import { Conversa, UpdateConversaStatusInput, validateConversaStatus } from '../../models/schema.model';

/**
 * Service responsável por atualizar o status de uma conversa
 * @param id ID da conversa a ser atualizada
 * @param data Novo status da conversa
 * @returns Conversa atualizada
 * @throws Error se o status for inválido, conversa não existir ou houver erro na atualização
 */
export async function updateConversaStatusService(id: string, data: UpdateConversaStatusInput): Promise<Conversa> {
  // Validação do status
  if (!validateConversaStatus(data.status)) {
    throw new Error('Status inválido');
  }

  try {
    // Verifica se a conversa existe
    const existingConversa = await prisma.app_conversa.findUnique({
      where: { id }
    });

    if (!existingConversa) {
      throw new Error('Conversa não encontrada');
    }

    // Atualiza o status e o horário do último contato
    const conversa = await prisma.app_conversa.update({
      where: { id },
      data: {
        status: data.status,
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
    console.error('Erro ao atualizar status da conversa:', error);
    throw new Error('Erro ao atualizar conversa no banco de dados');
  }
} 