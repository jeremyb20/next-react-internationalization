import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import Link from "next/link";

export default function GamesPage() {
  const { t } = useTranslation("common");

  return (
    <div className="p-8">
      <LanguageSwitcher />
      <h1 className="text-3xl font-bold my-4">{t("games_title")}</h1>
      <p className="mb-4">{t("games_description")}</p>
      <Link href="/" className="text-blue-600 hover:underline">
        {t("back_home")}
      </Link>
    </div>
  );
}
