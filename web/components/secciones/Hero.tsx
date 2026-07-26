import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Contenido } from "@/lib/contenido";
import { ChatDemo } from "./ChatDemo";
import s from "./Hero.module.css";

export function Hero({ locale, c }: { locale: Locale; c: Contenido }) {
  const h = c.hero;

  return (
    <section className={s.hero}>
      {/* Resplandor dorado muy tenue de fondo. Decorativo: se oculta
          a los lectores de pantalla. */}
      <div className={s.resplandor} aria-hidden="true" />

      <div className={`contenedor ${s.rejilla}`}>
        <div className={s.texto}>
          <p className={s.distintivo}>
            <span className={s.punto} aria-hidden="true" />
            {h.distintivo}
          </p>

          <h1 className={s.titulo}>{h.titulo}</h1>

          <p className={s.subtitulo}>{h.subtitulo}</p>

          <div className="grupo-botones">
            <Link
              href={`/${locale}/#servicios`}
              className="boton boton--primario"
            >
              {h.ctaPrimario}
            </Link>
            <Link
              href={`/${locale}/#contacto`}
              className="boton boton--secundario"
            >
              {h.ctaSecundario}
            </Link>
          </div>

          <p className={s.nota}>{h.nota}</p>
        </div>

        {/* Demostración de conversación. Son ejemplos ilustrativos de
            varios sectores, no conversaciones reales, y así se declara
            en el pie. */}
        <figure className={s.demo}>
          <ChatDemo chat={h.chat} />
          <figcaption className={s.pieDemo}>{h.chat.pie}</figcaption>
        </figure>
      </div>
    </section>
  );
}
