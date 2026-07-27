"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { EnlacePagina } from "./EnlacePagina";
import { menuPrincipal, direccionDe } from "@/lib/rutas";
import { SelectorIdioma } from "./SelectorIdioma";
import { BotonTema } from "./BotonTema";
import type { Locale } from "@/lib/i18n";
import type { Contenido } from "@/lib/contenido";
import s from "./Cabecera.module.css";

export function Cabecera({ locale, c }: { locale: Locale; c: Contenido }) {
  const [abierto, setAbierto] = useState(false);
  const [desplazado, setDesplazado] = useState(false);
  const rutaActual = usePathname();

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

  // Cada entrada del menú es una página propia, con su URL.
  const enlaces = menuPrincipal.map((pagina) => ({
    pagina,
    texto: c.nav[pagina],
    // Se compara solo la última parte de la ruta para que funcione
    // igual con o sin la subcarpeta de despliegue.
    activo: rutaActual.includes(`/${direccionDe(pagina, locale)}`),
  }));

  return (
    <header
      className={`${s.cabecera} ${desplazado ? s.solida : ""} no-imprimir`}
    >
      <div className={`contenedor ${s.barra}`}>
        <EnlacePagina
          pagina="inicio"
          locale={locale}
          className={s.marca}
          aria-label={`Micliente — ${c.nav.inicio}`}
        >
          {/*
            Dos versiones del logo que se alternan por ancho.
            En pantallas estrechas el nombre completo mide 225 px y,
            sumado a los tres controles, desborda la cabecera. Ahí se
            muestra solo el rombo.
          */}
          <Logo variante="isotipo" alto={28} className={s.logoCompacto} />
          <Logo variante="simple" alto={26} className={s.logoCompleto} />
        </EnlacePagina>

        {/* Navegación de escritorio */}
        <nav className={s.navEscritorio} aria-label={c.nav.menu}>
          {enlaces.map((e) => (
            <EnlacePagina
              key={e.pagina}
              pagina={e.pagina}
              locale={locale}
              className={`${s.enlace} ${e.activo ? s.enlaceActivo : ""}`}
              aria-current={e.activo ? "page" : undefined}
            >
              {e.texto}
            </EnlacePagina>
          ))}
        </nav>

        <div className={s.acciones}>
          <SelectorIdioma locale={locale} etiqueta={c.nav.idioma} />
          <BotonTema etiqueta={c.nav.tema} />
          <EnlacePagina
            pagina="contacto"
            locale={locale}
            className={`boton boton--primario ${s.ctaEscritorio}`}
          >
            {c.nav.agendar}
          </EnlacePagina>

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
        {/*
          Sin onClick que cierre el menú.
          Al ser anclas normales, el navegador se lleva la página
          entera: cerrar el menú antes solo servía para que el
          elemento pulsado desapareciera a mitad del clic.
        */}
        <nav className={s.navMovil} aria-label={c.nav.menu}>
          <EnlacePagina
            pagina="inicio"
            locale={locale}
            className={s.enlaceMovil}
          >
            {c.nav.inicio}
          </EnlacePagina>
          {enlaces.map((e) => (
            <EnlacePagina
              key={e.pagina}
              pagina={e.pagina}
              locale={locale}
              className={`${s.enlaceMovil} ${e.activo ? s.enlaceMovilActivo : ""}`}
              aria-current={e.activo ? "page" : undefined}
            >
              {e.texto}
            </EnlacePagina>
          ))}
          <EnlacePagina
            pagina="contacto"
            locale={locale}
            className="boton boton--primario"
          >
            {c.nav.agendar}
          </EnlacePagina>
        </nav>
      </div>
    </header>
  );
}
