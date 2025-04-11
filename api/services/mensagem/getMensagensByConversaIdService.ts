import prisma from '../../../lib/prisma';
import { Mensagem } from '../../models/schema.model';

/**
 * Service responsável por buscar todas as mensagens de uma conversa
 * @param conversaId ID da conversa
 * @returns Lista de mensagens ordenadas por data de criação
 * @throws Error se a conversa não existir ou houver erro na busca
 */
export async function getMensagensByConversaIdService(conversaId: string): Promise<Mensagem[]> {
  try {
    // Verifica se a conversa existe
    const conversa = await prisma.app_conversa.findUnique({
      where: { id: conversaId }
    });

    if (!conversa) {
      throw new Error('Conversa não encontrada');
    }

    // Busca as mensagens
    const mensagens = await prisma.app_mensagem.findMany({
      where: { conversaId },
      orderBy: { criadaEm: 'asc' }
    });

    return mensagens;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao buscar mensagens:', error);
    throw new Error('Erro ao buscar mensagens no banco de dados');
  }
} 