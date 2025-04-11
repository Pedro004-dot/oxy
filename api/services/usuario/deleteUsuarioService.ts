import prisma from '../../../lib/prisma';

/**
 * Service responsável por deletar um usuário
 * @param id ID do usuário a ser deletado
 * @throws Error se o usuário não existir ou se houver erro na deleção
 */
export async function deleteUsuarioService(id: string): Promise<void> {
  if (!id) {
    throw new Error('ID do usuário é obrigatório');
  }

  try {
    // Verifica se o usuário existe
    const usuario = await prisma.app_usuario.findUnique({
      where: { id }
    });

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    await prisma.app_usuario.delete({
      where: { id }
    });
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao deletar usuário:', error);
    throw new Error('Erro ao deletar usuário do banco de dados');
  }
} 