import { Reveal } from "./Reveal";

/** Frase editorial a gran escala con texto de apoyo. */
export function EditorialStatement({
  eyebrow,
  statement,
  children,
  tone = "light",
}: {
  eyebrow?: string;
  statement: React.ReactNode;
  children?: React.ReactNode;
  tone?: "light" | "dark" | "sand";
}) {
  const bg = tone === "dark" ? "bg-ink text-paper" : tone === "sand" ? "bg-sand/40 text-ink" : "bg-bone text-ink";
  const muted = tone === "dark" ? "text-paper/65" : "text-ink/70";
  return (
    <section className={`${bg} py-28 md:py-44`}>
      <div className="shell grid grid-cols-12 gap-x-5 gap-y-10">
        {eyebrow && (
          <Reveal className={`eyebrow col-span-12 md:col-span-3 ${tone === "dark" ? "text-paper/50" : "text-stone-dark"}`}>{eyebrow}</Reveal>
        )}
        <div className={`col-span-12 ${eyebrow ? "md:col-span-9" : ""}`}>
          <Reveal as="p" className="font-display text-[2.75rem] leading-[0.98] font-medium md:text-[5.5rem] xl:text-[7rem]">
            {statement}
          </Reveal>
          {children && (
            <Reveal delay={150} className={`mt-12 grid max-w-3xl gap-6 text-[1rem] leading-relaxed md:mt-16 md:grid-cols-2 md:gap-10 md:text-[1.0625rem] ${muted}`}>
              {children}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
