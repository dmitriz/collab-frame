#!/usr/bin/env node

// scripts/exit-q.js
// Exit script for the session

import { exec } from 'child_process';
import os from 'os';

const file = 'session-q.md';

const now = new Date();
const timestamp = now.toLocaleString('en-US', { 
  year: 'numeric',  
  month: '2-digit',  
  day: '2-digit',  
  hour: '2-digit',  
  minute: '2-digit',  
  second: '2-digit'  
});

console.log(`Exiting session at ${timestamp}`);

// Handle errors from exec
const handleExecError = (err) => {
  if (err) {
    console.error(`⚠️ Could not open file automatically. File: ${file}. Error: ${err.message}`);
  }
};

// Platform-specific file opening
const platformOpeners = {
  darwin: (path) => exec(`open "${path}"`, handleExecError),
  linux: (path) => exec(`xdg-open "${path}"`, handleExecError),
  win32: (path) => exec(`start "" "${path}"`, handleExecError),
};

// Open the file using appropriate command for the OS
const openFile = (path) => {
  const opener = platformOpeners[os.platform()];
  if (opener) {
    opener(path);
    exec(`open "${path}"`, (err) => {
      handleExecError(err);
      if (!err) {
        console.log(`Opening ${path}...`);
      }
    });
  } else {
    console.error(`⚠️ Unsupported platform: ${os.platform()}`);
  }
};

// ⚠️ Note: File open is best-effort. May not work in headless/server environments.
openFile(file);

console.log('Session exit complete.');
