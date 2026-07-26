/**
 * Verificación estructural de las traducciones.
 *
 * Compara en profundidad es / en / fr: mismas claves, mismo orden,
 * mismos tipos y misma longitud de arrays. Detecta también textos
 * sin traducir (idénticos al español) y cadenas vacías.
 *
 * Uso:  node scripts/verificar-traducciones.mjs
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Carga un content/*.ts evaluando el objeto literal (sin dependencias). */
function cargar(idioma) {
  const ruta = join(raiz, "content", `${idioma}.ts`);
  let txt = readFileSync(ruta, "utf8");
  const i = txt.indexOf("{");
  const j = txt.lastIndexOf("} as const");
  if (i === -1 || j === -1) throw new Error(`No se pudo leer ${idioma}.ts`);
  const literal = txt.slice(i, j + 1);
  return new Function(`return (${literal});`)();
}

const errores = [];
const avisos = [];

function comparar(ref, otro, idioma, ruta = "") {
  const tipoRef = Array.isArray(ref) ? "array" : typeof ref;
  const tipoOtro = Array.isArray(otro) ? "array" : typeof otro;

  if (tipoRef !== tipoOtro) {
    errores.push(`[${idioma}] ${ruta}: tipo distinto (es=${tipoRef}, ${idioma}=${tipoOtro})`);
    return;
  }

  if (tipoRef === "array") {
    if (ref.length !== otro.length) {
      errores.push(`[${idioma}] ${ruta}: longitud distinta (es=${ref.length}, ${idioma}=${otro.length})`);
      return;
    }
    ref.forEach((v, k) => comparar(v, otro[k], idioma, `${ruta}[${k}]`));
    return;
  }

  if (tipoRef === "object" && ref !== null) {
    const cRef = Object.keys(ref);
    const cOtro = Object.keys(otro);
    const faltan = cRef.filter((k) => !cOtro.includes(k));
    const sobran = cOtro.filter((k) => !cRef.includes(k));
    if (faltan.length) errores.push(`[${idioma}] ${ruta}: faltan claves -> ${faltan.join(", ")}`);
    if (sobran.length) errores.push(`[${idioma}] ${ruta}: claves de más -> ${sobran.join(", ")}`);
    if (cRef.join("|") !== cOtro.join("|") && !faltan.length && !sobran.length) {
      avisos.push(`[${idioma}] ${ruta}: mismas claves pero en distinto orden`);
    }
    cRef.filter((k) => cOtro.includes(k)).forEach((k) => comparar(ref[k], otro[k], idioma, ruta ? `${ruta}.${k}` : k));
    return;
  }

  if (tipoRef === "string") {
    // Una cadena vacía solo es un problema si en español NO lo está.
    // Hay vacíos intencionales: el encabezado de la primera columna de
    // las tablas comparativas y el periodo del plan "A convenir".
    if (otro.trim() === "" && ref.trim() !== "") {
      errores.push(`[${idioma}] ${ruta}: vacía en ${idioma} pero con texto en es`);
      return;
    }
    if (otro.trim() === "") return;

    // Nombres propios y identificadores que DEBEN permanecer iguales.
    const permitidos = /^(cliente|bot|whatsapp|web|0\d|@micliente|hola@micliente\.co|Colombia|Micliente|WhatsApp Business|WhatsApp|Meta|Wompi|PSE|Nequi|ePayco|DIAN|Google)$/;
    if (ref === otro && !permitidos.test(ref.trim()) && ref.length > 12) {
      avisos.push(`[${idioma}] ${ruta}: idéntico al español (¿sin traducir?) -> "${ref.slice(0, 55)}…"`);
    }
  }
}

const es = cargar("es");
let total = 0;
function contar(o) {
  if (Array.isArray(o)) { total++; o.forEach(contar); }
  else if (o && typeof o === "object") Object.values(o).forEach(contar);
}
contar(es);

for (const idioma of ["en", "fr"]) {
  comparar(es, cargar(idioma), idioma);
}

console.log(`Arrays comparados por idioma: ${total}`);
console.log(`Errores: ${errores.length}   Avisos: ${avisos.length}\n`);

if (errores.length) {
  console.log("ERRORES:");
  errores.forEach((e) => console.log("  " + e));
}
if (avisos.length) {
  console.log("\nAVISOS (revisar a mano):");
  avisos.slice(0, 40).forEach((a) => console.log("  " + a));
  if (avisos.length > 40) console.log(`  … y ${avisos.length - 40} más`);
}
if (!errores.length) console.log("\nESTRUCTURA CORRECTA: es / en / fr son equivalentes.");

process.exit(errores.length ? 1 : 0);
