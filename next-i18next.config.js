// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es", "pt", "pt-BR", "zh"],
  },
  localePath:
    typeof window === "undefined"
      ? // eslint-disable-next-line @typescript-eslint/no-require-imports
        require("path").resolve("./public/locales")
      : "/locales",
};
