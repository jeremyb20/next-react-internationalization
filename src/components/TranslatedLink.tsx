// components/TranslatedLink.tsx
"use client";

import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

interface TranslatedLinkProps extends Omit<MuiLinkProps, "href"> {
  href: string;
  children: React.ReactNode;
}

export default function TranslatedLink({
  href,
  children,
  className,
  ...props
}: TranslatedLinkProps) {
  const { i18n } = useTranslation();
  const params = useParams();
  const currentLang = (params?.lang as string) || i18n.language;

  // Si el idioma actual es español, no agregamos locale a la URL
  // const localizedHref = currentLang === "es" ? href : `/${currentLang}${href}`;
  const localizedHref = `/${currentLang}${href}`;

  return (
    <MuiLink
      component={Link}
      href={localizedHref}
      className={className}
      {...props}
    >
      {children}
    </MuiLink>
  );
}
