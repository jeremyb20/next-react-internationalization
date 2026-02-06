// i18n/dictionaries.ts
import "server-only";
import type { Locale } from "./config";

// Importaciones síncronas (requiere resolveJsonModule: true)
import en from "../../public/locales/translation.en.json";
import es from "../../public/locales/translation.es.json";
import pt from "../../public/locales/translation.pt.json";
import ptBR from "../../public/locales/translation.pt-BR.json";
import zh from "../../public/locales/translation.zh.json";

const dictionaries = {
  en: () => Promise.resolve(en),
  es: () => Promise.resolve(es),
  pt: () => Promise.resolve(pt),
  "pt-BR": () => Promise.resolve(ptBR),
  zh: () => Promise.resolve(zh),
} as const;

export const getDictionary = async (locale: Locale) => {
  const dictFn = dictionaries[locale] || dictionaries.es;
  return dictFn();
};
