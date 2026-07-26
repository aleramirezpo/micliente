import type { MetadataRoute } from "next";
import { locales, localeUrl, alternateLanguages } from "@/lib/i18n";

/**
 * Mapa del sitio.
 *
 * Next lo genera como `sitemap.xml` durante la compilación. Incluye
 * las tres versiones de idioma con sus alternativas declaradas, que es
 * lo que permite a Google entender que son la misma página en distintos
 * idiomas y no contenido duplicado.
 */
// Obligatorio con `output: "export"`: el mapa se genera en la
// compilación, no en cada petición.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();

  return locales.map((locale) => ({
    url: localeUrl(locale),
    lastModified: ahora,
    changeFrequency: "weekly" as const,
    priority: locale === "es" ? 1 : 0.9,
    alternates: {
      languages: alternateLanguages(),
    },
  }));
}
