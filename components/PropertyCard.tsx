import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Property } from "@/data/types";
import { categoryLabel } from "@/data/categories";
import { coverImage } from "@/data/properties";
import { TypographicCover } from "./TypographicCover";

export function PropertyCard({
  property,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 768px) 45vw, 100vw",
  headingLevel = "h3",
}: {
  property: Property;
  aspect?: string;
  sizes?: string;
  headingLevel?: "h2" | "h3";
}) {
  const cover = coverImage(property);
  const H = headingLevel;
  return (
    <Link href={`/propiedades/${property.slug}`} className="group block" aria-label={`${property.name} — ${property.location.label}`}>
      <div className={`img-zoom relative overflow-hidden bg-bone-dark ${aspect}`}>
        {cover ? (
          <Image src={cover.src} alt={cover.alt} fill sizes={sizes} className="object-cover" />
        ) : (
          <TypographicCover property={property} tone={property.isProject ? "ink" : "stone"} />
        )}
        <span className="eyebrow absolute top-4 left-4 bg-bone/90 px-2.5 py-1.5 text-ink backdrop-blur-sm">{property.statusLabel}</span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow text-stone-dark">
            {property.id} · {property.categories.map(categoryLabel).slice(0, 2).join(" / ")}
          </p>
          <H className="mt-3 font-display text-[1.625rem] leading-tight font-medium md:text-[1.875rem]">{property.name}</H>
          <p className="mt-1 text-[0.875rem] text-stone-dark">{property.location.label}</p>
          <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-ink/80">{property.summary}</p>
        </div>
        <span
          aria-hidden
          className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-colors duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
        </span>
      </div>
    </Link>
  );
}
