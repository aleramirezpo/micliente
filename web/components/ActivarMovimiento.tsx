"use client";

import { useEffect } from "react";

/**
 * Activa las animaciones de entrada.
 *
 * Estrategia de mejora progresiva:
 *  1. Sin JavaScript, todo el contenido se ve normalmente. Los
 *     elementos NUNCA quedan invisibles por un script que falle.
 *  2. Con JavaScript, se añade la clase `js` al <html>, que es lo
 *     que activa el estado inicial oculto en globals.css.
 *  3. Un IntersectionObserver nativo revela cada elemento al entrar
 *     en pantalla. Sin librerías externas: menos peso y menos
 *     superficie de ataque.
 *  4. Si el usuario pidió reducir el movimiento, no se hace nada.
 */
export function ActivarMovimiento() {
  useEffect(() => {
    const raiz = document.documentElement;

    const prefiereMenosMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefiereMenosMovimiento) return;

    raiz.classList.add("js");

    const elementos = document.querySelectorAll<HTMLElement>(".revelar");
    if (elementos.length === 0) return;

    // Sin soporte del observador, mostramos todo de una vez.
    if (typeof IntersectionObserver === "undefined") {
      elementos.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            // Una vez revelado, deja de observarse: la animación
            // ocurre una sola vez, no cada vez que se hace scroll.
            observador.unobserve(entrada.target);
          }
        }
      },
      {
        // Se dispara un poco antes de que el elemento llegue al borde,
        // para que la animación termine justo cuando queda a la vista.
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.08,
      },
    );

    elementos.forEach((el) => observador.observe(el));

    return () => observador.disconnect();
  }, []);

  return null;
}
