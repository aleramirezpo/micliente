import type { Contenido } from "@/lib/contenido";
import s from "./Mercado.module.css";

export function Mercado({ c }: { c: Contenido }) {
  const mercado = c.mercado;

  return (
    <section className="seccion">
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{mercado.etiqueta}</p>
          <h2 className="titulo-seccion">{mercado.titulo}</h2>
          <p className="texto-seccion">{mercado.texto}</p>
        </header>

        <div className={`rejilla ${s.datos}`}>
          {mercado.datos.map((dato, i) => (
            <article
              className={`tarjeta revelar ${s.dato}`}
              data-retardo={Math.min(i + 1, 5)}
              key={dato.titulo}
            >
              <p className={`cifra-grande ${s.cifra}`}>{dato.cifra}</p>
              <h3 className={s.titulo}>{dato.titulo}</h3>
              <p className="tarjeta__texto">{dato.texto}</p>
            </article>
          ))}
        </div>

        <p className={`revelar ${s.fuentes}`}>{mercado.fuentes}</p>
      </div>
    </section>
  );
}
