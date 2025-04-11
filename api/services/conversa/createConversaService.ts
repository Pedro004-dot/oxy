import prisma from '../../../lib/prisma';
import { CreateConversaInput, Conversa } from '../../models/schema.model';
import { randomUUID } from 'crypto';

/**
 * Service responsável por criar uma nova conversa
 * @param data Dados da conversa a ser criada
 * @returns Conversa criada
 * @throws Error se os dados forem inválidos ou se houver erro na criação
 */
export async function createConversaService(data: CreateConversaInput): Promise<Conversa> {
  // Validações de negócio

  if (!data.clinicaId) {
    throw new Error('ID da clínica é obrigatório');
  }

  // if (!validateConversaStatus(data.status)) {
  //   throw new Error('Status inválido');
  // }

  try {
    // Verifica se o paciente existe pelo telefone
    const paciente = await prisma.app_paciente.findUnique({
      where: { telefone: data.telefone }
    });

    if (!paciente) {
      throw new Error('Paciente não encontrado');
    }

    // Verifica se a clínica existe
    const clinica = await prisma.app_clinica.findUnique({
      where: { id: data.clinicaId }
    });

    if (!clinica) {
      throw new Error('Clínica não encontrada');
    }

    // Se responsável foi fornecido, verifica se existe
    if (data.responsavelAtendimentoId) {
      const responsavel = await prisma.app_usuario.findUnique({
        where: { id: data.responsavelAtendimentoId }
      });

      if (!responsavel) {
        throw new Error('Responsável não encontrado');
      }
    }

    const conversa = await prisma.app_conversa.create({
      data: {
        id: randomUUID(),
        pacienteId: paciente.id, // Usa o ID do paciente encontrado pelo telefone
        clinicaId: data.clinicaId,
        status: data.status,
        responsavelAtendimentoId: data.responsavelAtendimentoId,
        ultimoContatoEm: new Date()
      },
      include: {
        app_paciente: true,
        app_usuario: true
      }
    });

    return conversa;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao criar conversa:', error);
    throw new Error('Erro ao criar conversa no banco de dados');
  }
} 