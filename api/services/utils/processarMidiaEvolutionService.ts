import { createClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';
import axios from 'axios';

const supabaseUrl = 'https://iyjbiceiwrszjnmkkfdu.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Faz download da mídia da Evolution e envia para o Supabase Storage
 * @param url URL temporária da mídia enviada pela Evolution
 * @param tipo Tipo da mídia (audio, video, documento, imagem, etc.)
 * @returns URL pública da mídia hospedada no Supabase
 */
export async function processarMidiaEvolution(url: string, tipo: string): Promise<string> {
  try {
    // 1. Baixa o arquivo da URL recebida
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    const contentType = response.headers['content-type'] || 'application/octet-stream';
    const extension = contentType.split('/')[1]?.split(';')[0] || 'bin';

    const nomeArquivo = `${randomUUID()}.${extension}`;
    const pasta = tipo || 'outros';
    const caminho = `${pasta}/${nomeArquivo}`;

    // 2. Faz upload no Supabase (bucket: whatsapp)
    // ⚠️ Se a subpasta não existir, ela será criada automaticamente
    const { error: uploadError } = await supabase.storage
      .from('whatsapp')
      .upload(caminho, response.data, {
        contentType,
        upsert: false
      });

    if (uploadError) {
      console.error('Erro no upload para Supabase:', uploadError);
      throw new Error('Erro ao enviar arquivo para o Supabase');
    }

    // 3. Retorna URL pública gerada
    const { data } = supabase.storage.from('whatsapp').getPublicUrl(caminho);

    if (!data?.publicUrl) {
      throw new Error('Erro ao gerar URL pública do arquivo');
    }

    return data.publicUrl;
  } catch (err) {
    console.error('Erro ao processar mídia da Evolution:', err);
    throw new Error('Falha ao processar e armazenar mídia');
  }
}