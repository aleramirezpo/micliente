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
import { TextoLegal } from "@/components/TextoLegal";

/**
 * Genera una versión estática por cada combinación de idioma y página.
 *
 * La ruta es comodín porque las páginas legales viven bajo `legal/`,
 * es decir con dos segmentos.
 */
export function generateStaticParams() {
  return todasLasRutas();
}

/** Traduce los parámetros de la URL a un idioma y una página válidos. */
async function resolver(params: Promise<{ lang: string; pagina: string[] }>) {
  const { lang, pagina } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  const clave = paginaDesdeDireccion(locale, (pagina ?? []).join("/"));
  return { locale, clave };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; pagina: string[] }>;
}): Promise<Metadata> {
  const { locale, clave } = await resolver(params);
  if (!clave) return {};

  const c = obtenerContenido(locale);
  const p = c.paginas[clave as keyof typeof c.paginas];
  const esLegal = ["privacidad", "terminos", "datos"].includes(clave);

  return {
    title: { absolute: `${p.titulo} · Micliente` },
    description: p.descripcion,
    alternates: {
      canonical: urlAbsoluta(clave, locale),
      languages: alternativasDe(clave),
    },
    // Las páginas legales no aportan nada en los resultados de búsqueda
    // y diluyen la autoridad del sitio: se sirven pero no se indexan.
    robots: esLegal ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      siteName: "Micliente",
      title: `${p.titulo} · Micliente`,
      description: p.descripcion,
      url: urlAbsoluta(clave, locale),
      locale: localeTags[locale],
      images: [
        { url: "/og-image.png", width: 1200, height: 630, alt: "Micliente" },
      ],
    },
  };
}

export default async function PaginaInterna({
  params,
}: {
  params: Promise<{ lang: string; pagina: string[] }>;
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
          <Agendar c={c} />
          <Contacto c={c} />
        </>
      )}

      {pagina === "privacidad" && (
        <TextoLegal c={c} secciones={c.legal.privacidad.secciones} />
      )}
      {pagina === "terminos" && (
        <TextoLegal c={c} secciones={c.legal.terminos.secciones} />
      )}
      {pagina === "datos" && (
        <TextoLegal c={c} secciones={c.legal.datos.secciones} />
      )}

      {/* La llamada final sobra en contacto (ya se está ahí) y en las
          páginas legales, donde sería fuera de lugar. */}
      {!["contacto", "privacidad", "terminos", "datos"].includes(pagina) && (
        <CtaFinal locale={locale} c={c} />
      )}
    </>
  );
}
