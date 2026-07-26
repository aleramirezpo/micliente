import { isLocale, type Locale } from "@/lib/i18n";
import { obtenerContenido } from "@/lib/contenido";
import { Hero } from "@/components/secciones/Hero";
import { Problema } from "@/components/secciones/Problema";
import { ComoFunciona } from "@/components/secciones/ComoFunciona";
import { Servicios } from "@/components/secciones/Servicios";
import { Comisiones } from "@/components/secciones/Comisiones";
import { Calculadora } from "@/components/secciones/Calculadora";
import { Mercado } from "@/components/secciones/Mercado";
import { Industrias } from "@/components/secciones/Industrias";
import { ComparativaApi } from "@/components/secciones/ComparativaApi";
import { Diferenciadores } from "@/components/secciones/Diferenciadores";
import { Escalabilidad } from "@/components/secciones/Escalabilidad";
import { Seguridad } from "@/components/secciones/Seguridad";
import { Precios } from "@/components/secciones/Precios";
import { ComparativaCompetencia } from "@/components/secciones/ComparativaCompetencia";
import { Agendar } from "@/components/secciones/Agendar";
import { Contacto } from "@/components/secciones/Contacto";
import { Faq } from "@/components/secciones/Faq";
import { CtaFinal } from "@/components/secciones/CtaFinal";

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
      <Servicios c={c} />
      <Comisiones c={c} />
      <Calculadora locale={locale} c={c} />
      <Mercado c={c} />
      <Industrias c={c} />
      <ComparativaApi c={c} />
      <Diferenciadores c={c} />
      <Escalabilidad c={c} />
      <Seguridad c={c} />
      <Precios locale={locale} c={c} />
      <ComparativaCompetencia c={c} />
      <Agendar locale={locale} c={c} />
      <Contacto c={c} />
      <Faq c={c} />
      <CtaFinal locale={locale} c={c} />
    </>
  );
}
