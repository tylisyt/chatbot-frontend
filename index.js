const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

// Middleware para parsear JSON con manejo de error
app.use(express.json());

// Middleware para capturar errores de JSON mal formado
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON:', err.message);
    return res.status(400).json({ error: 'Bad JSON format' });
  }
  next();
});

let content = "";

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando correctamente.');
});

app.post("/analyze", async (req, res) => {
  const { url } = req.body;
  content = `Contenido simulado de ${url}`;
  res.json({ status: `Contenido de ${url} cargado con éxito.` });
});

app.post("/ask", async (req, res) => {
  const { question } = req.body;
  const answer = `Simulando respuesta a: "${question}" basada en "${content}"`;
  res.json({ answer });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
