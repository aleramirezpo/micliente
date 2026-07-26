/**
 * Logo de Micliente dibujado en SVG en línea.
 *
 * Va en línea (y no como <img src="…svg">) por tres razones:
 *  - Se pinta con el primer HTML: no hay petición extra ni parpadeo.
 *  - Hereda el color del texto, así que funciona igual en tema claro
 *    y oscuro sin duplicar archivos.
 *  - El rombo lleva un calado real con `fill-rule="evenodd"`, no un
 *    cuadrado del color de fondo. Así se ve bien sobre cualquier fondo.
 *
 * Las proporciones son las del manual de marca, con X = 100:
 *   rombo 1,70 X · calado 0,68 X · nombre 1,00 X · resguardo 1,00 X
 */

type Props = {
  /** `completo` incluye el descriptor; `simple` solo rombo y nombre. */
  variante?: "completo" | "simple" | "isotipo";
  /** Altura en píxeles. El ancho se calcula solo. */
  alto?: number;
  className?: string;
};

export function Logo({ variante = "simple", alto = 34, className }: Props) {
  if (variante === "isotipo") {
    return (
      <svg
        viewBox="0 0 170 170"
        height={alto}
        width={alto}
        className={className}
        role="img"
        aria-label="Micliente"
        focusable="false"
      >
        <path
          fillRule="evenodd"
          fill="var(--acento-fuerte, #C6A15B)"
          d="M85 0 L170 85 L85 170 L0 85 Z M85 51 L119 85 L85 119 L51 85 Z"
        />
      </svg>
    );
  }

  const conDescriptor = variante === "completo";
  // Caja: rombo (170) + separación (95) + ancho del nombre (~1010)
  const ancho = 1275;
  const altoCaja = conDescriptor ? 200 : 170;

  return (
    <svg
      viewBox={`0 0 ${ancho} ${altoCaja}`}
      height={alto}
      className={className}
      role="img"
      aria-label="Micliente"
      focusable="false"
    >
      {/* Rombo con calado real */}
      <path
        fillRule="evenodd"
        fill="var(--acento-fuerte, #C6A15B)"
        d="M85 0 L170 85 L85 170 L0 85 Z M85 51 L119 85 L85 119 L51 85 Z"
      />
      {/* Nombre. Se usa texto real con tracking amplio: es accesible,
          seleccionable y no añade peso. La pila de fuentes garantiza
          una alternativa geométrica coherente si falta Gill Sans. */}
      <text
        x="265"
        y={conDescriptor ? 95 : 112}
        fill="currentColor"
        fontFamily="var(--fuente)"
        fontSize="96"
        letterSpacing="21"
        dominantBaseline={conDescriptor ? "middle" : "auto"}
      >
        MICLIENTE
      </text>
      {conDescriptor && (
        <>
          <rect
            x="265"
            y="128"
            width="1000"
            height="5"
            fill="var(--acento-fuerte, #C6A15B)"
          />
          <text
            x="265"
            y="176"
            fill="var(--acento, #9A7A3C)"
            fontFamily="var(--fuente)"
            fontSize="27"
            letterSpacing="9"
          >
            SOLUCIONES EMPRESARIALES
          </text>
        </>
      )}
    </svg>
  );
}
