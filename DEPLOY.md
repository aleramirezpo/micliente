# Poner Micliente en internet

Guía paso a paso para cuando compres el dominio. Está escrita para seguirse sin
saber de infraestructura.

---

## Qué hay que comprar (y qué no)

Poner una web en línea son **tres piezas separadas**, no una sola compra:

```
  [1] DOMINIO            [2] DNS              [3] HOSTING
  micliente.co   ────►   Apunta el   ────►    Donde viven
  El nombre               nombre al            los archivos
  (se arrienda            servidor
   por año)               (gratis)
                                                    │
                                                    ▼
                                            [4] CERTIFICADO SSL
                                            El candado (gratis)
```

### Lo que SÍ se paga

| Concepto | Costo | Cada cuánto |
|---|---|---|
| Dominio `micliente.co` | ~$60.000 COP | Al año |

**Y ya está.** Todo lo demás es gratis.

### Lo que NO hay que comprar

| Te lo van a ofrecer | ¿Se necesita? |
|---|---|
| Certificado SSL | **No.** Es gratis y automático desde 2016 |
| Hosting cPanel | **No.** El sitio es estático |
| "SEO garantizado, primer puesto en Google" | **No.** Nadie puede garantizarlo |
| Protección WHOIS | **No.** Ya viene gratis en los buenos registradores |
| Copias de seguridad | **No.** El código está aquí, en GitHub |
| CDN aparte | **No.** Cloudflare ya la incluye |

---

## Paso 1 · Comprar el dominio

**Recomendado: `micliente.co`**

Consultado el 26 de julio de 2026: `micliente.com` **está ocupado** (aparcado,
probablemente en venta). `micliente.co` aparecía libre.

`.co` funciona a la vez como identidad colombiana y como abreviatura
internacional de *company*. Es corto y fácil de dictar por teléfono.

### Dónde comprarlo

| Registrador | Ventaja |
|---|---|
| **MI.COM.CO** | Colombiano, entrega **factura DIAN** → gasto deducible |
| **Cloudflare** | Vende al costo, sin margen. Mismo precio todos los años |
| **Porkbun** | Precio plano para siempre |

> ⚠️ **Cuidado con la trampa habitual.** Muchos registradores anuncian el primer
> año baratísimo y renuevan mucho más caro. Pregunta siempre el **precio de
> renovación** antes de pagar. GoDaddy ofrece `.co` desde USD 1 el primer año,
> pero renueva a bastante más.

**Consejo:** verifica la disponibilidad real con WHOIS en el propio registrador
antes de decidir. Y si el presupuesto lo permite, registra también
`micliente.com.co` como defensivo, redirigido al principal.

---

## Paso 2 · Elegir dónde alojarlo

**Recomendado: Cloudflare Pages.** Gratis, ancho de banda ilimitado y CDN global.

> 🔴 **Aviso importante sobre Vercel.** Su plan gratuito *Hobby* **prohíbe
> explícitamente el uso comercial** en sus términos. Micliente es una empresa que
> factura, así que usarlo sería una violación de sus condiciones, con riesgo de
> suspensión. **Cloudflare Pages sí permite uso comercial en el plan gratuito.**

| | Cloudflare Pages | Vercel (gratis) | GitHub Pages |
|---|---|---|---|
| Uso comercial | ✅ Permitido | 🔴 Prohibido | ⚠️ No previsto |
| Ancho de banda | Ilimitado | 100 GB/mes | Con límites |
| SSL automático | ✅ | ✅ | ✅ |
| Protección DDoS | ✅ | Parcial | Básica |

---

## Paso 3 · Conectar Cloudflare Pages con este repositorio

1. Entra en [dash.cloudflare.com](https://dash.cloudflare.com) y crea una cuenta.
2. Ve a **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Autoriza GitHub y elige el repositorio `aleramirezpo/micliente`.
4. Configura la compilación exactamente así:

   | Campo | Valor |
   |---|---|
   | Framework preset | `Next.js (Static HTML Export)` |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | `web` |
   | Node version | `20` o superior |

5. Pulsa **Save and Deploy**.

A partir de ahí, **cada cambio que subas a la rama principal se publica solo**.

---

## Paso 4 · Conectar el dominio

1. En Cloudflare, **Websites** → **Add a site** → escribe `micliente.co`.
2. Cloudflare te dará **dos servidores de nombres** (algo como
   `xxx.ns.cloudflare.com`).
3. Entra al panel de tu registrador y **cambia los servidores de nombres** por
   esos dos.
4. Espera la propagación: normalmente minutos, a veces hasta 24 horas.
5. Vuelve a tu proyecto en **Pages** → **Custom domains** → **Set up a custom
   domain** → `micliente.co`.
6. Añade también `www.micliente.co` para que ambas direcciones funcionen.

El certificado SSL se emite solo. No hay que hacer nada más.

---

## Paso 5 · Comprobar que la seguridad quedó activa

El archivo `web/public/_headers` ya trae las cabeceras configuradas. Para
confirmar que Cloudflare las está aplicando:

1. Entra a [securityheaders.com](https://securityheaders.com) y analiza
   `https://micliente.co`.
2. Deberías obtener **A o A+**.

Incluye: política de seguridad de contenido estricta, HSTS por dos años,
protección contra incrustación en iframes y bloqueo de APIs que el sitio no usa
(cámara, micrófono, ubicación).

---

## Paso 6 · Hacer que Google lo encuentre

### Obligatorio

1. **Google Search Console** → añadir `micliente.co` → verificar por DNS.
2. Enviar el sitemap: `https://micliente.co/sitemap.xml`.
3. **Perfil de Google Business** → crear y verificar.
   Es **gratis** y es el factor más decisivo para aparecer en búsquedas locales
   del tipo "chatbot whatsapp bogotá".

### Recomendado

4. Bing Webmaster Tools (poco esfuerzo, algo de tráfico extra).
5. Directorios locales colombianos.
6. LinkedIn de empresa.

> ⚠️ **Expectativa realista.** La base técnica del sitio está optimizada:
> velocidad, estructura, datos estructurados y contenido en tres idiomas. Pero
> **nadie puede garantizar un puesto en Google**, y quien lo prometa está
> mintiendo. Lo realista son **3 a 6 meses** para búsquedas locales y de cola
> larga, y **12 a 18 meses** para términos muy competidos.

---

## Paso 7 · Correo corporativo

Para `hola@micliente.co`:

| Opción | Costo |
|---|---|
| **Zoho Mail** | Gratis hasta 5 usuarios |
| Google Workspace | ~USD 7 por usuario al mes |

Ambos se configuran añadiendo registros MX en Cloudflare.

---

## Antes de publicar: revisar los marcadores de posición

Hay datos de relleno que **hay que cambiar por los reales**:

- [ ] Número de WhatsApp (ahora dice "Próximamente")
- [ ] Usuario real de Instagram
- [ ] NIT de la empresa, en el pie y en los textos legales
- [ ] Conectar el formulario de contacto con **Web3Forms** o **Formspree**
      (ambos tienen plan gratuito). Buscar el comentario `TODO` en
      `components/secciones/Contacto.tsx`
- [ ] Incrustar el calendario en la sección de agendar (**Cal.com** es gratis)
- [ ] Sustituir los testimonios de ejemplo por casos reales
- [ ] Revisar los precios de los planes

---

## Costo total al año

| Concepto | Costo |
|---|---|
| Dominio `micliente.co` | ~$60.000 COP |
| Hosting, CDN, SSL, DNS | $0 |
| Correo corporativo (Zoho) | $0 |
| Formulario de contacto | $0 |
| Calendario de citas | $0 |
| Analítica sin cookies | $0 |
| **Total** | **≈ $60.000 COP al año** |

Menos de **$5.000 COP al mes** por una web profesional, rápida, segura y en tres
idiomas.

---

## Actualizar el sitio más adelante

```bash
cd web
# hacer los cambios
npm run verificar     # typecheck + lint + build
git add -A
git commit -m "Descripción del cambio"
git push
```

Cloudflare detecta el cambio y publica automáticamente en un par de minutos.
