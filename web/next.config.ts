import type { NextConfig } from "next";

/**
 * Micliente — configuración de Next.js
 *
 * El sitio se compila a HTML estático (`output: "export"`).
 * En producción NO hay servidor Node ejecutándose: solo archivos
 * servidos desde una CDN. Es la opción más rápida y la de menor
 * superficie de ataque posible.
 *
 * Importante: en exportación estática Next NO puede emitir cabeceras
 * HTTP (la opción `headers` no está soportada). Las cabeceras de
 * seguridad se declaran en `public/_headers`, que Cloudflare Pages lee
 * al desplegar.
 */
const nextConfig: NextConfig = {
  // Exportación estática: genera HTML plano en /out
  output: "export",

  // Cada ruta se emite como carpeta/index.html. Necesario para
  // servidores estáticos y para URLs limpias con barra final.
  trailingSlash: true,

  // Sin servidor de optimización de imágenes. Evita que `sharp`
  // intervenga y mantiene el despliegue 100% estático.
  images: {
    unoptimized: true,
  },

  // No revelar el framework en las cabeceras de respuesta.
  poweredByHeader: false,

  // Un error de tipos debe detener el build, no llegar a producción.
  typescript: {
    ignoreBuildErrors: false,
  },

  // Nota: en Next.js 16 se eliminaron `next lint` y la opción `eslint`
  // de la configuración. El linting ya NO corre durante `next build`:
  // se ejecuta aparte con el CLI de ESLint (`npm run lint`).
};

export default nextConfig;
