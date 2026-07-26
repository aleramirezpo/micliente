import { SITE_URL, localeUrl, localeTags, type Locale } from "@/lib/i18n";
import { obtenerContenido } from "@/lib/contenido";

/**
 * Datos estructurados en JSON-LD.
 *
 * Es lo que permite a Google entender qué es Micliente, dónde opera y
 * qué servicios ofrece. El bloque de preguntas frecuentes puede
 * además generar un fragmento destacado en los resultados.
 *
 * Nota importante: NO incluimos `aggregateRating`. Poner una
 * valoración sin reseñas reales es motivo de penalización de Google,
 * y además sería mentir. Se añadirá cuando existan reseñas de verdad.
 */
export function DatosEstructurados({ locale }: { locale: Locale }) {
  const c = obtenerContenido(locale);

  const organizacion = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organizacion`,
    name: "Micliente",
    alternateName: "Micliente Soluciones Empresariales",
    url: localeUrl(locale),
    logo: `${SITE_URL}/marca/micliente-vertical.svg`,
    image: `${SITE_URL}/og-image.png`,
    description: c.meta.descripcion,
    email: "hola@micliente.co",
    inLanguage: localeTags[locale],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
    },
    areaServed: [
      { "@type": "Country", name: "Colombia" },
      { "@type": "Place", name: "Latin America" },
    ],
    knowsLanguage: ["es", "en", "fr"],
    sameAs: [] as string[],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: c.servicios.titulo,
      itemListElement: c.servicios.lista.map((servicio) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: servicio.titulo,
          description: servicio.texto,
        },
      })),
    },
  };

  const preguntas = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/${locale}/#preguntas`,
    inLanguage: localeTags[locale],
    mainEntity: c.faq.lista.map((item) => ({
      "@type": "Question",
      name: item.p,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.r,
      },
    })),
  };

  const sitio = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#sitio`,
    url: localeUrl(locale),
    name: "Micliente",
    inLanguage: localeTags[locale],
    publisher: { "@id": `${SITE_URL}/#organizacion` },
  };

  return (
    <>
      {[organizacion, preguntas, sitio].map((bloque, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // El escape de "<" evita que un texto del contenido pueda
            // cerrar la etiqueta <script> antes de tiempo.
            __html: JSON.stringify(bloque).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
