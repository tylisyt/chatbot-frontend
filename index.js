const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

let content = "";

app.post("/analyze", async (req, res) => {
  const { url } = req.body;
  // Simulación simple, aquí iría scraping o carga real
  content = `Contenido simulado de ${url}`;
  res.json({ status: `Contenido de ${url} cargado con éxito.` });
});

app.post("/ask", async (req, res) => {
  const { question } = req.body;
  // Simulación respuesta basada en "content"
  const answer = `Simulando respuesta a: "${question}" basada en "${content}"`;
  res.json({ answer });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
