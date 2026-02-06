import AppProviders from "@/components/AppProviders";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;

  return (
    <html lang={lang} translate="no">
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
