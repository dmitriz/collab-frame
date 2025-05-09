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

import fs from 'fs';
import path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const args = process.argv.slice(2);
let type = 'idea';
let text = '';
const argv = yargs(hideBin(process.argv))
  .option('type', {
    alias: 't',
    describe: 'Type of item',
    choices: ['idea', 'question', 'seed'],
    default: 'idea',
  })
  .option('text', {
    alias: 'x',
    describe: 'Text for the item',
    type: 'string',
    demandOption: true,
  })
  .option('source', {
    alias: 's',
    describe: 'Source of the idea',
    type: 'string',
  })
  .help()
  .argv;

const type = argv.type;
const text = argv.text;
    if (arg.startsWith('"') && arg.endsWith('"')) {
      text = arg.slice(1, -1);
    } else if (arg.startsWith('"')) {
      inQuotes = true;
      textParts = [arg.slice(1)];
    } else if (arg.endsWith('"') && inQuotes) {
      inQuotes = false;
      textParts.push(arg.slice(0, -1));
      text = textParts.join(' ');
    } else if (inQuotes) {
      textParts.push(arg);
    } else if (text === '') {
      text = arg;
    }
  }
}

const argv = {
  idea: text,
  type: type,
  source: args.includes('--source') ? args[args.indexOf('--source') + 1] : undefined
};

-const ideaText = argv.idea;
+const ideaText = argv.text;
 const source = argv.source ? `[${argv.source}] ` : '';
// Format timestamp as YYYY-MM-DD HH:MM:SS
const now = new Date();
const dateString = now.toISOString().split('T')[0];
const timeString = now.toTimeString().split(' ')[0];
const timestamp = `${dateString} ${timeString}`;

// Include the type in the entry
const entry = `- [${type.toUpperCase()}] ${timestamp} ${source}${ideaText}\n`;

const ideaFilePath = path.resolve('session/session-queue.md');
const existingContent = fs.readFileSync(QUEUE_PATH, 'utf8');
const needsSeparator = existingContent.trim() !== '' && !existingContent.trim().endsWith('---');
const separator = needsSeparator ? `---\n\n` : '';
fs.appendFileSync(QUEUE_PATH, separator + queueItem);
    fs.existsSync(ideaFilePath)
      ? entry
      : `# Session Queue\n\nItems offloaded during work sessions.\n\n${entry}`
  );
} catch (error) {
  console.error('Error writing to session queue:', error);
  process.exit(1);
}
console.log(`✅ Idea offloaded to ${ideaFilePath}`);
