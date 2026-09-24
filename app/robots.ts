import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Demo: se bloquea la indexación hasta el lanzamiento oficial. Cambiar a `allow: "/"` en producción.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" }, sitemap: `${site.url}/sitemap.xml` };
}
