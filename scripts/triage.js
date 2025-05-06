const scoreTask = require('./scoring');

function triage(tasks, mode = 'routine') {
  const filtered = tasks.filter(task => {
    if (mode === 'creative') return task.labels.includes('high') || !task.labels.includes('today');
    if (mode === 'routine') return task.labels.includes('today');
    return true;
  });

  const sorted = filtered.sort((a, b) => {
    const scoreA = scoreTask(a);
    const scoreB = scoreTask(b);
    return scoreB - scoreA; // descending
  });

  return sorted;
}

module.exports = triage;