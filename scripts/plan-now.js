const triage = require('./triage');
const loadIssues = require('./load-issues');
const fs = require('fs');

async function run(mode = 'routine') {
  const issues = await loadIssues();
  const ranked = triage(issues, mode);
  const next = ranked[0];

  if (!next) {
    console.log("No tasks found for this session.");
    return;
  }

  const log = `Starting task: #${next.number} - ${next.title} (${mode})\nEstimated: 45 minutes`;
  console.log(log);

  fs.writeFileSync('./session-log.txt', log);
}

run(process.argv[2]); // mode: routine or creative