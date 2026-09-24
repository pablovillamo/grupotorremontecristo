import type { ContextImage, Property, PropertyImage } from "./types";

/**
 * Fuente conceptual: Grupo_Torre_Montecristo_Brain/01_PROPERTIES/GTM-00X_*.md
 * Jerarquía: 00_MASTER > ficha GTM > 06_BRAND > 04_WEBSITE > ...
 *
 * Reglas:
 *  - Nada factual se inventa.
 *  - PENDING => value: null (no se muestra, o se muestra "Información disponible próximamente").
 *  - Las fotografías provienen exclusivamente de la carpeta de cada propiedad.
 *  - Las imágenes de apoyo (La Fortuna / Costa Rica) solo se usan como contexto editorial.
 */

const PORTRAIT = { width: 1122, height: 1240 } as const;

const img = (src: string, alt: string): PropertyImage => ({ src, alt, ...PORTRAIT });

export const contextImages = {
  laFortunaVolcan: {
    src: "/images/contexto/la-fortuna-volcan.jpg",
    alt: "Volcán Arenal rodeado de vegetación en La Fortuna de San Carlos",
    caption: "La Fortuna, San Carlos — imagen de contexto territorial",
    ...PORTRAIT,
  },
  laFortunaPuente: {
    src: "/images/contexto/la-fortuna-puente.jpg",
    alt: "Puente colgante sobre el bosque en la zona de La Fortuna",
    caption: "La Fortuna, San Carlos — imagen de contexto",
    width: 1086,
    height: 1448,
  },
  laFortunaAtardecer: {
    src: "/images/contexto/la-fortuna-atardecer.jpg",
    alt: "Atardecer frente al volcán Arenal en La Fortuna",
    caption: "La Fortuna, San Carlos — imagen de contexto",
    width: 1122,
    height: 1402,
  },
  costaRicaLapas: {
    src: "/images/contexto/costa-rica-lapas.jpg",
    alt: "Lapas rojas entre vegetación tropical de Costa Rica",
    caption: "Costa Rica — imagen editorial",
    ...PORTRAIT,
  },
} satisfies Record<string, ContextImage>;

export const properties: Property[] = [
  {
    id: "GTM-001",
    slug: "quinta-la-garita",
    name: "Quinta La Garita",
    brainStatus: "ACTIVE / INFORMATION IN PROGRESS",
    statusLabel: "Activo",
    isProject: false,
    featured: true,
    categories: ["residencial", "inversion"],
    typeLabel: "Quinta · Residencial · Patrimonial",
    location: {
      label: "La Garita, Alajuela",
      region: "Valle Central",
      country: "Costa Rica",
      status: "PROVIDED",
      exact: { value: null, status: "PENDING" },
    },
    price: { value: null, status: "PENDING" },
    currency: { value: null, status: "PENDING" },
    landArea: { value: 5596.18, status: "PROVIDED" },
    constructionArea: { value: null, status: "PENDING" },
    headline: "Naturaleza, privacidad y espacio en el Valle Central.",
    summary: "Más de 5,500 m² para vivir con espacio, privacidad y naturaleza.",
    description: [
      "Una quinta de 5,596.18 m² en La Garita de Alajuela, pensada para quien valora el espacio, la privacidad y la presencia constante de la naturaleza.",
      "La propiedad reúne una casa principal, un apartamento independiente y amplias áreas verdes. Se entrega equipada con menaje.",
    ],
    keyFacts: [
      { label: "Terreno", value: "5,596.18 m²", status: "PROVIDED" },
      { label: "Casa principal", value: "2 habitaciones · 2 baños", status: "PROVIDED" },
      { label: "Apartamento", value: "Independiente", status: "PROVIDED" },
      { label: "Menaje", value: "Incluido", status: "PROVIDED" },
    ],
    features: [
      {
        title: "Casa principal",
        status: "PROVIDED",
        items: [
          "Sala",
          "Comedor",
          "Cocina",
          "Cuarto de pilas",
          "2 baños completos",
          "2 habitaciones amplias",
          "Bodega",
          "Corredor amplio",
          "Buena ventilación reportada",
        ],
      },
      {
        title: "Apartamento independiente",
        status: "PROVIDED",
        items: ["Personal de cuido", "Mantenimiento", "Alojamiento auxiliar"],
      },
      {
        title: "Entorno y equipamiento",
        status: "PROVIDED",
        items: [
          "Ambiente natural",
          "Privacidad",
          "Amplias áreas verdes",
          "Se entrega equipada con menaje",
          "Agua propia reportada para mantenimiento de áreas verdes",
        ],
      },
    ],
    perspectives: [
      { title: "Residencial", text: "Espacio, privacidad y naturaleza." },
      {
        title: "Segunda residencia",
        text: "Un entorno tranquilo sin aislarse completamente del Valle Central.",
      },
      {
        title: "Patrimonio",
        text: "Potencial a evaluar según uso de suelo, permisos y situación legal.",
      },
    ],
    unverified: {
      label: "Ubicación reportada (tiempos aproximados)",
      status: "PROVIDED / PENDING VERIFICATION",
      publish: false,
      items: [
        "Aproximadamente 200 m de la calle principal de La Garita",
        "Cerca del restaurante Fiesta del Maíz",
        "Aproximadamente 15 min de Zona Franca El Coyol",
        "Aproximadamente 20 min del Aeropuerto Internacional Juan Santamaría",
        "Aproximadamente 25 min de Ruta 27",
        "Aproximadamente 15 min del centro de Alajuela",
        "Aproximadamente 10 min de City Mall y Plaza Real Alajuela",
      ],
    },
    images: [
      img("/images/quinta-la-garita/garita-01.jpg", "Fuente de piedra sobre el jardín de Quinta La Garita al atardecer"),
      img("/images/quinta-la-garita/garita-03.jpg", "Sendero de acceso hacia una de las edificaciones de Quinta La Garita"),
      img("/images/quinta-la-garita/garita-04.jpg", "Cocina con isla y ventana hacia la vegetación en Quinta La Garita"),
      img("/images/quinta-la-garita/garita-02.jpg", "Jardín con palmeras y fuente en Quinta La Garita"),
      img("/images/quinta-la-garita/garita-05.jpg", "Sala y cocina integradas con luz natural en Quinta La Garita"),
      img("/images/quinta-la-garita/garita-06.jpg", "Fachada lateral con pérgola y palmeras en Quinta La Garita"),
    ],
    pending: [
      "precio", "moneda", "pin exacto", "área de construcción", "área del apartamento", "parqueos",
      "año de construcción", "estado de conservación", "tipo de acceso", "tipo de calle", "topografía",
      "frente", "servicios", "agua potable", "condición legal del agua propia", "uso de suelo",
      "plano catastrado", "finca", "gravámenes", "impuestos", "mantenimiento", "inventario de menaje",
      "fotografías profesionales", "drone", "video", "propietario", "comisión", "disponibilidad para visitas",
    ],
    seo: {
      title: "Quinta La Garita — La Garita, Alajuela",
      description:
        "Quinta de 5,596.18 m² en La Garita, Alajuela, con casa principal, apartamento independiente y amplias áreas verdes. Naturaleza, privacidad y espacio en el Valle Central.",
    },
  },
  {
    id: "GTM-002",
    slug: "zona-fluca-hills",
    name: "Zona Fluca Hills",
    brainStatus: "DEVELOPMENT / PENDING INFORMATION",
    statusLabel: "Proyecto en desarrollo",
    isProject: true,
    featured: true,
    categories: ["proyectos", "terrenos", "inversion"],
    typeLabel: "Proyecto de lotes",
    location: {
      label: "Ubicación por anunciar",
      region: null,
      country: "Costa Rica",
      status: "PENDING",
      exact: { value: null, status: "PENDING" },
    },
    price: { value: null, status: "PENDING" },
    currency: { value: null, status: "PENDING" },
    landArea: { value: null, status: "PENDING" },
    constructionArea: { value: null, status: "NOT_APPLICABLE" },
    headline: "Un proyecto de lotes en preparación.",
    summary: "Proyecto de lotes. Información del proyecto próximamente.",
    description: [
      "Zona Fluca Hills es un proyecto inmobiliario de lotes orientado a quienes buscan adquirir tierra para construir patrimonio, desarrollar una vivienda o evaluar una oportunidad inmobiliaria.",
      "Estamos preparando la información completa del proyecto. Puede solicitar ser contactado cuando esté disponible.",
    ],
    keyFacts: [{ label: "Tipo", value: "Proyecto de lotes", status: "PROVIDED" }],
    features: [],
    perspectives: [],
    images: [img("/images/zona-fluca-hills/fluca-01.jpg", "Árboles de gran porte junto a un camino de lastre en Zona Fluca Hills")],
    pending: [
      "ubicación exacta", "provincia", "cantón", "distrito", "cantidad de lotes", "disponibilidad", "tamaños",
      "precios", "financiamiento", "topografía", "accesos", "calles", "agua", "electricidad", "internet",
      "uso de suelo", "permisos", "amenidades", "reglamento", "masterplan", "planos", "renders",
      "fotografías", "drone", "video", "propietario", "comisión", "fecha de lanzamiento",
      "buyer personas definitivos", "propuesta de valor definitiva",
    ],
    seo: {
      title: "Zona Fluca Hills — Proyecto de lotes",
      description:
        "Zona Fluca Hills, proyecto inmobiliario de lotes de Grupo Torre Montecristo. Información del proyecto próximamente.",
    },
  },
  {
    id: "GTM-003",
    slug: "los-angeles-comercial",
    name: "Los Ángeles Comercial",
    brainStatus: "ACTIVE / INFORMATION IN PROGRESS",
    statusLabel: "Activo",
    isProject: false,
    featured: true,
    categories: ["comercial", "terrenos"],
    typeLabel: "Terreno · Activo comercial · Uso mixto",
    location: {
      label: "Los Ángeles, San Carlos",
      region: null,
      country: "Costa Rica",
      status: "PROVIDED",
      exact: { value: null, status: "PENDING" },
    },
    price: { value: null, status: "PENDING" },
    currency: { value: null, status: "PENDING" },
    landArea: { value: null, status: "PENDING" },
    constructionArea: { value: null, status: "PENDING" },
    headline: "Un activo de uso mixto en Los Ángeles de San Carlos.",
    summary: "Terreno y activo comercial de uso mixto.",
    description: [
      "Terreno de uso mixto en Los Ángeles de San Carlos, en la zona de tránsito hacia La Fortuna.",
      "Las áreas, condiciones comerciales y documentación del activo se encuentran en preparación.",
    ],
    keyFacts: [
      { label: "Tipo", value: "Uso mixto", status: "PROVIDED" },
      { label: "Categoría", value: "Activo comercial", status: "PROVIDED" },
    ],
    features: [],
    perspectives: [],
    images: [
      img("/images/los-angeles-comercial/comercial-01.jpg", "Edificación comercial con frente de vidrio en Los Ángeles de San Carlos"),
      img("/images/los-angeles-comercial/comercial-02.jpg", "Terreno de zacate junto a la vía en Los Ángeles de San Carlos"),
    ],
    pending: [
      "nombre comercial definitivo", "dirección", "pin", "área total", "área construida", "cantidad de locales",
      "ocupación", "contratos", "renta actual", "precio", "cap rate / rentabilidad", "uso de suelo",
      "flujo vehicular", "estacionamientos", "servicios", "planos", "fotografías", "video", "documentación",
      "propietario", "comisión",
    ],
    seo: {
      title: "Los Ángeles Comercial — San Carlos",
      description: "Terreno y activo comercial de uso mixto en Los Ángeles de San Carlos, Costa Rica.",
    },
  },
  {
    id: "GTM-004",
    slug: "local-comercial-la-fortuna",
    name: "Local Comercial La Fortuna",
    brainStatus: "UNDER CONSTRUCTION",
    statusLabel: "En construcción",
    isProject: true,
    featured: false,
    categories: ["comercial", "proyectos"],
    typeLabel: "Local comercial · Desarrollo comercial",
    location: {
      label: "La Fortuna, San Carlos",
      region: null,
      country: "Costa Rica",
      status: "PROVIDED",
      exact: { value: null, status: "PENDING" },
    },
    price: { value: null, status: "PENDING" },
    currency: { value: null, status: "PENDING" },
    landArea: { value: null, status: "PENDING" },
    constructionArea: { value: null, status: "PENDING" },
    headline: "Un local comercial en construcción en La Fortuna.",
    summary: "Local comercial en construcción. Avance de obra próximamente.",
    description: [
      "Activo comercial en construcción dentro de La Fortuna de San Carlos, orientado a negocios que buscan presencia en la zona.",
      "Documentaremos aquí el avance de obra: construcción, materiales, fachada y distribución.",
    ],
    keyFacts: [
      { label: "Estado", value: "En construcción", status: "PROVIDED" },
      { label: "Tipo", value: "Local comercial", status: "PROVIDED" },
    ],
    features: [],
    perspectives: [],
    images: [],
    contextImage: contextImages.laFortunaVolcan,
    pending: [
      "ubicación exacta", "dirección", "pin", "área del local", "área total", "precio de alquiler o venta",
      "fecha estimada de entrega", "parqueo", "frente", "flujo", "distribución", "planos", "renders",
      "servicios", "negocios permitidos", "condiciones comerciales", "depósito", "plazo", "propietario", "comisión",
    ],
    seo: {
      title: "Local Comercial La Fortuna — En construcción",
      description: "Local comercial en construcción en La Fortuna de San Carlos, Costa Rica. Información y avance de obra próximamente.",
    },
  },
  {
    id: "GTM-005",
    slug: "reserva-forestal-la-tigra",
    name: "Reserva Forestal La Tigra",
    brainStatus: "PENDING INFORMATION",
    statusLabel: "Información próximamente",
    isProject: false,
    featured: true,
    categories: ["terrenos"],
    typeLabel: "Tierra · Reserva · Propiedad especial",
    location: {
      label: "La Tigra, San Carlos",
      region: null,
      country: "Costa Rica",
      status: "PROVIDED",
      exact: { value: null, status: "PENDING" },
    },
    price: { value: null, status: "PENDING" },
    currency: { value: null, status: "PENDING" },
    landArea: { value: null, status: "PENDING" },
    constructionArea: { value: null, status: "NOT_APPLICABLE" },
    headline: "Tierra donde el valor natural habla primero.",
    summary: "Un activo territorial de naturaleza, patrimonio y legado.",
    description: [
      "Un activo territorial en La Tigra de San Carlos, donde el valor natural y patrimonial es más relevante que una narrativa inmobiliaria convencional.",
      "La información técnica y legal del activo se encuentra en preparación.",
    ],
    keyFacts: [{ label: "Tipo", value: "Propiedad especial", status: "PROVIDED" }],
    features: [],
    perspectives: [],
    images: [
      img("/images/reserva-forestal-la-tigra/tigra-08.jpg", "Raíces tabulares cubiertas de musgo de un árbol en Reserva Forestal La Tigra"),
      img("/images/reserva-forestal-la-tigra/tigra-07.jpg", "Sendero de tierra entre el bosque en Reserva Forestal La Tigra"),
      img("/images/reserva-forestal-la-tigra/tigra-09.jpg", "Recorrido a pie por un sendero del bosque en Reserva Forestal La Tigra"),
    ],
    pending: [
      "extensión", "ubicación exacta", "plano", "finca", "cobertura", "nacientes", "acceso", "topografía",
      "restricciones", "categoría legal", "uso de suelo", "posibilidades permitidas", "precio",
      "documentación", "fotografías", "drone", "video", "propietario", "comisión",
    ],
    seo: {
      title: "Reserva Forestal La Tigra — San Carlos",
      description: "Activo territorial en La Tigra de San Carlos, Costa Rica. Naturaleza, tierra y patrimonio.",
    },
  },
  {
    id: "GTM-006",
    slug: "terreno-san-carlos",
    name: "Terreno San Carlos",
    brainStatus: "INCOMPLETE PROPERTY",
    statusLabel: "Información próximamente",
    isProject: false,
    featured: false,
    categories: ["terrenos", "inversion"],
    typeLabel: "Terreno",
    location: {
      label: "San Carlos",
      region: null,
      country: "Costa Rica",
      status: "PROVIDED",
      exact: { value: null, status: "PENDING" },
    },
    price: { value: null, status: "PENDING" },
    currency: { value: null, status: "PENDING" },
    landArea: { value: null, status: "PENDING" },
    constructionArea: { value: null, status: "NOT_APPLICABLE" },
    headline: "Tierra en San Carlos.",
    summary: "Terreno en San Carlos. Información próximamente.",
    description: ["Activo de tierra en San Carlos. La información del terreno se encuentra en preparación."],
    keyFacts: [],
    features: [],
    perspectives: [],
    images: [],
    pending: [
      "nombre", "ubicación exacta", "provincia", "cantón", "distrito", "área", "precio", "moneda",
      "topografía", "frente", "acceso", "servicios", "uso de suelo", "plano", "finca", "restricciones",
      "fotografías", "video", "comprador ideal", "propietario", "comisión",
    ],
    seo: {
      title: "Terreno San Carlos",
      description: "Terreno en San Carlos, Costa Rica. Información próximamente.",
    },
  },
  {
    id: "GTM-007",
    slug: "casa-vacacional-los-angeles",
    name: "Casa Vacacional Los Ángeles",
    brainStatus: "INFORMATION IN PROGRESS",
    statusLabel: "Información en progreso",
    isProject: false,
    featured: true,
    categories: ["residencial", "inversion"],
    typeLabel: "Residencial · Vacacional · Segunda residencia",
    location: {
      label: "Los Ángeles, San Carlos",
      region: null,
      country: "Costa Rica",
      status: "PROVIDED",
      exact: { value: null, status: "PENDING" },
    },
    price: { value: null, status: "PENDING" },
    currency: { value: null, status: "PENDING" },
    landArea: { value: null, status: "PENDING" },
    constructionArea: { value: null, status: "PENDING" },
    headline: "Para el descanso y la vida fuera de los centros urbanos.",
    summary: "Una casa para descanso, estadías y segunda residencia.",
    description: [
      "Una propiedad en Los Ángeles de San Carlos pensada para el descanso, las estadías y la vida fuera de los centros urbanos.",
      "Las especificaciones de la casa se encuentran en preparación.",
    ],
    keyFacts: [{ label: "Tipo", value: "Residencial · Vacacional", status: "PROVIDED" }],
    features: [],
    perspectives: [],
    images: [img("/images/casa-vacacional-los-angeles/casa-01.jpg", "Casa de una planta con corredor y portones de vidrio en Los Ángeles de San Carlos")],
    pending: [
      "ubicación exacta", "terreno", "construcción", "habitaciones", "baños", "parqueos", "amenidades",
      "piscina", "jardines", "mobiliario", "precio", "servicios", "acceso", "uso de suelo", "permisos",
      "rentabilidad histórica", "ocupación", "fotografías", "video", "drone", "propietario", "comisión",
    ],
    seo: {
      title: "Casa Vacacional Los Ángeles — San Carlos",
      description: "Casa para descanso y segunda residencia en Los Ángeles de San Carlos, Costa Rica.",
    },
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
export const getPropertyById = (id: string) => properties.find((p) => p.id === id);
export const featuredProperties = () => properties.filter((p) => p.featured && !p.isProject);
export const projects = () => properties.filter((p) => p.isProject);
export const coverImage = (p: Property) => p.images[0] ?? null;

export const formatArea = (m2: number) =>
  new Intl.NumberFormat("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(m2);
