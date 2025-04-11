import { Request, Response } from 'express';
import { getUsuarioByIdService } from '../../services/usuario/getUsuarioByIdService';

/**
 * Controller responsável por buscar um usuário pelo ID
 */
export async function getUsuarioByIdController(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: 'ID do usuário é obrigatório' });
      return;
    }

    const usuario = await getUsuarioByIdService(id);

    if (!usuario) {
      res.status(404).json({ error: 'Usuário não encontrado' });
      return;
    }

    res.status(200).json(usuario);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
      return;
    }

    console.error('Erro inesperado ao buscar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
} 