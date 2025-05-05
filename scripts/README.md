# Scripts Directory

Helper scripts to automate/delegate tasks via Node.js or Copilot.

## Usage
- Node.js v18 or higher
- Copilot CLI optional for in-editor execution

From terminal:
```bash
node scripts/init-example.js
```

## Structure
- `init-` scripts: project setup or install
- `patch-` scripts: small migrations or fixes
- `debug/`: logs, tracebacks, manual captures

## Errors
- Failures log to `debug/error-*.log`
- Read stack trace, look for missing files/or inputs
- Copy log to `debug/copilot-errors.md` for triage

> Updated based on review to clarify runtime, structure, and debug usage
