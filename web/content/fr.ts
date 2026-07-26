/**
 * Traduction française du contenu du site de Micliente.
 */

export const fr = {
  meta: {
    titulo: "Micliente · Automatisation de WhatsApp par IA et développement web",
    tituloCorto: "Micliente",
    descripcion:
      "Nous prenons en charge votre WhatsApp grâce à l'intelligence artificielle 24 heures par jour : nous répondons, prenons les commandes et les transmettons à votre système. Nous créons également votre site web avec catalogue. Une solution clé en main, sans aucune manipulation de votre part.",
    palabrasClave:
      "automatisation WhatsApp IA Colombie, chatbot WhatsApp entreprise, agent IA service client, commandes WhatsApp sans commission, création site web avec catalogue Colombie",
  },

  nav: {
    servicios: "Services",
    comoFunciona: "Comment ça marche",
    precios: "Tarifs",
    preguntas: "Questions",
    contacto: "Contact",
    agendar: "Planifier un rendez-vous",
    menu: "Menu",
    cerrar: "Fermer",
    idioma: "Langue",
    tema: "Changer de thème",
  },

  hero: {
    distintivo: "Service automatisé 24 heures par jour",
    titulo: "Votre WhatsApp répond tout seul. Même à trois heures du matin.",
    subtitulo:
      "Une intelligence artificielle répond à vos clients, les renseigne, prend leurs commandes et les transmet à votre système. Plus d'attente, plus de messages manqués, aucune embauche supplémentaire.",
    ctaPrimario: "Voir une démonstration",
    ctaSecundario: "Parlons tarifs",
    nota: "Une vraie démonstration, sans carte bancaire.",
    chat: {
      titulo: "Voyez comment il répond",
      escribiendo: "en train d'écrire…",
      pie: "Exemples de conversations. Les commandes arrivent directement dans votre système.",
      conversaciones: [
        {
          sector: "Restaurant",
          mensajes: [
            { de: "cliente", texto: "Bonsoir, vous livrez encore ?", hora: "23h47" },
            { de: "bot", texto: "Bien sûr ! On est ouverts jusqu'à 1 h. Je vous montre la carte ?", hora: "23h47" },
            { de: "cliente", texto: "Oui, s'il vous plaît", hora: "23h47" },
            { de: "bot", texto: "La voici 👇 C'est pour quelle adresse ?", hora: "23h47" },
            { de: "cliente", texto: "Calle 45 n° 23-10, appt 302", hora: "23h48" },
            { de: "bot", texto: "C'est noté. Commande confirmée, livraison dans 35 minutes. Elle est déjà enregistrée dans le système.", hora: "23h48" },
          ],
        },
        {
          sector: "Boutique de vêtements",
          mensajes: [
            { de: "cliente", texto: "Bonjour, vous avez la veste de la photo en taille M ?", hora: "21h12" },
            { de: "bot", texto: "Oui, il en reste une en taille M, coloris camel. Je vous la mets de côté ?", hora: "21h12" },
            { de: "cliente", texto: "Oui. Elle coûte combien ? Et vous livrez à Medellín ?", hora: "21h13" },
            { de: "bot", texto: "189 000 COP, et la livraison à Medellín est gratuite à partir de 150 000 COP. Elle arrive sous 2 jours.", hora: "21h13" },
            { de: "cliente", texto: "Parfait, je la prends", hora: "21h13" },
            { de: "bot", texto: "Je vous envoie le lien de paiement. Dès que c'est confirmé, on l'expédie demain matin à la première heure.", hora: "21h14" },
          ],
        },
        {
          sector: "Cabinet dentaire",
          mensajes: [
            { de: "cliente", texto: "Bonsoir, j'aurais besoin d'un rendez-vous pour un détartrage", hora: "19h34" },
            { de: "bot", texto: "Avec plaisir. Vous préférez le matin ou l'après-midi ?", hora: "19h34" },
            { de: "cliente", texto: "Le matin, cette semaine si possible", hora: "19h35" },
            { de: "bot", texto: "J'ai jeudi à 9h00 ou vendredi à 10h30. Qu'est-ce qui vous arrange ?", hora: "19h35" },
            { de: "cliente", texto: "Jeudi, c'est parfait", hora: "19h35" },
            { de: "bot", texto: "C'est réservé pour jeudi à 9h00. Je vous enverrai un rappel la veille. À bientôt !", hora: "19h36" },
          ],
        },
        {
          sector: "Agence immobilière",
          mensajes: [
            { de: "cliente", texto: "J'ai vu l'appartement à Laureles, il est toujours disponible ?", hora: "22h21" },
            { de: "bot", texto: "Oui, il est toujours disponible. Il a 3 chambres, fait 92 m² et dispose d'une place de parking. C'est pour louer ou acheter ?", hora: "22h21" },
            { de: "cliente", texto: "Pour louer. Quel est le loyer ?", hora: "22h22" },
            { de: "bot", texto: "2 800 000 COP, plus 380 000 COP de charges. Je vous programme une visite ?", hora: "22h22" },
            { de: "cliente", texto: "Oui, samedi matin", hora: "22h23" },
            { de: "bot", texto: "Parfait. Samedi à 10h00. Je vous envoie les coordonnées du conseiller qui vous accueillera.", hora: "22h23" },
          ],
        },
      ],
    },
  },

  problema: {
    etiqueta: "Le problème",
    titulo: "Chaque message sans réponse est une vente qui vous échappe",
    texto:
      "En Colombie, 76 utilisateurs de WhatsApp sur 100 écrivent aux entreprises. Pourtant, la plupart répondent tard, manuellement et seulement aux heures de bureau. Le client n'attend pas : il achète auprès du premier qui lui répond.",
    puntos: [
      {
        titulo: "Le client vous écrit le soir",
        texto: "Il reçoit une réponse le lendemain, alors qu'il a déjà acheté ailleurs.",
      },
      {
        titulo: "Toujours les mêmes questions",
        texto: "Prix, horaires, livraison, disponibilité. Votre équipe répète les mêmes réponses cent fois par jour.",
      },
      {
        titulo: "Les pics d'activité vous submergent",
        texto: "Une promotion démarre ou la haute saison arrive, et votre WhatsApp devient ingérable.",
      },
      {
        titulo: "Les applications prélèvent une commission",
        texto: "Lorsque vous vendez sur une marketplace, 20% à 30% de chaque commande disparaissent en commissions.",
      },
    ],
  },

  comoFunciona: {
    etiqueta: "Comment ça marche",
    titulo: "Nous installons tout. Vous n'avez plus qu'à recevoir les commandes.",
    texto:
      "Nous ne vous livrons pas un outil supplémentaire à apprendre. Nous construisons le système complet, le mettons en service et assurons son fonctionnement.",
    pasos: [
      {
        numero: "01",
        titulo: "Nous étudions votre activité",
        texto:
          "Nous analysons vos vraies conversations, votre catalogue et votre manière de vendre. C'est ainsi que nous déterminons précisément ce que l'IA doit savoir répondre.",
      },
      {
        numero: "02",
        titulo: "Nous gérons toutes les démarches avec Meta",
        texto:
          "Vérification de l'entreprise, numéro dédié, modèles approuvés. C'est l'étape où la plupart des projets se bloquent, et nous nous en chargeons.",
      },
      {
        numero: "03",
        titulo: "Nous construisons et testons",
        texto:
          "Nous concevons les conversations, connectons votre catalogue et testons des cas réels avant la mise en service auprès de vos clients.",
      },
      {
        numero: "04",
        titulo: "Nous pilotons et améliorons",
        texto:
          "Nous surveillons la qualité, affinons les réponses et vous remettons un rapport clair sur ce qui fonctionne et ce qui doit évoluer.",
      },
    ],
  },

  servicios: {
    etiqueta: "Ce que nous faisons",
    titulo: "Deux services encore plus performants ensemble",
    texto:
      "Votre site présente le catalogue. Le bot vend à partir de ce même catalogue. La commande revient dans votre système. Un seul circuit connecté, pas deux outils isolés.",
    lista: [
      {
        clave: "whatsapp",
        etiqueta: "Service 01",
        titulo: "Automatisation de WhatsApp par IA",
        texto:
          "Une intelligence artificielle qui comprend ce que vos clients veulent dire, pas seulement des mots-clés. Elle répond, conseille, établit des devis et conclut la commande.",
        puntos: [
          "Répond 24 heures par jour, tous les jours de l'année",
          "Comprend et transcrit les messages vocaux",
          "Affiche votre catalogue dans la conversation",
          "Prend la commande et la transmet à votre système",
          "Passe le relais à une personne lorsque nécessaire",
          "Répond en espagnol, en anglais et en français",
          "Planifie les rendez-vous et envoie des rappels",
          "Vous avertit de chaque commande en temps réel",
        ],
      },
      {
        clave: "web",
        etiqueta: "Service 02",
        titulo: "Sites web avec catalogue",
        texto:
          "Votre propre site, rapide et optimisé pour la recherche, avec un catalogue connecté à votre bot WhatsApp. Sans modèle générique.",
        puntos: [
          "Catalogue de produits facile à administrer",
          "Paiements avec Wompi, PSE, Nequi ou ePayco",
          "Connexion au bot WhatsApp",
          "Optimisation pour gagner en visibilité sur Google",
          "Chargement en moins de deux secondes",
          "Affichage impeccable sur tous les téléphones",
          "Conforme à la loi colombienne 1480 (commerce électronique)",
          "Le code vous appartient, sans dépendance à un fournisseur",
        ],
      },
    ],
    proximamente: {
      titulo: "Et ce n'est que le début",
      texto:
        "Micliente a été pensée comme une entreprise multiservice. Dans les prochains mois, nous ajouterons des agents vocaux pour les appels, l'automatisation des réseaux sociaux, l'intégration à la facturation électronique DIAN et des tableaux de bord de performance.",
    },
  },

  comisiones: {
    etiqueta: "Le calcul que personne ne vous montre",
    titulo: "Les applications de livraison prennent près d'un tiers de chaque commande",
    texto:
      "Une commande passée sur WhatsApp vous revient intégralement. Sur une marketplace, 20% à 30% partent en commissions. Avec le volume d'un restaurant de taille moyenne, cela représente des millions chaque mois.",
    ejemplo: {
      titulo: "Un exemple concret",
      filas: [
        { concepto: "Ventes mensuelles via l'application", valor: "30 000 000 COP" },
        { concepto: "Commission de 25%", valor: "−7 500 000 COP", negativo: true },
        { concepto: "Ce qu'il vous reste", valor: "22 500 000 COP" },
      ],
      cierre:
        "Avec la commande directe sur WhatsApp, ces 7 500 000 COP restent dans votre entreprise. Notre service ne coûte qu'une fraction de cette somme.",
    },
    dato: {
      cifra: "25–40%",
      texto:
        "c'est la hausse du volume des commandes livrées pendant les 90 premiers jours après l'activation de la commande directe sur WhatsApp avec un menu numérique.",
    },
  },

  calculadora: {
    etiqueta: "Calculateur",
    titulo: "Combien vous coûte une réponse trop tardive ?",
    texto:
      "Ajustez les valeurs et découvrez l'estimation. Tout se passe dans votre navigateur : nous n'envoyons ni ne conservons aucune donnée.",
    campos: {
      mensajes: "Messages reçus chaque jour",
      fuera: "Pourcentage reçu en dehors des horaires d'ouverture",
      ticket: "Montant moyen d'une vente",
      conversion: "Sur 100 demandes, combien deviennent des ventes",
    },
    resultados: {
      perdidasMes: "Ventes perdues chaque mois",
      perdidasAnio: "Par an",
      recuperable: "Récupérable avec un service 24 heures par jour",
      titulo: "Estimation",
    },
    nota:
      "Il s'agit d'une estimation indicative fondée sur vos propres chiffres, et non d'une promesse de résultats. Le calculateur fonctionne entièrement dans votre navigateur.",
    cta: "Étudions mon cas",
  },

  mercado: {
    etiqueta: "Le contexte",
    titulo: "Ce n'est pas une mode : c'est ainsi que l'on achète en Colombie",
    texto:
      "Ces chiffres proviennent d'études de marché publiées. Nous citons chaque source pour que vous puissiez les vérifier.",
    datos: [
      {
        cifra: "74%",
        titulo: "d'adoption en Colombie",
        texto: "des entreprises utilisent déjà WhatsApp Business pour vendre et servir leurs clients.",
      },
      {
        cifra: "76%",
        titulo: "écrivent aux entreprises",
        texto: "des utilisateurs colombiens de WhatsApp contactent des entreprises par ce canal.",
      },
      {
        cifra: "US$18.200 M",
        titulo: "de commerce conversationnel",
        texto: "ont été générés en Amérique latine en 2025, avec une croissance annuelle de 35% à 45%.",
      },
      {
        cifra: "65%",
        titulo: "assistées par l'IA en 2027",
        texto: "des transactions WhatsApp dans la région, selon les projections.",
      },
      {
        cifra: "3e",
        titulo: "marché de la région",
        texto: "La Colombie se classe derrière le Brésil et le Mexique pour WhatsApp Business.",
      },
      {
        cifra: "80%",
        titulo: "commencent par la messagerie",
        texto: "des premières interactions commerciales en Amérique latine.",
      },
    ],
    fuentes: "Sources : Coherent Market Insights · Virtue Market Research · Scala Technologies · Aurora Inbox · Mazkara Studio",
  },

  industrias: {
    etiqueta: "Pour qui",
    titulo: "Pour les entreprises où WhatsApp est déjà un canal de vente",
    lista: [
      {
        nombre: "Restaurants et livraison",
        dolor: "Commissions élevées et commandes du soir perdues",
        solucion: "Commande directe avec la carte dans la conversation, sans commission de tiers.",
      },
      {
        nombre: "Commerce et boutiques",
        dolor: "Questions permanentes sur les prix et les stocks",
        solucion: "Catalogue dans la conversation et ventes actives 24 heures par jour.",
      },
      {
        nombre: "Santé et esthétique",
        dolor: "Prise de rendez-vous manuelle et patients absents",
        solucion: "Planification automatique et rappels pour réduire les rendez-vous manqués.",
      },
      {
        nombre: "Immobilier",
        dolor: "Prospects qui se refroidissent en quelques heures",
        solucion: "Qualification instantanée du prospect et planification de la visite.",
      },
      {
        nombre: "Éducation",
        dolor: "Pics d'inscriptions qui submergent l'équipe",
        solucion: "Absorption de tout le pic sans recruter de personnel temporaire.",
      },
      {
        nombre: "Garages et concessionnaires",
        dolor: "Devis répétitifs qui monopolisent la journée",
        solucion: "Établissement des devis, prise de rendez-vous et suivi après-vente.",
      },
    ],
  },

  comparativaApi: {
    etiqueta: "Parlons franchement",
    titulo: "WhatsApp Business standard face à l'API officielle",
    texto:
      "C'est la différence entre une application mobile et un système professionnel. Dès que votre activité grandit, l'application atteint vite ses limites.",
    columnas: ["", "WhatsApp Business", "API officielle avec IA"],
    filas: [
      { concepto: "Personnes pouvant répondre à la fois", app: "Pratiquement une", api: "Toute l'équipe" },
      { concepto: "Réponse automatique par IA", app: "Non", api: "Oui, elle comprend le langage naturel" },
      { concepto: "Connexion à votre système", app: "Non", api: "Oui" },
      { concepto: "Catalogue dans la conversation", app: "Très limité", api: "Complet" },
      { concepto: "Envois en masse", app: "Risque de blocage", api: "Avec des modèles approuvés" },
      { concepto: "Profil vérifié", app: "Partiel", api: "Oui" },
      { concepto: "Indicateurs", app: "Basiques", api: "Complets" },
      { concepto: "Coût", app: "Gratuit", api: "Par message, avec possibilité d'optimisation" },
    ],
    nota:
      "Un détail que presque personne n'explique : répondre dans les 24 heures suivant le message du client est gratuit. Nous concevons les conversations pour profiter de cette fenêtre et utiliser des modèles Utility, 80% à 90% moins chers que les modèles marketing. Avec une bonne conception, vos frais de messagerie restent minimes.",
  },

  diferenciadores: {
    etiqueta: "Pourquoi Micliente",
    titulo: "Cinq avantages que vous ne trouverez réunis nulle part ailleurs",
    lista: [
      {
        numero: "01",
        titulo: "Une vraie solution clé en main",
        texto:
          "Les plateformes internationales vous vendent un outil et vous laissent vous débrouiller. Nous l'installons, le pilotons et l'entretenons. Vous n'avez rien à faire.",
      },
      {
        numero: "02",
        titulo: "Le site et le bot forment un seul système",
        texto:
          "Les agences créent des sites. Les plateformes créent des bots. Personne ne relie les deux : le catalogue alimente le bot, le bot prend la commande et la commande revient dans votre système.",
      },
      {
        numero: "03",
        titulo: "Un prix fixe et prévisible",
        texto:
          "La concurrence facture par contact ou par agent : plus votre activité se développe, plus vous payez. Nous ne pénalisons pas votre croissance.",
      },
      {
        numero: "04",
        titulo: "Aucune commission sur les ventes",
        texto:
          "Les marketplaces prélèvent 20% à 30% de chaque commande. Nous facturons un service, pas un pourcentage de vos ventes.",
      },
      {
        numero: "05",
        titulo: "Conçu pour la Colombie",
        texto:
          "Pesos, Wompi, PSE et Nequi. Loi colombienne 1581 (protection des données) et loi colombienne 1480 (commerce électronique). Sans oublier l'espagnol que parlent réellement vos clients.",
      },
    ],
  },

  escalabilidad: {
    etiqueta: "La question difficile",
    titulo: "Et si des milliers de clients m'écrivent en même temps ?",
    texto:
      "C'est la première question des entreprises qui ont déjà subi un pic. La réponse honnête comporte quatre niveaux, et aucun ne pose problème lorsque le système est bien conçu.",
    capas: [
      {
        titulo: "Les messages entrants ne sont pas limités",
        texto:
          "La limite de Meta concerne le nombre de nouveaux clients que vous pouvez contacter, pas le nombre de personnes qui peuvent vous écrire. Si dix mille personnes vous contactent, vous pouvez répondre à chacune.",
      },
      {
        titulo: "Les pics sont mis en file, jamais perdus",
        texto:
          "L'API impose une limite de requêtes par seconde. Une file d'attente et un contrôle du débit permettent de traiter chaque pic dans l'ordre, sans interrompre le service.",
      },
      {
        titulo: "L'IA est optimisée",
        texto:
          "Les questions fréquentes sont servies depuis le cache, et les plus simples utilisent des modèles plus légers. La puissance maximale est réservée aux demandes qui en ont vraiment besoin.",
      },
      {
        titulo: "L'architecture est asynchrone",
        texto:
          "Réception, mise en file et traitement sont séparés. Ainsi, un pic de trafic ne laisse jamais un client sans réponse.",
      },
    ],
    cierre:
      "La saturation n'est pas un problème de WhatsApp, mais d'architecture. Un système bien conçu évolue avec vous ; un système improvisé s'effondre.",
  },

  seguridad: {
    etiqueta: "Sécurité et conformité",
    titulo: "Les données de vos clients sont une responsabilité majeure",
    texto:
      "Nous traiterons les conversations, les numéros de téléphone et les adresses de vos clients. Cela implique de véritables obligations légales en Colombie, que nous prenons au sérieux dès le premier jour.",
    puntos: [
      {
        titulo: "Loi colombienne 1581 de 2012 (protection des données)",
        texto: "Consentement préalable et explicite, politique de traitement des données publiée et procédures garantissant les droits des personnes concernées.",
      },
      {
        titulo: "Contrat de sous-traitance des données",
        texto: "Le contrat précise par écrit que vous êtes le responsable du traitement et que nous sommes le sous-traitant, avec des obligations clairement définies.",
      },
      {
        titulo: "Loi colombienne 1480 de 2011 (protection des consommateurs et commerce électronique)",
        texto: "Les sites que nous livrons respectent les exigences du commerce électronique que la plupart des boutiques en ligne négligent.",
      },
      {
        titulo: "Transparence sur l'IA",
        texto: "Vos clients savent qu'ils parlent à un assistant et peuvent demander une personne à tout moment.",
      },
      {
        titulo: "Chiffrement et contrôle des accès",
        texto: "Communications chiffrées, accès limités au strict nécessaire et traçabilité de chaque accès.",
      },
      {
        titulo: "Vos données vous appartiennent",
        texto: "Si vous décidez un jour de partir, nous vous remettons tout. Aucune rétention forcée.",
      },
    ],
  },

  precios: {
    etiqueta: "Tarifs",
    titulo: "Un prix fixe. Aucune surprise sur la facture.",
    texto:
      "Chaque entreprise est différente. Le prix final est donc établi après avoir compris vos besoins. Ces fourchettes indicatives vous donnent un ordre de grandeur avant le rendez-vous.",
    nota:
      "Les frais de messagerie de Meta sont facturés séparément, au prix coûtant et sans marge de notre part. Nous vous expliquons précisément leur montant et comment le réduire.",
    planes: [
      {
        nombre: "Essentiel",
        para: "Pour les entreprises qui commencent à automatiser",
        precio: "À partir de 600 000 COP",
        periodo: "par mois",
        incluye: [
          "Bot WhatsApp avec IA",
          "Jusqu'à 3 parcours de conversation",
          "Catalogue de base dans la conversation",
          "Transfert à une personne lorsque nécessaire",
          "Vérification auprès de Meta incluse",
          "Rapport mensuel",
          "Assistance via WhatsApp",
        ],
        cta: "Parlons-en",
        destacado: false,
      },
      {
        nombre: "Complet",
        para: "Le circuit fermé : site et bot réunis",
        precio: "À partir de 1 400 000 COP",
        periodo: "par mois",
        incluye: [
          "Tout le forfait Essentiel",
          "Site web avec catalogue",
          "Catalogue connecté au bot",
          "Commande envoyée directement à votre système",
          "Passerelle de paiement intégrée",
          "Parcours illimités",
          "Service en trois langues",
          "Tableau de bord de performance",
          "Optimisation pour Google",
        ],
        cta: "Parlons-en",
        destacado: true,
        distintivo: "Le plus choisi",
      },
      {
        nombre: "Sur mesure",
        para: "Pour les grandes structures ou les réseaux multisites",
        precio: "Sur devis",
        periodo: "",
        incluye: [
          "Tout le forfait Complet",
          "Intégration à votre ERP ou CRM",
          "Plusieurs sites ou marques",
          "Agent vocal pour les appels",
          "Facturation électronique DIAN",
          "Accord de niveau de service",
          "Responsable de compte dédié",
        ],
        cta: "Parlons-en",
        destacado: false,
      },
    ],
    implementacion: {
      titulo: "Mise en œuvre initiale",
      texto:
        "Des frais uniques sont facturés lors de l'installation, selon la complexité. Leur montant est défini pendant le rendez-vous, sans petites lignes.",
    },
  },

  comparativaCompetencia: {
    etiqueta: "Comparaison",
    titulo: "Faites-le vous-même, ou confiez-nous tout",
    columnas: ["", "Plateformes en libre-service", "Micliente"],
    filas: [
      { concepto: "Qui installe le système", otros: "Vous", nosotros: "Nous" },
      { concepto: "Courbe d'apprentissage", otros: "Plusieurs semaines", nosotros: "Aucune" },
      { concepto: "Vérification auprès de Meta", otros: "À vous de vous débrouiller", nosotros: "Incluse" },
      { concepto: "Mode de facturation", otros: "Par contact ou par agent", nosotros: "Prix fixe" },
      { concepto: "L'IA", otros: "Souvent une option payante", nosotros: "Incluse" },
      { concepto: "Site web", otros: "Non proposé", nosotros: "Inclus dans le forfait Complet" },
      { concepto: "Contexte colombien", otros: "Générique", nosotros: "Paiements et réglementation locaux" },
      { concepto: "Maintenance", otros: "À votre charge", nosotros: "Continue" },
    ],
  },

  agendar: {
    etiqueta: "Rendez-vous",
    titulo: "Parlons pendant trente minutes",
    texto:
      "Sans discours commercial et sans engagement. Nous examinons votre fonctionnement, vous disons franchement si cette solution vous convient et, si oui, combien elle coûterait.",
    puntos: [
      "Nous analysons vos vraies conversations",
      "Nous estimons vos économies ou ventes supplémentaires potentielles",
      "Nous vous donnons un prix précis",
      "Si la solution ne vous convient pas, nous vous le disons",
    ],
    ctaCalendario: "Choisir une date et une heure",
    ctaWhatsapp: "Nous écrire sur WhatsApp",
    marcador: "Le calendrier de réservation apparaîtra ici",
  },

  contacto: {
    etiqueta: "Contact",
    titulo: "Dites-nous ce dont vous avez besoin",
    texto:
      "Contactez-nous par le canal de votre choix. Nous répondons le jour ouvré même.",
    canales: {
      whatsapp: { etiqueta: "WhatsApp", valor: "Bientôt disponible", nota: "Le moyen le plus rapide" },
      correo: { etiqueta: "E-mail", valor: "hola@micliente.co", nota: "Pour les propositions et les documents" },
      instagram: { etiqueta: "Instagram", valor: "@micliente", nota: "Études de cas et actualités" },
      ubicacion: { etiqueta: "Où nous trouver", valor: "Colombie", nota: "Nous intervenons dans toute l'Amérique latine" },
    },
    formulario: {
      nombre: "Votre nom",
      empresa: "Entreprise",
      correo: "Adresse e-mail",
      telefono: "WhatsApp ou téléphone",
      interes: "Qu'est-ce qui vous intéresse ?",
      opciones: [
        "Automatiser mon WhatsApp",
        "Un site web avec catalogue",
        "Les deux",
        "Je ne sais pas encore",
      ],
      mensaje: "Décrivez-nous brièvement votre besoin",
      enviar: "Envoyer le message",
      enviando: "Envoi en cours…",
      exito: "Message reçu. Si aujourd'hui est un jour ouvré, nous vous répondrons dans la journée.",
      error: "Le message n'a pas pu être envoyé. Écrivez-nous directement à hola@micliente.co",
      privacidad:
        "En envoyant ce formulaire, vous acceptez notre politique de traitement des données. Nous utilisons uniquement vos données pour vous répondre : nous ne les vendons et ne les partageons jamais.",
      requerido: "Ce champ est obligatoire",
      correoInvalido: "Vérifiez l'adresse e-mail",
    },
  },

  faq: {
    etiqueta: "Questions fréquentes",
    titulo: "Les réponses aux questions que tout le monde se pose",
    lista: [
      {
        p: "Combien de temps faut-il pour être opérationnel ?",
        r: "Entre deux et quatre semaines pour le bot, selon la complexité de votre catalogue. Le principal délai ne dépend pas de nous : la vérification de l'entreprise par Meta peut prendre plusieurs jours. Nous gérons la démarche, mais Meta fixe le calendrier.",
      },
      {
        p: "Puis-je continuer à utiliser mon numéro actuel ?",
        r: "Pas le même numéro s'il est déjà actif sur WhatsApp standard ou WhatsApp Business. L'API officielle exige un numéro dédié. En général, l'entreprise obtient une nouvelle ligne pour le système et conserve l'ancienne telle quelle. Nous vous accompagnons dans cette démarche.",
      },
      {
        p: "Que se passe-t-il si l'IA ne sait pas répondre ?",
        r: "Elle transmet la conversation, avec tout son historique, à une personne de votre équipe. L'IA est configurée pour reconnaître les questions hors de son champ de compétence au lieu d'inventer. Nous préférons qu'elle dise 'laissez-moi vérifier' plutôt qu'elle donne une mauvaise réponse.",
      },
      {
        p: "Combien coûte réellement la messagerie de Meta ?",
        r: "Cela dépend du type de message. Répondre dans les 24 heures suivant le message du client est gratuit. Les modèles Utility, comme une confirmation de commande, coûtent 80% à 90% moins cher que les modèles marketing. Nous concevons les parcours pour que la majeure partie du trafic relève des catégories gratuites ou peu coûteuses. Nous vous refacturons ce coût à l'identique, sans marge.",
      },
      {
        p: "Et si mon compte est bloqué ?",
        r: "Le risque est réel lorsque les pratiques sont mauvaises : envoyer des messages sans l'autorisation du client, multiplier les promotions ou provoquer trop de blocages. C'est pourquoi nous travaillons avec un consentement explicite, une fréquence maîtrisée et un suivi de l'indice de qualité. C'est exactement le genre d'erreur commise sans l'expérience nécessaire.",
      },
      {
        p: "Puis-je résilier quand je le souhaite ?",
        r: "Oui. Les forfaits sont mensuels avec un préavis de 30 jours. Si vous partez, nous vous remettons vos données, vos parcours et votre configuration. Nous ne croyons pas à la rétention forcée des clients.",
      },
      {
        p: "Pouvez-vous créer uniquement le site, sans le bot ?",
        r: "Oui, le site peut être commandé séparément. Mais soyons francs : sa pleine valeur apparaît lorsque les deux travaillent ensemble, le catalogue du site alimentant le bot et le bot renvoyant les commandes vers votre système.",
      },
      {
        p: "Mon site apparaîtra-t-il en première position sur Google ?",
        r: "Nous construisons la base technique pour lui en donner les moyens : vitesse, structure, données structurées et contenu en trois langues. Mais personne ne peut garantir une position sur Google, et quiconque le promet ment. Le classement dépend aussi du temps, des liens et de l'autorité du domaine. Un délai réaliste est de trois à six mois pour les recherches locales et de longue traîne.",
      },
      {
        p: "Dois-je avoir une entreprise légalement constituée ?",
        r: "Oui, pour l'API officielle de WhatsApp : Meta exige une vérification de l'entreprise à l'aide de documents légaux. Si votre entreprise n'est pas encore constituée, nous vous indiquons les démarches nécessaires.",
      },
      {
        p: "Travaillez-vous en dehors de la Colombie ?",
        r: "Oui. Le système fonctionne dans tous les pays, et le site est disponible en trois langues. Notre expertise la plus approfondie concerne le marché colombien, mais nous intervenons dans toute l'Amérique latine.",
      },
    ],
  },

  ctaFinal: {
    titulo: "Vos concurrents répondent déjà à trois heures du matin",
    texto:
      "En trente minutes, vous saurez si cette solution convient à votre entreprise. Sans engagement.",
    ctaPrimario: "Planifier un rendez-vous",
    ctaSecundario: "Nous écrire sur WhatsApp",
  },

  footer: {
    descripcion:
      "Nous automatisons le service client sur WhatsApp grâce à l'intelligence artificielle et créons des sites web avec catalogue. Une solution clé en main, depuis la Colombie pour toute l'Amérique latine.",
    servicios: "Services",
    empresa: "Entreprise",
    legal: "Mentions légales",
    enlaces: {
      whatsappIa: "WhatsApp avec IA",
      webCatalogo: "Site web avec catalogue",
      precios: "Tarifs",
      comoFunciona: "Comment ça marche",
      preguntas: "Questions fréquentes",
      contacto: "Contact",
      privacidad: "Politique de confidentialité",
      terminos: "Conditions générales",
      datos: "Traitement des données",
      cookies: "Cookies",
    },
    derechos: "Tous droits réservés.",
    aviso: "Micliente n'est pas affiliée à Meta Platforms, Inc. WhatsApp est une marque déposée de Meta.",
    hechoEn: "Créé en Colombie",
  },

  comun: {
    volverArriba: "Retour en haut",
    saltarContenido: "Aller au contenu",
    cargando: "Chargement…",
    verMas: "Voir plus",
    verMenos: "Voir moins",
  },
} as const;
