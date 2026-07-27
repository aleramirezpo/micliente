import { Logo } from "./Logo";
import { EnlacePagina } from "./EnlacePagina";
import type { Pagina } from "@/lib/rutas";
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

  const columnas: { titulo: string; enlaces: { texto: string; pagina: Pagina }[] }[] = [
    {
      titulo: c.footer.servicios,
      enlaces: [
        { texto: e.whatsappIa, pagina: "servicios" },
        { texto: e.webCatalogo, pagina: "servicios" },
        { texto: e.precios, pagina: "precios" },
      ],
    },
    {
      titulo: c.footer.empresa,
      enlaces: [
        { texto: c.nav.porQue, pagina: "porQue" },
        { texto: e.preguntas, pagina: "preguntas" },
        { texto: e.contacto, pagina: "contacto" },
      ],
    },
    {
      titulo: c.footer.legal,
      enlaces: [
        { texto: e.privacidad, pagina: "privacidad" },
        { texto: e.terminos, pagina: "terminos" },
        { texto: e.datos, pagina: "datos" },
      ],
    },
  ];

  return (
    <footer className={s.pie}>
      <div className="contenedor">
        <div className={s.superior}>
          <div className={s.marca}>
            <EnlacePagina
              pagina="inicio"
              locale={locale}
              aria-label={`Micliente — ${c.nav.inicio}`}
            >
              <Logo variante="completo" alto={52} />
            </EnlacePagina>
            <p className={s.descripcion}>{c.footer.descripcion}</p>
          </div>

          {columnas.map((col) => (
            <nav key={col.titulo} className={s.columna} aria-label={col.titulo}>
              <h3 className={s.tituloColumna}>{col.titulo}</h3>
              <ul className={s.listaEnlaces}>
                {col.enlaces.map((enlace) => (
                  <li key={enlace.texto}>
                    <EnlacePagina
                      pagina={enlace.pagina}
                      locale={locale}
                      className={s.enlace}
                    >
                      {enlace.texto}
                    </EnlacePagina>
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
