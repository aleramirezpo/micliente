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
            <div className="tabla-scroll">
              <table className="tabla">
                <tbody>
                  {comisiones.ejemplo.filas.map((fila) => (
                    <tr
                      className={
                        "negativo" in fila && fila.negativo
                          ? s.negativa
                          : undefined
                      }
                      key={fila.concepto}
                    >
                      <th scope="row">{fila.concepto}</th>
                      <td>{fila.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
