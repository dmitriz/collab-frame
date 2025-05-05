# `scripts/` Directory

Automation scripts to accelerate tool setup, delegate integration tasks, and track failures.

## Structure
- `init-*.js` for each tool or service (e.g. Notion, Asana)
- `debug/` for captured errors and tracebacks

## Usage
- Run scripts from Copilot or local node runtime
- Paste errors into debug/ and re-submit as a pull request

> These scripts are disposable, single-purpose, and used to validate automated flows before manual intervention
