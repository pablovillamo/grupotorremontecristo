import type { Metadata } from "next";
import { Suspense } from "react";
import { PropertyGrid } from "@/components/PropertyGrid";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Propiedades",
  description:
    "Portafolio de Grupo Torre Montecristo: terrenos, propiedades residenciales, comerciales, proyectos y activos de inversión en Costa Rica.",
  alternates: { canonical: "/propiedades" },
};

export default function PropiedadesPage() {
  return (
    <>
      <section className="bg-bone pt-32 pb-10 md:pt-48 md:pb-16">
        <div className="shell grid grid-cols-12 gap-x-5 gap-y-8">
          <Reveal className="eyebrow col-span-12 text-stone-dark md:col-span-3">Portafolio · {properties.length} activos</Reveal>
          <div className="col-span-12 md:col-span-9">
            <Reveal as="h1" className="font-display text-[3.25rem] leading-[0.92] font-medium md:text-[7.5rem]">
              Propiedades
            </Reveal>
            <Reveal delay={120} className="mt-8 max-w-xl text-[1rem] leading-relaxed text-ink/75 md:text-[1.0625rem]">
              Terrenos, residencias, activos comerciales y proyectos en Costa Rica. Cada ficha publica únicamente información disponible; lo que está en
              preparación se indica como tal.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bone pb-28 md:pb-40">
        <div className="shell">
          <Suspense fallback={null}>
            <PropertyGrid items={properties} />
          </Suspense>
        </div>
      </section>

      <CTASection title="¿No encuentra lo que busca?" secondary={null} primary={{ href: "/contacto", label: "Hablar con un asesor" }} />
    </>
  );
}
