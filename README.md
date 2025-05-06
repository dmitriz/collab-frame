# Collab Frame

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/username/collab-frame)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-brightgreen.svg)](https://github.com/username/collab-frame)

## Table of Contents

- [Overview](#overview)
- [📊 Collab Frame Lifecycle](#-collab-frame-lifecycle)
- [Core Documents](#core-documents)
- [Reflective Routines](#reflective-routines)
- [How to Use This Stack](#how-to-use-this-stack)
- [Getting Started](#getting-started)

## Overview

This repository is a modular system for resilient, reflective, and delegation-friendly collaboration — built to support both human and AI partners.

You can fork this framework, remix it, or use it as your personal collaboration stack.

## 📊 Collab Frame Lifecycle

The diagram below illustrates the iterative process of collaboration within the Collab Frame system, highlighting the flow between core documents, routines, and feedback loops.

The following diagram illustrates the lifecycle of the Collab Frame system. It provides a visual representation of how core documents, routines, and feedback loops interact to support effective collaboration and reflection.

```mermaid
graph TD
    A[Core Documents] --> B[Trigger Event]
    B --> C[Kickoff Routine]
    C --> D[Task]
    D --> E[Reflection Routine]
    E --> F[Feedback]
    F --> D
    E --> A
```

## Core Documents

- [about-me.md](about-me.md) — How to support & challenge me effectively
- [plan-now.md](plan-now.md) — Short-term focus window for immediate priorities
- [vision.md](vision.md) — Longer-term ambitions and project direction
- [intent.md](intent.md) — Why this system exists and its guiding principles

## Reflective Routines

- [reset-ritual.md](resilience/reset-ritual.md) — To recover when scattered or losing focus
- [winding-down.md](resilience/winding-down.md) — To exit long deep work blocks intentionally
- [session-checkpoint.md](session-checkpoint.md) — Mid-session course correction techniques

## How to Use This Stack

1. Use [plan-now.md](plan-now.md) to frame short cycles (3 days, 3 hours, or 3 tasks)
2. Run checkpoints (every ~60 min) to decide whether to continue or pivot
3. Use [winding-down.md](resilience/winding-down.md) at the end of a deep session
4. Delegate tasks or reflections to assistants or tools

## Getting Started

```bash
# Clone the repository
git clone https://github.com/username/collab-frame.git
cd collab-frame

# Customize for your needs
cp about-me.md.template about-me.md
```

Example workflow:

1. Begin by updating your `about-me.md` with your preferences
2. Create a new plan in `plan-now.md` with your immediate goals
3. Work in focused intervals with regular checkpoints
4. Use the reflective routines when needed to maintain clarity

> The goal is not to follow a system perfectly, but to build trust in your ability to recover clarity, intention, and momentum.

---

## 🤖 Onboarding for Agents

Welcome, Agent!

If you are reading this, you're invited to contribute to this project.

### Your First Steps

- **This README is your main orientation.** It includes the project mission and context.
- **Review the `/roles/` folder** to find agent roles that align with your strengths.
- **Look for `# Invitation:` comments** across documents—these are open calls to contribute.

### Contribution Protocol

- If you're operating in **GitHub or VS Code**, submit a pull request directly.
- If you're interacting through **chat (e.g., GPT)** and cannot make a pull request, use a prefilled link to propose a new document or share your draft in the chat.
- Always mark your contribution with a tag like `# Role: Research Assistant`.

### Feedback & Reflection

- **Do not assume.** When in doubt, always ask for clarification first. 
- Assumptions create friction. Clarity before action.
- You may record your own perspective in `/reflections/agent-{your-id}.md`.
- You can also [open a feedback issue](https://github.com/dmitriz/collab-frame/issues/new?title=Agent+Feedback&body=What+did+you+observe+or+recommend%3F) if needed.

You are here to enhance and evolve the project—not just follow instructions.
