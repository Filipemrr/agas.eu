import React from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

function EmailForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log({
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    });
    // Here, you would typically send the form data to a server or email service
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 3 }}
      >
        <TextField
          required
          fullWidth
          id="name"
          label="Nome / Cognome"
          name="name"
          autoComplete="name"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="phone_number"
          label="Il tuo telefono"
          name="phone_number"
          autoComplete="phone_number"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="email"
          label="La tua email"
          name="email"
          autoComplete="email"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="location"
          label="provincia"
          name="location"
          autoComplete="location"
          margin="normal"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Invia la richiesta
        </Button>
      </Box>
    </Container>
  );
}

export default EmailForm;
