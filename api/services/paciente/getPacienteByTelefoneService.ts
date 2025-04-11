import prisma from '../../../lib/prisma';
import { Paciente } from '../../models/schema.model';

/**
 * Service responsável por buscar um paciente pelo número de telefone
 * @param telefone Telefone do paciente a ser buscado
 * @returns Paciente encontrado ou null se não existir
 * @throws Error se telefone for inválido ou houver erro na busca
 */
export async function getPacienteByTelefoneService(telefone: string): Promise<Paciente | null> {
  // Validação do telefone
  // if (!validateTelefone(telefone)) {
  //   throw new Error('Formato de telefone inválido');
  // }

  try {
    const paciente = await prisma.app_paciente.findUnique({
      where: { telefone }
    });

    return paciente as Paciente | null;
  } catch (error) {
    console.error('Erro ao buscar paciente por telefone:', error);
    throw new Error('Erro ao buscar paciente no banco de dados');
  }
} 