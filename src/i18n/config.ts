// i18n/config.ts
export const locales = ["en", "es", "pt", "pt-BR", "zh"] as const;
export const defaultLocale = "es" as const;
export type Locale = (typeof locales)[number];

export function isLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}
