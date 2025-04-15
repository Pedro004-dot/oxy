import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoutes';
import pacienteRoutes from './routes/pacienteRoutes';
import conversaRoutes from './routes/conversaRoutes';
import clinicaRoutes from './routes/clinicaRoutes';
import mensagemRoutes from './routes/mensagemRoutes';
import evolutionWebhookRoutes from './routes/webhookRoutes';
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/pacientes', pacienteRoutes);
app.use('/api/conversas', conversaRoutes);
app.use('/api/clinicas', clinicaRoutes);
app.use('/api/mensagens', mensagemRoutes);
app.use('/api/webhook', evolutionWebhookRoutes);
// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

export default app; 