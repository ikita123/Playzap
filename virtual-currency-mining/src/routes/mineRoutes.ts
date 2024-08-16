import { Router } from 'express';
import { claimCoinsController } from '../controllers/mineController';
import AuthMiddleware from '../middleware/auth';

const router = Router();

router.post('/claim', AuthMiddleware, claimCoinsController);

export default router;
