import React, { useEffect, useState } from 'react';
import { buscarUsuarios } from '../api';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';

function UsuariosList() {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    buscarUsuarios()
      .then(setUsuarios)
      .catch((err) => console.error(err));
  }, []);

  const handleClick = (id) => {
    navigate(`/dados/${id}`);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center" sx={{ mt: 4 }}>
        Lista de Usuários
      </Typography>
      <Paper>
        <List>
          {usuarios.map((usuario) => (
            <ListItem
              key={usuario.id}
              button
              onClick={() => handleClick(usuario.id)}
            >
              <ListItemText
                primary={usuario.nome}
                secondary={usuario.email}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default UsuariosList;
