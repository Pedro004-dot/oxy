import prisma from '../../../lib/prisma';
import { UpdateUsuarioInput, Usuario, validateEmail, validateSenha, validatePapel } from '../../models/schema.model';

/**
 * Service responsável por atualizar um usuário existente
 * @param id ID do usuário a ser atualizado
 * @param data Dados a serem atualizados
 * @returns Usuário atualizado
 * @throws Error se os dados forem inválidos ou se houver erro na atualização
 */
export async function updateUsuarioService(id: string, data: UpdateUsuarioInput): Promise<Usuario> {
  if (!id) {
    throw new Error('ID do usuário é obrigatório');
  }

  // Validações de negócio
  if (data.nome !== undefined && data.nome.trim().length === 0) {
    throw new Error('Nome não pode ser vazio');
  }

  if (data.email !== undefined && !validateEmail(data.email)) {
    throw new Error('E-mail inválido');
  }

  if (data.senha !== undefined && !validateSenha(data.senha)) {
    throw new Error('Senha deve ter no mínimo 6 caracteres');
  }

  if (data.papel !== undefined && !validatePapel(data.papel)) {
    throw new Error('Papel inválido. Deve ser: admin, atendente ou medico');
  }

  try {
    // Verifica se o usuário existe
    const existingUser = await prisma.app_usuario.findUnique({
      where: { id }
    });

    if (!existingUser) {
      throw new Error('Usuário não encontrado');
    }

    // Se o email está sendo atualizado, verifica se já existe outro usuário com o mesmo email
    if (data.email && data.email !== existingUser.email) {
      const userWithSameEmail = await prisma.app_usuario.findUnique({
        where: { email: data.email }
      });

      if (userWithSameEmail) {
        throw new Error('Já existe um usuário cadastrado com este e-mail');
      }
    }

    // Prepara os dados para atualização
    const updateData: any = {};
    if (data.nome !== undefined) updateData.nome = data.nome;
    if (data.email !== undefined) updateData.email = data.email;
    if (data.senha !== undefined) updateData.senhaHash = data.senha; // Por enquanto, salvando a senha sem hash
    if (data.papel !== undefined) updateData.papel = data.papel;

    const usuario = await prisma.app_usuario.update({
      where: { id },
      data: updateData
    });

    // Remove o campo senhaHash do retorno
    const { senhaHash: _, ...usuarioSemSenha } = usuario;
    return usuarioSemSenha as Usuario;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao atualizar usuário:', error);
    throw new Error('Erro ao atualizar usuário no banco de dados');
  }
} 