import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  tone = "dark",
  className = "",
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const muted = tone === "light" ? "text-paper/60" : "text-stone-dark";
  return (
    <div className={`grid grid-cols-12 gap-x-5 gap-y-6 ${className}`}>
      <Reveal className={`col-span-12 flex items-center gap-4 md:col-span-3 ${muted}`}>
        {index && <span className="eyebrow tabular-nums">{index}</span>}
        {index && <span aria-hidden className="h-px w-8 bg-current opacity-50" />}
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <div className="col-span-12 md:col-span-9">
        <Reveal as="h2" delay={80} className="font-display text-[2.25rem] leading-[1.02] font-medium md:text-[3.5rem] xl:text-[4.25rem]">
          {title}
        </Reveal>
        {intro && (
          <Reveal delay={160} className={`mt-6 max-w-xl text-[0.9375rem] leading-relaxed md:text-base ${muted}`}>
            {intro}
          </Reveal>
        )}
      </div>
    </div>
  );
}
