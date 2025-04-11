import { Request, Response } from 'express';
import { createClinicaService } from '../../services/clinica/createClinicaService';

/**
 * Controller responsável por criar uma nova clínica
 */
export const createClinicaController = {
  /**
   * Cria uma nova clínica com base nos dados do request
   * @param req Request do Express
   * @param res Response do Express
   */
  async createClinica(req: Request, res: Response): Promise<void> {
    try {
      const clinica = await createClinicaService(req.body);
      res.status(201).json(clinica);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro inesperado ao criar clínica:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 