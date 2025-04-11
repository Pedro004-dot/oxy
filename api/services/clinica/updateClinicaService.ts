import prisma from '../../../lib/prisma';
import { Clinica, UpdateClinicaInput, validateCNPJ } from '../../models/schema.model';

/**
 * Service responsável por atualizar os dados de uma clínica
 * @param id ID da clínica a ser atualizada
 * @param data Dados da clínica a serem atualizados
 * @returns Clínica atualizada
 * @throws Error se os dados forem inválidos, clínica não existir ou houver erro na atualização
 */
export async function updateClinicaService(id: string, data: UpdateClinicaInput): Promise<Clinica> {
  try {
    // Verifica se a clínica existe
    const existingClinica = await prisma.app_clinica.findUnique({
      where: { id }
    });

    if (!existingClinica) {
      throw new Error('Clínica não encontrada');
    }

    // Prepara os dados para atualização
    const updateData: any = {};

    if (data.nome !== undefined) {
      if (data.nome.trim().length === 0) {
        throw new Error('Nome não pode ser vazio');
      }
      updateData.nome = data.nome;
    }

    if (data.cnpj !== undefined) {
      const cnpjNormalizado = data.cnpj.replace(/[^\d]/g, '');
      if (!validateCNPJ(cnpjNormalizado)) {
        throw new Error('CNPJ inválido');
      }

      // Verifica se o novo CNPJ já está em uso por outra clínica
      const clinicaComMesmoCNPJ = await prisma.app_clinica.findFirst({
        where: {
          cnpj: cnpjNormalizado,
          NOT: { id }
        }
      });

      if (clinicaComMesmoCNPJ) {
        throw new Error('CNPJ já está em uso por outra clínica');
      }

      updateData.cnpj = cnpjNormalizado;
    }

    // if (data.telefone !== undefined) {
    //   const telefoneNormalizado = data.telefone.replace(/[^\d]/g, '');
    //   if (!validateTelefone(telefoneNormalizado)) {
    //     throw new Error('Telefone inválido');
    //   }
    //   updateData.telefone = telefoneNormalizado;
    // }

    // Atualiza a clínica
    const clinica = await prisma.app_clinica.update({
      where: { id },
      data: updateData
    });

    return clinica;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    console.error('Erro ao atualizar clínica:', error);
    throw new Error('Erro ao atualizar clínica no banco de dados');
  }
} 