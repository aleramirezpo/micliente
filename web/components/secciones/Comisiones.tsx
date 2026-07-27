import type { Contenido } from "@/lib/contenido";
import s from "./Comisiones.module.css";

export function Comisiones({ c }: { c: Contenido }) {
  const comisiones = c.comisiones;

  return (
    <section className={`seccion seccion--oscura ${s.seccion}`}>
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{comisiones.etiqueta}</p>
          <h2 className="titulo-seccion">{comisiones.titulo}</h2>
          <p className="texto-seccion">{comisiones.texto}</p>
        </header>

        <div className={s.rejilla}>
          <article className={`revelar ${s.ejemplo}`}>
            <h3 className={s.tituloEjemplo}>{comisiones.ejemplo.titulo}</h3>

            {/*
              Lista de definición en lugar de tabla.
              Una tabla obliga a un ancho mínimo y en móvil hay que
              desplazarla de lado. Aquí cada fila es concepto y valor,
              y en pantallas estrechas el valor cae debajo por sí solo,
              sin que nada se salga. El cuadro siempre se ve entero.
            */}
            <dl className={s.cuenta}>
              {comisiones.ejemplo.filas.map((fila, i) => {
                const esNegativa = "negativo" in fila && fila.negativo;
                const esTotal = i === comisiones.ejemplo.filas.length - 1;
                return (
                  <div
                    key={fila.concepto}
                    className={`${s.fila} ${esNegativa ? s.negativa : ""} ${
                      esTotal ? s.total : ""
                    }`}
                  >
                    <dt className={s.concepto}>{fila.concepto}</dt>
                    <dd className={s.valor}>{fila.valor}</dd>
                  </div>
                );
              })}
            </dl>

            <p className={s.cierre}>{comisiones.ejemplo.cierre}</p>
          </article>

          <aside className={`revelar ${s.dato}`} data-retardo="1">
            <p className={`cifra-grande ${s.cifra}`}>
              {comisiones.dato.cifra}
            </p>
            <p className={s.textoDato}>{comisiones.dato.texto}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
