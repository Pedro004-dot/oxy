import { Request, Response } from 'express';

/**
 * Controller responsável por retornar os dados do usuário autenticado
 * Requer o middleware isAuthenticated
 */
export async function meUsuarioController(req: Request, res: Response): Promise<void> {
  try {
    // O middleware isAuthenticated já garantiu que req.user existe
    const user = req.user!;

    res.status(200).json({
      id: user.id,
      email: user.email,
      papel: user.papel
    });
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
} 