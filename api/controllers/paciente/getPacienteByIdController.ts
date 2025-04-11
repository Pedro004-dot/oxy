import { Request, Response } from 'express';
import { getPacienteByIdService } from '../../services/paciente/getPacienteByIdService';

/**
 * Controller responsável por buscar um paciente pelo ID
 */
export const getPacienteByIdController = {
  /**
   * Busca um paciente pelo ID fornecido nos parâmetros da requisição
   * @param req Request do Express
   * @param res Response do Express
   */
  async getPacienteById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const paciente = await getPacienteByIdService(id);

      if (!paciente) {
        res.status(404).json({ error: 'Paciente não encontrado' });
        return;
      }

      res.status(200).json(paciente);
    } catch (error) {
      console.error('Erro ao buscar paciente por ID:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 