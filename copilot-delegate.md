# Copilot Delegation Protocol

Describes how to use GitHub Copilot for executing agent-generated instructions and scripts.

## Default Flow
1. Paste the GPT assistant’s response into Copilot Chat
2. Let it create files, respond to prompts, or fix errors
3. When needed, run the generated file directly from Copilot’s UI

## If Script Fails:
- Try rerunning with a different model
- Use “retry with clarification” prompt to Copilot
- Paste the error to `scripts/debug/` as a log
- Let assistant repair based on log context

## Prompt Reroute Template
> `Script error in init-asana.js. Reroute to GPT-Flow for clarification and repair.`

## Notes
- Copilot has context window limits; avoid copying entire repos
- Treat each interaction as a quick loop, not a polished handoff
