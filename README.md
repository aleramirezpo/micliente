<div align="center">

<img src="web/public/marca/micliente-vertical.svg" alt="Micliente" width="360">

**Automatización de WhatsApp con inteligencia artificial · Desarrollo web con catálogo**

Desde Colombia para Latinoamérica

</div>

---

## Qué es esto

El sitio web de **Micliente**, en tres idiomas (español, inglés y francés).

Es un sitio **estático**: se compila a HTML plano y se sirve desde una CDN. No hay
servidor en producción, lo que lo hace rápido, barato y con una superficie de
ataque mínima.

## Tecnología

| | |
|---|---|
| Framework | Next.js 16 (App Router) con exportación estática |
| Interfaz | React 19 |
| Lenguaje | TypeScript en modo estricto |
| Estilos | CSS propio con variables. Sin frameworks de estilos |
| Dependencias en el navegador | **Ninguna** |
| Idiomas | Español, inglés y francés, con `hreflang` |

### Por qué tan pocas dependencias

Cada librería de terceros es código ajeno ejecutándose en el navegador de los
visitantes. Este sitio no carga **ninguna**: ni tipografías de Google, ni
librerías de animación, ni analítica externa. Las animaciones son CSS puro más
`IntersectionObserver`, que ya vienen en el navegador.

El resultado se ve en la auditoría: **cero vulnerabilidades**.

## Empezar

```bash
cd web
npm install
npm run dev          # http://localhost:3000
```

### Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compila el sitio estático en `web/out/` |
| `npm run lint` | Revisa el código con ESLint |
| `npm run typecheck` | Comprueba los tipos |
| `npm run verificar` | Las tres comprobaciones seguidas |

### Comprobaciones propias

```bash
node scripts/verificar-traducciones.mjs   # es / en / fr son equivalentes
node scripts/auditar-responsive.mjs       # patrones que rompen en móvil
```

El primero compara los tres idiomas en profundidad y avisa si falta una clave o
si un array tiene distinta longitud. El segundo busca anchos fijos, tablas sin
contenedor de desplazamiento y animaciones que ignoran `prefers-reduced-motion`.

## Estructura

```
web/
├─ app/
│  ├─ layout.tsx           Layout raíz: metadatos e iconos
│  ├─ tokens.css           Sistema de diseño (colores, tipografía, espaciado)
│  ├─ globals.css          Estilos base y utilidades
│  └─ [lang]/              Una versión estática por idioma
├─ components/
│  ├─ Cabecera, PieDePagina, Logo, SelectorIdioma, BotonTema
│  └─ secciones/           Las 18 secciones de la página
├─ content/
│  ├─ es.ts                Fuente de verdad del contenido
│  ├─ en.ts  fr.ts         Traducciones con la misma estructura
├─ lib/                    Configuración de idiomas y acceso al contenido
├─ public/
│  ├─ _headers             Cabeceras de seguridad para Cloudflare
│  └─ marca/               Logos en SVG
└─ scripts/                Verificadores propios
```

## Accesibilidad y dispositivos

Verificado midiendo en el navegador a nueve anchos reales, de 320 px a 1920 px:

- Nunca hay desplazamiento horizontal de la página
- Las tablas se desplazan dentro de su propia caja
- Áreas táctiles de 44 px como mínimo
- Respeta `prefers-reduced-motion`
- Contraste y foco visibles, navegación por teclado

## Seguridad

- Sitio estático: no hay servidor que comprometer
- Política de seguridad de contenido estricta en `public/_headers`
- Cero dependencias en el navegador
- Formulario con campo trampa contra bots
- Sin cookies ni seguimiento de terceros

## Despliegue

Ver **[DEPLOY.md](DEPLOY.md)** para los pasos completos.

---

<div align="center">
<sub>© Micliente. Micliente no está afiliada a Meta Platforms, Inc.<br>
WhatsApp es una marca registrada de Meta.</sub>
</div>
