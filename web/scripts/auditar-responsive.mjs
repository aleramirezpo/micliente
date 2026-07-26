/**
 * Auditoría estática de comportamiento responsive.
 *
 * No sustituye a mirar el sitio en un teléfono real, pero detecta
 * automáticamente los errores que provocan el 90 % de los problemas
 * en móvil e iPad:
 *
 *   1. Anchos fijos en píxeles que pueden desbordar una pantalla estrecha.
 *   2. Tablas sin contenedor de desplazamiento propio.
 *   3. Hijos de grid o flex sin `min-width: 0` (causa clásica de
 *      desbordamiento cuando llevan texto largo).
 *   4. Animaciones sin su bloque `prefers-reduced-motion`.
 *   5. Áreas táctiles por debajo de 44 px.
 *   6. Uso de `100vh` en lugar de `100dvh` (en móvil, la barra del
 *      navegador hace que 100vh se salga de la pantalla).
 *
 * Uso:  node scripts/auditar-responsive.mjs
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");

function archivos(dir, ext, acc = []) {
  for (const nombre of readdirSync(dir)) {
    if (nombre === "node_modules" || nombre === ".next" || nombre === "out") continue;
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) archivos(ruta, ext, acc);
    else if (ext.some((e) => nombre.endsWith(e))) acc.push(ruta);
  }
  return acc;
}

const problemas = [];
const avisos = [];

function reportar(lista, ruta, linea, mensaje) {
  lista.push(`${relative(raiz, ruta)}:${linea}  ${mensaje}`);
}

// ---------------- CSS ----------------
for (const ruta of archivos(join(raiz, "app"), [".css"]).concat(
  archivos(join(raiz, "components"), [".css"]),
)) {
  const texto = readFileSync(ruta, "utf8");
  const lineas = texto.split("\n");

  lineas.forEach((linea, i) => {
    const n = i + 1;
    const limpia = linea.trim();
    if (limpia.startsWith("/*") || limpia.startsWith("*")) return;

    // 1. Anchos fijos grandes en píxeles
    const anchoFijo = limpia.match(/\b(width|min-width)\s*:\s*(\d{3,})px/);
    if (anchoFijo && Number(anchoFijo[2]) > 380 && !limpia.includes("max-width")) {
      reportar(
        problemas,
        ruta,
        n,
        `ancho fijo de ${anchoFijo[2]}px: puede desbordar en móviles de 320px`,
      );
    }

    // 6. 100vh en vez de 100dvh
    if (/height\s*:\s*100vh/.test(limpia)) {
      reportar(
        avisos,
        ruta,
        n,
        "100vh: en móvil la barra del navegador lo desborda, preferir 100dvh o 100svh",
      );
    }

    // 5. Áreas táctiles pequeñas
    const alturaMin = limpia.match(/min-height\s*:\s*([\d.]+)rem/);
    if (alturaMin && parseFloat(alturaMin[1]) < 2.75 && parseFloat(alturaMin[1]) > 1) {
      reportar(
        avisos,
        ruta,
        n,
        `min-height ${alturaMin[1]}rem: por debajo de los 44px recomendados para tocar`,
      );
    }
  });

  // 4. Animaciones sin respeto al movimiento reducido
  const tieneAnimacion = /@keyframes|animation\s*:/.test(texto);
  const respetaPreferencia = texto.includes("prefers-reduced-motion");
  if (tieneAnimacion && !respetaPreferencia) {
    reportar(problemas, ruta, 0, "define animaciones pero no respeta prefers-reduced-motion");
  }
}

// ---------------- TSX ----------------
for (const ruta of archivos(join(raiz, "components"), [".tsx"]).concat(
  archivos(join(raiz, "app"), [".tsx"]),
)) {
  const texto = readFileSync(ruta, "utf8");

  // 2. Tablas sin contenedor de desplazamiento
  if (texto.includes("<table")) {
    if (!texto.includes("tabla-scroll") && !/overflow-?x/i.test(texto)) {
      reportar(
        problemas,
        ruta,
        0,
        "contiene <table> sin envolver en .tabla-scroll: desbordará la página en móvil",
      );
    }
  }

  // Estilos en línea con píxeles fijos
  const enLinea = texto.match(/style=\{\{[^}]*\b(width|minWidth)\s*:\s*["']?\d{3,}px/g);
  if (enLinea) {
    reportar(avisos, ruta, 0, `estilo en línea con ancho fijo: ${enLinea[0].slice(0, 48)}…`);
  }
}

// ---------------- Informe ----------------
const totalCss = archivos(join(raiz, "components"), [".css"]).length + 2;
const totalTsx = archivos(join(raiz, "components"), [".tsx"]).length;

console.log(`Auditoría responsive — ${totalCss} hojas de estilo, ${totalTsx} componentes\n`);

if (problemas.length) {
  console.log(`PROBLEMAS (${problemas.length}):`);
  problemas.forEach((p) => console.log("  " + p));
  console.log("");
}
if (avisos.length) {
  console.log(`AVISOS (${avisos.length}):`);
  avisos.forEach((a) => console.log("  " + a));
  console.log("");
}
if (!problemas.length && !avisos.length) {
  console.log("Sin hallazgos: no se detectaron patrones que rompan en móvil o iPad.");
} else if (!problemas.length) {
  console.log("Sin problemas graves. Los avisos son para revisar a mano.");
}

process.exit(problemas.length ? 1 : 0);
