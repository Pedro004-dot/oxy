import { Router } from 'express';
import { createMensagemController } from '../controllers/mensagem/createMensagemController';
import { getMensagensByConversaIdController } from '../controllers/mensagem/getMensagensByConversaIdController';
import { isAuthenticated } from '../middlewares/authMiddleware';

const router = Router();

/**
 * Rotas para gerenciamento de mensagens
 * Todas as rotas requerem autenticação
 */

// Criar nova mensagem
router.post('/create', isAuthenticated, createMensagemController.createMensagem);

// Buscar mensagens por ID da conversa
router.get('/conversa/:conversaId', isAuthenticated, getMensagensByConversaIdController.getMensagensByConversaId);

export default router; 