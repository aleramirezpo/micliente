import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Contenido } from "@/lib/contenido";
import s from "./CtaFinal.module.css";

export function CtaFinal({
  locale,
  c,
}: {
  locale: Locale;
  c: Contenido;
}) {
  const cta = c.ctaFinal;

  return (
    <section className={`seccion seccion--oscura ${s.seccion}`}>
      <div className={`contenedor texto-centrado revelar ${s.contenido}`}>
        <h2 className={s.titulo}>{cta.titulo}</h2>
        <p className={s.texto}>{cta.texto}</p>
        <div className={`grupo-botones ${s.botones}`}>
          <Link
            href={`/${locale}/#agendar`}
            className="boton boton--primario"
          >
            {cta.ctaPrimario}
          </Link>
          <Link
            href={`/${locale}/#contacto`}
            className="boton boton--claro"
          >
            {cta.ctaSecundario}
          </Link>
        </div>
      </div>
    </section>
  );
}
