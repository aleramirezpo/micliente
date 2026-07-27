/**
 * Verificación de enlaces internos sobre el sitio ya compilado.
 *
 * Recorre todos los HTML de out/ y comprueba que cada enlace interno
 * apunte a un archivo que existe de verdad.
 *
 * Nace de un fallo real: las rutas llevaban la subcarpeta de despliegue
 * puesta a mano, y Next se la volvía a añadir a cada <Link>. El
 * resultado eran direcciones como /micliente/micliente/es/precios/ que
 * daban "página no encontrada" al pulsarlas.
 *
 * Comprobar las direcciones escribiéndolas a mano NO detecta eso.
 * Hay que comprobar los enlaces tal y como quedan en el HTML.
 *
 * Uso:
 *   node scripts/verificar-enlaces.mjs            (sin subcarpeta)
 *   node scripts/verificar-enlaces.mjs /micliente (con subcarpeta)
 */

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const salida = join(raiz, "out");
const base = process.argv[2] ?? "";

if (!existsSync(salida)) {
  console.error("No existe out/. Ejecuta antes: npm run build");
  process.exit(1);
}

function htmls(dir, acc = []) {
  for (const nombre of readdirSync(dir)) {
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) htmls(ruta, acc);
    else if (nombre.endsWith(".html")) acc.push(ruta);
  }
  return acc;
}

/** ¿Existe realmente el destino de este enlace dentro de out/? */
function destinoExiste(href) {
  let ruta = href.split("#")[0].split("?")[0];
  if (!ruta) return true;

  // Quita la subcarpeta de despliegue para localizar el archivo
  if (base && ruta.startsWith(base)) ruta = ruta.slice(base.length);
  if (!ruta.startsWith("/")) return true; // relativo: no se comprueba

  const candidatos = [
    join(salida, ruta),
    join(salida, ruta, "index.html"),
    join(salida, ruta.replace(/\/$/, "") + ".html"),
  ];
  return candidatos.some((c) => existsSync(c));
}

const archivos = htmls(salida);
const rotos = [];
let comprobados = 0;

for (const archivo of archivos) {
  const html = readFileSync(archivo, "utf8");
  const vistos = new Set();

  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = m[1];
    if (vistos.has(href)) continue;
    vistos.add(href);

    // Solo enlaces de navegación: los recursos ya los valida el build
    if (/\.(css|js|png|jpe?g|svg|ico|webmanifest|xml|txt|woff2?)$/i.test(href)) continue;
    if (href.startsWith("/_next/")) continue;

    comprobados++;
    if (!destinoExiste(href)) {
      rotos.push({ pagina: relative(salida, archivo), href });
    }
  }
}

console.log(
  `Enlaces internos — ${archivos.length} páginas, ${comprobados} destinos distintos` +
    (base ? `  (subcarpeta: ${base})` : ""),
);

if (rotos.length) {
  console.log(`\nENLACES ROTOS (${rotos.length}):`);
  // Agrupa por destino para no repetir el mismo error en cada página
  const porDestino = new Map();
  for (const r of rotos) {
    if (!porDestino.has(r.href)) porDestino.set(r.href, []);
    porDestino.get(r.href).push(r.pagina);
  }
  for (const [href, paginas] of porDestino) {
    console.log(`  ${href}`);
    console.log(`     aparece en ${paginas.length} página(s), p. ej. ${paginas[0]}`);
  }
  process.exit(1);
}

console.log("\nTodos los enlaces internos apuntan a páginas que existen.");
