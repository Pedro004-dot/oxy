import { Request, Response } from 'express';
import { deletePacienteService } from '../../services/paciente/deletePacienteService';

/**
 * Controller responsável por remover um paciente do sistema
 */
export const deletePacienteController = {
  /**
   * Remove um paciente com base no ID fornecido nos parâmetros da requisição
   * @param req Request do Express
   * @param res Response do Express
   */
  async deletePaciente(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const paciente = await deletePacienteService(id);
      res.status(200).json({ message: 'Paciente removido com sucesso', paciente });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Paciente não encontrado') {
          res.status(404).json({ error: error.message });
          return;
        }
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro ao remover paciente:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 