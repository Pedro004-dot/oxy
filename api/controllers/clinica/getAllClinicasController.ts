import { Request, Response } from 'express';
import { getAllClinicasService } from '../../services/clinica/getAllClinicasService';

/**
 * Controller responsável por buscar todas as clínicas
 */
export const getAllClinicasController = {
  /**
   * Busca todas as clínicas cadastradas
   * @param req Request do Express
   * @param res Response do Express
   */
  async getAllClinicas(req: Request, res: Response): Promise<void> {
    try {
      const clinicas = await getAllClinicasService();
      res.status(200).json(clinicas);
    } catch (error) {
      console.error('Erro ao buscar todas as clínicas:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}; 