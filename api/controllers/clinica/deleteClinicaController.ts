import { Request, Response } from 'express';
import { deleteClinicaService } from '../../services/clinica/deleteClinicaService';

/**
 * Controller responsável por remover uma clínica
 */
export const deleteClinicaController = {
  /**
   * Remove uma clínica com base no ID fornecido nos parâmetros da requisição
   * @param req Request do Express
   * @param res Response do Express
   */
  async deleteClinica(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const clinica = await deleteClinicaService(id);
      res.status(200).json({ message: 'Clínica removida com sucesso', clinica });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Clínica não encontrada') {
          res.status(404).json({ error: error.message });
          return;
        }
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro ao remover clínica:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 