/**
 * Interfaces para a entidade Clinica
 */

export interface CreateClinicaInput {
  nome: string;
  cnpj: string;
  telefone: string;
}

export interface UpdateClinicaInput {
  nome?: string;
  cnpj?: string;
  telefone?: string;
}

export interface Clinica {
  id: string;
  nome: string;
  cnpj: string;
  telefone: string;
  createdAt: Date;
}

/**
 * Interfaces para a entidade Paciente
 */

export interface CreatePacienteInput {
  clinicaId?: string;
  nome: string;
  telefone: string;
  cpf?: string;
  dataNascimento?: Date;
}

export interface UpdatePacienteInput {
  nome?: string;
  cpf?: string;
  dataNascimento?: Date;
}

export interface Paciente {
  id: string;
  clinicaId?: string;
  nome: string;
  telefone: string;
  cpf?: string;
  dataNascimento?: Date;
  createdAt: Date;
}

/**
 * Interfaces para autenticação e usuário
 */

export interface LoginUsuarioInput {
  email: string;
  senha: string;
}

export interface CreateUsuarioInput {
  clinicaId?: string;
  nome: string;
  email: string;
  senha: string;
  papel: string;
}

export interface UpdateUsuarioInput {
  nome?: string;
  email?: string;
  senha?: string;
  papel?: string;
}

export interface Usuario {
  id: string;
  clinicaId?: string;
  nome: string;
  email: string;
  papel: string;
  ultimoLogin?: Date;
  createdAt: Date;
}

export interface TokenPayload {
  id: string;
  email: string;
  papel: string;
}

export interface LoginResponse {
  usuario: Omit<Usuario, 'senhaHash'>;
  token: string;
}

/**
 * Interfaces para a entidade Conversa
 */

export interface CreateConversaInput {
  telefone: string;
  clinicaId: string;
  status: string;
  responsavelAtendimentoId?: string;
}

export interface UpdateConversaStatusInput {
  status: string;
}

export interface SetResponsavelConversaInput {
  responsavelAtendimentoId: string;
}

export interface Conversa {
  id: string;
  pacienteId: string | null;
  clinicaId: string | null;
  status: string;
  ultimoContatoEm: Date | null;
  responsavelAtendimentoId: string | null;
  app_mensagem?: any[];
  app_paciente?: any;
  app_usuario?: any;
}

// Funções auxiliares de validação
export const validateCNPJ = (cnpj: string): boolean => {
  // Remove caracteres não numéricos
  cnpj = cnpj.replace(/[^\d]/g, '');

  // Verifica se tem 14 dígitos
  if (cnpj.length !== 14) {
    return false;
  }

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  return true;
};

// export const validateTelefone = (telefone: string): boolean => {
//   // Remove caracteres não numéricos
//   telefone = telefone.replace(/[^\d]/g, '');

//   // Verifica se tem entre 10 e 11 dígitos (com ou sem DDD)
//   return telefone.length >= 10 && telefone.length <= 11;
// };

// Funções auxiliares de validação de usuário
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateSenha = (senha: string): boolean => {
  return senha.length >= 6;
};

export const validatePapel = (papel: string): boolean => {
  const papeisValidos = ['admin', 'atendente', 'medico'];
  return papeisValidos.includes(papel);
};

// Funções auxiliares de validação de paciente
export const validateCPF = (cpf?: string): boolean => {
  if (!cpf) return true; // CPF é opcional
  
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, '');

  // Verifica se tem 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  return true;
};

// Funções auxiliares de validação de conversa
export const validateConversaStatus = (status: string): boolean => {
  const statusValidos = ['aguardando', 'em_atendimento', 'finalizado', 'arquivado'];
  return statusValidos.includes(status);
};

export interface CreateMensagemInput {
  conversaId: string;
  conteudo: string;
  autorTipo: string;  // paciente | usuario | ia
  autorId?: string;   // optional - only if sent by a user
  tipo?: string;      // defaults to 'texto'
  whatsappMsgId?: string;
  recebidaEm?: Date;
}

export interface Mensagem {
  id: string;
  conversaId: string | null;
  autorTipo: string;
  autorId: string | null;
  conteudo: string;
  tipo: string;
  whatsappMsgId: string | null;
  recebidaEm: Date | null;
  criadaEm: Date;
} 