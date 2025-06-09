import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UsuariosList from './components/UsuariosList';
import DadosUsuario from './components/DadosUsuario';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/usuarios" />} />
      <Route path="/usuarios" element={<UsuariosList />} />
      <Route path="/dados/:id" element={<DadosUsuario />} />
    </Routes>
  );
}

export default App;
