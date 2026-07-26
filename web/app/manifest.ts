import type { MetadataRoute } from "next";
import { recurso } from "@/lib/i18n";

// Obligatorio con `output: "export"`.
export const dynamic = "force-static";

/**
 * Manifiesto de aplicación web.
 *
 * Se genera desde código en lugar de ser un archivo fijo para que las
 * rutas incluyan la subcarpeta cuando el sitio se publica en GitHub
 * Pages. Con un archivo estático, los iconos apuntarían a la raíz del
 * dominio y no se encontrarían.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Micliente · Soluciones Empresariales",
    short_name: "Micliente",
    description:
      "Automatización de WhatsApp con inteligencia artificial y desarrollo web con catálogo.",
    start_url: recurso("/es/"),
    scope: recurso("/"),
    display: "standalone",
    background_color: "#1A1D21",
    theme_color: "#1A1D21",
    lang: "es-CO",
    dir: "ltr",
    categories: ["business", "productivity"],
    icons: [
      {
        src: recurso("/icon-192.png"),
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: recurso("/icon-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
