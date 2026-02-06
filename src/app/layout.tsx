import AppProviders from "@/components/AppProviders";
import { getServerLanguage } from "@/utils/get-server-language";
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children }: Props) {
  const language = await getServerLanguage();
  return (
    <html lang={language.toLowerCase() || "es"} translate="no">
      <head>
        {/* Viewport - importante para SEO móvil */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* Theme color */}
        <meta name="theme-color" content="#20252e" />
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
