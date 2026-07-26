import type { Contenido } from "@/lib/contenido";
import s from "./Escalabilidad.module.css";

export function Escalabilidad({ c }: { c: Contenido }) {
  const escalabilidad = c.escalabilidad;

  return (
    <section className={`seccion ${s.seccion}`}>
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{escalabilidad.etiqueta}</p>
          <h2 className="titulo-seccion">{escalabilidad.titulo}</h2>
          <p className="texto-seccion">{escalabilidad.texto}</p>
        </header>

        <div className={s.capas}>
          {escalabilidad.capas.map((capa, i) => (
            <article
              className={`revelar ${s.capa}`}
              data-retardo={Math.min(i + 1, 5)}
              key={capa.titulo}
            >
              <span className={s.indice} aria-hidden="true" />
              <div>
                <h3 className={s.titulo}>{capa.titulo}</h3>
                <p className={s.texto}>{capa.texto}</p>
              </div>
            </article>
          ))}
        </div>

        <p className={`revelar ${s.cierre}`}>{escalabilidad.cierre}</p>
      </div>
    </section>
  );
}
