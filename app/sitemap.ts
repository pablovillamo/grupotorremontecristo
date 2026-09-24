import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/propiedades", "/proyectos", "/nosotros", "/contacto"].map((p) => ({ url: `${site.url}${p}` }));
  return [...pages, ...properties.map((p) => ({ url: `${site.url}/propiedades/${p.slug}` }))];
}
