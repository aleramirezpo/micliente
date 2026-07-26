import type { Contenido } from "@/lib/contenido";
import s from "./Servicios.module.css";

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

export function Servicios({ c }: { c: Contenido }) {
  const servicios = c.servicios;

  return (
    <section id="servicios" className="seccion seccion--elevada">
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{servicios.etiqueta}</p>
          <h2 className="titulo-seccion">{servicios.titulo}</h2>
          <p className="texto-seccion">{servicios.texto}</p>
        </header>

        <div className={`rejilla rejilla--2 ${s.lista}`}>
          {servicios.lista.map((servicio, i) => (
            <article
              className={`tarjeta revelar ${s.servicio}`}
              data-retardo={i + 1}
              key={servicio.clave}
            >
              <p className={s.etiqueta}>{servicio.etiqueta}</p>
              <h3 className={s.titulo}>{servicio.titulo}</h3>
              <p className={s.texto}>{servicio.texto}</p>
              <ul className={s.puntos}>
                {servicio.puntos.map((punto) => (
                  <li className={s.punto} key={punto}>
                    <MarcaVerificacion />
                    <span>{punto}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Esta caja anticipa la expansión del servicio sin mezclarla
            con las dos ofertas disponibles hoy. */}
        <aside className={`revelar ${s.proximamente}`}>
          <span className={s.rombo} aria-hidden="true" />
          <div>
            <h3 className={s.proximoTitulo}>
              {servicios.proximamente.titulo}
            </h3>
            <p className={s.proximoTexto}>{servicios.proximamente.texto}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
