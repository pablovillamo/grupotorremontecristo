/**
 * Estados de información definidos en el Brain (05_OPERATIONS/DATA_GOVERNANCE.md).
 * Regla: PENDING nunca se publica como dato; se representa con `null`.
 */
export type DataStatus =
  | "VERIFIED"
  | "PROVIDED"
  | "PROVISIONAL"
  | "PENDING"
  | "NOT_APPLICABLE";

export type Field<T> = {
  value: T | null;
  status: DataStatus;
};

export type CategoryId =
  | "terrenos"
  | "residencial"
  | "comercial"
  | "inversion"
  | "proyectos";

export type PropertyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Imagen editorial de contexto: NO es fotografía de la propiedad. */
export type ContextImage = PropertyImage & { caption: string };

export type Property = {
  id: `GTM-${string}`;
  slug: string;
  name: string;
  /** Estado interno según ficha GTM (01_PROPERTIES). */
  brainStatus: string;
  /** Etiqueta pública derivada del estado interno. */
  statusLabel: string;
  isProject: boolean;
  featured: boolean;
  categories: CategoryId[];
  /** Tipo tal como aparece en la ficha GTM. */
  typeLabel: string;

  location: {
    label: string;
    region: string | null;
    country: "Costa Rica";
    status: DataStatus;
    /** Pin / dirección exacta — PENDING en todos los activos actuales. */
    exact: Field<string>;
  };

  price: Field<number>;
  currency: Field<"CRC" | "USD">;
  landArea: Field<number>; // m²
  constructionArea: Field<number>; // m²

  /** Titular editorial. Copy PROVISIONAL aprobado en el Brain o derivado sin datos nuevos. */
  headline: string;
  /** Frase breve para tarjetas. */
  summary: string;
  /** Narrativa. Solo contenido presente en la ficha GTM. */
  description: string[];

  /** Datos clave publicables (nunca PENDING). */
  keyFacts: { label: string; value: string; status: DataStatus }[];

  /** Características agrupadas, solo las reportadas. */
  features: { title: string; items: string[]; status: DataStatus }[];

  /** Lectura del activo / oportunidad (PROVISIONAL, sin promesas). */
  perspectives: { title: string; text: string }[];

  /**
   * Datos suministrados que aún requieren verificación.
   * Se conservan en la data pero NO se publican (publish: false).
   */
  unverified?: { label: string; items: string[]; status: string; publish: false };

  images: PropertyImage[];
  contextImage?: ContextImage;

  /** Información pendiente según la ficha GTM (uso interno / CMS futuro). */
  pending: string[];

  seo: { title: string; description: string };
};
