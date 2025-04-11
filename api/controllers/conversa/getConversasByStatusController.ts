import { Request, Response } from 'express';
import { getConversasByStatusService } from '../../services/conversa/getConversasByStatusService';

/**
 * Controller responsável por buscar conversas pelo status
 */
export const getConversasByStatusController = {
  /**
   * Busca conversas pelo status fornecido nos parâmetros da requisição
   * @param req Request do Express
   * @param res Response do Express
   */
  async getConversasByStatus(req: Request, res: Response): Promise<void> {
    try {
      const { status } = req.params;
      const { clinicaId } = req.body;

      if (!clinicaId) {
        res.status(400).json({ error: 'ID da clínica é obrigatório' });
        return;
      }

      const conversas = await getConversasByStatusService(status, clinicaId);
      res.status(200).json(conversas);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro ao buscar conversas por status:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 