/**
 * Micliente — configuración de idiomas
 *
 * El sitio se sirve en tres idiomas bajo rutas separadas:
 *   /es/  (español, mercado principal: Colombia)
 *   /en/  (inglés)
 *   /fr/  (francés)
 *
 * Cada idioma tiene su propio HTML estático. No hay detección por
 * navegador ni redirecciones en servidor, porque el sitio es estático:
 * el idioma se elige con enlaces reales, que además son rastreables
 * por Google.
 */

export const locales = ["es", "en", "fr"] as const;

export type Locale = (typeof locales)[number];

/** Idioma por defecto. Colombia es el mercado inicial. */
export const defaultLocale: Locale = "es";

/** Nombre de cada idioma en su propia lengua, para el selector. */
export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
};

/** Etiqueta corta para el selector en pantallas pequeñas. */
export const localeShortNames: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  fr: "FR",
};

/**
 * Código BCP 47 completo. Se usa en el atributo `lang` del <html>
 * y en las etiquetas hreflang.
 */
export const localeTags: Record<Locale, string> = {
  es: "es-CO",
  en: "en",
  fr: "fr",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Dominio de producción. Se usa para URLs canónicas y hreflang. */
export const SITE_URL = "https://micliente.co";

/**
 * URL absoluta de una ruta en un idioma dado.
 * @example localeUrl("es")           -> https://micliente.co/es/
 * @example localeUrl("en", "precios") -> https://micliente.co/en/precios/
 */
export function localeUrl(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean
    ? `${SITE_URL}/${locale}/${clean}/`
    : `${SITE_URL}/${locale}/`;
}

/**
 * Mapa de alternativas para `alternates.languages` en la metadata.
 * Incluye `x-default`, que le dice a Google qué versión mostrar
 * cuando no hay coincidencia de idioma.
 */
export function alternateLanguages(path = ""): Record<string, string> {
  const map: Record<string, string> = {};
  for (const locale of locales) {
    map[localeTags[locale]] = localeUrl(locale, path);
  }
  map["x-default"] = localeUrl(defaultLocale, path);
  return map;
}
