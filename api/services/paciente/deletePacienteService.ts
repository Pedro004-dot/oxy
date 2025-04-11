import prisma from '../../../lib/prisma';
import { Paciente } from '../../models/schema.model';

/**
 * Service responsável por remover um paciente do sistema
 * @param id ID do paciente a ser removido
 * @returns Paciente removido
 * @throws Error se o paciente não existir ou houver erro na remoção
 */
export async function deletePacienteService(id: string): Promise<Paciente> {
  try {
    // Verifica se o paciente existe
    const existingPaciente = await prisma.app_paciente.findUnique({
      where: { id }
    });

    if (!existingPaciente) {
      throw new Error('Paciente não encontrado');
    }

    // Remove o paciente
    const paciente = await prisma.app_paciente.delete({
      where: { id }
    });

    return paciente as Paciente;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao remover paciente:', error);
    throw new Error('Erro ao remover paciente do banco de dados');
  }
} 