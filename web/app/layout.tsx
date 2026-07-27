import type { Metadata, Viewport } from "next";
import { SITE_URL, recurso } from "@/lib/i18n";
import "./tokens.css";
import "./globals.css";

/**
 * Layout raíz.
 *
 * Es obligatorio en el App Router y debe contener <html> y <body>.
 * El idioma real se decide en `app/[lang]/layout.tsx`.
 *
 * Nota: no usamos `next/font/google`. Esa API descarga tipografías
 * desde los servidores de Google durante la compilación. Preferimos
 * la pila de fuentes del sistema: es instantánea, no añade peticiones
 * y no depende de un tercero.
 */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Micliente · Automatización de WhatsApp con IA",
    template: "%s · Micliente",
  },
  description:
    "Atendemos tu WhatsApp con inteligencia artificial 24 horas y construimos tu página web con catálogo.",
  // Los iconos se piden con ruta absoluta desde la raíz del dominio.
  // En GitHub Pages el sitio vive en una subcarpeta, así que hay que
  // anteponerla o el navegador no los encuentra.
  icons: {
    icon: [
      { url: recurso("/favicon.ico"), sizes: "any" },
      { url: recurso("/icon-192.png"), type: "image/png", sizes: "192x192" },
      { url: recurso("/icon-512.png"), type: "image/png", sizes: "512x512" },
    ],
    apple: recurso("/apple-touch-icon.png"),
  },
  manifest: recurso("/manifest.webmanifest"),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/**
 * `viewportFit: "cover"` junto con los safe-area-inset del CSS hace que
 * el sitio se vea bien en iPhone con muesca y en iPad.
 * No limitamos `maximumScale`: bloquear el zoom es una barrera de
 * accesibilidad para quien necesita ampliar el texto.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F2EA" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1D21" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/*
          Seguridad en alojamientos que no permiten configurar cabeceras
          HTTP, como GitHub Pages.

          Lo ideal es enviar estas políticas como cabeceras de respuesta
          (así se hace en Cloudflare, mediante public/_headers). Pero
          GitHub Pages ignora ese archivo, así que aquí se declaran en
          etiquetas meta, que es lo único que el navegador acepta sin
          control del servidor.

          Limitación conocida: en meta NO funcionan `frame-ancestors`
          (equivalente a X-Frame-Options) ni `Permissions-Policy`. Esas
          solo se pueden aplicar por cabecera real, y se activarán al
          desplegar en Cloudflare con el dominio propio.
        */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; form-action 'self'; base-uri 'self'; object-src 'none'; upgrade-insecure-requests"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/*
          Aplica el tema guardado antes del primer pintado, para evitar
          el destello blanco al cargar en modo oscuro. Es el único script
          en línea del sitio.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var t=localStorage.getItem("mc-tema");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();',
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
