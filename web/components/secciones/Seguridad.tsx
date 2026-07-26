import type { Contenido } from "@/lib/contenido";
import s from "./Seguridad.module.css";

function Escudo() {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Seguridad({ c }: { c: Contenido }) {
  const seguridad = c.seguridad;

  return (
    <section className="seccion seccion--elevada seccion--filete">
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{seguridad.etiqueta}</p>
          <h2 className="titulo-seccion">{seguridad.titulo}</h2>
          <p className="texto-seccion">{seguridad.texto}</p>
        </header>

        <div className={`rejilla ${s.puntos}`}>
          {seguridad.puntos.map((punto, i) => (
            <article
              className={`tarjeta revelar ${s.punto}`}
              data-retardo={Math.min(i + 1, 5)}
              key={punto.titulo}
            >
              <Escudo />
              <h3 className="tarjeta__titulo">{punto.titulo}</h3>
              <p className="tarjeta__texto">{punto.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
