#!/usr/bin/env node

// scripts/exit-q.js
// Minor note added for file opening behavior

import { exec } from 'child_process';
import os from 'os';

const file = 'session-q.md';

let openCommand;
if (os.platform() === 'darwin') {
  openCommand = `open "${file}"`;
} else if (os.platform() === 'win32') {
  openCommand = `start "" "${file}"`;
} else {
  openCommand = `xdg-open "${file}"`;
}

// ⚠️ Note: File open is best-effort. May not work in headless/server environments.
exec(openCommand, (err) => {
  if (err) {
    console.error(`⚠️ Could not open file automatically. File: ${file}. Error: ${err.message}`);
  }
const now = new Date();
const timestamp = now.toLocaleString('en-US', { 
  year: 'numeric',  
  month: '2-digit',  
  day: '2-digit',  
  hour: '2-digit',  
  minute: '2-digit',  
  second: '2-digit'  
});

const platformOpeners = {
  darwin: (path) => exec(`open "${path}"`, handleExecError),
  linux: (path) => exec(`xdg-open "${path}"`, handleExecError),
  win32: (path) => exec(`start "" "${path}"`, handleExecError),
};

const openFile = (path) => {
  const opener = platformOpeners[os.platform()];
  if (opener) {
    opener(path);
  } else {
    console.error(`⚠️ Unsupported platform: ${os.platform()}`);
  }
};

const handleExecError = (err) => {
  if (err) {
    console.error(`⚠️ Could not open file automatically. File: ${file}. Error: ${err.message}`);
  }
};

openFile(file);
