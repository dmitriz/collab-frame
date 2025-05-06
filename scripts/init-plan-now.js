const fs = require('fs');
const path = require('path');
const triage = require('./_triage-next');

const SESSION_LOG_PATH = path.join(__dirname, '../logs/session.md');
const DURATION_MINUTES = 45;

function startSession(task) {
  const startTime = new Date().toLocaleString();
  const log = [
    `# Session Started`,
    `**Start:** ${startTime}`,
    `**Duration:** ${DURATION_MINUTES} minutes`,
    `**Focus Task:**`,
    `- Title: ${task.title}`,
    `- Description: ${task.description || 'No description provided.'}`,
    `- ID: ${task.id}`,
    ``,
    `> Stay focused on this task until the timer ends.`,
  ].join('\n');

  fs.writeFileSync(SESSION_LOG_PATH, log);
  console.log(`Session started: ${task.title}`);
  console.log(`Focus for ${DURATION_MINUTES} minutes. Log saved to: ${SESSION_LOG_PATH}`);
}

function main() {
  const task = triage.selectNext(); // expects a function that returns top task
  if (!task) {
    console.log('No suitable task found. Exiting.');
    return;
  }
  startSession(task);
}

main();