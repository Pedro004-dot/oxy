import { Request, Response } from 'express';
import { deleteUsuarioService } from '../../services/usuario/deleteUsuarioService';

/**
 * Controller responsável por deletar um usuário
 */
export async function deleteUsuarioController(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: 'ID do usuário é obrigatório' });
      return;
    }

    await deleteUsuarioService(id);
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'Usuário não encontrado') {
        res.status(404).json({ error: error.message });
        return;
      }
      res.status(400).json({ error: error.message });
      return;
    }

    console.error('Erro inesperado ao deletar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
} 