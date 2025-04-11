import prisma from '../../../lib/prisma';
import { Paciente } from '../../models/schema.model';

/**
 * Service responsável por buscar um paciente pelo ID
 * @param id ID do paciente a ser buscado
 * @returns Paciente encontrado ou null se não existir
 * @throws Error se houver erro na busca
 */
export async function getPacienteByIdService(id: string): Promise<Paciente | null> {
  try {
    const paciente = await prisma.app_paciente.findUnique({
      where: { id }
    });

    return paciente as Paciente | null;
  } catch (error) {
    console.error('Erro ao buscar paciente por ID:', error);
    throw new Error('Erro ao buscar paciente no banco de dados');
  }
} 