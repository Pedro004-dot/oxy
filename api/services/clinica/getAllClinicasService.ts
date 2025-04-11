import prisma from '../../../lib/prisma';
import { Clinica } from '../../models/schema.model';

/**
 * Service responsável por buscar todas as clínicas
 * @returns Lista de clínicas
 * @throws Error se houver erro na busca
 */
export async function getAllClinicasService(): Promise<Clinica[]> {
  try {
    const clinicas = await prisma.app_clinica.findMany({
      orderBy: {
        nome: 'asc'
      }
    });

    return clinicas;
  } catch (error) {
    console.error('Erro ao buscar todas as clínicas:', error);
    throw new Error('Erro ao buscar clínicas no banco de dados');
  }
} 