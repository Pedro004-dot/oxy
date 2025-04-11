import { Router } from 'express';
import { loginUsuarioController } from '../controllers/usuario/loginUsuarioController';
import { meUsuarioController } from '../controllers/usuario/meUsuarioController';
import { createUsuarioController } from '../controllers/usuario/createUsuarioController';
import { getAllUsuariosController } from '../controllers/usuario/getAllUsuariosController';
import { getUsuarioByIdController } from '../controllers/usuario/getUsuarioByIdController';
import { updateUsuarioController } from '../controllers/usuario/updateUsuarioController';
import { deleteUsuarioController } from '../controllers/usuario/deleteUsuarioController';
import { isAuthenticated } from '../middlewares/authMiddleware';

const router = Router();

/**
 * Rotas para autenticação e gerenciamento de usuários
 */

// Rota de login - não requer autenticação
router.post('/login', loginUsuarioController);

// Rota protegida que retorna os dados do usuário autenticado
router.get('/me', isAuthenticated, meUsuarioController);

// Rotas de CRUD de usuários - todas requerem autenticação
router.post('/create', createUsuarioController);
router.get('/getAll', isAuthenticated, getAllUsuariosController);
router.get('/:id', isAuthenticated, getUsuarioByIdController);
router.put('/:id', isAuthenticated, updateUsuarioController);
router.delete('/:id', isAuthenticated, deleteUsuarioController);

export default router; 