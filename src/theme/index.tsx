// components/BasicThemeProvider.tsx
"use client";

import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import NextAppDirEmotionCacheProvider from "./next-emotion-cache";

// Tema básico
const basicTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

interface BasicThemeProviderProps {
  children: ReactNode;
}

export default function BasicThemeProvider({
  children,
}: BasicThemeProviderProps) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
      <MuiThemeProvider theme={basicTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
