import s from "./PortadaPagina.module.css";

/**
 * Encabezado de una página interna.
 *
 * Sirve para que al entrar se entienda de inmediato dónde se está,
 * sin tener que mirar el menú ni la URL.
 */
export function PortadaPagina({
  titulo,
  texto,
}: {
  titulo: string;
  texto: string;
}) {
  return (
    <section className={s.portada}>
      <div className={`contenedor ${s.caja}`}>
        <h1 className={s.titulo}>{titulo}</h1>
        <p className={s.texto}>{texto}</p>
      </div>
    </section>
  );
}
