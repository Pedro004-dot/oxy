import { Router } from 'express';
import { createConversaController } from '../controllers/conversa/createConversaController';
import { getConversaByIdController } from '../controllers/conversa/getConversaByIdController';
import { getConversasByStatusController } from '../controllers/conversa/getConversasByStatusController';
import { updateConversaStatusController } from '../controllers/conversa/updateConversaStatusController';
import { setResponsavelConversaController } from '../controllers/conversa/setResponsavelConversaController';
import { isAuthenticated } from '../middlewares/authMiddleware';

const router = Router();

/**
 * Rotas para gerenciamento de conversas
 * Todas as rotas requerem autenticação
 */

// Criar nova conversa
router.post('/create', isAuthenticated, createConversaController.createConversa);

// Buscar conversa por ID
router.get('/:id', isAuthenticated, getConversaByIdController.getConversaById);

// Listar conversas por status
router.get('/status/:status', isAuthenticated, getConversasByStatusController.getConversasByStatus);

// Atualizar status da conversa
router.patch('/:id/status', isAuthenticated, updateConversaStatusController.updateConversaStatus);

// Definir responsável pela conversa
router.patch('/:id/responsavel', isAuthenticated, setResponsavelConversaController.setResponsavelConversa);

export default router; 