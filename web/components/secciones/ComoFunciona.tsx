import type { Contenido } from "@/lib/contenido";
import s from "./ComoFunciona.module.css";

export function ComoFunciona({ c }: { c: Contenido }) {
  const f = c.comoFunciona;

  return (
    <section id="como-funciona" className={`seccion ${s.seccion}`}>
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{f.etiqueta}</p>
          <h2 className="titulo-seccion">{f.titulo}</h2>
          <p className="texto-seccion">{f.texto}</p>
        </header>

        {/* Los pasos conservan su número editorial y se leen en el mismo
            orden en móvil, iPad y escritorio. */}
        <ol className={`rejilla rejilla--4 ${s.pasos}`}>
          {f.pasos.map((paso, i) => (
            <li
              className={`revelar ${s.paso}`}
              data-retardo={Math.min(i + 1, 5)}
              key={paso.numero}
            >
              <span className={s.numero} aria-hidden="true">
                {paso.numero}
              </span>
              <div className={s.linea} aria-hidden="true" />
              <h3 className={s.titulo}>{paso.titulo}</h3>
              <p className={s.texto}>{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
