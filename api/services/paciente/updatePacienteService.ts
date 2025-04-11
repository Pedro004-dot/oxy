import prisma from '../../../lib/prisma';
import { Paciente, UpdatePacienteInput, validateCPF } from '../../models/schema.model';

/**
 * Service responsável por atualizar os dados de um paciente
 * @param id ID do paciente a ser atualizado
 * @param data Dados do paciente a serem atualizados
 * @returns Paciente atualizado
 * @throws Error se os dados forem inválidos, paciente não existir, ou houver erro na atualização
 */
export async function updatePacienteService(id: string, data: UpdatePacienteInput): Promise<Paciente> {
  // Validação dos dados
  if (data.nome !== undefined && data.nome.trim().length === 0) {
    throw new Error('Nome não pode ser vazio');
  }

  if (data.cpf !== undefined && !validateCPF(data.cpf)) {
    throw new Error('CPF inválido');
  }

  try {
    // Verifica se o paciente existe
    const existingPaciente = await prisma.app_paciente.findUnique({
      where: { id }
    });

    if (!existingPaciente) {
      throw new Error('Paciente não encontrado');
    }

    // Atualiza o paciente
    const paciente = await prisma.app_paciente.update({
      where: { id },
      data: {
        nome: data.nome,
        cpf: data.cpf,
        dataNascimento: data.dataNascimento
      }
    });

    return paciente as Paciente;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao atualizar paciente:', error);
    throw new Error('Erro ao atualizar paciente no banco de dados');
  }
} 