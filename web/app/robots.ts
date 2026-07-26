import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/i18n";

/**
 * robots.txt
 *
 * El sitio es completamente público y queremos que se indexe entero.
 * Se declara la ubicación del mapa del sitio para que los buscadores
 * lo encuentren sin tener que rastrear a ciegas.
 */
// Obligatorio con `output: "export"`: le dice a Next que este archivo
// se genera una sola vez en la compilación, no en cada petición.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
