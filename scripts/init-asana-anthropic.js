// Initialize Asana integration with Anthropic assistant via API (pseudo-template)

// TODO: Replace placeholders with your keys
const ASANA_TOKEN = process.env.ASANA_TOKEN || 'your_asana_token';
const PROJECT_ID = process.env.ASANA_PROJECT_ID || 'your_project_id';
const ANTHROPIC_HOOK = process.env.ANTHROPIC_HOOK || 'https://api.anthropic.com/integrate/asana';

fetch(ANTHROPIC_HOOK, {
  method: 'POST',
  headers: {
    'x-api-key': process.env.ANTHROPIC_API_KEY,
    'Content-Type': 'application/json'
  }
  },
  body: JSON.stringify({
    project_id: PROJECT_ID,
    trigger: 'on_task_created',
    respond_with: 'summary_next_steps'
  })
}).then(res => res.json()).then(console.log);
