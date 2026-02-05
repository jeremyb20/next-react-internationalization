import { NextRequest, NextResponse } from "next/server";
import i18n from "./src/utils/i18n";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.options.supportedLngs || ["es"];
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  return matchLocale(
    languages,
    locales as string[],
    i18n.options.fallbackLng as string,
  );
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locales = (i18n.options.supportedLngs as string[]) || ["es"];

  // Caso 1: Si la ruta ya tiene un locale (incluyendo "es")
  const pathHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathHasLocale) {
    // Si el locale es "es", lo quitamos de la URL
    if (pathname.startsWith("/es/") || pathname === "/es") {
      const newPathname = pathname.replace(/^\/es/, "") || "/";
      return NextResponse.redirect(new URL(newPathname, request.url));
    }

    // Para otros locales, mantenemos la URL tal cual
    return NextResponse.next();
  }

  // Caso 2: Si la ruta NO tiene locale
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Si detecta "es", no agregamos locale a la URL
    if (locale === "es") {
      return NextResponse.next();
    }

    // Para otros idiomas, agregamos el locale
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
