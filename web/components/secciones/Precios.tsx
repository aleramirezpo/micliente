import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Contenido } from "@/lib/contenido";
import s from "./Precios.module.css";

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

export function Precios({
  locale,
  c,
}: {
  locale: Locale;
  c: Contenido;
}) {
  const precios = c.precios;

  return (
    <section id="precios" className="seccion seccion--tinte">
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{precios.etiqueta}</p>
          <h2 className="titulo-seccion">{precios.titulo}</h2>
          <p className="texto-seccion">{precios.texto}</p>
        </header>

        {/* El orden visual pone el plan destacado primero en móvil.
            Desde escritorio se restaura el orden editorial original. */}
        <div className={s.planes}>
          {precios.planes.map((plan, i) => (
            <article
              className={`tarjeta revelar ${s.plan} ${
                plan.destacado ? s.destacado : ""
              }`}
              data-retardo={Math.min(i + 1, 5)}
              key={plan.nombre}
            >
              {"distintivo" in plan && (
                <p className={s.distintivo}>{plan.distintivo}</p>
              )}
              <h3 className={s.nombre}>{plan.nombre}</h3>
              <p className={s.para}>{plan.para}</p>
              <p className={s.precio}>{plan.precio}</p>
              {plan.periodo && <p className={s.periodo}>{plan.periodo}</p>}
              <ul className={s.incluye}>
                {plan.incluye.map((elemento) => (
                  <li key={elemento}>
                    <MarcaVerificacion />
                    <span>{elemento}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/#contacto`}
                className={`boton ${
                  plan.destacado ? "boton--primario" : "boton--secundario"
                } ${s.cta}`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>

        <aside className={`revelar ${s.implementacion}`}>
          <div>
            <h3 className={s.tituloImplementacion}>
              {precios.implementacion.titulo}
            </h3>
            <p className={s.textoImplementacion}>
              {precios.implementacion.texto}
            </p>
          </div>
          <p className={s.nota}>{precios.nota}</p>
        </aside>
      </div>
    </section>
  );
}
