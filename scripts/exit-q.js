#!/usr/bin/env node

/**
 * exit-q.js - Session snapshot utility
 * 
 * This script creates a new snapshot entry in the session/catch-up.md file
 * using the template from templates/snapshot-catchup.md.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const TEMPLATE_PATH = path.join(__dirname, '..', 'templates', 'snapshot-catchup.md');
const CATCHUP_PATH = path.join(__dirname, '..', 'session', 'catch-up.md');

// Ensure the session directory exists
const sessionDir = path.join(__dirname, '..', 'session');
if (!fs.existsSync(sessionDir)) {
  fs.mkdirSync(sessionDir, { recursive: true });
}

// Get the current date and time
const now = new Date();
const dateString = now.toISOString().split('T')[0];
const timeString = now.toTimeString().split(' ')[0];
const timestamp = `${dateString} ${timeString}`;

// Read the template
let template;
try {
  template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
} catch (error) {
  console.error('Error reading template file:', error.message);
  process.exit(1);
}

// Replace template variables
const content = template.replace('{{date}}', timestamp);

// Append to catch-up.md with a separator for multiple entries
let separator = '\n\n---\n\n';
let fileContent = '';

try {
  if (fs.existsSync(CATCHUP_PATH)) {
    fileContent = fs.readFileSync(CATCHUP_PATH, 'utf8');
    fileContent = fs.existsSync(CATCHUP_PATH) ? separator + content : content;
    fs.appendFileSync(CATCHUP_PATH, fileContent);
  } else {
    fs.writeFileSync(CATCHUP_PATH, content);
  }
  console.log(`✓ Snapshot added to ${CATCHUP_PATH}`);
  
  // Try to open the file if possible
  try {
    if (process.platform === 'darwin') {
      execSync(`open ${CATCHUP_PATH}`);
    } else if (process.platform === 'linux') {
      execSync(`xdg-open ${CATCHUP_PATH}`);
    } else if (process.platform === 'win32') {
      execSync(`start ${CATCHUP_PATH}`);
    }
    console.log('✓ Opened catch-up.md for editing');
  } catch (error) {
    console.log('Note: Could not open the file automatically:', error.message);
  }
} catch (error) {
  console.error('Error writing to catch-up file:', error.message);
  process.exit(1);
}
