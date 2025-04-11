import { Request, Response } from 'express';
import { setResponsavelConversaService } from '../../services/conversa/setResponsavelConversaService';

/**
 * Controller responsável por definir o responsável por uma conversa
 */
export const setResponsavelConversaController = {
  /**
   * Define o responsável por uma conversa com base no ID e no ID do usuário
   * @param req Request do Express
   * @param res Response do Express
   */
  async setResponsavelConversa(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const conversa = await setResponsavelConversaService(id, req.body);
      res.status(200).json(conversa);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Conversa não encontrada' || error.message === 'Usuário não encontrado') {
          res.status(404).json({ error: error.message });
          return;
        }
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro ao definir responsável da conversa:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 