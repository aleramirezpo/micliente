import type { Contenido } from "@/lib/contenido";
import s from "./TextoLegal.module.css";

type Seccion = { readonly t: string; readonly p: string };

/**
 * Documento legal.
 *
 * Muestra el aviso de borrador, los datos de identificación de la
 * empresa que exige la Ley 1480 de 2011 para comercio electrónico, el
 * cuerpo del texto y el enlace a la Superintendencia de Industria y
 * Comercio, que también es obligatorio.
 */
export function TextoLegal({
  c,
  secciones,
}: {
  c: Contenido;
  secciones: readonly Seccion[];
}) {
  const l = c.legal;
  const id = l.identificacion;

  return (
    <section className="seccion">
      <div className={`contenedor ${s.caja}`}>
        {/* Se dice con claridad que el documento aún no está revisado.
            Presentarlo como definitivo sería engañoso. */}
        <p className={s.aviso} role="note">
          {l.avisoBorrador}
        </p>

        <p className={s.fecha}>
          {l.actualizado}: {l.fecha}
        </p>

        {/* Datos que la Ley 1480 obliga a mostrar de forma permanente */}
        <div className={s.identificacion}>
          <h2 className={s.tituloIdent}>{id.titulo}</h2>
          <dl className={s.datos}>
            <div>
              <dt>{id.razonSocial}</dt>
              <dd>{id.razonSocialValor}</dd>
            </div>
            <div>
              <dt>{id.nit}</dt>
              <dd>{id.nitValor}</dd>
            </div>
            <div>
              <dt>{id.domicilio}</dt>
              <dd>{id.domicilioValor}</dd>
            </div>
            <div>
              <dt>{id.correo}</dt>
              <dd>
                <a href={`mailto:${id.correoValor}`}>{id.correoValor}</a>
              </dd>
            </div>
          </dl>
        </div>

        <div className={s.cuerpo}>
          {secciones.map((sec, i) => (
            <article key={i} className={s.seccion}>
              <h2 className={s.titulo}>{sec.t}</h2>
              <p className={s.parrafo}>{sec.p}</p>
            </article>
          ))}
        </div>

        {/* Enlace a la autoridad de protección al consumidor.
            Es obligatorio y casi ninguna tienda colombiana lo pone. */}
        <div className={s.sic}>
          <p>{l.sic.texto}</p>
          <a
            href="https://www.sic.gov.co"
            target="_blank"
            rel="noopener noreferrer"
            className={s.enlaceSic}
          >
            {l.sic.enlace}
          </a>
        </div>
      </div>
    </section>
  );
}
