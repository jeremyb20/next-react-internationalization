// app/[lang]/games/page.tsx
"use client";

import { useTranslation } from "react-i18next";
import TranslatedLink from "@/components/TranslatedLink";

export default function GamesPage() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return (
      <div className="p-8">
        <div className="h-8 w-32 bg-gray-200 rounded mb-4 animate-pulse"></div>
        <div className="h-6 w-64 bg-gray-200 rounded mb-4 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold my-4">{t("games_title")}</h1>
      <p className="mb-4">{t("games_description")}</p>
      <TranslatedLink href="/">{t("back_home")}</TranslatedLink>
    </div>
  );
}
