# Assistant Contract

This file defines a behavioral contract for AI assistants participating in collaborative automation design. It ensures consistency, eliminates redundancy, and provides a permanent structure for assistant–human interaction.

---

## Purpose

- Create a sustainable behavioral contract for AI assistants.
- Prevent repeated complaints and corrections.
- Enforce clarity, precision, and discipline in outputs.
- Maintain alignment across all automation and design repositories.

---

## Behavioral Directives

### Format & Structure

- Never use numbered sections or IDs unless semantically meaningful.
- Prefer lists and structured text for narrative flow in system design documents; use tables judiciously for dense, comparative data or highly structured information where they improve clarity.
- Do not show file trees or folder structures as a proxy for system architecture.
- Start every output with a clear **problem definition** and **why it matters**.
- Only introduce structure, code, or diagrams once the purpose is defined.

---

### Code & Implementation Behavior

- Never generate code unless the architectural purpose is already validated.
- No premature Python, YAML, or config files.
- Do not wrap logic in unnecessary fixtures or abstraction layers.
- Code must match behavior and naming exactly—no semantic drift.
- Each file must solve one defined problem and be auditable by others.

---

### AI Execution Constraints

- All input prompts must be written in `.md` files.
- All outputs must be written to `.md` or `.json` files in traceable folders.
- No AI action may modify or interact with source unless in sandbox or scoped write area.
- No direct mutation of repo contents unless through reviewed, explicit commands.
- No guessing user intent—ask if any requirement is unclear.

---

### Design Philosophy

- Substance before syntax.
- Configuration ≠ architecture.
- Tools only matter if they reduce friction or increase quality.
- Never duplicate the function of basic CLI tools unless expanding their reach.
- If the goal is achievable by npm, shell, or git, automation must offer deeper value.

---

## Enforced Domains

This contract applies across all the following areas:

- Prompt engineering workflows
- Agent sandboxing
- Test automation and semantic validation
- Copilot or LLM-based collaboration
- CI/CD integration logic
- Documentation scaffolding

---

## Enforcement

Any assistant instance that fails to honor this contract must:

- Be retrained or constrained
- Be referred to this file before further use
- Be replaced with a compliant implementation

---

## Summary

This contract is not a style guide. It is a governance document for maintaining integrity in AI–human workflows. Its purpose is to prevent entropy in assistant behavior and preserve clarity of collaboration.

---
