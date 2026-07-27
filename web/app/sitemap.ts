import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { paginas, urlAbsoluta, alternativasDe } from "@/lib/rutas";

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
  const entradas: MetadataRoute.Sitemap = [];

  // Todas las páginas en todos los idiomas: 18 direcciones.
  for (const locale of locales) {
    for (const pagina of paginas) {
      entradas.push({
        url: urlAbsoluta(pagina, locale),
        lastModified: ahora,
        changeFrequency: "weekly",
        // La portada pesa más que las internas, y el español más que
        // los otros idiomas por ser el mercado principal.
        priority:
          (pagina === "inicio" ? 1 : 0.8) * (locale === "es" ? 1 : 0.9),
        alternates: { languages: alternativasDe(pagina) },
      });
    }
  }

  return entradas;
}
