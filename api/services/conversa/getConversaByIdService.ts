import prisma from '../../../lib/prisma';
import { Conversa } from '../../models/schema.model';

/**
 * Service responsável por buscar uma conversa pelo ID
 * @param id ID da conversa a ser buscada
 * @returns Conversa encontrada ou null se não existir
 * @throws Error se houver erro na busca
 */
export async function getConversaByIdService(id: string): Promise<Conversa | null> {
  try {
    const conversa = await prisma.app_conversa.findUnique({
      where: { id },
      include: {
        app_mensagem: {
          orderBy: {
            criadaEm: 'asc'
          }
        },
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
    console.error('Erro ao buscar conversa por ID:', error);
    throw new Error('Erro ao buscar conversa no banco de dados');
  }
} 