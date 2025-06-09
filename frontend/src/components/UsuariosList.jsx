import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscarUsuarioPorId } from "../api";
import { Typography, Card, CardContent } from "@mui/material";

export default function DadosUsuario() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    buscarUsuarioPorId(id).then(setUsuario);
  }, [id]);

  if (!usuario) return <Typography>Carregando...</Typography>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{usuario.nome}</Typography>
        <Typography>Email: {usuario.email}</Typography>
        <Typography>ID: {usuario.id}</Typography>
      </CardContent>
    </Card>
  );
}
