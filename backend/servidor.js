const express = require("express");
const cors = require("cors");
const { usuarios, getUsuarioPorId } = require("./data");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  const usuario = getUsuarioPorId(req.params.id);
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ erro: "Usuário não encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
