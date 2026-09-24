import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicite información sobre una propiedad o converse con un asesor de Grupo Torre Montecristo.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <section className="bg-bone pt-32 pb-24 md:pt-48 md:pb-40">
      <div className="shell grid grid-cols-12 gap-x-5 gap-y-16">
        <div className="col-span-12 md:col-span-5">
          <Reveal className="eyebrow text-stone-dark">Contacto</Reveal>
          <Reveal as="h1" delay={80} className="mt-6 font-display text-[3.25rem] leading-[0.92] font-medium md:text-[6rem]">
            Hablemos.
          </Reveal>
          <Reveal delay={140} className="mt-8 max-w-sm text-[1rem] leading-relaxed text-ink/75 md:text-[1.0625rem]">
            Cuéntenos qué tipo de propiedad busca o sobre cuál activo desea información. Le responderemos con datos claros y el siguiente paso.
          </Reveal>

          <Reveal delay={200} className="mt-14 border-t border-ink/15 md:mt-24">
            <dl>
              <div className="grid grid-cols-[7rem_1fr] border-b border-ink/10 py-4">
                <dt className="eyebrow pt-1 text-stone-dark">Instagram</dt>
                <dd>
                  <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-line text-[0.9375rem]">
                    {site.instagram.handle}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] border-b border-ink/10 py-4">
                <dt className="eyebrow pt-1 text-stone-dark">Web</dt>
                <dd className="text-[0.9375rem]">{site.domain}</dd>
              </div>
              <div className="grid grid-cols-[7rem_1fr] border-b border-ink/10 py-4">
                <dt className="eyebrow pt-1 text-stone-dark">País</dt>
                <dd className="text-[0.9375rem]">{site.country}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120} className="col-span-12 md:col-span-6 md:col-start-7 md:pt-4">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}
