import { Request, Response } from 'express';
import { getAllUsuariosService } from '../../services/usuario/getAllUsuariosService';

/**
 * Controller responsável por listar todos os usuários
 */
export async function getAllUsuariosController(req: Request, res: Response): Promise<void> {
  try {
    const usuarios = await getAllUsuariosService();
    res.status(200).json(usuarios);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
      return;
    }

    console.error('Erro inesperado ao listar usuários:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
} 