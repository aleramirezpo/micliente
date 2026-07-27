import type { Metadata } from "next";
import {
  locales,
  localeTags,
  localeUrl,
  alternateLanguages,
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
 */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  const c = obtenerContenido(locale);

  return {
    // `absolute` evita que se aplique la plantilla "%s · Micliente" del
    // layout raíz. El título del contenido ya incluye la marca, así que
    // sin esto salía duplicada: "Micliente · … · Micliente".
    title: { absolute: c.meta.titulo },
    description: c.meta.descripcion,
    keywords: c.meta.palabrasClave,
    alternates: {
      canonical: localeUrl(locale),
      languages: alternateLanguages(),
    },
    openGraph: {
      type: "website",
      siteName: "Micliente",
      title: c.meta.titulo,
      description: c.meta.descripcion,
      url: localeUrl(locale),
      locale: localeTags[locale],
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Micliente · Soluciones empresariales",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.titulo,
      description: c.meta.descripcion,
      images: ["/og-image.png"],
    },
  };
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
        idioma real de la página. Importa para lectores de pantalla y
        para que el navegador aplique la separación silábica correcta.
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
