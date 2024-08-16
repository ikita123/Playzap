const MAX_COINS_PER_DAY = 100;
const COINS_PER_HOUR = 5;
export const CLAIM_LIMIT = 10;

export function calculateAccumulatedCoins(user: any): number {
  const now = new Date();
  const hoursElapsed = Math.floor((now.getTime() - user.miningStartTime.getTime()) / 3600000);
  console.log(hoursElapsed, "hoursElapsed")
  let potentialCoins = hoursElapsed * COINS_PER_HOUR;

  if (potentialCoins > MAX_COINS_PER_DAY) {
    potentialCoins = MAX_COINS_PER_DAY;
  }

  const unclaimedCoins = Math.min(potentialCoins, MAX_COINS_PER_DAY - user.accumulatedCoins);
  return unclaimedCoins;
}
