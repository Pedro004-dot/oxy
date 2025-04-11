import { Request, Response } from 'express';
import { updatePacienteService } from '../../services/paciente/updatePacienteService';

/**
 * Controller responsável por atualizar os dados de um paciente
 */
export const updatePacienteController = {
  /**
   * Atualiza os dados de um paciente com base no ID e nos dados do request
   * @param req Request do Express
   * @param res Response do Express
   */
  async updatePaciente(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const paciente = await updatePacienteService(id, req.body);
      res.status(200).json(paciente);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Paciente não encontrado') {
          res.status(404).json({ error: error.message });
          return;
        }
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro ao atualizar paciente:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 