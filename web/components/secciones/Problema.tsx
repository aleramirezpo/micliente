import type { Contenido } from "@/lib/contenido";
import s from "./Problema.module.css";

export function Problema({ c }: { c: Contenido }) {
  const p = c.problema;

  return (
    <section className={`seccion seccion--tinte ${s.seccion}`}>
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{p.etiqueta}</p>
          <h2 className="titulo-seccion">{p.titulo}</h2>
          <p className="texto-seccion">{p.texto}</p>
        </header>

        {/* Cada problema se presenta como una señal concreta, sin añadir
            iconos que compitan con el contenido. */}
        <div className="rejilla rejilla--4">
          {p.puntos.map((punto, i) => (
            <article
              className={`tarjeta revelar ${s.tarjeta}`}
              data-retardo={Math.min(i + 1, 5)}
              key={punto.titulo}
            >
              <span className={s.marca} aria-hidden="true" />
              <h3 className="tarjeta__titulo">{punto.titulo}</h3>
              <p className="tarjeta__texto">{punto.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
