const API_BASE = 'https://chatbot-frontend-production-fdc5.up.railway.app';

async function analyzeWebsite() {
  const url = document.getElementById('urlInput').value;
  const status = document.getElementById('status');
  status.innerText = 'Analizando...';

  try {
    const res = await fetch(`${API_BASE}/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });

    if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

    const data = await res.json();
    status.innerText = data.status || 'Análisis completado';
  } catch (error) {
    status.innerText = `Error: ${error.message}`;
  }
}

async function askQuestion() {
  const question = document.getElementById('questionInput').value;
  const chat = document.getElementById('chat');
  chat.innerText += `Tú: ${question}\n`;

  try {
    const res = await fetch(`${API_BASE}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });

    if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

    const data = await res.json();
    chat.innerText += `Bot: ${data.answer || 'No hay respuesta'}\n\n`;
  } catch (error) {
    chat.innerText += `Error: ${error.message}\n\n`;
  }
}
