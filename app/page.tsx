import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { PropertyCard } from "@/components/PropertyCard";
import { EditorialStatement } from "@/components/EditorialStatement";
import { CategoryIndex } from "@/components/CategoryIndex";
import { PropertyFeature } from "@/components/PropertyFeature";
import { ProjectFeature } from "@/components/ProjectFeature";
import { CTASection } from "@/components/CTASection";
import { ArrowLink } from "@/components/ArrowLink";
import { Reveal } from "@/components/Reveal";
import { featuredProperties, getProperty, properties } from "@/data/properties";
import { site } from "@/lib/site";

export default function Home() {
  const garita = getProperty("quinta-la-garita")!;
  const fluca = getProperty("zona-fluca-hills")!;
  const tigra = getProperty("reserva-forestal-la-tigra")!;
  const featured = featuredProperties(); // GTM-001, 003, 005, 007

  const [a, b, c, d] = featured;

  return (
    <>
      {/* 01 — HERO */}
      <Hero
        eyebrow="Real Estate · Costa Rica"
        title={site.claim}
        subtitle="Tierra, propiedades y oportunidades inmobiliarias en Costa Rica."
        primary={{ href: "/propiedades", label: "Explorar propiedades" }}
        secondary={{ href: "/contacto", label: "Hablar con un asesor" }}
        panels={[
          { src: garita.images[0].src, alt: garita.images[0].alt, caption: "Quinta La Garita — Alajuela", href: `/propiedades/${garita.slug}` },
          { src: fluca.images[0].src, alt: fluca.images[0].alt, caption: "Zona Fluca Hills — Proyecto", href: `/propiedades/${fluca.slug}` },
          { src: tigra.images[1].src, alt: tigra.images[1].alt, caption: "Reserva Forestal La Tigra — San Carlos", href: `/propiedades/${tigra.slug}` },
        ]}
      />

      {/* Intro */}
      <section className="bg-bone pt-24 pb-6 md:pt-36">
        <div className="shell grid grid-cols-12 gap-x-5">
          <Reveal as="p" className="col-span-12 font-display text-[1.75rem] leading-[1.15] font-medium md:col-span-10 md:col-start-3 md:text-[2.75rem]">
            {site.description}
          </Reveal>
        </div>
      </section>

      {/* 02 — PORTAFOLIO DESTACADO */}
      <section className="bg-bone py-24 md:py-36" aria-labelledby="portafolio">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="Portafolio"
            title={<span id="portafolio">Propiedades seleccionadas</span>}
            intro="No buscamos construir el catálogo más grande del mercado. Buscamos construir un portafolio que tenga sentido."
          />

          <div className="mt-16 grid grid-cols-12 gap-x-5 gap-y-16 md:mt-24 md:gap-y-28">
            <Reveal className="col-span-12 md:col-span-7">
              <PropertyCard property={a} aspect="aspect-[4/5] md:aspect-[5/5]" sizes="(min-width: 768px) 58vw, 100vw" />
            </Reveal>
            <Reveal delay={120} className="col-span-12 md:col-span-4 md:col-start-9 md:mt-56">
              <PropertyCard property={b} sizes="(min-width: 768px) 33vw, 100vw" />
            </Reveal>
            <Reveal className="col-span-12 md:col-span-5 md:col-start-2">
              <PropertyCard property={c} sizes="(min-width: 768px) 42vw, 100vw" />
            </Reveal>
            <Reveal delay={120} className="col-span-12 md:col-span-5 md:col-start-8 md:mt-40">
              <PropertyCard property={d} sizes="(min-width: 768px) 42vw, 100vw" />
            </Reveal>
          </div>

          <Reveal className="mt-20 flex justify-end border-t border-ink/15 pt-6 md:mt-28">
            <ArrowLink href="/propiedades">Ver el portafolio completo · {properties.length} activos</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* 03 — FILOSOFÍA */}
      <EditorialStatement eyebrow="03 — Filosofía" statement={site.narrative} tone="dark">
        <p>
          Una propiedad puede representar mucho más que metros cuadrados. Puede convertirse en hogar, inversión, negocio, refugio o patrimonio.
        </p>
        <p>Nuestro trabajo es entender el activo, presentarlo correctamente y conectarlo con quien puede reconocer su valor.</p>
      </EditorialStatement>

      {/* 04 — CATEGORÍAS */}
      <section className="bg-bone py-24 md:py-36" aria-labelledby="categorias">
        <div className="shell">
          <SectionHeading index="04" eyebrow="Categorías" title={<span id="categorias">Cinco formas de leer un activo.</span>} />
          <div className="mt-14 md:mt-20">
            <CategoryIndex />
          </div>
        </div>
      </section>

      {/* 05 — PROPIEDAD DESTACADA */}
      <PropertyFeature property={garita} index="05" />

      {/* 06 — PROYECTO */}
      <ProjectFeature property={fluca} index="06" eyebrow="Proyecto" slots={["Ubicación", "Lotes", "Lanzamiento"]} />

      {/* 07 — TORRE MONTECRISTO */}
      <section className="bg-paper py-24 md:py-40" aria-labelledby="legados">
        <div className="shell grid grid-cols-12 gap-x-5 gap-y-14">
          <div className="col-span-12 md:col-span-6">
            <Reveal className="eyebrow text-stone-dark">07 — Torre Montecristo</Reveal>
            <Reveal as="h2" delay={80} className="mt-8 font-display text-[3rem] leading-[0.95] font-medium md:text-[5.75rem]">
              <span id="legados">
                Más que propiedades.
                <br />
                Legados.
              </span>
            </Reveal>
            <Reveal delay={140} className="mt-12 max-w-lg space-y-5 text-[1rem] leading-relaxed text-ink/75 md:text-[1.0625rem]">
              <p>
                Grupo Torre Montecristo surge de una relación directa con la tierra, los activos inmobiliarios y la construcción de patrimonio.
              </p>
              <p>
                Trabajamos cada activo desde una perspectiva individual: su ubicación, sus características, su contexto y sus posibilidades. Porque cada
                propiedad merece una estrategia distinta.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-10">
              <ArrowLink href="/nosotros">Conozca nuestra filosofía</ArrowLink>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <Reveal className="img-zoom relative aspect-[4/5] overflow-hidden bg-bone-dark">
              <Image src={tigra.images[0].src} alt={tigra.images[0].alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </Reveal>
            <p className="mt-3 text-[0.75rem] text-stone-dark">Reserva Forestal La Tigra, San Carlos</p>
          </div>

          <Reveal as="ul" className="col-span-12 mt-6 grid grid-cols-2 border-t border-ink/15 md:mt-16 md:grid-cols-4">
            {[
              ["Criterio", "Analizamos cada activo antes de comunicarlo."],
              ["Transparencia", "No inventamos rentabilidad, permisos, dimensiones ni plusvalía."],
              ["Visión de largo plazo", "Observamos los bienes raíces desde una perspectiva patrimonial."],
              ["Respeto por el activo", "Cada propiedad merece una estrategia distinta."],
            ].map(([t, x], i) => (
              <li key={t} className={`py-8 pr-6 ${i % 2 === 1 ? "pl-5 md:pl-0" : ""} border-b border-ink/10 md:border-b-0`}>
                <p className="eyebrow text-stone-dark tabular-nums">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-4 font-display text-[1.375rem] leading-tight font-medium">{t}</p>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/70">{x}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 08 — CTA */}
      <CTASection />
    </>
  );
}
