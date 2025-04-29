import express from 'express';

// Importar todas as rotas

import authRouter from './auth.routes.js';
import animesRouter from './animeRoutes.js';
import collectionRouter from './collectionRoutes.js';
import cardRouter from './cardRoutes.js';
import personagemRouter from './personagemRoutes.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// rotas publicas
router.use('/auth', authRouter);

// rotas privadas
router.use(authMiddleware); // Middleware de autenticação para todas as rotas abaixo

router.use('/animes', animesRouter);
router.use('/collection', collectionRouter);
router.use('/cards', cardRouter);
router.use('/personagens', personagemRouter);

export default router;