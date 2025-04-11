import prisma from '../../../lib/prisma';
import { Conversa, validateConversaStatus } from '../../models/schema.model';

/**
 * Service responsável por buscar conversas pelo status
 * @param status Status das conversas a serem buscadas
 * @param clinicaId ID da clínica para filtrar as conversas
 * @returns Lista de conversas encontradas
 * @throws Error se o status for inválido ou houver erro na busca
 */
export async function getConversasByStatusService(status: string, clinicaId: string): Promise<Conversa[]> {
  // Validação do status
  if (!validateConversaStatus(status)) {
    throw new Error('Status inválido');
  }

  try {
    // Verifica se a clínica existe
    const clinica = await prisma.app_clinica.findUnique({
      where: { id: clinicaId }
    });

    if (!clinica) {
      throw new Error('Clínica não encontrada');
    }

    const conversas = await prisma.app_conversa.findMany({
      where: {
        status,
        clinicaId
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
      },
      orderBy: {
        ultimoContatoEm: 'desc'
      }
    });

    return conversas;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao buscar conversas por status:', error);
    throw new Error('Erro ao buscar conversas no banco de dados');
  }
} 