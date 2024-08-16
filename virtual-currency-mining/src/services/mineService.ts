import User from '../models/user';
import {calculateAccumulatedCoins, CLAIM_LIMIT} from '../utils/miningMechanism'


export const getUser = async (userId: number) => {
    const user = await User.findByPk(userId);
    if (!user) {
      console.log(`User with ID ${userId} not found`);
      throw new Error('User not found');
    }
    return user;
  };
  

export const claimCoins = async (userId: number) => {
    const now = new Date();
    const user = await getUser(userId);
    console.log(user, "user")
    const unclaimedCoins = calculateAccumulatedCoins(user);
 console.log(unclaimedCoins, 'unclaimedCoins')
    if (unclaimedCoins <= 0) {
      throw new Error('No coins to claim');
    }
  
const coinsToClaim = Math.min(unclaimedCoins, CLAIM_LIMIT);
  
    user.balance += coinsToClaim;
    user.accumulatedCoins += coinsToClaim;
user.miningStartTime = new Date();
    user.lastClaimedAt = new Date();
  
    await user.save();
  console.log(coinsToClaim, "coinsToClaim")
  return { balance: user.balance, claimedCoins: coinsToClaim };
  };


  