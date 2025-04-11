import { Request, Response, NextFunction } from 'express';

/**
 * Middleware para verificar se o usuário está autenticado
 * @param req Request do Express
 * @param res Response do Express
 * @param next NextFunction do Express
 */
export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // TODO: Implementar lógica de autenticação real
  // Por enquanto, apenas passa para o próximo middleware
  next();
} 