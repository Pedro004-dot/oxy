import { Request, Response } from 'express';
import { getAllPacientesService } from '../../services/paciente/getAllPacientesService';

/**
 * Controller responsável por buscar todos os pacientes
 */
export const getAllPacientesController = {
  /**
   * Busca todos os pacientes cadastrados
   * @param req Request do Express
   * @param res Response do Express
   */
  async getAllPacientes(req: Request, res: Response): Promise<void> {
    try {
      const pacientes = await getAllPacientesService();
      res.status(200).json(pacientes);
    } catch (error) {
      console.error('Erro ao buscar todos os pacientes:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 