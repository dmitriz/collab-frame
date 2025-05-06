// Boosts stale tasks based on how many days since last update
module.exports = function freshnessBoost(daysStale) {
  return Math.min(daysStale / 7, 1); // boost capped at 1
};