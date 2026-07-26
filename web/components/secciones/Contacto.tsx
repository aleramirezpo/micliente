"use client";

import { useState, type FormEvent } from "react";
import type { Contenido } from "@/lib/contenido";
import s from "./Contacto.module.css";

type CampoValidado = "nombre" | "correo" | "interes" | "mensaje";

export function Contacto({ c }: { c: Contenido }) {
  const contacto = c.contacto;
  const f = contacto.formulario;
  const [errores, setErrores] = useState<
    Partial<Record<CampoValidado, string>>
  >({});
  const [enviado, setEnviado] = useState(false);

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    const datos = new FormData(formulario);

    /* Los bots suelen completar este campo que permanece fuera de la
       vista. Si ocurre, se descarta silenciosamente el intento. */
    if (String(datos.get("empresa_web") ?? "").trim()) {
      return;
    }

    const nuevosErrores: Partial<Record<CampoValidado, string>> = {};
    const nombre = String(datos.get("nombre") ?? "").trim();
    const correo = String(datos.get("correo") ?? "").trim();
    const interes = String(datos.get("interes") ?? "").trim();
    const mensaje = String(datos.get("mensaje") ?? "").trim();

    if (!nombre) nuevosErrores.nombre = f.requerido;
    if (!correo) {
      nuevosErrores.correo = f.requerido;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      nuevosErrores.correo = f.correoInvalido;
    }
    if (!interes) nuevosErrores.interes = f.requerido;
    if (!mensaje) nuevosErrores.mensaje = f.requerido;

    setErrores(nuevosErrores);
    setEnviado(false);

    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    // TODO: conectar con Web3Forms o Formspree
    formulario.reset();
    setEnviado(true);
  }

  return (
    <section id="contacto" className={`seccion seccion--fria ${s.seccion}`}>
      <div className="contenedor">
        <header className="encabezado-seccion revelar">
          <p className="etiqueta-seccion">{contacto.etiqueta}</p>
          <h2 className="titulo-seccion">{contacto.titulo}</h2>
          <p className="texto-seccion">{contacto.texto}</p>
        </header>

        <div className={`rejilla rejilla--4 ${s.canales}`}>
          {Object.values(contacto.canales).map((canal, i) => (
            <article
              className={`tarjeta revelar ${s.canal}`}
              data-retardo={Math.min(i + 1, 5)}
              key={canal.etiqueta}
            >
              <p className={s.etiquetaCanal}>{canal.etiqueta}</p>
              <p className={s.valorCanal}>{canal.valor}</p>
              <p className={s.notaCanal}>{canal.nota}</p>
            </article>
          ))}
        </div>

        <form
          className={`revelar ${s.formulario}`}
          onSubmit={enviar}
          noValidate
        >
          {/* Honeypot oculto visualmente, pero no mediante type="hidden",
              para que los bots que completan formularios puedan caer en él. */}
          <div className={s.trampa} aria-hidden="true">
            <label htmlFor="contacto-empresa-web">{f.empresa}</label>
            <input
              id="contacto-empresa-web"
              name="empresa_web"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className={s.campos}>
            <div className={s.campo}>
              <label htmlFor="contacto-nombre">{f.nombre}</label>
              <input
                id="contacto-nombre"
                name="nombre"
                autoComplete="name"
                required
                aria-invalid={Boolean(errores.nombre)}
                aria-describedby={
                  errores.nombre ? "contacto-error-nombre" : undefined
                }
              />
              {errores.nombre && (
                <p className={s.error} id="contacto-error-nombre">
                  {errores.nombre}
                </p>
              )}
            </div>

            <div className={s.campo}>
              <label htmlFor="contacto-empresa">{f.empresa}</label>
              <input
                id="contacto-empresa"
                name="empresa"
                autoComplete="organization"
              />
            </div>

            <div className={s.campo}>
              <label htmlFor="contacto-correo">{f.correo}</label>
              <input
                id="contacto-correo"
                name="correo"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                aria-invalid={Boolean(errores.correo)}
                aria-describedby={
                  errores.correo ? "contacto-error-correo" : undefined
                }
              />
              {errores.correo && (
                <p className={s.error} id="contacto-error-correo">
                  {errores.correo}
                </p>
              )}
            </div>

            <div className={s.campo}>
              <label htmlFor="contacto-telefono">{f.telefono}</label>
              <input
                id="contacto-telefono"
                name="telefono"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
              />
            </div>

            <div className={s.campo}>
              <label htmlFor="contacto-interes">{f.interes}</label>
              <select
                id="contacto-interes"
                name="interes"
                defaultValue=""
                required
                aria-invalid={Boolean(errores.interes)}
                aria-describedby={
                  errores.interes ? "contacto-error-interes" : undefined
                }
              >
                <option value="" disabled>
                  {f.interes}
                </option>
                {f.opciones.map((opcion) => (
                  <option value={opcion} key={opcion}>
                    {opcion}
                  </option>
                ))}
              </select>
              {errores.interes && (
                <p className={s.error} id="contacto-error-interes">
                  {errores.interes}
                </p>
              )}
            </div>

            <div className={`${s.campo} ${s.campoAncho}`}>
              <label htmlFor="contacto-mensaje">{f.mensaje}</label>
              <textarea
                id="contacto-mensaje"
                name="mensaje"
                required
                aria-invalid={Boolean(errores.mensaje)}
                aria-describedby={
                  errores.mensaje ? "contacto-error-mensaje" : undefined
                }
              />
              {errores.mensaje && (
                <p className={s.error} id="contacto-error-mensaje">
                  {errores.mensaje}
                </p>
              )}
            </div>
          </div>

          <p className={s.privacidad}>{f.privacidad}</p>
          <button className="boton boton--primario" type="submit">
            {f.enviar}
          </button>
          {enviado && (
            <p className={s.exito} role="status">
              {f.exito}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
