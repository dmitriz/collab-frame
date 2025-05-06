// Notion API Quickstart Setup 
// This script uses Notion’s API to create a test database and append a page with agent output

const NOTION_KEY = process.env.NOTION_KEY || '';
const DATABASE_ID = process.env.NOTION_DATABASE_ID || '';

if (!NOTION_KEY || !DATABASE_ID) {
  console.error('Error: NOTION_KEY and NOTION_DATABASE_ID environment variables must be set');
  process.exit(1);
}

fetch('https://api.notion.com/v1/pages', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${NOTION_KEY}`,
    'Content-Type': 'application/json',
    'Notion-Version': '2022-06-28'
  },
  body: JSON.stringify({
    parent: { database_id: DATABASE_ID },
    properties: {
      "Name": {
        title: [ { text: { content: "Hello from agent!" } } ]
      }
    }
  })
}).then(res => {
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}).then(console.log).catch(error => console.error('Notion API error:', error));
