import { Request, Response } from 'express';
import { getPacienteByTelefoneService } from '../../services/paciente/getPacienteByTelefoneService';

/**
 * Controller responsável por buscar um paciente pelo número de telefone
 */
export const getPacienteByTelefoneController = {
  /**
   * Busca um paciente pelo telefone fornecido nos parâmetros da requisição
   * @param req Request do Express
   * @param res Response do Express
   */
  async getPacienteByTelefone(req: Request, res: Response): Promise<void> {
    try {
      const { telefone } = req.params;
      const paciente = await getPacienteByTelefoneService(telefone);

      if (!paciente) {
        res.status(404).json({ error: 'Paciente não encontrado' });
        return;
      }

      res.status(200).json(paciente);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro ao buscar paciente por telefone:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 