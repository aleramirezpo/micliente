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
 * Ruta lista para usar en un enlace, con la barra final y la subcarpeta
 * de despliegue si la hay.
 * @example ruta("precios", "fr")  ->  /micliente/fr/tarifs/
 */
export function ruta(pagina: Pagina, locale: Locale): string {
  const dir = direcciones[pagina][locale];
  return dir ? `${BASE_PATH}/${locale}/${dir}/` : `${BASE_PATH}/${locale}/`;
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

/** Todas las combinaciones de idioma y dirección, para el build estático. */
export function todasLasRutas(): { lang: Locale; pagina: string }[] {
  const salida: { lang: Locale; pagina: string }[] = [];
  for (const locale of locales) {
    for (const pagina of paginas) {
      const dir = direcciones[pagina][locale];
      if (dir) salida.push({ lang: locale, pagina: dir });
    }
  }
  return salida;
}

/** Las páginas que aparecen en el menú, en orden. */
export const menuPrincipal: Pagina[] = [
  "servicios",
  "precios",
  "porQue",
  "preguntas",
  "contacto",
];
