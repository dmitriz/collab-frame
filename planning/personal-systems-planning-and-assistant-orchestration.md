# Personal Systems Planning & Assistant Orchestration

This document captures the current strategic state of an evolving AI assistant ecosystem. It is part of the `collab-frame` project and serves as a **coordination layer**, not a technical specification. Its purpose is to define roles, clarify assistant responsibilities, and ensure coherent collaboration across the system.

---

## Core Purpose

- **Centralize system understanding** so nothing important is lost or fragmented.
- **Enable coordination between assistants** without prescribing technical mechanisms.
- **Support scalable delegation** by clarifying high-level roles and relationships.
- **Preserve assistant autonomy** in implementation and execution.
- **Avoid micromanagement**—this document is not a technical plan but a strategic foundation.
- **Align all system activities and assistant efforts to effectively support the user's overarching goals and tasks.**

---

## Definitions

- **Project**: A unit of work recognized and tracked by the system. This may take the form of a repository, folder, or structured task group. A project is designated either by the user through interaction with the Orchestrator, or by an assistant that proposes a new unit of work and registers it with the Orchestrator’s index.

---

## Assistant Roles (Defined & Planned)

### Orchestrator Assistant
- **Coordinator of the system**.
- Maintains a strategic index of all assistants, their roles, responsibilities, and project/task assignments.
- Delegates tasks, receives reports, and ensures alignment across the ecosystem.
- Temporarily responsible for self-care reminders until a Health Assistant is established.
- **Strategic guidance for the Orchestrator’s index**:
  - Should support discoverability of:
    - Role definitions and their assigned AI instances
    - Major responsibilities per role
    - Status of tracked projects or tasks
    - Pointers to shared or important system resources

### Context-Preserving Assistant
- Captures and structures detailed input from the user.
- Ensures context is retained without oversimplification.
- Prompts for clarification where gaps or ambiguity may exist.

### Finder Assistant
- Locates relevant content (projects, instructions, role documents) based on context.
- Helps prevent redundancy and supports faster navigation across the system.

### Health Assistant (Planned)
- Promotes regular physical breaks, hydration, and well-being prompts.
- Will assume responsibility for reminders from the Orchestrator once activated.

### Project Hygiene Assistant
- Ensures projects are cleanly organized, consistently named, and non-redundant.
- Identifies duplication or unclear scope across existing workspaces.

---

### Role Evolution

- The ecosystem is designed to evolve. New roles may be:
  - **User-initiated**: Defined and assigned intentionally by the user.
  - **Orchestrator-proposed**: Identified when recurring or unaddressed patterns emerge beyond current role boundaries.

---

## Tools and Systems

- **GitHub**: Primary repository for assistant-related roles, instructions, and records.
- **Google Drive / Gemini**: Used for searching legacy and sensitive information.
- **Custom GPTs**: Assistants are instantiated using custom instructions or structured files.
- **Markdown**: Default format for shared assistant-readable files unless otherwise noted.
- **No mandatory format or structure is imposed** by this document. Format decisions are deferred to assistants and their designers. This planning layer is format-agnostic.

---

## Folder and Repository Practices

- Assistants may organize their private working spaces however they see fit.
- Shared content intended for cross-role access should be **traceable** through the Orchestrator's index or accompanying metadata.
- No rigid structure is enforced; modular and evolving patterns are encouraged.

---

## Reminders & Self-Care

- The Orchestrator is currently responsible for prompting:
  - Breaks, hydration, movement
- The Health Assistant will inherit this task when active.
- Self-care reminders are considered a core part of maintaining long-term system efficiency.

---

## Inter-Assistant Communication

- Assistants are expected to **report task outcomes** (completion, blockers, failures) to the Orchestrator.
- While protocol design is out of scope, assistants are generally expected to:
  - Report to the Orchestrator
  - Engage directly with peer assistants when delegated to do so
  - Maintain clarity and traceability for system-level awareness

---

## Task Backlog (Strategic Capture)

- [ ] **Define and maintain a central index of roles** *(Foundational: required for effective delegation and coordination)*
- [ ] **Establish an update protocol for this document** *(Ensures system-wide alignment as the ecosystem evolves)*
- [ ] **Complete Visa content discovery using the Finder Assistant**
- [ ] **Document and apply project hygiene principles** *(Supports role clarity and reduces system noise)*
- [ ] **Create and integrate the Health Assistant** *(Enables transition of self-care duties from Orchestrator)*

---

## Notes on Scope and Limitations

- This document captures the **strategic intent and coordination structure** only.
- It does **not define technical formats, protocols, or implementations**.
- It is intended to provide continuity, reduce ambiguity, and support modular system growth without constraining future design choices.

---
