import { ButtonLink } from "./ArrowLink";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "¿Busca una propiedad con otra perspectiva?",
  primary = { href: "/contacto", label: "Hablar con un asesor" },
  secondary = { href: "/propiedades", label: "Conozca nuestro portafolio" },
}: {
  title?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string } | null;
}) {
  return (
    <section className="bg-paper py-28 md:py-40">
      <div className="shell">
        <Reveal as="h2" className="max-w-5xl font-display text-[2.5rem] leading-[1] font-medium md:text-[4.75rem]">
          {title}
        </Reveal>
        <Reveal delay={140} className="mt-12 flex flex-col gap-3 sm:flex-row md:mt-16">
          <ButtonLink href={primary.href} className="sm:min-w-64">
            {primary.label}
          </ButtonLink>
          {secondary && (
            <ButtonLink href={secondary.href} variant="outline" className="sm:min-w-64">
              {secondary.label}
            </ButtonLink>
          )}
        </Reveal>
      </div>
    </section>
  );
}
