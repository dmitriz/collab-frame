const fs = require('fs');

module.exports = async function loadIssues() {
  const raw = fs.readFileSync('./data/issues.json', 'utf-8');
  return JSON.parse(raw);
};