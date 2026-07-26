"use client";

import { useSyncExternalStore } from "react";
import s from "./Controles.module.css";

type Tema = "light" | "dark";

/**
 * Alternador de tema claro y oscuro.
 *
 * Por defecto manda la preferencia del sistema operativo. Si el
 * usuario elige a mano, esa decisión gana y se guarda en localStorage.
 * El layout raíz la aplica antes del primer pintado para que no haya
 * destello blanco al cargar en modo oscuro.
 *
 * Se usa `useSyncExternalStore` en vez de useState + useEffect porque
 * el tema es estado externo a React: vive en el atributo data-theme
 * del <html> y en la preferencia del sistema. Este hook está hecho
 * justo para eso y evita el render extra que provoca leer datos del
 * navegador dentro de un efecto.
 */

/** Se notifica cuando cambia el atributo data-theme o la preferencia del sistema. */
function suscribir(alCambiar: () => void): () => void {
  const consulta = window.matchMedia("(prefers-color-scheme: dark)");
  const observador = new MutationObserver(alCambiar);

  observador.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  consulta.addEventListener("change", alCambiar);

  return () => {
    observador.disconnect();
    consulta.removeEventListener("change", alCambiar);
  };
}

/**
 * Valor real en el navegador.
 *
 * Si el usuario no ha elegido nada, el tema es CLARO, aunque su
 * sistema esté en modo oscuro. Es una decisión de marca: Micliente
 * es marfil y dorado, y así se lee mejor. Quien prefiera oscuro lo
 * activa con este botón y la elección se recuerda.
 */
function leerEnCliente(): Tema {
  const elegido = document.documentElement.getAttribute("data-theme");
  return elegido === "dark" ? "dark" : "light";
}

/**
 * Valor durante el prerenderizado, donde no existe `document`.
 * Se asume claro; si el usuario tiene el modo oscuro, React corrige
 * el icono al hidratar. El fondo ya es correcto desde el primer
 * pintado gracias al script del layout, así que no se ve ningún salto.
 */
function leerEnServidor(): Tema {
  return "light";
}

export function BotonTema({ etiqueta }: { etiqueta: string }) {
  const tema = useSyncExternalStore(suscribir, leerEnCliente, leerEnServidor);

  const alternar = () => {
    const nuevo: Tema = tema === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nuevo);
    try {
      localStorage.setItem("mc-tema", nuevo);
    } catch {
      // Si el navegador bloquea el almacenamiento (navegación privada),
      // el cambio sigue funcionando durante la sesión.
    }
  };

  return (
    <button
      type="button"
      className={s.control}
      onClick={alternar}
      aria-label={etiqueta}
      title={etiqueta}
    >
      {tema === "dark" ? (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
        </svg>
      ) : (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path d="M20.5 14.8A8.6 8.6 0 0 1 9.2 3.5a8.6 8.6 0 1 0 11.3 11.3Z" />
        </svg>
      )}
    </button>
  );
}
