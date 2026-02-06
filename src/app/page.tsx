import { getServerLanguage } from "@/utils/get-server-language";
import { redirect } from "next/navigation";

export default async function HomePage() {
  // Esta página solo redirige al middleware
  const language = await getServerLanguage();
  redirect(`/${language.toLowerCase()}` || "/es");
}
