import { Router } from 'express';
import { createClinicaController } from '../controllers/clinica/createClinicaController';
import { getClinicaByIdController } from '../controllers/clinica/getClinicaByIdController';
import { getAllClinicasController } from '../controllers/clinica/getAllClinicasController';
import { updateClinicaController } from '../controllers/clinica/updateClinicaController';
import { deleteClinicaController } from '../controllers/clinica/deleteClinicaController';
import { isAuthenticated } from '../middlewares/authMiddleware';

const router = Router();

/**
 * Rotas para gerenciamento de clínicas
 * Todas as rotas requerem autenticação
 */

// Criar nova clínica
router.post('/create', isAuthenticated, createClinicaController.createClinica);

// Listar todas as clínicas
router.get('/getAll', isAuthenticated, getAllClinicasController.getAllClinicas);

// Buscar clínica por ID
router.get('/:id', isAuthenticated, getClinicaByIdController.getClinicaById);

// Atualizar clínica
router.put('/:id', isAuthenticated, updateClinicaController.updateClinica);

// Remover clínica
router.delete('/:id', isAuthenticated, deleteClinicaController.deleteClinica);

export default router; 