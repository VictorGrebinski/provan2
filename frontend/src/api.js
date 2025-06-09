const BASE_URL = 'http://localhost:3001';

export async function buscarUsuarios() {
  const res = await fetch(`${BASE_URL}/usuarios`);
  if (!res.ok) throw new Error('Erro ao buscar usuários');
  return res.json();
}

export async function buscarUsuarioPorId(id) {
  const res = await fetch(`${BASE_URL}/usuarios/${id}`);
  if (!res.ok) throw new Error('Usuário não encontrado');
  return res.json();
}
