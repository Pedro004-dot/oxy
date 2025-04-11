import { Request, Response } from 'express';
import { updateUsuarioService } from '../../services/usuario/updateUsuarioService';

/**
 * Controller responsável por atualizar um usuário
 */
export async function updateUsuarioController(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const { nome, email, senha, papel } = req.body;

    if (!id) {
      res.status(400).json({ error: 'ID do usuário é obrigatório' });
      return;
    }

    // Verifica se pelo menos um campo foi fornecido para atualização
    if (!nome && !email && !senha && !papel) {
      res.status(400).json({ error: 'Nenhum campo fornecido para atualização' });
      return;
    }

    const usuario = await updateUsuarioService(id, { nome, email, senha, papel });
    res.status(200).json(usuario);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'Usuário não encontrado') {
        res.status(404).json({ error: error.message });
        return;
      }
      res.status(400).json({ error: error.message });
      return;
    }

    console.error('Erro inesperado ao atualizar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
} 