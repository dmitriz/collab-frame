#!/usr/bin/env node

/**
 * offload-idea.js - Session queue manager
 * 
 * This script appends new items to the session/session-queue.md file
 * with automatic tagging by type and timestamp.
 * 
 * Usage:
 *   node offload-idea.js --type <idea|question|seed> --text "Your text here"
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
let type = 'idea'; // default type
let text = '';

// Simple argument parser
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--type' && i + 1 < args.length) {
    type = args[i + 1];
    i++;
  } else if (args[i] === '--text' && i + 1 < args.length) {
    text = args[i + 1];
    i++;
  } else if (!args[i].startsWith('--') && text === '') {
    // If no explicit --text parameter but there's text, use it
    text = args[i];
  }
}

// Validate input
if (!text) {
  console.error('Error: No text provided. Use --text "Your idea here"');
  process.exit(1);
}

// Validate type
const validTypes = ['idea', 'question', 'seed'];
if (!validTypes.includes(type)) {
  console.warn(`Warning: Type "${type}" is not recognized. Using "idea" instead.`);
  type = 'idea';
}

// Paths
const QUEUE_PATH = path.join(__dirname, '..', 'session', 'session-queue.md');

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

// Format the queue item
const queueItem = `### [${type.toUpperCase()}] - ${timestamp}\n\n${text}\n\n`;

// Append to session-queue.md
try {
  // Create file with header if it doesn't exist
  if (!fs.existsSync(QUEUE_PATH)) {
    const header = `# Session Queue\n\nItems offloaded during work sessions.\n\n---\n\n`;
    fs.writeFileSync(QUEUE_PATH, header + queueItem);
  } else {
    const existingContent = fs.readFileSync(QUEUE_PATH, 'utf8');
    const separator = existingContent.trim() !== '' ? `---\n\n` : '';
    fs.appendFileSync(QUEUE_PATH, separator + queueItem);
  }
  console.log(`✓ Added ${type} to session queue`);
} catch (error) {
  console.error('Error writing to session queue:', error.message);
  process.exit(1);
}
