import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Contenido } from "@/lib/contenido";
import s from "./Agendar.module.css";

function MarcaVerificacion() {
  return (
    <svg
      className={s.icono}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function Agendar({
  locale,
  c,
}: {
  locale: Locale;
  c: Contenido;
}) {
  const agendar = c.agendar;

  return (
    <section id="agendar" className="seccion seccion--elevada">
      <div className={`contenedor ${s.rejilla}`}>
        <div className={`revelar ${s.contenido}`}>
          <p className="etiqueta-seccion">{agendar.etiqueta}</p>
          <h2 className="titulo-seccion">{agendar.titulo}</h2>
          <p className="texto-seccion">{agendar.texto}</p>

          <ul className={s.puntos}>
            {agendar.puntos.map((punto) => (
              <li key={punto}>
                <MarcaVerificacion />
                <span>{punto}</span>
              </li>
            ))}
          </ul>

          <div className="grupo-botones">
            <Link
              href={`/${locale}/#calendario`}
              className="boton boton--primario"
            >
              {agendar.ctaCalendario}
            </Link>
            <Link
              href={`/${locale}/#contacto`}
              className="boton boton--secundario"
            >
              {agendar.ctaWhatsapp}
            </Link>
          </div>
        </div>

        {/* Reserva explícita para integrar el calendario cuando se
            contrate el servicio, sin simular hoy una disponibilidad. */}
        <div
          id="calendario"
          className={`revelar ${s.calendario}`}
          data-retardo="1"
          role="region"
          aria-label={agendar.marcador}
        >
          <svg
            className={s.iconoCalendario}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M8 2v4M16 2v4M3 10h18" />
            <rect x="3" y="4" width="18" height="18" rx="2" />
          </svg>
          <p>{agendar.marcador}</p>
        </div>
      </div>
    </section>
  );
}
