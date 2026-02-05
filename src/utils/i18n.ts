import i18n, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Definir la estructura de tus recursos de traducción
// declare module "i18next" {
//   interface CustomTypeOptions {
//     defaultNS: "common";
//     resources: {
//       common: Record<string, string>;
//     };
//   }
// }

const initOptions: InitOptions = {
  fallbackLng: "es",
  supportedLngs: ["en", "es", "pt", "pt-BR", "zh"],
  // debug: process.env.NODE_ENV !== "production",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["path", "cookie", "htmlTag"],
    caches: ["cookie"],
  },
  backend: {
    loadPath: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/locales/translation.{{lng}}.json`, // Cambiado aquí
  },
  defaultNS: "translation",
  ns: ["common"],
  react: {
    useSuspense: false, // Evita problemas con SSR
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(initOptions)
  .catch((err) => console.error("i18n initialization failed", err));

export default i18n;
