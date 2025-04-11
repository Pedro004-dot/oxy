import prisma from '../../../lib/prisma';
import { Clinica } from '../../models/schema.model';

/**
 * Service responsável por remover uma clínica
 * @param id ID da clínica a ser removida
 * @returns Clínica removida
 * @throws Error se a clínica não existir ou houver erro na remoção
 */
export async function deleteClinicaService(id: string): Promise<Clinica> {
  try {
    // Verifica se a clínica existe
    const existingClinica = await prisma.app_clinica.findUnique({
      where: { id }
    });

    if (!existingClinica) {
      throw new Error('Clínica não encontrada');
    }

    // Remove a clínica
    const clinica = await prisma.app_clinica.delete({
      where: { id }
    });

    return clinica;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao remover clínica:', error);
    throw new Error('Erro ao remover clínica do banco de dados');
  }
} 