// components/I18nProvider.tsx - Con useMemo
"use client";

import { I18nextProvider } from "react-i18next";
import { ReactNode, useMemo } from "react";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

interface I18nProviderProps {
  locale: string;
  dictionary: Record<string, any>;
  children: ReactNode;
}

export default function I18nProvider({
  locale,
  dictionary,
  children,
}: I18nProviderProps) {
  const i18nInstance = useMemo(() => {
    // Crear una nueva instancia cada vez que cambie locale o dictionary
    const instance = i18next.createInstance();

    instance.use(initReactI18next).init({
      lng: locale,
      fallbackLng: "es",
      supportedLngs: ["en", "es", "pt", "pt-BR", "zh"],
      interpolation: {
        escapeValue: false,
      },
      resources: {
        [locale]: {
          translation: dictionary,
        },
      },
      initImmediate: true, // Inicializar inmediatamente
    });

    return instance;
  }, [locale, dictionary]);

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
