import { Request, Response } from 'express';
import { createPacienteService } from '../../services/paciente/createPacienteService';

/**
 * Controller responsável por criar um novo paciente
 */
export const createPacienteController = {
  /**
   * Cria um novo paciente com base nos dados do request
   * @param req Request do Express
   * @param res Response do Express
   */
  async createPaciente(req: Request, res: Response): Promise<void> {
    try {
      const paciente = await createPacienteService(req.body);
      res.status(201).json(paciente);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
        return;
      }

      console.error('Erro inesperado ao criar paciente:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 