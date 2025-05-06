// Purpose: Capture session state before exiting for reliable catch-up later.

const fs = require('fs');
const path = require('path');

const SNAPSHOT_PATH = process.env.SNAPSHOT_PATH || path.join(__dirname, '../logs/snapshot-catchup.md');
const snapshotDir = path.dirname(SNAPSHOT_PATH);
if (!fs.existsSync(snapshotDir)) {
  fs.mkdirSync(snapshotDir, { recursive: true });
}

const state = {
  timestamp: new Date().toISOString(),
  lastTask: "triage-label-review", // Replace with actual last task ID if available
  notes: "In progress on labeling logic. Preparing freshness boost scoring.",
  nextStepHint: "Finalize label assistant script for Copilot export.",
  unresolvedQuestions: [
    "Refactor triage to support freshness + importance weighting cleanly?",
    "Collapse urgency fallback into implicit 'someday'?"
  ]
};

function format(state) {
  return `
## Snapshot Catch-up

**Timestamp**: ${state.timestamp}

### Last Focus
${state.lastTask}

### Notes
${state.notes}

### Next Steps
${state.nextStepHint}

### Unresolved Questions
${state.unresolvedQuestions.map(q => `- ${q}`).join('\n')}
`.trim();
}

fs.writeFile(SNAPSHOT_PATH, format(state), { encoding: 'utf8', mode: 0o600 }, (err) => {
  if (err) {
    console.error(`Error writing snapshot: ${err.message}`);
  } else {
    console.log(`Snapshot written to ${SNAPSHOT_PATH}`);
  }
});