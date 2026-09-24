import Image from "next/image";
import type { Property } from "@/data/types";
import { ButtonLink } from "./ArrowLink";
import { Reveal } from "./Reveal";

/**
 * Proyecto con información limitada: diseño de anticipación, sin datos inventados.
 * Los campos "Por anunciar" representan datos PENDING en la ficha GTM.
 */
export function ProjectFeature({
  property,
  index,
  eyebrow = "Proyecto",
  slots,
}: {
  property: Property;
  index?: string;
  eyebrow?: string;
  slots: string[];
}) {
  const image = property.images[0] ?? property.contextImage ?? null;
  const isContext = !property.images[0] && !!property.contextImage;
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper" aria-label={property.name}>
      {image && (
        <Image src={image.src} alt={image.alt} fill sizes="100vw" quality={85} className={`-z-10 object-cover ${isContext ? "opacity-45 grayscale" : "opacity-60"}`} />
      )}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />

      <div className="shell flex min-h-[92svh] flex-col justify-between py-24 md:py-32">
        <Reveal className="flex items-center gap-4 text-paper/60">
          {index && <span className="eyebrow tabular-nums">{index}</span>}
          {index && <span aria-hidden className="h-px w-8 bg-current opacity-50" />}
          <span className="eyebrow">
            {eyebrow} · {property.id}
          </span>
        </Reveal>

        <div className="mt-24 max-w-3xl">
          <Reveal className="inline-flex items-center gap-3 border border-paper/30 px-3 py-2">
            <span aria-hidden className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-paper" />
            </span>
            <span className="eyebrow">{property.statusLabel}</span>
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-8 font-display text-[3.25rem] leading-[0.92] font-medium md:text-[7rem]">
            {property.name}
          </Reveal>
          <Reveal delay={160} className="mt-8 max-w-md text-[1.0625rem] leading-relaxed text-paper/80">
            <p>{property.summary}</p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal delay={120} className="md:col-span-7">
            <dl className="grid grid-cols-2 border-t border-paper/20 sm:grid-cols-4">
              <div className="border-b border-paper/15 py-4 pr-4">
                <dt className="eyebrow text-paper/50">Tipo</dt>
                <dd className="mt-2 text-[0.9375rem]">{property.typeLabel.split(" · ")[0]}</dd>
              </div>
              {slots.map((s) => (
                <div key={s} className="border-b border-paper/15 py-4 pr-4">
                  <dt className="eyebrow text-paper/50">{s}</dt>
                  <dd className="mt-2 text-[0.9375rem] text-paper/55 italic">Por anunciar</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={200} className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
            <ButtonLink href={`/contacto?propiedad=${property.slug}`} tone="light" className="sm:min-w-56">
              Solicitar información
            </ButtonLink>
            <ButtonLink href={`/propiedades/${property.slug}`} tone="light" variant="outline" className="sm:min-w-44">
              Ver ficha
            </ButtonLink>
          </Reveal>
        </div>
        {isContext && property.contextImage && (
          <p className="mt-8 text-[0.6875rem] text-paper/45">{property.contextImage.caption}. No corresponde a la propiedad.</p>
        )}
      </div>
    </section>
  );
}
