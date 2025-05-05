# Scripts Directory

Helper scripts to automate or delegate tasks via Node.js or Copilot.

## Usage

- Node.js v18 or higher (verify with `node -v`)

- (optional) Copilot CLI (see [GitHub CLI Copilot](https://github.com/github/cli#copilot))

From terminal:

```bash
# run directly
node scripts/init-example.js

# or via npx if installed globally
npx node scripts/init-example.js
```

## Structure

- `init-` scripts: project setup or install

- `patch-` scripts: small migrations or fixes

- `debug/`: logs, tracebacks, manual captures

## Errors

- Failures log to `debug/error-*.log`

- Read stack trace, look for missing files/or inputs

- Copy log to `<repo-root>/copilot-errors.md` and reference an existing issue template (e.g., "bug-report") for structured triage
