import { Request, Response } from 'express';
import { getClinicaByIdService } from '../../services/clinica/getClinicaByIdService';

/**
 * Controller responsável por buscar uma clínica pelo ID
 */
export const getClinicaByIdController = {
  /**
   * Busca uma clínica pelo ID fornecido nos parâmetros da requisição
   * @param req Request do Express
   * @param res Response do Express
   */
  async getClinicaById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const clinica = await getClinicaByIdService(id);

      if (!clinica) {
        res.status(404).json({ error: 'Clínica não encontrada' });
        return;
      }

      res.status(200).json(clinica);
    } catch (error) {
      console.error('Erro ao buscar clínica por ID:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 