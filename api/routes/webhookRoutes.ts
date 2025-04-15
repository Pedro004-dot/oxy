import { Router } from 'express';
import { receberMensagem } from '../controllers/webhook/evolutionWebhookController';

const router = Router();

/**
 * Rotas para webhooks externos
 * Estas rotas NÃO usam autenticação pois são chamadas por serviços externos
 */

// Webhook da Evolution API
router.post("/evolution", receberMensagem);

export default router; 