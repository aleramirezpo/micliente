/**
 * Micliente — contenido en español (fuente de verdad)
 *
 * Las traducciones a inglés y francés replican esta misma estructura.
 * Las cifras llevan su fuente: están documentadas en /research y se
 * citan en la propia web, porque la transparencia es un diferenciador.
 */

export const es = {
  meta: {
    titulo: "Micliente · Automatización de WhatsApp con IA y desarrollo web",
    tituloCorto: "Micliente",
    descripcion:
      "Atendemos tu WhatsApp con inteligencia artificial 24 horas: respondemos, tomamos el pedido y lo pasamos a tu sistema. También construimos tu página web con catálogo. Llave en mano, sin que toques nada.",
    palabrasClave:
      "chatbot whatsapp colombia, agente de ia whatsapp, automatizar whatsapp empresa, pedidos por whatsapp sin comisión, página web con catálogo colombia",
  },

  nav: {
    servicios: "Servicios",
    comoFunciona: "Cómo funciona",
    precios: "Precios",
    preguntas: "Preguntas",
    contacto: "Contacto",
    agendar: "Agendar una reunión",
    menu: "Menú",
    cerrar: "Cerrar",
    idioma: "Idioma",
    tema: "Cambiar tema",
  },

  hero: {
    distintivo: "Atención automatizada 24 horas",
    titulo: "Tu WhatsApp atiende solo. Incluso a las tres de la mañana.",
    subtitulo:
      "Una inteligencia artificial responde a tus clientes, resuelve sus dudas, toma el pedido y lo envía a tu sistema. Sin esperas, sin mensajes perdidos, sin contratar a nadie más.",
    ctaPrimario: "Ver una demostración",
    ctaSecundario: "Hablemos de precios",
    nota: "Demostración real, sin tarjeta de crédito.",
    chat: {
      titulo: "Así conversa",
      escribiendo: "escribiendo…",
      pie: "Conversaciones de ejemplo. El pedido entra directo a tu sistema.",
      conversaciones: [
        {
          sector: "Restaurante",
          mensajes: [
            { de: "cliente", texto: "Buenas, ¿todavía tienen domicilio?", hora: "11:47 p. m." },
            { de: "bot", texto: "¡Claro que sí! Estamos abiertos hasta la 1. ¿Le muestro la carta?", hora: "11:47 p. m." },
            { de: "cliente", texto: "Sí porfa", hora: "11:47 p. m." },
            { de: "bot", texto: "Aquí la tiene 👇 ¿Para qué dirección sería?", hora: "11:47 p. m." },
            { de: "cliente", texto: "Calle 45 #23-10, apto 302", hora: "11:48 p. m." },
            { de: "bot", texto: "Listo. Pedido confirmado, llega en 35 minutos. Ya quedó registrado en el sistema.", hora: "11:48 p. m." },
          ],
        },
        {
          sector: "Tienda de ropa",
          mensajes: [
            { de: "cliente", texto: "Hola, ¿la chaqueta de la foto la tienen en talla M?", hora: "9:12 p. m." },
            { de: "bot", texto: "Sí, queda una en talla M en color camel. ¿Se la aparto?", hora: "9:12 p. m." },
            { de: "cliente", texto: "Sí. ¿Cuánto vale y hacen envío a Medellín?", hora: "9:13 p. m." },
            { de: "bot", texto: "$189.000 y el envío a Medellín es gratis desde $150.000. Llega en 2 días.", hora: "9:13 p. m." },
            { de: "cliente", texto: "Perfecto, la llevo", hora: "9:13 p. m." },
            { de: "bot", texto: "Le paso el link de pago. Apenas confirme, la despachamos mañana temprano.", hora: "9:14 p. m." },
          ],
        },
        {
          sector: "Clínica odontológica",
          mensajes: [
            { de: "cliente", texto: "Buenas tardes, necesito una cita para limpieza", hora: "7:34 p. m." },
            { de: "bot", texto: "Con gusto. ¿Prefiere en la mañana o en la tarde?", hora: "7:34 p. m." },
            { de: "cliente", texto: "En la mañana, si se puede esta semana", hora: "7:35 p. m." },
            { de: "bot", texto: "Tengo jueves 9:00 a. m. o viernes 10:30 a. m. ¿Cuál le sirve?", hora: "7:35 p. m." },
            { de: "cliente", texto: "El jueves está bien", hora: "7:35 p. m." },
            { de: "bot", texto: "Agendada para el jueves a las 9:00 a. m. Le recuerdo un día antes. ¡Nos vemos!", hora: "7:36 p. m." },
          ],
        },
        {
          sector: "Inmobiliaria",
          mensajes: [
            { de: "cliente", texto: "Vi el apartamento de Laureles, ¿sigue disponible?", hora: "10:21 p. m." },
            { de: "bot", texto: "Sí, sigue disponible. Es de 3 alcobas, 92 m², con parqueadero. ¿Es para arriendo o compra?", hora: "10:21 p. m." },
            { de: "cliente", texto: "Arriendo. ¿Cuánto es el canon?", hora: "10:22 p. m." },
            { de: "bot", texto: "$2.800.000 más administración de $380.000. ¿Le agendo una visita?", hora: "10:22 p. m." },
            { de: "cliente", texto: "Sí, el sábado en la mañana", hora: "10:23 p. m." },
            { de: "bot", texto: "Perfecto. Sábado 10:00 a. m. Le paso los datos del asesor que lo recibe.", hora: "10:23 p. m." },
          ],
        },
      ],
    },
  },

  problema: {
    etiqueta: "El problema",
    titulo: "Cada mensaje sin responder es una venta que se va",
    texto:
      "En Colombia, 76 de cada 100 personas que usan WhatsApp le escriben a empresas. Pero la mayoría de negocios responde tarde, a mano y solo en horario de oficina. El cliente no espera: se va donde le contesten primero.",
    puntos: [
      {
        titulo: "El cliente escribe de noche",
        texto: "Y encuentra la respuesta al día siguiente, cuando ya compró en otro lado.",
      },
      {
        titulo: "Siempre las mismas preguntas",
        texto: "Precio, horario, si hay domicilio, si queda stock. Tu equipo repite lo mismo cien veces al día.",
      },
      {
        titulo: "Los picos te ahogan",
        texto: "Llega una promoción o una temporada alta y el WhatsApp se vuelve ingobernable.",
      },
      {
        titulo: "Las apps te cobran comisión",
        texto: "Entre 20% y 30% de cada pedido se queda en el camino cuando vendes por un marketplace.",
      },
    ],
  },

  comoFunciona: {
    etiqueta: "Cómo funciona",
    titulo: "Nosotros lo montamos. Tú solo recibes los pedidos.",
    texto:
      "No te entregamos una herramienta para que aprendas a usarla. Montamos el sistema completo, lo ponemos a funcionar y lo mantenemos.",
    pasos: [
      {
        numero: "01",
        titulo: "Estudiamos tu negocio",
        texto:
          "Revisamos tus conversaciones reales, tu catálogo y tu forma de vender. De ahí sale lo que la IA tiene que saber responder.",
      },
      {
        numero: "02",
        titulo: "Gestionamos todo lo de Meta",
        texto:
          "Verificación de empresa, número dedicado, plantillas aprobadas. Es la parte que atasca a la mayoría, y la hacemos nosotros.",
      },
      {
        numero: "03",
        titulo: "Construimos y probamos",
        texto:
          "Diseñamos las conversaciones, conectamos tu catálogo y probamos con casos reales antes de que lo vea un cliente.",
      },
      {
        numero: "04",
        titulo: "Operamos y mejoramos",
        texto:
          "Monitoreamos la calidad, ajustamos las respuestas y te pasamos un informe de lo que está funcionando y lo que no.",
      },
    ],
  },

  servicios: {
    etiqueta: "Qué hacemos",
    titulo: "Dos servicios que funcionan mejor juntos",
    texto:
      "Tu página muestra el catálogo. El bot vende con ese mismo catálogo. El pedido vuelve a tu sistema. Un solo circuito, no dos herramientas sueltas.",
    lista: [
      {
        clave: "whatsapp",
        etiqueta: "Servicio 01",
        titulo: "Automatización de WhatsApp con IA",
        texto:
          "Una inteligencia artificial que entiende lo que le escriben, no solo palabras clave. Atiende, asesora, cotiza y cierra el pedido.",
        puntos: [
          "Responde 24 horas, todos los días del año",
          "Entiende audios y los transcribe",
          "Muestra tu catálogo dentro del chat",
          "Toma el pedido y lo envía a tu sistema",
          "Pasa a una persona cuando hace falta",
          "Atiende en español, inglés y francés",
          "Agenda citas y manda recordatorios",
          "Te avisa de cada pedido en tiempo real",
        ],
      },
      {
        clave: "web",
        etiqueta: "Servicio 02",
        titulo: "Páginas web con catálogo",
        texto:
          "Tu sitio propio, rápido y bien posicionado, con el catálogo conectado al bot de WhatsApp. Sin plantillas genéricas.",
        puntos: [
          "Catálogo de productos administrable",
          "Pagos con Wompi, PSE, Nequi o ePayco",
          "Conectada al bot de WhatsApp",
          "Optimizada para aparecer en Google",
          "Carga en menos de dos segundos",
          "Se ve bien en cualquier teléfono",
          "Cumple la Ley 1480 de comercio electrónico",
          "El código es tuyo, sin quedar atado",
        ],
      },
    ],
    proximamente: {
      titulo: "Y esto es solo el comienzo",
      texto:
        "Micliente nace como empresa multiservicio. En los próximos meses sumamos agentes de voz para llamadas, automatización de redes, integración con facturación electrónica DIAN y tableros de indicadores.",
    },
  },

  comisiones: {
    etiqueta: "El cálculo que nadie te hace",
    titulo: "Las apps de domicilios se quedan con una tercera parte",
    texto:
      "Un pedido que entra por WhatsApp es tuyo completo. Uno que entra por un marketplace deja entre el 20% y el 30% en comisiones. Con el volumen de un restaurante mediano, eso son millones al mes.",
    ejemplo: {
      titulo: "Un ejemplo con números reales",
      filas: [
        { concepto: "Ventas mensuales por la app", valor: "$30.000.000" },
        { concepto: "Comisión del 25%", valor: "−$7.500.000", negativo: true },
        { concepto: "Te queda", valor: "$22.500.000" },
      ],
      cierre:
        "Con pedido directo por WhatsApp, esos $7.500.000 se quedan en tu caja. Nuestro servicio cuesta una fracción de esa cifra.",
    },
    dato: {
      cifra: "25–40%",
      texto:
        "es lo que sube el volumen de domicilios al activar pedido directo por WhatsApp con menú digital, durante los primeros 90 días.",
    },
  },

  calculadora: {
    etiqueta: "Calculadora",
    titulo: "¿Cuánto te cuesta no responder a tiempo?",
    texto:
      "Mueve los valores y mira el cálculo. Todo ocurre en tu navegador: no enviamos ni guardamos ningún dato.",
    campos: {
      mensajes: "Mensajes que recibes al día",
      fuera: "Porcentaje que llega fuera de horario",
      ticket: "Valor promedio de una venta",
      conversion: "De cada 100 que preguntan, cuántos compran",
    },
    resultados: {
      perdidasMes: "Ventas que se pierden al mes",
      perdidasAnio: "Al año",
      recuperable: "Recuperable con atención 24 horas",
      titulo: "Estimación",
    },
    nota:
      "Es una estimación orientativa basada en tus propios números, no una promesa de resultados. La calculadora funciona íntegramente en tu navegador.",
    cta: "Quiero que revisemos mi caso",
  },

  mercado: {
    etiqueta: "El contexto",
    titulo: "No es una moda: es como compra Colombia",
    texto:
      "Estas cifras vienen de estudios de mercado publicados. Las citamos con fuente porque preferimos que verifiques.",
    datos: [
      {
        cifra: "74%",
        titulo: "de adopción en Colombia",
        texto: "de las empresas ya usa WhatsApp Business para vender y atender.",
      },
      {
        cifra: "76%",
        titulo: "escribe a empresas",
        texto: "de los usuarios colombianos de WhatsApp contacta negocios por ahí.",
      },
      {
        cifra: "US$18.200 M",
        titulo: "de comercio conversacional",
        texto: "movió Latinoamérica en 2025, creciendo entre 35% y 45% al año.",
      },
      {
        cifra: "65%",
        titulo: "asistido por IA en 2027",
        texto: "de las transacciones de WhatsApp en la región, según proyecciones.",
      },
      {
        cifra: "3.º",
        titulo: "mercado de la región",
        texto: "Colombia, por detrás de Brasil y México, en WhatsApp Business.",
      },
      {
        cifra: "80%",
        titulo: "empieza por mensajería",
        texto: "de las primeras interacciones comerciales en Latinoamérica.",
      },
    ],
    fuentes: "Fuentes: Coherent Market Insights · Virtue Market Research · Scala Technologies · Aurora Inbox · Mazkara Studio",
  },

  industrias: {
    etiqueta: "Para quién",
    titulo: "Donde el WhatsApp ya es el canal de ventas",
    lista: [
      {
        nombre: "Restaurantes y domicilios",
        dolor: "Comisiones altas y pedidos perdidos de noche",
        solucion: "Pedido directo con la carta en el chat, sin comisión de terceros.",
      },
      {
        nombre: "Retail y tiendas",
        dolor: "Preguntas por precio y existencias a toda hora",
        solucion: "Catálogo dentro del chat y venta activa las 24 horas.",
      },
      {
        nombre: "Salud y estética",
        dolor: "Agendamiento manual y pacientes que no llegan",
        solucion: "Agenda automática y recordatorios que reducen inasistencias.",
      },
      {
        nombre: "Inmobiliarias",
        dolor: "Interesados que se enfrían en pocas horas",
        solucion: "Califica al interesado al instante y agenda la visita.",
      },
      {
        nombre: "Educación",
        dolor: "Picos de matrícula que desbordan al equipo",
        solucion: "Absorbe el pico completo sin contratar personal temporal.",
      },
      {
        nombre: "Talleres y concesionarios",
        dolor: "Cotizaciones repetitivas que consumen el día",
        solucion: "Cotiza, agenda la cita y hace seguimiento posventa.",
      },
    ],
  },

  comparativaApi: {
    etiqueta: "Hablemos claro",
    titulo: "WhatsApp Business normal frente a la API oficial",
    texto:
      "Es la diferencia entre una aplicación de celular y un sistema de empresa. Si tu negocio crece, la aplicación se te queda corta.",
    columnas: ["", "WhatsApp Business", "API oficial con IA"],
    filas: [
      { concepto: "Personas atendiendo a la vez", app: "Prácticamente una", api: "Todo el equipo" },
      { concepto: "Respuesta automática con IA", app: "No", api: "Sí, entiende lenguaje natural" },
      { concepto: "Conexión con tu sistema", app: "No", api: "Sí" },
      { concepto: "Catálogo dentro del chat", app: "Muy limitado", api: "Completo" },
      { concepto: "Envíos masivos", app: "Riesgo de bloqueo", api: "Con plantillas aprobadas" },
      { concepto: "Perfil verificado", app: "Parcial", api: "Sí" },
      { concepto: "Métricas", app: "Básicas", api: "Completas" },
      { concepto: "Costo", app: "Gratis", api: "Por mensaje, optimizable" },
    ],
    nota:
      "Un detalle que casi nadie explica: responder dentro de las 24 horas siguientes al mensaje del cliente no cuesta nada. Diseñamos las conversaciones para aprovechar esa ventana y para usar plantillas de tipo Utility, entre 80% y 90% más baratas que las de marketing. Bien hecho, tu costo de mensajería es mínimo.",
  },

  diferenciadores: {
    etiqueta: "Por qué nosotros",
    titulo: "Cinco cosas que no vas a encontrar juntas en otro lado",
    lista: [
      {
        numero: "01",
        titulo: "Llave en mano de verdad",
        texto:
          "Las plataformas internacionales te venden una herramienta y te dejan solo. Nosotros lo montamos, lo operamos y lo mantenemos. Tú no tocas nada.",
      },
      {
        numero: "02",
        titulo: "La web y el bot son un solo sistema",
        texto:
          "Las agencias hacen webs. Las plataformas hacen bots. Nadie une las dos cosas: el catálogo alimenta al bot, el bot toma el pedido y el pedido vuelve a tu sistema.",
      },
      {
        numero: "03",
        titulo: "Precio plano y predecible",
        texto:
          "La competencia cobra por contacto o por agente, así que mientras mejor te va, más pagas. Nosotros no castigamos tu crecimiento.",
      },
      {
        numero: "04",
        titulo: "Sin comisión por venta",
        texto:
          "Los marketplaces se llevan entre el 20% y el 30% de cada pedido. Nosotros cobramos un servicio, no un porcentaje de tus ventas.",
      },
      {
        numero: "05",
        titulo: "Hecho para Colombia",
        texto:
          "Pesos, Wompi, PSE y Nequi. Ley 1581 de datos personales y Ley 1480 de comercio electrónico. Y el español que hablan tus clientes.",
      },
    ],
  },

  escalabilidad: {
    etiqueta: "La pregunta difícil",
    titulo: "¿Y si me llegan miles de clientes a la vez?",
    texto:
      "Es lo primero que preguntan quienes ya sufrieron un pico. La respuesta honesta tiene cuatro capas, y ninguna es un problema si el sistema está bien construido.",
    capas: [
      {
        titulo: "Los mensajes que entran no tienen límite",
        texto:
          "El límite de Meta aplica a cuántos clientes nuevos puedes contactar tú, no a cuántos te escriben. Si te escriben diez mil personas, puedes responderles a todas.",
      },
      {
        titulo: "Los picos se encolan, no se pierden",
        texto:
          "La API tiene un tope de peticiones por segundo. Se maneja con una cola y control de ritmo, de modo que un pico se procesa ordenado en vez de tumbar el servicio.",
      },
      {
        titulo: "La IA se optimiza",
        texto:
          "Las preguntas frecuentes se responden desde caché y las simples con modelos más ligeros. Se reserva la capacidad pesada para lo que de verdad la necesita.",
      },
      {
        titulo: "La arquitectura es asíncrona",
        texto:
          "Recibir, encolar y procesar por separado. Así un pico de tráfico nunca deja a un cliente sin respuesta.",
      },
    ],
    cierre:
      "Saturarse no es un problema de WhatsApp: es un problema de arquitectura. Un sistema bien construido escala; uno improvisado se cae.",
  },

  seguridad: {
    etiqueta: "Seguridad y cumplimiento",
    titulo: "Los datos de tus clientes son responsabilidad seria",
    texto:
      "Vamos a manejar conversaciones, teléfonos y direcciones de tus clientes. Eso tiene implicaciones legales reales en Colombia, y las tomamos en serio desde el primer día.",
    puntos: [
      {
        titulo: "Ley 1581 de 2012",
        texto: "Autorización previa y expresa, política de tratamiento publicada y atención a los derechos del titular.",
      },
      {
        titulo: "Contrato de encargado",
        texto: "Queda por escrito que tú eres el responsable de los datos y nosotros el encargado, con obligaciones definidas.",
      },
      {
        titulo: "Ley 1480 de 2011",
        texto: "Las webs que entregamos cumplen los requisitos de comercio electrónico que la mayoría de tiendas incumple.",
      },
      {
        titulo: "Transparencia con la IA",
        texto: "Tus clientes saben que hablan con un asistente y pueden pedir una persona en cualquier momento.",
      },
      {
        titulo: "Cifrado y accesos",
        texto: "Comunicación cifrada, accesos mínimos necesarios y registro de quién accede a qué.",
      },
      {
        titulo: "Tus datos son tuyos",
        texto: "Si un día decides irte, te entregamos todo. Sin retenerte por la fuerza.",
      },
    ],
  },

  precios: {
    etiqueta: "Precios",
    titulo: "Precio plano. Sin sorpresas en la factura.",
    texto:
      "Cada negocio es distinto, así que el precio final sale después de entender tu caso. Estos son los rangos de referencia para que sepas de qué estamos hablando antes de la reunión.",
    nota:
      "El costo de mensajería de Meta se factura aparte y al costo, sin recargo nuestro. Te explicamos exactamente cuánto es y cómo bajarlo.",
    planes: [
      {
        nombre: "Esencial",
        para: "Negocios que empiezan a automatizar",
        precio: "Desde $600.000",
        periodo: "al mes",
        incluye: [
          "Bot de WhatsApp con IA",
          "Hasta 3 flujos de conversación",
          "Catálogo básico en el chat",
          "Paso a persona cuando hace falta",
          "Verificación ante Meta incluida",
          "Informe mensual",
          "Soporte por WhatsApp",
        ],
        cta: "Hablemos",
        destacado: false,
      },
      {
        nombre: "Completo",
        para: "El circuito cerrado: web y bot juntos",
        precio: "Desde $1.400.000",
        periodo: "al mes",
        incluye: [
          "Todo lo del plan Esencial",
          "Página web con catálogo",
          "Catálogo conectado al bot",
          "Pedido directo a tu sistema",
          "Pasarela de pagos integrada",
          "Flujos ilimitados",
          "Atención en tres idiomas",
          "Tablero de indicadores",
          "Optimización para Google",
        ],
        cta: "Hablemos",
        destacado: true,
        distintivo: "El más elegido",
      },
      {
        nombre: "A la medida",
        para: "Operaciones grandes o con varias sedes",
        precio: "A convenir",
        periodo: "",
        incluye: [
          "Todo lo del plan Completo",
          "Integración con tu ERP o CRM",
          "Varias sedes o marcas",
          "Agente de voz para llamadas",
          "Facturación electrónica DIAN",
          "Acuerdo de nivel de servicio",
          "Persona asignada a tu cuenta",
        ],
        cta: "Hablemos",
        destacado: false,
      },
    ],
    implementacion: {
      titulo: "Implementación inicial",
      texto:
        "Se cobra una sola vez al montar el sistema, según la complejidad. Se define en la reunión, sin letra menuda.",
    },
  },

  comparativaCompetencia: {
    etiqueta: "Comparación",
    titulo: "Hazlo tú mismo o que lo hagamos nosotros",
    columnas: ["", "Plataformas de autoservicio", "Micliente"],
    filas: [
      { concepto: "Quién lo monta", otros: "Tú", nosotros: "Nosotros" },
      { concepto: "Curva de aprendizaje", otros: "Semanas", nosotros: "Ninguna" },
      { concepto: "Verificación ante Meta", otros: "Te las arreglas", nosotros: "Incluida" },
      { concepto: "Cómo cobran", otros: "Por contacto o por agente", nosotros: "Precio plano" },
      { concepto: "La IA", otros: "Suele ser un extra que se paga aparte", nosotros: "Incluida" },
      { concepto: "Página web", otros: "No la hacen", nosotros: "Incluida en el plan Completo" },
      { concepto: "Contexto colombiano", otros: "Genérico", nosotros: "Pagos y normativa locales" },
      { concepto: "Mantenimiento", otros: "Por tu cuenta", nosotros: "Continuo" },
    ],
  },

  agendar: {
    etiqueta: "Agenda",
    titulo: "Conversemos treinta minutos",
    texto:
      "Sin presentación comercial y sin compromiso. Revisamos tu operación, te decimos con franqueza si esto te sirve o no, y si te sirve, cuánto costaría.",
    puntos: [
      "Revisamos tus conversaciones reales",
      "Estimamos cuánto podrías ahorrar o vender más",
      "Te damos un precio concreto",
      "Si no te conviene, te lo decimos",
    ],
    ctaCalendario: "Elegir día y hora",
    ctaWhatsapp: "Escribir por WhatsApp",
    marcador: "Aquí irá el calendario para agendar",
  },

  contacto: {
    etiqueta: "Contacto",
    titulo: "Cuéntanos qué necesitas",
    texto:
      "Escríbenos por donde prefieras. Respondemos el mismo día hábil.",
    canales: {
      whatsapp: { etiqueta: "WhatsApp", valor: "Próximamente", nota: "La vía más rápida" },
      correo: { etiqueta: "Correo", valor: "hola@micliente.co", nota: "Para propuestas y documentos" },
      instagram: { etiqueta: "Instagram", valor: "@micliente", nota: "Casos y novedades" },
      ubicacion: { etiqueta: "Dónde estamos", valor: "Colombia", nota: "Atendemos toda Latinoamérica" },
    },
    formulario: {
      nombre: "Tu nombre",
      empresa: "Empresa",
      correo: "Correo electrónico",
      telefono: "WhatsApp o teléfono",
      interes: "¿Qué te interesa?",
      opciones: [
        "Automatizar mi WhatsApp",
        "Página web con catálogo",
        "Las dos cosas",
        "Todavía no lo tengo claro",
      ],
      mensaje: "Cuéntanos brevemente tu caso",
      enviar: "Enviar mensaje",
      enviando: "Enviando…",
      exito: "Mensaje recibido. Te respondemos hoy mismo si es día hábil.",
      error: "No se pudo enviar. Escríbenos directamente a hola@micliente.co",
      privacidad:
        "Al enviar aceptas nuestra política de tratamiento de datos. Solo usamos tus datos para responderte: nunca los vendemos ni los compartimos.",
      requerido: "Este campo es obligatorio",
      correoInvalido: "Revisa el correo electrónico",
    },
  },

  faq: {
    etiqueta: "Preguntas frecuentes",
    titulo: "Lo que todo el mundo pregunta",
    lista: [
      {
        p: "¿Cuánto tarda en estar funcionando?",
        r: "Entre dos y cuatro semanas para el bot, dependiendo de qué tan complejo sea tu catálogo. La parte que más demora no somos nosotros: es la verificación de empresa ante Meta, que puede tomar varios días. Esa gestión la hacemos nosotros, pero el tiempo lo pone Meta.",
      },
      {
        p: "¿Puedo seguir usando mi número actual?",
        r: "No con el mismo número si ya está activo en WhatsApp normal o en WhatsApp Business. La API oficial exige un número dedicado. Lo habitual es conseguir una línea nueva para el sistema y dejar la actual como estaba. Te acompañamos en ese trámite.",
      },
      {
        p: "¿Qué pasa si la IA no sabe responder algo?",
        r: "Pasa la conversación a una persona de tu equipo, con todo el historial. La IA está configurada para reconocer cuándo está fuera de su terreno en vez de inventar. Preferimos que diga 'déjame consultarlo' a que dé una respuesta equivocada.",
      },
      {
        p: "¿Cuánto cuesta realmente la mensajería de Meta?",
        r: "Depende del tipo de mensaje. Responder dentro de las 24 horas siguientes al mensaje del cliente es gratis. Las plantillas de tipo Utility, como confirmar un pedido, cuestan entre 80% y 90% menos que las de marketing. Diseñamos los flujos para que la mayor parte del tráfico caiga en lo gratuito o lo barato. Te facturamos ese costo tal cual, sin recargo.",
      },
      {
        p: "¿Y si me bloquean la cuenta?",
        r: "Es un riesgo real si se hacen las cosas mal: enviar sin autorización del cliente, saturar de promociones o generar muchos bloqueos. Por eso trabajamos con autorización explícita, frecuencia controlada y monitoreo de la calificación de calidad. Es exactamente el tipo de error que se comete cuando se hace sin experiencia.",
      },
      {
        p: "¿Puedo cancelar cuando quiera?",
        r: "Sí. Los planes son mensuales con un preaviso de 30 días. Y si te vas, te entregamos tus datos, tus flujos y tu configuración. No creemos en retener clientes por la fuerza.",
      },
      {
        p: "¿Hacen solo la página web, sin el bot?",
        r: "Sí, se puede contratar por separado. Pero te vamos a decir con honestidad que el valor real aparece cuando las dos cosas trabajan juntas: el catálogo de la web alimentando al bot y el bot devolviendo pedidos al sistema.",
      },
      {
        p: "¿La página va a aparecer de primera en Google?",
        r: "Construimos la base técnica para que pueda: velocidad, estructura, datos estructurados, contenido en tres idiomas. Pero nadie puede garantizar una posición en Google, y quien te lo prometa te está mintiendo. El posicionamiento depende también del tiempo, los enlaces y la autoridad del dominio. Lo realista son tres a seis meses para búsquedas locales y de cola larga.",
      },
      {
        p: "¿Necesito tener empresa constituida?",
        r: "Para la API oficial de WhatsApp sí: Meta exige verificación de negocio con documentos legales. Si todavía no tienes la empresa constituida, te orientamos sobre qué necesitas.",
      },
      {
        p: "¿Atienden fuera de Colombia?",
        r: "Sí. El sistema funciona en cualquier país y la web está en tres idiomas. Nuestro conocimiento más profundo es del mercado colombiano, pero atendemos toda Latinoamérica.",
      },
    ],
  },

  ctaFinal: {
    titulo: "Tu competencia ya está respondiendo a las tres de la mañana",
    texto:
      "Treinta minutos de conversación y sabrás si esto le sirve a tu negocio o no. Sin compromiso.",
    ctaPrimario: "Agendar una reunión",
    ctaSecundario: "Escribir por WhatsApp",
  },

  footer: {
    descripcion:
      "Automatizamos la atención por WhatsApp con inteligencia artificial y construimos páginas web con catálogo. Llave en mano, desde Colombia para Latinoamérica.",
    servicios: "Servicios",
    empresa: "Empresa",
    legal: "Legal",
    enlaces: {
      whatsappIa: "WhatsApp con IA",
      webCatalogo: "Web con catálogo",
      precios: "Precios",
      comoFunciona: "Cómo funciona",
      preguntas: "Preguntas frecuentes",
      contacto: "Contacto",
      privacidad: "Política de privacidad",
      terminos: "Términos y condiciones",
      datos: "Tratamiento de datos",
      cookies: "Cookies",
    },
    derechos: "Todos los derechos reservados.",
    aviso: "Micliente no está afiliada a Meta Platforms, Inc. WhatsApp es una marca registrada de Meta.",
    hechoEn: "Hecho en Colombia",
  },

  comun: {
    volverArriba: "Volver arriba",
    saltarContenido: "Saltar al contenido",
    cargando: "Cargando…",
    verMas: "Ver más",
    verMenos: "Ver menos",
  },
} as const;

export type Contenido = typeof es;
