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
- Commit changes regularly with descriptive messages.
- Create a pull request when ready for review, linking to the original issue.
- Commit changes regularly with descriptive messages.
- Create a pull request when ready for review, linking to the original issue.

## 3. Exit

**Command:** `npm run exit`

- Records session completion.
- Posts summary or comment to the same issue (optional).
- Saves current state and progress to a local cache file.
- Bookmarks your position in the codebase for immediate resumption next session.

## 4. Optional: Offload Ideas

**Command:** `npm run offload`

- Captures ideas during the session as draft GitHub issues or comments.

---

This loop provides a clean, reusable workflow with minimal friction and no external dependencies.
