const fs = require('fs');

module.exports = async function loadIssues() {
  const raw = await fs.promises.readFile('./data/issues.json', 'utf-8');
  return JSON.parse(raw);
};