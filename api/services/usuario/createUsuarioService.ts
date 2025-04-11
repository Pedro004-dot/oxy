import prisma from '../../../lib/prisma';
import { CreateUsuarioInput, Usuario, validateEmail, validateSenha, validatePapel } from '../../models/schema.model';
import { randomUUID } from 'crypto';

/**
 * Service responsável por criar um novo usuário
 * @param data Dados do usuário a ser criado
 * @returns Usuário criado
 * @throws Error se os dados forem inválidos ou se houver erro na criação
 */
export async function createUsuarioService(data: CreateUsuarioInput): Promise<Usuario> {
  // Validações de negócio
  if (!data.nome || data.nome.trim().length === 0) {
    throw new Error('Nome é obrigatório');
  }

  if (!validateEmail(data.email)) {
    throw new Error('E-mail inválido');
  }

  if (!validateSenha(data.senha)) {
    throw new Error('Senha deve ter no mínimo 6 caracteres');
  }

  if (!validatePapel(data.papel)) {
    throw new Error('Papel inválido. Deve ser: admin, atendente ou medico');
  }

  try {
    // Verifica se já existe um usuário com o mesmo email
    const existingUser = await prisma.app_usuario.findUnique({
      where: { email: data.email }
    });

    if (existingUser) {
      throw new Error('Já existe um usuário cadastrado com este e-mail');
    }

    // Se clinicaId foi fornecido, verifica se a clínica existe
    if (data.clinicaId) {
      const clinica = await prisma.app_clinica.findUnique({
        where: { id: data.clinicaId }
      });

      if (!clinica) {
        throw new Error('Clínica não encontrada');
      }
    }

    const usuario = await prisma.app_usuario.create({
      data: {
        id: randomUUID(),
        nome: data.nome,
        email: data.email,
        senhaHash: data.senha, // Por enquanto, salvando a senha sem hash
        papel: data.papel,
        clinicaId: data.clinicaId,
        createdAt: new Date()
      }
    });

    // Remove o campo senhaHash do retorno
    const { senhaHash: _, ...usuarioSemSenha } = usuario;
    return usuarioSemSenha as Usuario;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao criar usuário:', error);
    throw new Error('Erro ao criar usuário no banco de dados');
  }
} 