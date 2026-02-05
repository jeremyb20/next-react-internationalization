import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Home() {
  const { t, ready } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!ready || !mounted) {
    return (
      <div className="p-8">
        {/* Puedes añadir un skeleton loader aquí */}
        <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
        <div className="h-6 w-64 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 w-48 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <LanguageSwitcher />
      <h1 className="text-3xl font-bold my-4">{t("welcome")}</h1>
      <p className="mb-4">{t("description")}</p>
      <Link href="/games" className="text-blue-600 hover:underline">
        {t("games_link")}
      </Link>
    </div>
  );
}
