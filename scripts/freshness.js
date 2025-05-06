// Boosts stale tasks based on how many days since last update
module.exports = function freshnessBoost(daysStale) {
  const days = Number(daysStale) || 0;
  return Math.min(days / 7, 1); // boost capped at 1
};