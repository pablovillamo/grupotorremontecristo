/** Fuente: 00_MASTER/MASTER_CONTEXT.md, 09_INFRASTRUCTURE */
export const site = {
  name: "Grupo Torre Montecristo",
  brand: "torremontecristo",
  descriptor: "Real Estate",
  domain: "grupotorremontecristo.com",
  url: "https://grupotorremontecristo.com",
  instagram: {
    handle: "@grupotorremontecristo",
    url: "https://www.instagram.com/grupotorremontecristo/",
  },
  country: "Costa Rica",
  claim: "Propiedades con perspectiva.",
  narrative: "Tierra. Inversión. Futuro.",
  emotionalClaim: "Más que propiedades. Legados.",
  promise: "Propiedades presentadas con criterio, información y perspectiva.",
  description:
    "Grupo Torre Montecristo es una firma inmobiliaria costarricense enfocada en propiedades, tierra y oportunidades de inversión con visión de largo plazo.",
  /**
   * Correos corporativos: PROVISIONAL / no operativos (Google Workspace pendiente).
   * Teléfono / WhatsApp: PENDING. No se publican hasta estar activos.
   */
  contact: {
    email: null as string | null,
    phone: null as string | null,
    whatsapp: null as string | null,
  },
};

export const nav = [
  { href: "/propiedades", label: "Propiedades" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;
