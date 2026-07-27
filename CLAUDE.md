# Micliente — memoria del proyecto

Documento de trabajo. Recoge qué hay, dónde está, por qué se decidió así
y con qué hay que tener cuidado.

Última actualización: julio de 2026.

---

## 1. Qué es Micliente

Empresa colombiana, **multiservicio**, que arranca con dos líneas:

1. **Automatización de WhatsApp con inteligencia artificial** — la IA atiende,
   asesora, toma el pedido y lo pasa al sistema del cliente.
2. **Desarrollo de páginas web con catálogo** — conectadas al bot, de modo que
   el catálogo alimenta la conversación y el pedido vuelve al sistema.

La marca está pensada como **paraguas**: el logo y la comunicación no se atan a
WhatsApp ni a bots, porque a futuro se sumarán más servicios (agente de voz,
facturación DIAN, redes sociales, tableros de indicadores).

**Mercado inicial:** Colombia. Después Latinoamérica.

---

## 2. Dónde está cada cosa

```
D:\Micliente\
├─ CLAUDE.md          este archivo
├─ README.md          presentación del repositorio
├─ DEPLOY.md          cómo poner el sitio en línea con dominio propio
├─ .gitignore         protege lo privado (ver aviso abajo)
│
├─ web/               EL SITIO (público, en GitHub)
├─ research/          investigación interna  🔒 NO se sube
├─ informes/          los dos PDF            🔒 NO se sube
└─ marca/             identidad y CorelDRAW  🔒 NO se sube
```

> ⚠️ **El repositorio es público.** `research/`, `informes/` y `marca/` están
> excluidos por `.gitignore` y verificados: no hay ningún `.cdr`, `.ps1`, PDF ni
> documento de investigación publicado. Los únicos archivos de marca en el
> repositorio son los SVG del logo que la web necesita, en `web/public/marca/`.

### En línea

| | |
|---|---|
| Sitio | https://aleramirezpo.github.io/micliente/ |
| Repositorio | https://github.com/aleramirezpo/micliente |
| Dominio futuro | `micliente.co` (libre a julio de 2026; `micliente.com` está ocupado) |

---

## 3. La web

### Tecnología

Next.js 16.2.12 · React 19 · TypeScript estricto · CSS propio con variables.
Se compila a **HTML estático** (`output: "export"`): en producción no hay
servidor, solo archivos servidos por una CDN.

**Cero dependencias en el navegador.** Ni tipografías de Google, ni librerías de
animación, ni analítica de terceros. Las animaciones son CSS puro más
`IntersectionObserver`. Por eso `npm audit` da **0 vulnerabilidades**.

### Estructura de páginas

Seis páginas por idioma, dieciocho en total, cada una con su propia dirección:

| Página | Contiene | ES · EN · FR |
|---|---|---|
| Inicio | Hero, problema, cómo funciona, diferenciadores | `/` |
| Servicios | Los 2 servicios, sin comisiones, industrias, App vs API | `servicios` · `services` · `services` |
| Precios | Planes, comparativa, calculadora | `precios` · `pricing` · `tarifs` |
| Por qué nosotros | Mercado, escalabilidad, seguridad | `por-que-nosotros` · `why-us` · `pourquoi-nous` |
| Preguntas | FAQ completo | `preguntas-frecuentes` · `faq` · `questions-frequentes` |
| Contacto | Agendar y formulario | `contacto` · `contact` · `contact` |

Más tres páginas legales bajo `legal/`, excluidas de la indexación.

Las direcciones se traducen a propósito: un visitante francés espera *tarifs*, y
tener la palabra clave en la URL ayuda a posicionar cada página por su término.

### Comandos

```bash
cd web
npm run dev          # desarrollo
npm run build        # compila a web/out/
npm run verificar    # typecheck + lint + build

node scripts/verificar-traducciones.mjs      # es/en/fr equivalentes
node scripts/auditar-responsive.mjs          # patrones que rompen en móvil
node scripts/verificar-enlaces.mjs /micliente # enlaces rotos en el HTML compilado
```

Los tres verificadores corren solos en GitHub Actions con cada cambio.

---

## 4. Decisiones que conviene no deshacer sin pensarlo

### Enlaces normales en lugar de `<Link>` de Next

`components/EnlacePagina.tsx` usa un ancla corriente, no el componente `Link`.

**Por qué:** `Link` intercepta el clic y hace la navegación por JavaScript.
Medido en este sitio: 185 ms desde el menú de escritorio y **999 ms desde el
menú móvil**. En un teléfono real eso son varios segundos y parece que la página
no carga. Con un ancla normal el navegador pide el HTML estático, que la CDN ya
tiene cacheado, y aparece al instante.

Se pierde el efecto de aplicación, pero se gana fiabilidad. Para un sitio
estático es el intercambio correcto.

### Tema claro por defecto, aunque el sistema esté en oscuro

La identidad es marfil y dorado, y así se lee mejor. El modo oscuro está
disponible en el botón de la cabecera y se recuerda entre visitas.

### `useSyncExternalStore` en el botón de tema

El tema vive fuera de React (atributo del `<html>` y preferencia del sistema).
Ese hook está hecho justo para eso y evita el aviso de `setState` dentro de un
efecto **sin desactivar la regla de lint**.

### `scrollTop` y no `scrollIntoView` en el chat

Ver la sección de trampas.

### Sin valoraciones falsas en los datos estructurados

No se declara `aggregateRating` hasta que existan reseñas reales. Inventarlo es
motivo de penalización de Google y, además, es mentir.

### El aviso de no afiliación con Meta

Va en el pie de todas las páginas. Omitirlo puede generar un problema de marca.

---

## 5. Trampas encontradas (y cómo se resolvieron)

Cada una costó tiempo. Están documentadas para no repetirlas.

### La subcarpeta se duplicaba

`next/link` **ya añade el `basePath` por su cuenta**. Al añadirlo también a mano,
las direcciones salían como `/micliente/micliente/es/servicios/` y todos los
enlaces del menú daban "página no encontrada".

En `lib/rutas.ts`:
- `ruta()` devuelve la dirección **sin** subcarpeta → para `<Link>`
- `rutaConBase()` la devuelve **con** subcarpeta → para anclas normales

> **Lección de método:** verificar las direcciones escribiéndolas a mano NO
> detecta esto. Hay que comprobar los enlaces tal como quedan en el HTML. De ahí
> nació `scripts/verificar-enlaces.mjs`.

### GitHub Pages ignora `public/_headers`

Ese archivo es una convención de Cloudflare y Netlify. Comprobado en la respuesta
real: de las seis cabeceras de seguridad solo llegaba `Strict-Transport-Security`.

Se añadieron en etiquetas `meta` la política de seguridad de contenido y la de
referente, que es lo único que el navegador acepta sin control del servidor.

**Limitación conocida:** `frame-ancestors` y `Permissions-Policy` NO funcionan en
`meta`. Solo se activarán al desplegar en Cloudflare, donde `_headers` ya está
preparado.

### `.nojekyll` es imprescindible

GitHub Pages descarta por defecto las carpetas que empiezan por guion bajo. Next
deja todo el CSS y el JavaScript en `_next/`. Sin ese archivo, el sitio se ve sin
formato.

### `dynamic = "force-static"` en robots y sitemap

Con `output: "export"`, los archivos generados desde código (`robots.ts`,
`sitemap.ts`, `manifest.ts`) fallan al compilar si no lo declaran.

### En Next 16 se eliminó la opción `eslint` de la configuración

`next lint` desapareció y el linting ya no corre durante `next build`. Se ejecuta
aparte con el CLI de ESLint.

### `scrollIntoView` mueve la página entera

La animación del chat lo usaba para mantener visible el último mensaje. Ese
método no se limita al contenedor: **sube por la jerarquía y desplaza también la
ventana**. En móvil la página se iba sola 273 px en dos segundos y era imposible
quedarse en la cabecera.

Se sustituyó por `scrollTop` sobre la lista de mensajes.

### `.seccion--oscura` debe reasignar los colores del texto

Cambiar solo el fondo deja tonos pensados para fondo claro sobre grafito: el
dorado bajaba a 2,4:1 y el rojo a 2,1:1, cuando el mínimo accesible es 4,5:1.
La clase ahora redefine también los tokens de color.

### El mínimo de las rejillas depende del contenedor, no de la pantalla

En un móvil de 390 px el contenedor real mide 335 px. Con `minmax(10.5rem, …)`
dos columnas suman 360 px y no caben. El límite práctico es **9,5 rem**.

### CorelDRAW por COM: qué funciona y qué no

| Operación | Estado |
|---|---|
| `CreateDocument`, dibujar formas, texto | ✅ |
| `PublishToPDF(ruta)` | ✅ |
| `SaveAs` | ⚠️ Necesita `app.CreateStructSaveAsOptions()` como segundo parámetro |
| `Export` a SVG o PNG | ❌ No se puede desde PowerShell: los parámetros de tipo enumerado fallan |

Por eso los SVG y PNG de marca se generan con GDI+ desde PowerShell, convirtiendo
el texto a curvas. Ver `marca/exportar_assets.ps1`.

Otros detalles: la propiedad `Size` del texto es `Single` y necesita cast
explícito a `[double]`; hay que medir la altura de `"H"` como referencia, porque
medir la cadena completa da tamaños distintos según lleve o no minúsculas.

### PowerShell bloquea `out/` si el directorio de trabajo está dentro

Si una llamada anterior hizo `Set-Location` dentro de `web/out`, el siguiente
`npm run build` falla con `EBUSY`. Salir de la carpeta antes de compilar. Lo
mismo ocurre si hay un servidor sirviendo desde ahí.

### PowerShell y los corchetes de las rutas de Next

`app/[lang]/` contiene comodines para PowerShell. Usar `-LiteralPath` o los
métodos de `System.IO`, o se borra lo que no se quería.

### La codificación al automatizar reemplazos

`Set-Content -Encoding utf8` sobre un archivo ya en UTF-8 corrompe los acentos
("Demostración" → "DemostraciÃ³n"). Usar
`[System.IO.File]::WriteAllText($ruta, $texto, (New-Object System.Text.UTF8Encoding($false)))`.

---

## 6. Trabajo con Codex

Codex (GPT-5) participó en las traducciones a inglés y francés y en la primera
versión de las 17 secciones. Todo su trabajo se revisó antes de integrarlo.

**Lo que encontró la revisión:**

- 26 nombres de países sin traducir, por una instrucción mía mal dada
  (le dije que no tradujera "Colombia", pero en francés debe ser "Colombie").
- Había **desactivado globalmente** la regla `react-hooks/set-state-in-effect`
  para que pasara el lint. Se revirtió y se arregló el componente de verdad.

**Lo que Codex encontró en mi código:**

- Que en Next 16 la opción `eslint` de la configuración ya no existe.

**Conclusión práctica:** delegar funciona bien para volumen (traducciones,
componentes repetitivos), pero hay que revisar siempre. Y cuando reporta que no
puede arreglar algo porque está fuera de su alcance, está haciendo lo correcto.

---

## 7. La marca

Logo aprobado: **rombo dorado con calado + MICLIENTE + filete + descriptor**.

Sistema modular basado en **X** = altura de mayúscula del nombre. Cambiar X
reescala todo sin romper proporciones. Área de resguardo 1X. Tamaño mínimo:
18 mm el conjunto vertical, 8 mm o 16 px el rombo solo.

| Color | HEX |
|---|---|
| Grafito | `#1A1D21` |
| Dorado | `#C6A15B` |
| Champán | `#E2CA98` |
| Oro oscuro | `#9A7A3C` |
| Marfil | `#F5F2EA` |

Tipografía **Gill Sans MT**. Alternativas web libres: Jost, Lato, Gill Sans Nova.

En `marca/` hay 60 archivos: manual de 4 páginas, artes para imprenta (tarjeta
90×50 mm con sangrado, membrete, firma de correo), SVG con el texto en curvas,
PNG de 16 a 2048 px, favicon multi-resolución y avatares de redes.

**Marca libre:** la búsqueda en la base oficial de la SIC el 26 de julio de 2026
dio cero conflictos para "MICLIENTE". El único antecedente parecido, "MADUROS MI
CLIENTE", está en clase 43 (restaurantes) y no compite. Ver
`research/08-antecedentes-marca.md`.

---

## 8. Los informes

En `informes/`, **solo en el PC**:

- `Micliente_informe_tecnico_whatsapp.pdf` — 12 páginas. Requisitos, el cambio de
  julio de 2025 a cobro por mensaje, qué pasa si llegan muchos clientes,
  mantenimiento, limitaciones y toda la parte de dominios y hosting.
- `Micliente_plan_de_negocio.pdf` — 19 páginas con gráficas. Misión, mercado,
  competencia, los cinco diferenciadores, análisis económico, expansión de
  servicios y marco legal completo.

Se compilan con `xelatex` desde `informes/src/`. Dos pasadas para el índice.

---

## 9. Datos de la investigación que sostienen el discurso

Todo con fuente citada en `research/`.

- Comercio conversacional en Latinoamérica: **USD 18.200 millones** (2025),
  creciendo 35–45 % anual.
- Colombia: **74 %** de adopción de WhatsApp Business, **76 %** de usuarios
  escriben a empresas, **tercer mercado** de la región.
- Los marketplaces cobran **20–30 % de comisión**. Activar pedido directo por
  WhatsApp sube el volumen a domicilio **25–40 % en 90 días**.
- Meta pasó a **cobro por mensaje** el 1 de julio de 2025. Responder dentro de la
  ventana de 24 h es gratis; las plantillas *Utility* cuestan 80–90 % menos que
  las de marketing.
- Sin verificación de negocio la cuenta queda atrapada en **250 contactos
  diarios** y no puede ascender.
- El plan gratuito de Vercel **prohíbe el uso comercial**. Cloudflare Pages sí lo
  permite y da ancho de banda ilimitado.

---

## 10. Pendiente

Datos que solo puede aportar el dueño:

- [ ] Número de WhatsApp real (ahora dice "Próximamente")
- [ ] Usuario de Instagram
- [ ] NIT (las páginas legales dicen "pendiente de asignación")
- [ ] Conectar el formulario de contacto — hay un `TODO` en `Contacto.tsx`;
      Web3Forms y Formspree tienen plan gratuito
- [ ] Incrustar el calendario en la sección de agendar (Cal.com es gratis)
- [ ] Sustituir los testimonios de ejemplo por casos reales
- [ ] **Que un abogado revise las tres páginas legales** — llevan aviso de borrador

Decisiones de negocio:

- [ ] Comprar `micliente.co` y mover el despliegue a Cloudflare Pages
- [ ] Constituir la SAS ($1,2–3,5 M COP, 1–3 días hábiles)
- [ ] Acreditarse como MiPyme antes de registrar la marca (ahorra $377.500 por clase)
- [ ] Registrar la marca en clase 42 como prioridad

---

## 11. Cómo trabajar en este proyecto

1. **Antes de tocar Next.js, leer la documentación del paquete instalado**
   (`web/node_modules/next/dist/docs/`). La versión 16 trae cambios de ruptura y
   el conocimiento general suele estar desactualizado.

2. **Probar como lo hace un visitante, no como es cómodo.** Los tres fallos más
   graves de este proyecto —enlaces rotos, página que se desplazaba sola,
   navegación lenta en móvil— pasaron todas las comprobaciones automáticas.
   Aparecieron al usar el sitio de verdad.

3. **Verificar lo delegado.** Vale para Codex y vale para uno mismo.

4. **Si el lint marca algo, arreglar el código, no silenciar la regla.**

5. **Compilar con la subcarpeta puesta** al probar cosas de despliegue:
   `NEXT_PUBLIC_BASE_PATH=/micliente npm run build`.
