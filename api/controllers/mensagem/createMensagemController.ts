import { Request, Response } from 'express';
import { createMensagemService } from '../../services/mensagem/createMensagemService';

/**
 * Controller responsável por criar uma nova mensagem
 */
export const createMensagemController = {
  /**
   * Cria uma nova mensagem com base nos dados do request
   * @param req Request do Express
   * @param res Response do Express
   */
  async createMensagem(req: Request, res: Response): Promise<void> {
    try {
      const mensagem = await createMensagemService(req.body);
      res.status(201).json(mensagem);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro inesperado ao criar mensagem:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 