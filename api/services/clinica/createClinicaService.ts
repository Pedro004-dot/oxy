import prisma from '../../../lib/prisma';
import { CreateClinicaInput, Clinica, validateCNPJ } from '../../models/schema.model';
import { randomUUID } from 'crypto';

/**
 * Service responsável por criar uma nova clínica
 * @param data Dados da clínica a ser criada
 * @returns Clínica criada
 * @throws Error se os dados forem inválidos ou se houver erro na criação
 */
export async function createClinicaService(data: CreateClinicaInput): Promise<Clinica> {
  // Validações de negócio
  if (!data.nome || data.nome.trim().length === 0) {
    throw new Error('Nome é obrigatório');
  }

  // Normaliza CNPJ e telefone removendo caracteres não numéricos
  const cnpjNormalizado = data.cnpj.replace(/[^\d]/g, '');
  const telefoneNormalizado = data.telefone.replace(/[^\d]/g, '');

  if (!validateCNPJ(cnpjNormalizado)) {
    throw new Error('CNPJ inválido');
  }

//   if (!validateTelefone(telefoneNormalizado)) {
//     throw new Error('Telefone inválido');
//   }

  try {
    // Verifica se já existe uma clínica com o mesmo CNPJ
    const existingClinica = await prisma.app_clinica.findUnique({
      where: { cnpj: cnpjNormalizado }
    });

    if (existingClinica) {
      throw new Error('Já existe uma clínica cadastrada com este CNPJ');
    }

    const clinica = await prisma.app_clinica.create({
      data: {
        id: randomUUID(),
        nome: data.nome,
        cnpj: cnpjNormalizado,
        telefone: telefoneNormalizado,
        createdAt: new Date()
      }
    });

    return clinica;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao criar clínica:', error);
    throw new Error('Erro ao criar clínica no banco de dados');
  }
} 