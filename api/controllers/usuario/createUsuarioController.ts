import { Request, Response } from 'express';
import { createUsuarioService } from '../../services/usuario/createUsuarioService';

/**
 * Controller responsável por criar um novo usuário
 */
export async function createUsuarioController(req: Request, res: Response): Promise<void> {
  try {
    const { clinicaId, nome, email, senha, papel } = req.body;

    if (!nome || !email || !senha || !papel) {
      res.status(400).json({ error: 'Todos os campos são obrigatórios: nome, email, senha e papel' });
      return;
    }

    const usuario = await createUsuarioService({ clinicaId, nome, email, senha, papel });
    res.status(201).json(usuario);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
      return;
    }

    console.error('Erro inesperado ao criar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
} 