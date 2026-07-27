"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Contenido } from "@/lib/contenido";
import s from "./ChatDemo.module.css";

type Chat = Contenido["hero"]["chat"];
type Conversacion = Chat["conversaciones"][number];

/** Ritmo de la secuencia, en milisegundos. */
const ESPERA_ENTRE_MENSAJES = 1150;
const DURACION_ESCRIBIENDO = 750;
const PAUSA_ANTES_DE_CAMBIAR = 3200;

/**
 * Demostración de conversación del hero.
 *
 * Recorre varios ejemplos de sectores distintos. Dentro de cada uno,
 * los mensajes van apareciendo como si la conversación ocurriera en
 * ese momento, con indicador de «escribiendo…» antes de cada
 * respuesta del asistente. Al terminar, pasa al siguiente sector.
 *
 * Todo con temporizadores nativos del navegador: sin librerías de
 * animación y sin ninguna petición de red.
 *
 * Sobre `prefers-reduced-motion`: la secuencia se mantiene SIEMPRE,
 * porque no es decoración sino la demostración del producto. Lo que
 * se desactiva (en el CSS) es el deslizamiento y el escalado de cada
 * burbuja al entrar, que es el movimiento que puede causar molestia.
 * Un contenido que aparece no es «movimiento» en el sentido que esa
 * preferencia busca evitar.
 */
export function ChatDemo({ chat }: { chat: Chat }) {
  const conversaciones = chat.conversaciones;
  const [indice, setIndice] = useState(0);
  /** Si el usuario elige un sector, se detiene la rotación automática. */
  const [manual, setManual] = useState(false);

  const siguiente = useCallback(() => {
    if (manual) return;
    setIndice((v) => (v + 1) % conversaciones.length);
  }, [manual, conversaciones.length]);

  const elegirSector = (i: number) => {
    setManual(true);
    setIndice(i);
  };

  return (
    <div className={s.envoltura}>
      {/* Selector de sector: botones reales, usables con teclado
          y anunciados por los lectores de pantalla. */}
      <div className={s.sectores} role="tablist" aria-label={chat.titulo}>
        {conversaciones.map((conv, i) => (
          <button
            key={conv.sector}
            type="button"
            role="tab"
            aria-selected={i === indice}
            className={`${s.sector} ${i === indice ? s.sectorActivo : ""}`}
            onClick={() => elegirSector(i)}
          >
            {conv.sector}
          </button>
        ))}
      </div>

      {/*
        La `key` es la clave del diseño: al cambiar de conversación,
        React desmonta y vuelve a montar el componente, así que el
        estado se reinicia solo. No hace falta reiniciarlo a mano
        dentro de un efecto.
      */}
      <ConversacionAnimada
        key={indice}
        conversacion={conversaciones[indice]}
        textoEscribiendo={chat.escribiendo}
        alTerminar={siguiente}
      />
    </div>
  );
}

function ConversacionAnimada({
  conversacion,
  textoEscribiendo,
  alTerminar,
}: {
  conversacion: Conversacion;
  textoEscribiendo: string;
  alTerminar: () => void;
}) {
  const total = conversacion.mensajes.length;
  const [visibles, setVisibles] = useState(1);
  const [escribiendo, setEscribiendo] = useState(false);
  const lista = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const temporizadores: ReturnType<typeof setTimeout>[] = [];
    const programar = (fn: () => void, ms: number) => {
      temporizadores.push(setTimeout(fn, ms));
    };

    let tiempo = 0;
    for (let i = 1; i < total; i++) {
      if (conversacion.mensajes[i].de === "bot") {
        // Antes de una respuesta del asistente se muestra «escribiendo…»
        tiempo += ESPERA_ENTRE_MENSAJES - DURACION_ESCRIBIENDO;
        programar(() => setEscribiendo(true), tiempo);
        tiempo += DURACION_ESCRIBIENDO;
        programar(() => {
          setEscribiendo(false);
          setVisibles(i + 1);
        }, tiempo);
      } else {
        tiempo += ESPERA_ENTRE_MENSAJES;
        programar(() => setVisibles(i + 1), tiempo);
      }
    }

    programar(alTerminar, tiempo + PAUSA_ANTES_DE_CAMBIAR);

    return () => temporizadores.forEach(clearTimeout);
  }, [conversacion, total, alTerminar]);

  // Mantiene a la vista el último mensaje.
  //
  // Se ajusta `scrollTop` directamente sobre la lista, y NO se usa
  // `scrollIntoView`. Ese método no se limita al contenedor: sube por
  // la jerarquía y desplaza también la ventana. En un móvil eso hacía
  // que la página se fuera sola hacia abajo unos 270 px en los dos
  // primeros segundos, arrastrando al visitante fuera de la cabecera.
  useEffect(() => {
    const el = lista.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visibles, escribiendo]);

  return (
    <div className={s.telefono}>
      <div className={s.barraChat}>
        <span className={s.avatar} aria-hidden="true" />
        <div className={s.datosChat}>
          <span className={s.nombreChat}>Micliente</span>
          <span className={s.estadoChat}>
            {escribiendo ? textoEscribiendo : conversacion.sector}
          </span>
        </div>
      </div>

      {/* aria-live anuncia los mensajes nuevos sin interrumpir la
          lectura en curso. */}
      <ol
        ref={lista}
        className={s.mensajes}
        aria-live="polite"
        aria-atomic="false"
      >
        {conversacion.mensajes.slice(0, visibles).map((m, i) => (
          <li
            key={i}
            className={`${s.mensaje} ${m.de === "bot" ? s.deBot : s.deCliente}`}
          >
            <p className={s.burbuja}>{m.texto}</p>
            <time className={s.hora}>{m.hora}</time>
          </li>
        ))}

        {escribiendo && (
          <li className={`${s.mensaje} ${s.deBot}`}>
            <p className={`${s.burbuja} ${s.puntos}`} aria-label={textoEscribiendo}>
              <span />
              <span />
              <span />
            </p>
          </li>
        )}
      </ol>
    </div>
  );
}
