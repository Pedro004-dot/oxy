import prisma from '../../../lib/prisma';
import { Usuario } from '../../models/schema.model';

/**
 * Service responsável por buscar um usuário pelo ID
 * @param id ID do usuário a ser buscado
 * @returns Dados do usuário encontrado ou null se não existir
 * @throws Error se houver erro na busca
 */
export async function getUsuarioByIdService(id: string): Promise<Usuario | null> {
  if (!id) {
    throw new Error('ID do usuário é obrigatório');
  }

  try {
    const usuario = await prisma.app_usuario.findUnique({
      where: { id }
    });

    if (!usuario) {
      return null;
    }

    // Remove o campo senhaHash do retorno
    const { senhaHash: _, ...usuarioSemSenha } = usuario;
    return usuarioSemSenha as Usuario;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw new Error('Erro ao buscar usuário no banco de dados');
  }
} 