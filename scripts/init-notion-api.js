// Notion API Quickstart Setup 
// This script uses Notion’s API to create a test database and append a page with agent output

const NOTION_KEY = process.env.NOTION_KEY;
const DATABASE_ID = process.env.DATABASE_ID;

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
      title: [ { text: { content: "Hello from agent!" } } ]
    }
  })
}).then(res => res.json()).then(console.log);
