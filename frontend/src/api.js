const API_URL = "http://localhost:3001";

export async function buscarUsuarios() {
  const res = await fetch(`${API_URL}/usuarios`);
  return await res.json();
}

export async function buscarUsuarioPorId(id) {
  const res = await fetch(`${API_URL}/usuarios/${id}`);
  return await res.json();
}
