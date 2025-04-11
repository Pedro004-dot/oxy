import prisma from '../../../lib/prisma';
import { Paciente } from '../../models/schema.model';

/**
 * Service responsável por buscar todos os pacientes da clínica
 * @returns Lista de pacientes
 * @throws Error se houver erro na busca
 */
export async function getAllPacientesService(): Promise<Paciente[]> {
  try {
    const pacientes = await prisma.app_paciente.findMany({
      orderBy: { nome: 'asc' }
    });

    return pacientes as Paciente[];
  } catch (error) {
    console.error('Erro ao buscar todos os pacientes:', error);
    throw new Error('Erro ao buscar pacientes no banco de dados');
  }
} 