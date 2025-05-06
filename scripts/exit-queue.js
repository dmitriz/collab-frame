const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const FILE_PATH = path.join(__dirname, '../session/queue.md');

const content = `# Session Queue

> Exited at ${new Date().toLocaleString()}

- What was I working on?
- What's next?
- Any blockers?
- Notes or context?

`;

const dir = path.dirname(FILE_PATH);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(FILE_PATH, content);

console.log(`Session exit complete. Notes written to: ${FILE_PATH}`);

// Attempt to open (may silently fail)
exec(`xdg-open "${FILE_PATH}" || open "${FILE_PATH}" || true`);
