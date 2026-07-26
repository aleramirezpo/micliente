import type { Metadata } from "next";
import { defaultLocale, SITE_URL } from "@/lib/i18n";

/**
 * Raíz del sitio (`/`).
 *
 * En exportación estática no existen las redirecciones de servidor,
 * así que la raíz se resuelve con una redirección de cliente:
 * una meta refresh (funciona sin JavaScript) más un enlace visible
 * por si algo fallara. Google entiende esta redirección y sigue el
 * canónico hacia la versión en español.
 */

export const metadata: Metadata = {
  title: "Micliente",
  description:
    "Automatización de WhatsApp con inteligencia artificial y desarrollo web con catálogo.",
  alternates: { canonical: `${SITE_URL}/${defaultLocale}/` },
  robots: { index: false, follow: true },
};

export default function Raiz() {
  const destino = `/${defaultLocale}/`;

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${destino}`} />
      <div
        style={{
          minHeight: "100svh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          textAlign: "center",
          gap: "1rem",
        }}
      >
        <p>
          <a href={destino}>Micliente</a>
        </p>
      </div>
    </>
  );
}
