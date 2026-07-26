import type { Contenido } from "@/lib/contenido";
import s from "./Diferenciadores.module.css";

export function Diferenciadores({ c }: { c: Contenido }) {
  const diferenciadores = c.diferenciadores;

  return (
    <section className="seccion seccion--tinte">
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{diferenciadores.etiqueta}</p>
          <h2 className="titulo-seccion">{diferenciadores.titulo}</h2>
        </header>

        <ol className={s.lista}>
          {diferenciadores.lista.map((diferenciador, i) => (
            <li
              className={`revelar ${s.item}`}
              data-retardo={Math.min(i + 1, 5)}
              key={diferenciador.numero}
            >
              <span className={s.numero} aria-hidden="true">
                {diferenciador.numero}
              </span>
              <div className={s.contenido}>
                <h3 className={s.titulo}>{diferenciador.titulo}</h3>
                <p className={s.texto}>{diferenciador.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
