import type { Metadata } from "next";
import { ProjectFeature } from "@/components/ProjectFeature";
import { CTASection } from "@/components/CTASection";
import { getProperty } from "@/data/properties";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos inmobiliarios de Grupo Torre Montecristo en Costa Rica: desarrollos en preparación y en construcción.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  const fluca = getProperty("zona-fluca-hills")!;
  const fortuna = getProperty("local-comercial-la-fortuna")!;
  return (
    <>
      <section className="bg-ink pt-32 pb-20 text-paper md:pt-48 md:pb-28">
        <div className="shell grid grid-cols-12 gap-x-5 gap-y-8">
          <p className="eyebrow col-span-12 text-paper/50 md:col-span-3">Proyectos · 02</p>
          <div className="col-span-12 md:col-span-9">
            <h1 className="fade-up font-display text-[3.25rem] leading-[0.92] font-medium md:text-[7.5rem]">Proyectos</h1>
            <p className="fade-up mt-8 max-w-xl text-[1rem] leading-relaxed text-paper/70 md:text-[1.0625rem]" style={{ ["--delay" as string]: "150ms" }}>
              Desarrollos en preparación y en construcción. Publicamos cada etapa a medida que la información está disponible.
            </p>
          </div>
        </div>
      </section>
      <div className="space-y-px bg-paper/10">
        <ProjectFeature property={fluca} index="01" eyebrow="Proyecto de lotes" slots={["Ubicación", "Lotes", "Lanzamiento"]} />
        <ProjectFeature property={fortuna} index="02" eyebrow="Desarrollo comercial" slots={["Ubicación exacta", "Área", "Entrega"]} />
      </div>
      <CTASection
        title="Reciba la información de nuestros proyectos cuando esté disponible."
        primary={{ href: "/contacto", label: "Solicitar información" }}
        secondary={{ href: "/propiedades", label: "Explorar propiedades" }}
      />
    </>
  );
}
