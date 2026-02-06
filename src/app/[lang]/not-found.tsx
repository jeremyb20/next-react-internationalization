// app/[lang]/not-found.tsx
import { Box, Typography, Button, Link } from "@mui/material";

export default function NotFound() {
  return (
    <Box className="min-h-screen flex flex-col items-center justify-center p-8">
      <Typography variant="h2" className="mb-4">
        404
      </Typography>
      <Typography variant="h5" className="mb-4">
        Página no encontrada
      </Typography>
      <Typography className="mb-6">
        Lo sentimos, no pudimos encontrar la página que buscas.
      </Typography>
      <Button variant="contained" component={Link} href="/">
        Volver al inicio
      </Button>
    </Box>
  );
}
