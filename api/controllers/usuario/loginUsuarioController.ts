import { Request, Response } from 'express';
import { loginUsuarioService } from '../../services/usuario/loginUsuarioService';

/**
 * Controller responsável pelo login de usuários
 */
export async function loginUsuarioController(req: Request, res: Response): Promise<void> {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      res.status(400).json({ error: 'E-mail e senha são obrigatórios' });
      return;
    }

    const result = await loginUsuarioService({ email, senha });
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      // Erros específicos de autenticação retornam 401
      if (
        error.message === 'Usuário não encontrado' ||
        error.message === 'Senha incorreta'
      ) {
        res.status(401).json({ error: error.message });
        return;
      }

      // Outros erros de validação retornam 400
      res.status(400).json({ error: error.message });
      return;
    }

    console.error('Erro inesperado ao fazer login:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
} 