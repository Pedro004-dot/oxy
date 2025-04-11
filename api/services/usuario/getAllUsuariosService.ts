import prisma from '../../../lib/prisma';
import { Usuario } from '../../models/schema.model';

/**
 * Service responsável por buscar todos os usuários
 * @returns Lista de usuários cadastrados
 * @throws Error se houver erro na busca
 */
export async function getAllUsuariosService(): Promise<Usuario[]> {
  try {
    const usuarios = await prisma.app_usuario.findMany({
      orderBy: {
        nome: 'asc'
      }
    });

    // Remove o campo senhaHash de todos os usuários
    return usuarios.map(usuario => {
      const { senhaHash: _, ...usuarioSemSenha } = usuario;
      return usuarioSemSenha as Usuario;
    });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw new Error('Erro ao buscar usuários no banco de dados');
  }
} 