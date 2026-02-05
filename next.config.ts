/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es", "pt", "pt-BR", "zh"],
    defaultLocale: "es",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
