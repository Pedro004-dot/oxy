import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../lib/jwt';
import { TokenPayload } from '../models/schema.model';

// Extende o tipo Request do Express para incluir o usuário
declare module 'express' {
  interface Request {
    user?: TokenPayload;
  }
}

/**
 * Middleware que verifica se o usuário está autenticado
 * Extrai o token do header Authorization, valida com JWT e anexa os dados do usuário ao request
 */
export function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ error: 'Token de autenticação não fornecido' });
      return;
    }

    // Remove o prefixo "Bearer " do token
    const token = authHeader.replace('Bearer ', '');
    
    const decoded = verifyToken(token);
    
    if (!decoded) {
      res.status(401).json({ error: 'Token de autenticação inválido' });
      return;
    }

    // Anexa os dados do usuário ao request
    req.user = decoded;
    
    next();
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    res.status(401).json({ error: 'Erro ao autenticar usuário' });
  }
} 