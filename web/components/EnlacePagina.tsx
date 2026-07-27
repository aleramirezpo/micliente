import { rutaConBase, type Pagina } from "@/lib/rutas";
import type { Locale } from "@/lib/i18n";

/**
 * Enlace a otra página del sitio.
 *
 * Usa un ancla normal, NO el componente <Link> de Next, y esa es una
 * decisión deliberada.
 *
 * Next intercepta los <Link> para hacer la navegación por JavaScript:
 * descarga la página nueva, la reconstruye y actualiza la dirección
 * sin recargar. En una aplicación con estado compartido eso merece la
 * pena. Aquí no: cada página es un archivo HTML estático que la red de
 * distribución ya tiene cacheado.
 *
 * Medido en este sitio: la navegación por JavaScript tardaba unos
 * 185 ms en escritorio y cerca de 1.000 ms desde el menú móvil. En un
 * teléfono real eso se convierte en varios segundos y da la sensación
 * de que la página no carga. Con un ancla normal, el navegador pide el
 * archivo directamente y aparece de inmediato.
 *
 * Como contrapartida se recarga la página entera, pero al ser HTML
 * estático servido desde una CDN, eso es más rápido y mucho más fiable.
 */
export function EnlacePagina({
  pagina,
  locale,
  className,
  children,
  ...resto
}: {
  pagina: Pagina;
  locale: Locale;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return (
    <a href={rutaConBase(pagina, locale)} className={className} {...resto}>
      {children}
    </a>
  );
}
