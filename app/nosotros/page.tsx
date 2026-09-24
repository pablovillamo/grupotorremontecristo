import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { EditorialStatement } from "@/components/EditorialStatement";
import { CTASection } from "@/components/CTASection";
import { contextImages, getProperty } from "@/data/properties";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Grupo Torre Montecristo: firma inmobiliaria costarricense especializada en propiedades, terrenos, desarrollos y oportunidades de inversión con visión de largo plazo.",
  alternates: { canonical: "/nosotros" },
};

const values = [
  ["Criterio", "Analizamos cada activo antes de comunicarlo."],
  ["Transparencia", "No inventamos rentabilidad, permisos, dimensiones, plusvalía ni posibilidades de desarrollo."],
  ["Visión de largo plazo", "Observamos los bienes raíces desde una perspectiva patrimonial."],
  ["Confianza", "La comunicación y los procesos deben generar seguridad."],
  ["Calidad", "Preferimos presentar correctamente una propiedad antes que llenar el mercado de publicaciones mediocres."],
  ["Respeto por el activo", "Cada propiedad merece una estrategia distinta."],
  ["Evolución", "Utilizamos tecnología, datos, marketing e inteligencia artificial para mejorar la operación inmobiliaria."],
];

export default function NosotrosPage() {
  const tigra = getProperty("reserva-forestal-la-tigra")!;
  const garita = getProperty("quinta-la-garita")!;
  const volcan = contextImages.laFortunaVolcan;

  return (
    <>
      {/* Apertura */}
      <section className="relative isolate h-[100svh] min-h-[600px] overflow-hidden bg-ink text-paper">
        <Image src={tigra.images[0].src} alt={tigra.images[0].alt} fill priority quality={85} sizes="100vw" className="hero-settle -z-10 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/35" />
        <div className="shell flex h-full flex-col justify-end pb-12 md:pb-20">
          <p className="eyebrow fade-up text-paper/70">Nosotros</p>
          <h1 className="fade-up mt-6 max-w-5xl font-display text-[3.25rem] leading-[0.92] font-medium md:text-[7.5rem]" style={{ ["--delay" as string]: "150ms" }}>
            La tierra siempre ha sido más que tierra.
          </h1>
          <p className="mt-8 text-[0.6875rem] text-paper/50">Reserva Forestal La Tigra, San Carlos</p>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-bone py-24 md:py-40">
        <div className="shell grid grid-cols-12 gap-x-5 gap-y-10">
          <Reveal className="eyebrow col-span-12 text-stone-dark md:col-span-3">01 — Historia</Reveal>
          <div className="col-span-12 md:col-span-8">
            <Reveal as="p" className="font-display text-[1.875rem] leading-[1.12] font-medium md:text-[3rem]">
              Grupo Torre Montecristo surge de una relación directa con la tierra, los activos inmobiliarios y la construcción de patrimonio.
            </Reveal>
            <Reveal delay={120} className="mt-12 grid gap-6 text-[1rem] leading-relaxed text-ink/75 md:grid-cols-2 md:gap-10 md:text-[1.0625rem]">
              <p>
                Conforme el portafolio fue creciendo, apareció una necesidad clara: las propiedades no podían seguir siendo presentadas únicamente como
                metros cuadrados, fotografías y precios.
              </p>
              <p>
                Cada activo tiene un contexto, una ubicación, una historia y un potencial. Grupo Torre Montecristo nace para organizar y comunicar ese
                valor con mayor criterio.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Imagen + frase */}
      <section className="bg-bone pb-24 md:pb-40">
        <div className="shell grid grid-cols-12 gap-x-5 gap-y-10">
          <Reveal className="img-zoom relative col-span-12 aspect-[4/5] overflow-hidden bg-bone-dark md:col-span-6 md:aspect-[5/6]">
            <Image src={garita.images[0].src} alt={garita.images[0].alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <div className="col-span-12 flex flex-col justify-end md:col-span-5 md:col-start-8">
            <Reveal as="p" className="font-display text-[2.5rem] leading-[0.98] font-medium md:text-[4rem]">
              No buscamos construir el catálogo más grande del mercado.
            </Reveal>
            <Reveal as="p" delay={120} className="mt-6 font-display text-[2.5rem] leading-[0.98] font-medium text-stone-dark md:text-[4rem]">
              Buscamos construir un portafolio que tenga sentido.
            </Reveal>
            <p className="mt-10 text-[0.75rem] text-stone-dark">Quinta La Garita, Alajuela</p>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <EditorialStatement eyebrow="02 — Misión" statement="Transformamos tierra y propiedades en oportunidades para vivir, invertir y construir patrimonio." tone="dark">
        <p>
          Identificar, posicionar y comercializar propiedades inmobiliarias en Costa Rica, conectando cada activo con compradores e inversionistas
          mediante información clara, presentación de alto nivel y una visión orientada al valor de largo plazo.
        </p>
        <p>
          <span className="eyebrow mb-3 block text-paper/45">Visión</span>
          Convertir a Grupo Torre Montecristo en una firma inmobiliaria reconocida en Costa Rica por la calidad de su portafolio, su criterio para identificar oportunidades y su forma
          contemporánea de comercializar bienes raíces.
        </p>
      </EditorialStatement>

      {/* Valores */}
      <section className="bg-bone py-24 md:py-40" aria-labelledby="valores">
        <div className="shell grid grid-cols-12 gap-x-5 gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <Reveal className="eyebrow text-stone-dark">03 — Valores</Reveal>
            <Reveal as="h2" delay={80} className="mt-6 font-display text-[2.5rem] leading-[0.95] font-medium md:sticky md:top-32 md:text-[4rem]">
              <span id="valores">Lo que guía cada decisión.</span>
            </Reveal>
          </div>
          <ol className="col-span-12 md:col-span-7 md:col-start-6">
            {values.map(([t, x], i) => (
              <Reveal as="li" key={t} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-ink/15 py-8 md:grid-cols-[4rem_1fr] md:py-10">
                <span className="eyebrow pt-2 text-stone-dark tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-[1.75rem] leading-tight font-medium md:text-[2.25rem]">{t}</h3>
                  <p className="mt-3 max-w-lg text-[0.9375rem] leading-relaxed text-ink/70">{x}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Posicionamiento */}
      <section className="relative isolate overflow-hidden bg-forest py-24 text-paper md:py-40">
        <Image src={volcan.src} alt={volcan.alt} fill sizes="100vw" className="-z-10 object-cover opacity-25 mix-blend-luminosity" />
        <div className="shell grid grid-cols-12 gap-x-5 gap-y-12">
          <div className="col-span-12 md:col-span-6">
            <Reveal className="eyebrow text-paper/55">04 — Posicionamiento</Reveal>
            <Reveal as="h2" delay={80} className="mt-6 font-display text-[2.5rem] leading-[0.98] font-medium md:text-[4.25rem]">
              Real Estate con visión de largo plazo.
            </Reveal>
            <Reveal delay={140} className="mt-8 max-w-md text-[1rem] leading-relaxed text-paper/75">
              Una firma inmobiliaria costarricense que combina tierra, patrimonio, inversión y una forma contemporánea de presentar bienes raíces.
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <Reveal className="eyebrow text-paper/55">Competimos mediante</Reveal>
            <Reveal as="ul" delay={100} className="mt-6 grid grid-cols-2 gap-x-6 border-t border-paper/20">
              {["Presentación", "Criterio", "Narrativa", "Conocimiento del activo", "Experiencia digital", "Proceso comercial", "Calidad de contenido", "Seguimiento estructurado"].map((x) => (
                <li key={x} className="border-b border-paper/15 py-4 text-[0.9375rem]">
                  {x}
                </li>
              ))}
            </Reveal>
          </div>
        </div>
        <p className="shell mt-16 text-[0.6875rem] text-paper/40">{volcan.caption}</p>
      </section>

      {/* Territorio */}
      <section className="bg-paper py-24 md:py-36">
        <div className="shell">
          <Reveal className="eyebrow text-stone-dark">Territorio de marca</Reveal>
          <Reveal as="ul" delay={80} className="mt-10 grid grid-cols-2 border-t border-ink/15 md:grid-cols-4">
            {["Tierra", "Inversión", "Patrimonio", "Futuro"].map((w, i) => (
              <li key={w} className="border-b border-ink/10 py-6 pr-4 md:border-b-0 md:py-8">
                <span className="eyebrow text-stone-dark tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-4 block font-display text-[2.25rem] leading-none font-medium md:text-[4rem]">{w}</span>
              </li>
            ))}
          </Reveal>
          <Reveal delay={140} className="mt-10 max-w-xl text-[1rem] leading-relaxed text-ink/70">
            {site.promise}
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
