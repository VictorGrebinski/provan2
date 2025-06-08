// backend/data.js
const usuarios = [
  { id: "1", nome: "João Silva", email: "joao@example.com" },
  { id: "2", nome: "Maria Oliveira", email: "maria@example.com" },
  { id: "3", nome: "Carlos Santos", email: "carlos@example.com" }
];

function getUsuarioPorId(id) {
  return usuarios.find((u) => u.id === id);
}

module.exports = {
  usuarios,
  getUsuarioPorId
};
