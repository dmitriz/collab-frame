// Purpose: Capture session state before exiting for reliable catch-up later.

const fs = require('fs');
const path = require('path');

const SNAPSHOT_PATH = path.join(__dirname, '../logs/snapshot-catchup.md');

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
- ${state.lastTask}

### Notes
${state.notes}

### Next Steps
- ${state.nextStepHint}

### Unresolved Questions
${state.unresolvedQuestions.map(q => `- ${q}`).join('\n')}
`.trim();
}

fs.writeFileSync(SNAPSHOT_PATH, format(state), 'utf8');
console.log(`Snapshot written to ${SNAPSHOT_PATH}`);