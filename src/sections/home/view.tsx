// src/sections/home/view.tsx
"use client";

import { useTranslation } from "react-i18next";
import TranslatedLink from "@/components/TranslatedLink";

export default function HomeView() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold my-4">{t("welcome")}</h1>
      <p className="mb-4">{t("description")}</p>
      <TranslatedLink href="/games">{t("games_link")}</TranslatedLink>
    </div>
  );
}
