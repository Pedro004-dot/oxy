import prisma from '../../../lib/prisma';
import bcrypt from 'bcrypt';
import { LoginUsuarioInput, LoginResponse } from '../../models/schema.model';
import { signToken } from '../../lib/jwt';

/**
 * Service responsável por autenticar um usuário
 * @param data Dados de login (email e senha)
 * @returns Objeto contendo o usuário e o token JWT
 * @throws Error se as credenciais forem inválidas
 */
export async function loginUsuarioService(data: LoginUsuarioInput): Promise<LoginResponse> {
  // Validações básicas
  if (!data.email || !data.email.includes('@')) {
    throw new Error('E-mail inválido');
  }

  // if (!data.senha || data.senha.length < 6) {
  //   throw new Error('Senha deve ter no mínimo 6 caracteres');
  // }

  try {
    // Busca o usuário pelo email
    const usuario = await prisma.app_usuario.findUnique({
      where: { email: data.email }
    });

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    // Verifica a senha
    // const senhaCorreta = await bcrypt.compare(data.senha, usuario.senhaHash);
    const senhaCorreta = data.senha === usuario.senhaHash;

    if (!senhaCorreta) {
      throw new Error('Senha incorretaa');
    }

    // Gera o token JWT
    const tokenPayload = {
      id: usuario.id,
      email: usuario.email,
      papel: usuario.papel
    };

    const token = signToken(tokenPayload);

    // Remove a senha do objeto do usuário antes de retornar
    const { senhaHash: _, ...usuarioSemSenha } = usuario;

    return {
      usuario: usuarioSemSenha as LoginResponse['usuario'],
      token
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao realizar login:', error);
    throw new Error('Erro ao realizar login');
  }
} 