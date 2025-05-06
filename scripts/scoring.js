const { urgency, importance } = require('./labels');
const freshnessBoost = require('./freshness');

module.exports = function scoreTask(task) {
  let score = 0;

  if (task.labels.includes(urgency.TODAY)) score += 2;
  if (task.labels.includes(importance.HIGH)) score += 3;

  const daysStale = task.days_since_update || 0;
  score += freshnessBoost(daysStale);

  return score;
};