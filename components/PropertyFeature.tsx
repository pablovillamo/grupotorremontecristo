import Image from "next/image";
import type { Property } from "@/data/types";
import { formatArea } from "@/data/properties";
import { ButtonLink } from "./ArrowLink";
import { Reveal } from "./Reveal";

/** Bloque destacado de una propiedad con información suficiente (GTM-001). */
export function PropertyFeature({ property, index }: { property: Property; index: string }) {
  const [main, second, third] = [property.images[1], property.images[2], property.images[0]];
  const house = property.features.find((f) => f.title === "Casa principal");
  return (
    <section className="bg-bone py-24 md:py-40" aria-labelledby="feature-title">
      <div className="shell">
        <Reveal className="flex items-center gap-4 text-stone-dark">
          <span className="eyebrow tabular-nums">{index}</span>
          <span aria-hidden className="h-px w-8 bg-current opacity-50" />
          <span className="eyebrow">Propiedad destacada · {property.id}</span>
        </Reveal>

        <div className="mt-10 grid grid-cols-12 gap-x-5 gap-y-12 md:mt-14">
          <div className="col-span-12 md:col-span-7">
            <Reveal as="h2" className="font-display text-[3rem] leading-[0.95] font-medium md:text-[5.5rem]">
              <span id="feature-title">{property.name}</span>
            </Reveal>
            <Reveal delay={100} className="mt-4 text-[0.9375rem] text-stone-dark">
              {property.location.label}, {property.location.country}
            </Reveal>
            <Reveal delay={160} className="img-zoom relative mt-10 aspect-[4/5] overflow-hidden bg-bone-dark md:mt-14">
              <Image src={main.src} alt={main.alt} fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
            </Reveal>
          </div>

          <div className="col-span-12 flex flex-col md:col-span-5 md:pt-44 md:pl-8">
            <Reveal as="p" className="font-display text-[1.75rem] leading-tight font-medium md:text-[2.25rem]">
              {property.headline}
            </Reveal>

            {property.landArea.value !== null && (
              <Reveal delay={80} className="mt-12 border-t border-ink/15 pt-6">
                <p className="eyebrow text-stone-dark">Terreno</p>
                <p className="mt-3 font-display text-[4rem] leading-none font-medium tabular-nums md:text-[5.5rem]">
                  {formatArea(property.landArea.value)}
                  <span className="ml-2 align-top text-[1.5rem] md:text-[2rem]">m²</span>
                </p>
              </Reveal>
            )}

            {house && (
              <Reveal delay={120} className="mt-10 border-t border-ink/15 pt-6">
                <p className="eyebrow text-stone-dark">{house.title}</p>
                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[0.9375rem]">
                  {house.items.filter((i) => !i.includes("reportada")).map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal delay={160} className="mt-10 border-t border-ink/15 pt-6">
              <ul className="space-y-2.5 text-[0.9375rem]">
                <li>Apartamento independiente</li>
                <li>Menaje incluido</li>
                <li>Agua propia reportada para mantenimiento de áreas verdes</li>
              </ul>
            </Reveal>

            <Reveal delay={200} className="mt-12">
              <ButtonLink href={`/propiedades/${property.slug}`} className="w-full sm:w-auto sm:min-w-64">
                Conocer la propiedad
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal className="img-zoom relative col-span-7 aspect-[4/5] overflow-hidden bg-bone-dark md:col-span-4 md:col-start-2 md:mt-10">
            <Image src={second.src} alt={second.alt} fill sizes="(min-width: 768px) 33vw, 58vw" className="object-cover" />
          </Reveal>
          <Reveal delay={120} className="img-zoom relative col-span-5 mt-16 aspect-[3/4] overflow-hidden bg-bone-dark md:col-span-5 md:col-start-7 md:mt-24 md:aspect-[4/3]">
            <Image src={third.src} alt={third.alt} fill sizes="(min-width: 768px) 42vw, 42vw" className="object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
