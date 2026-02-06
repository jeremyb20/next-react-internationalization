// components/AppProviders.tsx
"use client";

import { ReactNode } from "react";
// import I18nProvider from "./I18nProvider";
import BasicThemeProvider from "@/theme";
import { I18nextProvider } from "react-i18next";
import i18n from "@/utils/i18n";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <BasicThemeProvider>{children}</BasicThemeProvider>
    </I18nextProvider>
  );
}
