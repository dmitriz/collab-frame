const { urgency, importance } = require('./labels');
const freshnessBoost = require('./freshness');

module.exports = function scoreTask(task) {
  let score = 0;

  const labelsSet = new Set(Array.isArray(task.labels) ? task.labels : []);
  if (labelsSet.has(urgency.TODAY)) score += 2;
  if (labelsSet.has(importance.HIGH)) score += 3;

  const daysStale = task.days_since_update || 0;
  score += freshnessBoost(daysStale);

  return score;
};