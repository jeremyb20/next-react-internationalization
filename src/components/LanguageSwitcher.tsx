import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    // Obtener el path sin el locale actual
    let pathWithoutLocale = router.asPath;

    // Eliminar el locale actual si existe en el path
    i18n.languages.forEach((locale) => {
      if (pathWithoutLocale.startsWith(`/${locale}/`)) {
        pathWithoutLocale = pathWithoutLocale.substring(locale.length + 1);
      } else if (pathWithoutLocale === `/${locale}`) {
        pathWithoutLocale = '/';
      }
    });

    // Construir el nuevo path
    const newPath =
      lng === 'es' ? pathWithoutLocale : `/${lng}${pathWithoutLocale}`;

    // Cambiar el idioma y navegar
    i18n.changeLanguage(lng).then(() => {
      router.push(
        {
          pathname: router.pathname,
          query: router.query,
        },
        newPath,
        { locale: lng }
      );
    });
  };

  return (
    <Box className="flex space-x-2 p-4">
      <Button onClick={() => changeLanguage('en')} variant="contained">
        English
      </Button>
      <Button onClick={() => changeLanguage('es')} variant="contained">
        Español
      </Button>
      <Button onClick={() => changeLanguage('pt')} variant="contained">
        Português
      </Button>
      <Button onClick={() => changeLanguage('pt-BR')} variant="contained">
        Português BR
      </Button>
      <Button onClick={() => changeLanguage('zh')} variant="contained">
        中文繁體
      </Button>
    </Box>
  );
};
