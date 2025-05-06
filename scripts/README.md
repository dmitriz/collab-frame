# Scripts

This directory contains local logic modules to simulate a productivity triage engine and session loop.

## Key Concepts

- **Urgency + Importance**: Tasks are tagged by their urgency and priority.
- **Freshness**: Tasks that are neglected grow in visibility.
- **Triage**: Scores tasks using a simple model and selects one.
- **Modes**:
  - `routine`: prioritizes urgent work.
  - `creative`: surfaces important, non-urgent work.

## Run

```bash
node scripts/plan-now.js routine
```

This selects your next task and begins a working block.
