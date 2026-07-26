import type { Contenido } from "@/lib/contenido";
import s from "./ComparativaApi.module.css";

export function ComparativaApi({ c }: { c: Contenido }) {
  const comparativa = c.comparativaApi;

  return (
    <section className="seccion seccion--fria">
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{comparativa.etiqueta}</p>
          <h2 className="titulo-seccion">{comparativa.titulo}</h2>
          <p className="texto-seccion">{comparativa.texto}</p>
        </header>

        {/* La tabla se desplaza dentro de su propia caja en móvil; la
            columna de la solución Micliente conserva el acento dorado. */}
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
                  <td>{fila.app}</td>
                  <td className={s.micliente}>{fila.api}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className={`revelar ${s.nota}`}>{comparativa.nota}</aside>
      </div>
    </section>
  );
}
