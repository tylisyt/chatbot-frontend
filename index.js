const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

let content = "";

// Ruta para analizar una URL simulada
app.post("/analyze", async (req, res) => {
  const { url } = req.body;
  content = `Contenido simulado de ${url}`;
  res.json({ status: `Contenido de ${url} cargado con éxito.` });
});

// Ruta para responder preguntas
app.post("/ask", async (req, res) => {
  const { question } = req.body;
  const answer = `Simulando respuesta a: "${question}" basada en "${content}"`;
  res.json({ answer });
});

// Puerto dinámico compatible con Railway
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
