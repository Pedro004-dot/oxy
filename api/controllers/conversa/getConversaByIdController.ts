import { Request, Response } from 'express';
import { getConversaByIdService } from '../../services/conversa/getConversaByIdService';

/**
 * Controller responsável por buscar uma conversa pelo ID
 */
export const getConversaByIdController = {
  /**
   * Busca uma conversa pelo ID fornecido nos parâmetros da requisição
   * @param req Request do Express
   * @param res Response do Express
   */
  async getConversaById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const conversa = await getConversaByIdService(id);

      if (!conversa) {
        res.status(404).json({ error: 'Conversa não encontrada' });
        return;
      }

      res.status(200).json(conversa);
    } catch (error) {
      console.error('Erro ao buscar conversa por ID:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 