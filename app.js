
const API_BASE = 'https://chatbot-backend-production.up.railway.app';

async function analyzeWebsite() {
  const url = document.getElementById('urlInput').value;
  const status = document.getElementById('status');
  status.innerText = 'Analizando...';

  const res = await fetch(`${API_BASE}/api/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url })
  });

  const data = await res.json();
  status.innerText = data.status || 'Análisis completado';
}

async function askQuestion() {
  const question = document.getElementById('questionInput').value;
  const chat = document.getElementById('chat');
  chat.innerText += `Tú: ${question}\n`;

  const res = await fetch(`${API_BASE}/api/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question })
  });

  const data = await res.json();
  chat.innerText += `Bot: ${data.answer}\n\n`;
}
