// scripts/exit.js

const fs = require('fs');
const path = require('path');

const SESSION_DIR = path.join(__dirname, '../session');
const SESSION_PATH = path.join(SESSION_DIR, 'queue.md');

if (!fs.existsSync(SESSION_DIR)) {
  fs.mkdirSync(SESSION_DIR, { recursive: true });
}

// Write a simple exit message
const now = new Date().toLocaleString();
const content = `# Session Exit\n\nExited at ${now}\n\n- [ ] Summarize what happened\n- [ ] List open threads or follow-ups\n`;

fs.writeFileSync(SESSION_PATH, content, 'utf8');

console.log(`\nSession exit complete.`);
console.log(`Session data saved to: ${SESSION_PATH}`);
console.log(`To open it, run:\n  code ${SESSION_PATH}\n`);
