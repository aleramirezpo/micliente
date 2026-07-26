"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { SelectorIdioma } from "./SelectorIdioma";
import { BotonTema } from "./BotonTema";
import type { Locale } from "@/lib/i18n";
import type { Contenido } from "@/lib/contenido";
import s from "./Cabecera.module.css";

export function Cabecera({ locale, c }: { locale: Locale; c: Contenido }) {
  const [abierto, setAbierto] = useState(false);
  const [desplazado, setDesplazado] = useState(false);

  // Fondo sólido en la cabecera solo cuando se ha bajado un poco.
  useEffect(() => {
    const alHacerScroll = () => setDesplazado(window.scrollY > 12);
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  // Con el menú móvil abierto, bloquea el desplazamiento del fondo
  // y permite cerrar con Escape.
  useEffect(() => {
    if (!abierto) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(false);
    };
    window.addEventListener("keydown", alPulsar);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener("keydown", alPulsar);
    };
  }, [abierto]);

  const enlaces = [
    { href: `/${locale}/#servicios`, texto: c.nav.servicios },
    { href: `/${locale}/#como-funciona`, texto: c.nav.comoFunciona },
    { href: `/${locale}/#precios`, texto: c.nav.precios },
    { href: `/${locale}/#preguntas`, texto: c.nav.preguntas },
    { href: `/${locale}/#contacto`, texto: c.nav.contacto },
  ];

  return (
    <header
      className={`${s.cabecera} ${desplazado ? s.solida : ""} no-imprimir`}
    >
      <div className={`contenedor ${s.barra}`}>
        <Link
          href={`/${locale}/`}
          className={s.marca}
          aria-label="Micliente — inicio"
          onClick={() => setAbierto(false)}
        >
          {/*
            Dos versiones del logo que se alternan por ancho.
            En pantallas estrechas el nombre completo mide 225 px y,
            sumado a los tres controles, desborda la cabecera. Ahí se
            muestra solo el rombo.
          */}
          <Logo variante="isotipo" alto={28} className={s.logoCompacto} />
          <Logo variante="simple" alto={26} className={s.logoCompleto} />
        </Link>

        {/* Navegación de escritorio */}
        <nav className={s.navEscritorio} aria-label={c.nav.menu}>
          {enlaces.map((e) => (
            <Link key={e.href} href={e.href} className={s.enlace}>
              {e.texto}
            </Link>
          ))}
        </nav>

        <div className={s.acciones}>
          <SelectorIdioma locale={locale} etiqueta={c.nav.idioma} />
          <BotonTema etiqueta={c.nav.tema} />
          <Link
            href={`/${locale}/#agendar`}
            className={`boton boton--primario ${s.ctaEscritorio}`}
          >
            {c.nav.agendar}
          </Link>

          {/* Botón hamburguesa: solo en móvil y tablet vertical */}
          <button
            type="button"
            className={s.hamburguesa}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? c.nav.cerrar : c.nav.menu}
            onClick={() => setAbierto((v) => !v)}
          >
            <span className={`${s.raya} ${abierto ? s.raya1 : ""}`} />
            <span className={`${s.raya} ${abierto ? s.raya2 : ""}`} />
            <span className={`${s.raya} ${abierto ? s.raya3 : ""}`} />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        className={`${s.menuMovil} ${abierto ? s.menuAbierto : ""}`}
        hidden={!abierto}
      >
        <nav className={s.navMovil} aria-label={c.nav.menu}>
          {enlaces.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className={s.enlaceMovil}
              onClick={() => setAbierto(false)}
            >
              {e.texto}
            </Link>
          ))}
          <Link
            href={`/${locale}/#agendar`}
            className="boton boton--primario"
            onClick={() => setAbierto(false)}
          >
            {c.nav.agendar}
          </Link>
        </nav>
      </div>
    </header>
  );
}
