import { Request, Response } from 'express';
import { createConversaService } from '../../services/conversa/createConversaService';

/**
 * Controller responsável por criar uma nova conversa
 */
export const createConversaController = {
  /**
   * Cria uma nova conversa com base nos dados do request
   * @param req Request do Express
   * @param res Response do Express
   */
  async createConversa(req: Request, res: Response): Promise<void> {
    try {
      const conversa = await createConversaService(req.body);
      res.status(201).json(conversa);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro inesperado ao criar conversa:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 