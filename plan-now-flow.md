# Execution Flow Block

Use this for 20m focus blocks with zero context switching.

Start
---
1. Open `copilot-delegate.md`
2. Choose the first unchecked task
3. Run `focus-cue.md` to lock intent
4. Work for 20 minutes until the timer ends
5. Use `exit-cue.md` to cleanly pause or handoff
6. Log result in `execution-log.md` (ensure log updates are atomic by using concurrency-safe locks or atomic append operations)

Constraints
---
- No editing old files
- No switching projects
- No chat rewriting

> Only one block at a time. Ensure that a concurrency lock is acquired when starting a block and is only released via `exit-cue.md`, preventing simultaneous block execution.
