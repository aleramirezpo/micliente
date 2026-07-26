"use client";

import { useEffect, useRef, useState } from "react";
import { locales, localeNames, localeShortNames, type Locale } from "@/lib/i18n";
import s from "./Controles.module.css";

/**
 * Selector de idioma.
 *
 * Usa enlaces reales (<a href>) y no un manejador de JavaScript, para
 * que Google pueda rastrear las tres versiones del sitio. Eso es
 * justo lo que hace que el hreflang funcione.
 */
export function SelectorIdioma({
  locale,
  etiqueta,
}: {
  locale: Locale;
  etiqueta: string;
}) {
  const [abierto, setAbierto] = useState(false);
  const caja = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!abierto) return;

    const alClicFuera = (e: MouseEvent) => {
      if (caja.current && !caja.current.contains(e.target as Node)) {
        setAbierto(false);
      }
    };
    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };

    document.addEventListener("mousedown", alClicFuera);
    window.addEventListener("keydown", alPulsar);
    return () => {
      document.removeEventListener("mousedown", alClicFuera);
      window.removeEventListener("keydown", alPulsar);
    };
  }, [abierto]);

  return (
    <div className={s.caja} ref={caja}>
      <button
        type="button"
        className={s.control}
        aria-expanded={abierto}
        aria-haspopup="true"
        aria-label={etiqueta}
        onClick={() => setAbierto((v) => !v)}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
        </svg>
        <span className={s.textoControl}>{localeShortNames[locale]}</span>
      </button>

      {abierto && (
        <ul className={s.menu} role="menu">
          {locales.map((l) => (
            <li key={l} role="none">
              <a
                href={`/${l}/`}
                role="menuitem"
                className={`${s.opcion} ${l === locale ? s.opcionActiva : ""}`}
                lang={l}
                hrefLang={l}
                aria-current={l === locale ? "true" : undefined}
              >
                <span className={s.codigo}>{localeShortNames[l]}</span>
                {localeNames[l]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
