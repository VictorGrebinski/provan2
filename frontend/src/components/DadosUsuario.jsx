import { useEffect, useState } from "react";
import { buscarUsuarios } from "../api";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UsuariosList() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    buscarUsuarios().then(setUsuarios);
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Lista de Usuários</Typography>
      <List>
        {usuarios.map((user) => (
          <ListItem button key={user.id} onClick={() => navigate(`/dados/${user.id}`)}>
            <ListItemText primary={user.nome} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
