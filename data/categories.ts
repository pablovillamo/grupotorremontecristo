import type { CategoryId } from "./types";
import { properties } from "./properties";

/** Categorías de 04_WEBSITE/HOME.md y WEBSITE_ARCHITECTURE.md */
export const categories: {
  id: CategoryId;
  label: string;
  line: string;
  image: { src: string; alt: string };
}[] = [
  {
    id: "terrenos",
    label: "Terrenos",
    line: "Tierra para construir, conservar o desarrollar.",
    image: { src: "/images/reserva-forestal-la-tigra/tigra-07.jpg", alt: "Sendero en Reserva Forestal La Tigra" },
  },
  {
    id: "residencial",
    label: "Residencial",
    line: "Hogar, quinta y segunda residencia.",
    image: { src: "/images/quinta-la-garita/garita-03.jpg", alt: "Acceso a Quinta La Garita" },
  },
  {
    id: "comercial",
    label: "Comercial",
    line: "Activos para negocio y uso mixto.",
    image: { src: "/images/los-angeles-comercial/comercial-01.jpg", alt: "Edificación comercial en Los Ángeles de San Carlos" },
  },
  {
    id: "inversion",
    label: "Inversión",
    line: "Activos observados con visión de largo plazo.",
    image: { src: "/images/casa-vacacional-los-angeles/casa-01.jpg", alt: "Casa Vacacional Los Ángeles" },
  },
  {
    id: "proyectos",
    label: "Proyectos",
    line: "Desarrollos en preparación y en construcción.",
    image: { src: "/images/zona-fluca-hills/fluca-01.jpg", alt: "Zona Fluca Hills" },
  },
];

export const categoryLabel = (id: CategoryId) => categories.find((c) => c.id === id)?.label ?? id;

export const countByCategory = (id: CategoryId) =>
  properties.filter((p) => p.categories.includes(id)).length;
