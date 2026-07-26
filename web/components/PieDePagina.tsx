import Link from "next/link";
import { Logo } from "./Logo";
import type { Locale } from "@/lib/i18n";
import type { Contenido } from "@/lib/contenido";
import s from "./PieDePagina.module.css";

export function PieDePagina({
  locale,
  c,
}: {
  locale: Locale;
  c: Contenido;
}) {
  const anio = new Date().getFullYear();
  const e = c.footer.enlaces;

  const columnas = [
    {
      titulo: c.footer.servicios,
      enlaces: [
        { texto: e.whatsappIa, href: `/${locale}/#servicios` },
        { texto: e.webCatalogo, href: `/${locale}/#servicios` },
        { texto: e.precios, href: `/${locale}/#precios` },
      ],
    },
    {
      titulo: c.footer.empresa,
      enlaces: [
        { texto: e.comoFunciona, href: `/${locale}/#como-funciona` },
        { texto: e.preguntas, href: `/${locale}/#preguntas` },
        { texto: e.contacto, href: `/${locale}/#contacto` },
      ],
    },
    {
      titulo: c.footer.legal,
      enlaces: [
        { texto: e.privacidad, href: `/${locale}/legal/privacidad/` },
        { texto: e.terminos, href: `/${locale}/legal/terminos/` },
        { texto: e.datos, href: `/${locale}/legal/datos/` },
      ],
    },
  ];

  return (
    <footer className={s.pie}>
      <div className="contenedor">
        <div className={s.superior}>
          <div className={s.marca}>
            <Logo variante="completo" alto={52} />
            <p className={s.descripcion}>{c.footer.descripcion}</p>
          </div>

          {columnas.map((col) => (
            <nav key={col.titulo} className={s.columna} aria-label={col.titulo}>
              <h3 className={s.tituloColumna}>{col.titulo}</h3>
              <ul className={s.listaEnlaces}>
                {col.enlaces.map((enlace) => (
                  <li key={enlace.texto}>
                    <Link href={enlace.href} className={s.enlace}>
                      {enlace.texto}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={s.inferior}>
          <p className={s.copyright}>
            © {anio} Micliente. {c.footer.derechos}
          </p>
          <p className={s.hechoEn}>{c.footer.hechoEn}</p>
        </div>

        {/* Aviso obligatorio: no somos Meta ni estamos afiliados a Meta.
            Omitirlo puede generar un problema de marca. */}
        <p className={s.aviso}>{c.footer.aviso}</p>
      </div>
    </footer>
  );
}
