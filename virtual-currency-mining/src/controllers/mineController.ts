import { Request, Response } from 'express';
import { claimCoins } from '../services/mineService';

export const claimCoinsController = async (req: Request, res: Response) => {
  const userId = res.locals.user.id;
  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized: User ID not found' });
  }

  try {
    const result = await claimCoins(userId);
    res.status(200).json({
      message: `${result.claimedCoins} coins claimed successfully`,
      balance: result.balance,
    });
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : 'An unexpected error occurred',
    });
  }
};

export default {
  claimCoinsController,
};
