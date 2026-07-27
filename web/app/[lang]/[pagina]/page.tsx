import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localeTags, type Locale } from "@/lib/i18n";
import { obtenerContenido } from "@/lib/contenido";
import {
  paginaDesdeDireccion,
  urlAbsoluta,
  alternativasDe,
  todasLasRutas,
  type Pagina,
} from "@/lib/rutas";

import { Servicios } from "@/components/secciones/Servicios";
import { Comisiones } from "@/components/secciones/Comisiones";
import { Industrias } from "@/components/secciones/Industrias";
import { ComparativaApi } from "@/components/secciones/ComparativaApi";
import { Precios } from "@/components/secciones/Precios";
import { Calculadora } from "@/components/secciones/Calculadora";
import { ComparativaCompetencia } from "@/components/secciones/ComparativaCompetencia";
import { Mercado } from "@/components/secciones/Mercado";
import { Escalabilidad } from "@/components/secciones/Escalabilidad";
import { Seguridad } from "@/components/secciones/Seguridad";
import { Faq } from "@/components/secciones/Faq";
import { Agendar } from "@/components/secciones/Agendar";
import { Contacto } from "@/components/secciones/Contacto";
import { CtaFinal } from "@/components/secciones/CtaFinal";
import { PortadaPagina } from "@/components/PortadaPagina";

/**
 * Genera una versión estática por cada combinación de idioma y página.
 * Son 15 en total: cinco páginas por tres idiomas.
 */
export function generateStaticParams() {
  return todasLasRutas();
}

/** Traduce los parámetros de la URL a un idioma y una página válidos. */
async function resolver(params: Promise<{ lang: string; pagina: string }>) {
  const { lang, pagina } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  const clave = paginaDesdeDireccion(locale, pagina);
  return { locale, clave };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; pagina: string }>;
}): Promise<Metadata> {
  const { locale, clave } = await resolver(params);
  if (!clave) return {};

  const c = obtenerContenido(locale);
  const p = c.paginas[clave as keyof typeof c.paginas];

  return {
    title: { absolute: `${p.titulo} · Micliente` },
    description: p.descripcion,
    alternates: {
      canonical: urlAbsoluta(clave, locale),
      languages: alternativasDe(clave),
    },
    openGraph: {
      type: "website",
      siteName: "Micliente",
      title: `${p.titulo} · Micliente`,
      description: p.descripcion,
      url: urlAbsoluta(clave, locale),
      locale: localeTags[locale],
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Micliente" }],
    },
  };
}

export default async function PaginaInterna({
  params,
}: {
  params: Promise<{ lang: string; pagina: string }>;
}) {
  const { locale, clave } = await resolver(params);
  if (!clave) notFound();

  const c = obtenerContenido(locale);
  const pagina = clave as Exclude<Pagina, "inicio">;
  const datos = c.paginas[pagina];

  // Cada página abre con su propio encabezado, para que se entienda
  // dónde está uno sin tener que leer el menú.
  const encabezado =
    "encabezado" in datos ? (
      <PortadaPagina titulo={datos.encabezado} texto={datos.intro} />
    ) : (
      <PortadaPagina titulo={datos.titulo} texto={datos.descripcion} />
    );

  return (
    <>
      {encabezado}

      {pagina === "servicios" && (
        <>
          <Servicios c={c} />
          <Comisiones c={c} />
          <Industrias c={c} />
          <ComparativaApi c={c} />
        </>
      )}

      {pagina === "precios" && (
        <>
          <Precios locale={locale} c={c} />
          <ComparativaCompetencia c={c} />
          <Calculadora locale={locale} c={c} />
        </>
      )}

      {pagina === "porQue" && (
        <>
          <Mercado c={c} />
          <Escalabilidad c={c} />
          <Seguridad c={c} />
        </>
      )}

      {pagina === "preguntas" && <Faq c={c} />}

      {pagina === "contacto" && (
        <>
          <Agendar locale={locale} c={c} />
          <Contacto c={c} />
        </>
      )}

      {/* La llamada final sobra en contacto: ya se está en el sitio
          donde esa llamada llevaría. */}
      {pagina !== "contacto" && <CtaFinal locale={locale} c={c} />}
    </>
  );
}
