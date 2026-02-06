// components/MUIProvider.tsx
"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";

const theme = createTheme({
  // Tu configuración de tema
});

interface MUIProviderProps {
  children: ReactNode;
}

export default function MUIProvider({ children }: MUIProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
