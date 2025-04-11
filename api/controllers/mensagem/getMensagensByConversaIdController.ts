import { Request, Response } from 'express';
import { getMensagensByConversaIdService } from '../../services/mensagem/getMensagensByConversaIdService';

/**
 * Controller responsável por buscar mensagens de uma conversa
 */
export const getMensagensByConversaIdController = {
  /**
   * Busca todas as mensagens de uma conversa pelo ID fornecido nos parâmetros da requisição
   * @param req Request do Express
   * @param res Response do Express
   */
  async getMensagensByConversaId(req: Request, res: Response): Promise<void> {
    try {
      const { conversaId } = req.params;
      const mensagens = await getMensagensByConversaIdService(conversaId);
      res.status(200).json(mensagens);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Conversa não encontrada') {
          res.status(404).json({ error: error.message });
          return;
        }
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro ao buscar mensagens da conversa:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 