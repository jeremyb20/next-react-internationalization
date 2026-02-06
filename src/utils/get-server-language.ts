import { cookies, headers } from "next/headers";

export async function getServerLanguage(): Promise<string> {
  const cookieStore = cookies();
  const headersList = headers();

  const i18nCookie = (await cookieStore).get("i18next");
  const acceptLanguage = (await headersList).get("accept-language");
  const browserLang = acceptLanguage?.split(",")[0]?.split("-")[0] || "es";

  const rawLanguage = i18nCookie?.value || browserLang;
  return rawLanguage.split("-")[0].toUpperCase();
}
