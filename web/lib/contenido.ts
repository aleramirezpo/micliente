/**
 * Micliente — acceso al contenido según el idioma.
 *
 * El español es la fuente de verdad: define la forma del objeto.
 * Inglés y francés replican esa misma estructura, lo que TypeScript
 * verifica en tiempo de compilación gracias al tipo `Contenido`.
 */

import { es, type Contenido } from "@/content/es";
import { en } from "@/content/en";
import { fr } from "@/content/fr";
import type { Locale } from "./i18n";

const contenidos = { es, en, fr } as const;

/**
 * Devuelve el contenido completo del idioma pedido.
 * El tipo de retorno es el del español, de modo que cualquier
 * divergencia estructural en en/fr rompe el build en vez de
 * llegar a producción como un texto vacío.
 */
export function obtenerContenido(locale: Locale): Contenido {
  return contenidos[locale] as unknown as Contenido;
}

export type { Contenido };
