import { Router } from 'express';
import { createPacienteController } from '../controllers/paciente/createPacienteController';
import { getPacienteByIdController } from '../controllers/paciente/getPacienteByIdController';
import { getPacienteByTelefoneController } from '../controllers/paciente/getPacienteByTelefoneController';
import { getAllPacientesController } from '../controllers/paciente/getAllPacientesController';
import { updatePacienteController } from '../controllers/paciente/updatePacienteController';
import { deletePacienteController } from '../controllers/paciente/deletePacienteController';
import { isAuthenticated } from '../middlewares/authMiddleware';

const router = Router();

/**
 * Rotas para gerenciamento de pacientes
 * Todas as rotas (exceto create) requerem autenticação
 */

// Criar novo paciente - não requer autenticação para permitir cadastro via webhook
router.post('/create', createPacienteController.createPaciente);

// Rotas protegidas que requerem autenticação
router.get('/getAll', isAuthenticated, getAllPacientesController.getAllPacientes);
router.get('/telefone/:telefone', isAuthenticated, getPacienteByTelefoneController.getPacienteByTelefone);
router.get('/:id', isAuthenticated, getPacienteByIdController.getPacienteById);
router.put('/:id', isAuthenticated, updatePacienteController.updatePaciente);
router.delete('/:id', isAuthenticated, deletePacienteController.deletePaciente);

export default router; 