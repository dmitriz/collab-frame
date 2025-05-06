const fs = require('fs');

module.exports = async function loadIssues() {
  try {
    const raw = await fs.promises.readFile('./data/issues.json', 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error loading issues:', error.message);
    return [];
  }
};