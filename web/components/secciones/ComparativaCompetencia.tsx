import type { Contenido } from "@/lib/contenido";
import s from "./ComparativaCompetencia.module.css";

export function ComparativaCompetencia({ c }: { c: Contenido }) {
  const comparativa = c.comparativaCompetencia;

  return (
    <section className="seccion">
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{comparativa.etiqueta}</p>
          <h2 className="titulo-seccion">{comparativa.titulo}</h2>
        </header>

        <div className={`tabla-scroll revelar ${s.tablaCaja}`}>
          <table className={`tabla ${s.tabla}`}>
            <thead>
              <tr>
                {comparativa.columnas.map((columna, i) => (
                  <th
                    className={i === 2 ? s.micliente : undefined}
                    scope="col"
                    key={columna || i}
                  >
                    {columna}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparativa.filas.map((fila) => (
                <tr key={fila.concepto}>
                  <th scope="row">{fila.concepto}</th>
                  <td>{fila.otros}</td>
                  <td className={s.micliente}>{fila.nosotros}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
