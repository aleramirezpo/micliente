"use client";

import type { Contenido } from "@/lib/contenido";
import s from "./Faq.module.css";

export function Faq({ c }: { c: Contenido }) {
  const faq = c.faq;

  return (
    <section id="preguntas" className="seccion">
      <div className={`contenedor ${s.contenedor}`}>
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{faq.etiqueta}</p>
          <h2 className="titulo-seccion">{faq.titulo}</h2>
        </header>

        {/* details y summary conservan interacción nativa con teclado y
            funcionan incluso antes de que React termine de hidratar. */}
        <div className={s.lista}>
          {faq.lista.map((item, i) => (
            <details
              className={`revelar ${s.item}`}
              data-retardo={Math.min(i + 1, 5)}
              key={item.p}
            >
              <summary className={s.pregunta}>
                <span>{item.p}</span>
                <span className={s.marcador} aria-hidden="true" />
              </summary>
              <div className={s.respuesta}>
                <div className={s.respuestaInterior}>
                  <p>{item.r}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
