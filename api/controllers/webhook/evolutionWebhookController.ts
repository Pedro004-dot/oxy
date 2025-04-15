import { Request, Response } from "express";
import { handleEvolutionMensagemService } from "../../services/webhook/handleEvolutionMensagemService";

export const receberMensagem = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    await handleEvolutionMensagemService(payload);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro ao processar webhook Evolution:", error);
    res.status(500).json({ error: "Erro ao processar webhook" });
  }
};
// import { Request, Response } from 'express';
// import { handleEvolutionMensagemService } from '../../services/webhook/handleEvolutionMensagemService';

// interface EvolutionWebhookPayload {
//   from: string;
//   message: {
//     id: string;
//     text: string;
//   };
//   fromMe: boolean;
//   timestamp: number;
//   type: string;
// }

// /**
//  * Controller responsável por receber e processar webhooks da Evolution API
//  */
// export const evolutionWebhookController = {
//   /**
//    * Recebe uma mensagem via webhook da Evolution API
//    * @param req Request do Express contendo o payload do webhook
//    * @param res Response do Express
//    */
//   async receberMensagem(req: Request, res: Response): Promise<void> {
//     try {
//       const payload = req.body as EvolutionWebhookPayload;

//       // Extrai os dados necessários do payload
//       const mensagemData = {
//         telefone: payload.from,
//         whatsappMsgId: payload.message.id,
//         conteudo: payload.message.text,
//         fromMe: payload.fromMe,
//         timestamp: payload.timestamp,
//         tipo: payload.type
//       };

//       await handleEvolutionMensagemService(mensagemData);
      
//       // Responde com sucesso para a Evolution API
//       res.status(200).json({ status: 'success' });
//     } catch (error) {
//       if (error instanceof Error) {
//         console.error('Erro ao processar webhook:', error);
//         res.status(400).json({ error: error.message });
//         return;
//       }

//       console.error('Erro inesperado ao processar webhook:', error);
//       res.status(500).json({ error: 'Erro interno do servidor' });
//     }
//   }
// }; 