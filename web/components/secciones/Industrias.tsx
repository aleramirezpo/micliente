import type { Contenido } from "@/lib/contenido";
import s from "./Industrias.module.css";

export function Industrias({ c }: { c: Contenido }) {
  const industrias = c.industrias;

  return (
    <section className="seccion seccion--elevada">
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{industrias.etiqueta}</p>
          <h2 className="titulo-seccion">{industrias.titulo}</h2>
        </header>

        <div className={`rejilla ${s.lista}`}>
          {industrias.lista.map((industria, i) => (
            <article
              className={`tarjeta revelar ${s.industria}`}
              data-retardo={Math.min(i + 1, 5)}
              key={industria.nombre}
            >
              <h3 className={s.nombre}>{industria.nombre}</h3>
              <p className={s.dolor}>{industria.dolor}</p>
              <div className={s.separador} aria-hidden="true" />
              <p className={s.solucion}>{industria.solucion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
