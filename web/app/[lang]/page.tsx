import type { Metadata } from "next";
import { isLocale, localeTags, type Locale } from "@/lib/i18n";
import { obtenerContenido } from "@/lib/contenido";
import { urlAbsoluta, alternativasDe } from "@/lib/rutas";
import { Hero } from "@/components/secciones/Hero";
import { Problema } from "@/components/secciones/Problema";
import { ComoFunciona } from "@/components/secciones/ComoFunciona";
import { Diferenciadores } from "@/components/secciones/Diferenciadores";
import { CtaFinal } from "@/components/secciones/CtaFinal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  const p = obtenerContenido(locale).paginas.inicio;

  return {
    title: { absolute: `Micliente · ${p.titulo}` },
    description: p.descripcion,
    alternates: {
      canonical: urlAbsoluta("inicio", locale),
      languages: alternativasDe("inicio"),
    },
    openGraph: {
      type: "website",
      siteName: "Micliente",
      title: `Micliente · ${p.titulo}`,
      description: p.descripcion,
      url: urlAbsoluta("inicio", locale),
      locale: localeTags[locale],
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Micliente" }],
    },
  };
}

/**
 * Portada.
 *
 * Solo lo imprescindible para que alguien entienda en un minuto qué
 * hace Micliente y decida a dónde ir. El detalle vive en las páginas
 * de servicios, precios y por qué nosotros.
 */
export default async function Inicio({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "es";
  const c = obtenerContenido(locale);

  return (
    <>
      <Hero locale={locale} c={c} />
      <Problema c={c} />
      <ComoFunciona c={c} />
      <Diferenciadores c={c} />
      <CtaFinal locale={locale} c={c} />
    </>
  );
}
