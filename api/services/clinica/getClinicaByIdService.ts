import prisma from '../../../lib/prisma';
import { Clinica } from '../../models/schema.model';

/**
 * Service responsável por buscar uma clínica pelo ID
 * @param id ID da clínica a ser buscada
 * @returns Clínica encontrada ou null se não existir
 * @throws Error se houver erro na busca
 */
export async function getClinicaByIdService(id: string): Promise<Clinica | null> {
  try {
    const clinica = await prisma.app_clinica.findUnique({
      where: { id }
    });

    return clinica;
  } catch (error) {
    console.error('Erro ao buscar clínica por ID:', error);
    throw new Error('Erro ao buscar clínica no banco de dados');
  }
} 