// app/[lang]/layout.tsx
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface LangLayoutProps {
  children: ReactNode;
  params: { lang: string };
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await Promise.resolve(params);

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <>
      <header>
        <LanguageSwitcher currentLang={lang} />
      </header>
      <main className="p-8">{children}</main>
    </>
  );
}
