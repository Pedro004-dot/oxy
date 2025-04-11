import { Request, Response } from 'express';
import { updateConversaStatusService } from '../../services/conversa/updateConversaStatusService';

/**
 * Controller responsável por atualizar o status de uma conversa
 */
export const updateConversaStatusController = {
  /**
   * Atualiza o status de uma conversa com base no ID e no novo status
   * @param req Request do Express
   * @param res Response do Express
   */
  async updateConversaStatus(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const conversa = await updateConversaStatusService(id, req.body);
      res.status(200).json(conversa);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Conversa não encontrada') {
          res.status(404).json({ error: error.message });
          return;
        }
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro ao atualizar status da conversa:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 