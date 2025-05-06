# Minimal Session Loop

This file outlines the minimal structure and behavior for our core productivity loop.

## 1. Start

**Command:** `npm run start`

- Selects the next best task based on labels (urgency, importance).
- Prints a direct link to the GitHub issue.
- Begins a new focused session.

## 2. Work

- Contributor focuses on completing the linked task.
- All updates and partial outputs are made directly in the issue thread.
- Any ideas during the session can be quickly offloaded via `npm run offload`.

## 3. Exit

**Command:** `npm run exit`

- Records session completion.
- Posts summary or comment to the same issue (optional).
- Prepares context for smooth reentry next time.

## 4. Optional: Offload Ideas

**Command:** `npm run offload`

- Captures ideas during the session as draft GitHub issues or comments.

---

This loop provides a clean, reusable workflow with minimal friction and no external dependencies.
