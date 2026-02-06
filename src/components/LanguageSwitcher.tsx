// components/LanguageSwitcher.tsx
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";
import { locales } from "@/i18n/config";

interface LanguageSwitcherProps {
  currentLang: string;
}

export default function LanguageSwitcher({
  currentLang,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    // Obtener la ruta actual sin el locale
    let pathWithoutLocale = pathname || "/";

    // Remover el locale actual si existe
    locales.forEach((locale) => {
      if (pathWithoutLocale.startsWith(`/${locale}/`)) {
        pathWithoutLocale = pathWithoutLocale.substring(locale.length + 1);
      } else if (pathWithoutLocale === `/${locale}`) {
        pathWithoutLocale = "/";
      }
    });

    // Construir nueva ruta
    let newPath = pathWithoutLocale;
    if (lng !== "es") {
      newPath = `/${lng}${pathWithoutLocale}`;
    }

    // Asegurar que la ruta no termine con doble slash
    newPath = newPath.replace(/\/\//g, "/");
    if (newPath === "") newPath = "/";

    console.log("Changing language:", {
      from: currentLang,
      to: lng,
      currentPath: pathname,
      newPath,
    });

    // Cambiar idioma y navegar
    i18n.changeLanguage(lng).then(() => {
      router.push(newPath);
    });
  };

  return (
    <Box className="flex gap-2 p-4 bg-gray-100 flex-wrap">
      <Button
        onClick={() => changeLanguage("en")}
        variant={currentLang === "en" ? "contained" : "outlined"}
        size="small"
      >
        English
      </Button>
      <Button
        onClick={() => changeLanguage("es")}
        variant={currentLang === "es" ? "contained" : "outlined"}
        size="small"
      >
        Español
      </Button>
      <Button
        onClick={() => changeLanguage("pt")}
        variant={currentLang === "pt" ? "contained" : "outlined"}
        size="small"
      >
        Português
      </Button>
      <Button
        onClick={() => changeLanguage("pt-BR")}
        variant={currentLang === "pt-BR" ? "contained" : "outlined"}
        size="small"
      >
        Português BR
      </Button>
      <Button
        onClick={() => changeLanguage("zh")}
        variant={currentLang === "zh" ? "contained" : "outlined"}
        size="small"
      >
        中文繁體
      </Button>
    </Box>
  );
}

// import { useRouter } from "next/router";
// import { useTranslation } from "react-i18next";
// import { Box, Button } from "@mui/material";

// export const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const router = useRouter();

//   const changeLanguage = (lng: string) => {
//     // Obtener el path sin el locale actual
//     let pathWithoutLocale = router.asPath;

//     // Eliminar el locale actual si existe en el path
//     i18n.languages.forEach((locale) => {
//       if (pathWithoutLocale.startsWith(`/${locale}/`)) {
//         pathWithoutLocale = pathWithoutLocale.substring(locale.length + 1);
//       } else if (pathWithoutLocale === `/${locale}`) {
//         pathWithoutLocale = "/";
//       }
//     });

//     // Construir el nuevo path
//     const newPath =
//       lng === "es" ? pathWithoutLocale : `/${lng}${pathWithoutLocale}`;

//     // Cambiar el idioma y navegar
//     i18n.changeLanguage(lng).then(() => {
//       router.push(
//         {
//           pathname: router.pathname,
//           query: router.query,
//         },
//         newPath,
//         { locale: lng },
//       );
//     });
//   };

//   return (
//     <Box className="flex space-x-2 p-4">
//       <Button onClick={() => changeLanguage("en")} variant="contained">
//         English
//       </Button>
//       <Button onClick={() => changeLanguage("es")} variant="contained">
//         Español
//       </Button>
//       <Button onClick={() => changeLanguage("pt")} variant="contained">
//         Português
//       </Button>
//       <Button onClick={() => changeLanguage("pt-BR")} variant="contained">
//         Português BR
//       </Button>
//       <Button onClick={() => changeLanguage("zh")} variant="contained">
//         中文繁體
//       </Button>
//     </Box>
//   );
// };
