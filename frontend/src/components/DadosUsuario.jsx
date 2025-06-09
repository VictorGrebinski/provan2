import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { buscarUsuarioPorId } from '../api';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from '@mui/material';

function DadosUsuario() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarUsuarioPorId(id)
      .then((data) => {
        setUsuario(data);
        setCarregando(false);
      })
      .catch((err) => {
        console.error(err);
        setCarregando(false);
      });
  }, [id]);

  if (carregando) {
    return (
      <Container sx={{ textAlign: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!usuario) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6" color="error">
          Usuário não encontrado
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {usuario.nome}
          </Typography>
          <Typography variant="body1">ID: {usuario.id}</Typography>
          <Typography variant="body1">Email: {usuario.email}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default DadosUsuario;
