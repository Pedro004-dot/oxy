import prisma from '../../../lib/prisma';
import { CreatePacienteInput, Paciente, validateCPF } from '../../models/schema.model';
import { randomUUID } from 'crypto';

/**
 * Service responsável por criar um novo paciente
 * @param data Dados do paciente a ser criado
 * @returns Paciente criado
 * @throws Error se os dados forem inválidos ou se houver erro na criação
 */
export async function createPacienteService(data: CreatePacienteInput): Promise<Paciente> {
  // Validações de negócio
  if (!data.nome || data.nome.trim().length === 0) {
    throw new Error('Nome é obrigatório');
  }

  // if (!data.telefone || !validateTelefone(data.telefone)) {
  //   throw new Error('Telefone inválido');
  // }

//   if (data.cpf && !validateCPF(data.cpf)) {
//     throw new Error('CPF inválido');
//   }

  try {
    // Verifica se já existe um paciente com o mesmo telefone
    const existingPaciente = await prisma.app_paciente.findUnique({
      where: { telefone: data.telefone }
    });

    if (existingPaciente) {
      throw new Error('Já existe um paciente cadastrado com este telefone');
    }

    // Se clinicaId foi fornecido, verifica se a clínica existe
    if (data.clinicaId) {
      const clinica = await prisma.app_clinica.findUnique({
        where: { id: data.clinicaId }
      });

      if (!clinica) {
        throw new Error('Clínica não encontrada');
      }
    }

    const paciente = await prisma.app_paciente.create({
      data: {
        id: randomUUID(),
        nome: data.nome,
        telefone: data.telefone,
        cpf: data.cpf,
        dataNascimento: data.dataNascimento,
        clinicaId: data.clinicaId,
        createdAt: new Date()
      }
    });

    return paciente as Paciente;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao criar paciente:', error);
    throw new Error('Erro ao criar paciente no banco de dados');
  }
} 