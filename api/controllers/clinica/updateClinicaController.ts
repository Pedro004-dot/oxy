import { Request, Response } from 'express';
import { updateClinicaService } from '../../services/clinica/updateClinicaService';

/**
 * Controller responsável por atualizar os dados de uma clínica
 */
export const updateClinicaController = {
  /**
   * Atualiza os dados de uma clínica com base no ID e nos dados do request
   * @param req Request do Express
   * @param res Response do Express
   */
  async updateClinica(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const clinica = await updateClinicaService(id, req.body);
      res.status(200).json(clinica);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Clínica não encontrada') {
          res.status(404).json({ error: error.message });
          return;
        }
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro ao atualizar clínica:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 