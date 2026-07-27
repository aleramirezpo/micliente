import {
  locales,
  localeTags,
  isLocale,
  type Locale,
} from "@/lib/i18n";
import { obtenerContenido } from "@/lib/contenido";
import { Cabecera } from "@/components/Cabecera";
import { PieDePagina } from "@/components/PieDePagina";
import { ActivarMovimiento } from "@/components/ActivarMovimiento";
import { DatosEstructurados } from "@/components/DatosEstructurados";

/**
 * Genera una versión estática del sitio por cada idioma.
 * Sin esto, la exportación estática falla: Next necesita saber de
 * antemano qué valores puede tomar el segmento [lang].
 *
 * Los metadatos (título, descripción, canónico y hreflang) los define
 * cada página, no este layout, porque cada una compite por búsquedas
 * distintas en Google.
 */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LayoutIdioma({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  const c = obtenerContenido(locale);

  return (
    <>
      {/*
        El <html lang> del layout raíz dice "es". Aquí lo corregimos al
        idioma real de la página. Importa para los lectores de pantalla
        y para que el navegador separe bien las palabras.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${localeTags[locale]}";`,
        }}
      />

      <DatosEstructurados locale={locale} />
      <ActivarMovimiento />

      <a className="salta-contenido" href="#contenido">
        {c.comun.saltarContenido}
      </a>

      <Cabecera locale={locale} c={c} />

      <main id="contenido">{children}</main>

      <PieDePagina locale={locale} c={c} />
    </>
  );
}
