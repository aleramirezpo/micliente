import { locales, type Locale, SITE_URL, BASE_PATH } from "./i18n";

/**
 * Mapa de páginas del sitio.
 *
 * Cada página tiene una dirección propia en cada idioma. No se usa la
 * misma palabra en las tres versiones: un visitante francés espera ver
 * "tarifs", no "precios". Además, tener la palabra clave en la URL
 * ayuda a posicionar cada página por su propio término.
 */

export const paginas = [
  "inicio",
  "servicios",
  "precios",
  "porQue",
  "preguntas",
  "contacto",
  "privacidad",
  "terminos",
  "datos",
] as const;

export type Pagina = (typeof paginas)[number];

/** Dirección de cada página en cada idioma. La de inicio no lleva sufijo. */
const direcciones: Record<Pagina, Record<Locale, string>> = {
  inicio: { es: "", en: "", fr: "" },
  servicios: { es: "servicios", en: "services", fr: "services" },
  precios: { es: "precios", en: "pricing", fr: "tarifs" },
  porQue: { es: "por-que-nosotros", en: "why-us", fr: "pourquoi-nous" },
  preguntas: { es: "preguntas-frecuentes", en: "faq", fr: "questions-frequentes" },
  contacto: { es: "contacto", en: "contact", fr: "contact" },
  privacidad: {
    es: "legal/privacidad",
    en: "legal/privacy",
    fr: "legal/confidentialite",
  },
  terminos: {
    es: "legal/terminos",
    en: "legal/terms",
    fr: "legal/conditions",
  },
  datos: {
    es: "legal/tratamiento-de-datos",
    en: "legal/data-processing",
    fr: "legal/traitement-des-donnees",
  },
};

/** Todas las direcciones que existen, para poder resolverlas al revés. */
const porDireccion = new Map<string, Pagina>();
for (const pagina of paginas) {
  for (const locale of locales) {
    const dir = direcciones[pagina][locale];
    if (dir) porDireccion.set(`${locale}/${dir}`, pagina);
  }
}

/** Convierte una dirección de la URL en la página que le corresponde. */
export function paginaDesdeDireccion(
  locale: Locale,
  direccion: string,
): Pagina | null {
  return porDireccion.get(`${locale}/${direccion}`) ?? null;
}

/** Dirección de una página en un idioma. Cadena vacía para el inicio. */
export function direccionDe(pagina: Pagina, locale: Locale): string {
  return direcciones[pagina][locale];
}

/**
 * Ruta para usar con el componente <Link> de Next.
 *
 * IMPORTANTE: va SIN la subcarpeta de despliegue. Next la añade solo
 * a los <Link>, así que ponerla aquí la duplicaría y produciría
 * direcciones inexistentes como /micliente/micliente/es/precios/.
 *
 * @example ruta("precios", "fr")  ->  /fr/tarifs/
 */
export function ruta(pagina: Pagina, locale: Locale): string {
  const dir = direcciones[pagina][locale];
  return dir ? `/${locale}/${dir}/` : `/${locale}/`;
}

/**
 * Ruta para una etiqueta <a> normal.
 *
 * A diferencia de <Link>, un ancla corriente NO recibe la subcarpeta
 * automáticamente, así que aquí sí hay que ponerla.
 *
 * @example rutaConBase("precios", "fr")  ->  /micliente/fr/tarifs/
 */
export function rutaConBase(pagina: Pagina, locale: Locale): string {
  return `${BASE_PATH}${ruta(pagina, locale)}`;
}

/** URL absoluta, para los canónicos y los datos estructurados. */
export function urlAbsoluta(pagina: Pagina, locale: Locale): string {
  const dir = direcciones[pagina][locale];
  return dir ? `${SITE_URL}/${locale}/${dir}/` : `${SITE_URL}/${locale}/`;
}

/**
 * Alternativas de idioma de UNA página concreta.
 *
 * Es importante que apunten a la misma página en el otro idioma y no
 * al inicio: si desde "precios" el selector llevara a la portada
 * inglesa, Google lo interpretaría como versiones distintas y el
 * visitante perdería el hilo.
 */
export function alternativasDe(pagina: Pagina): Record<string, string> {
  const mapa: Record<string, string> = {};
  const etiquetas: Record<Locale, string> = { es: "es-CO", en: "en", fr: "fr" };
  for (const locale of locales) {
    mapa[etiquetas[locale]] = urlAbsoluta(pagina, locale);
  }
  mapa["x-default"] = urlAbsoluta(pagina, "es");
  return mapa;
}

/**
 * Todas las combinaciones de idioma y dirección, para el build estático.
 *
 * La dirección va troceada por barras porque la ruta es comodín: las
 * páginas legales viven bajo `legal/`, con dos segmentos.
 */
export function todasLasRutas(): { lang: Locale; pagina: string[] }[] {
  const salida: { lang: Locale; pagina: string[] }[] = [];
  for (const locale of locales) {
    for (const pagina of paginas) {
      const dir = direcciones[pagina][locale];
      if (dir) salida.push({ lang: locale, pagina: dir.split("/") });
    }
  }
  return salida;
}

/** Las páginas legales que aparecen en el pie. */
export const paginasLegales: Pagina[] = ["privacidad", "terminos", "datos"];

/**
 * Las páginas que aparecen en el menú, en orden.
 *
 * Se declara `as const` a propósito: así TypeScript sabe que solo
 * contiene estas cinco claves, que son justamente las que existen en
 * `nav`. Si se tipara como `Pagina[]`, incluiría las legales y el
 * acceso a `c.nav[pagina]` no compilaría.
 */
export const menuPrincipal = [
  "servicios",
  "precios",
  "porQue",
  "preguntas",
  "contacto",
] as const;
