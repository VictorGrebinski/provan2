import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsuariosList from "./components/UsuariosList";
import DadosUsuario from "./components/DadosUsuario";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/usuarios" element={<UsuariosList />} />
        <Route path="/dados/:id" element={<DadosUsuario />} />
      </Routes>
    </Router>
  );
}
