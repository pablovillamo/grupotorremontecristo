import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./ArrowLink";

type Panel = { src: string; alt: string; caption: string; href: string };

/**
 * Hero editorial.
 * Desktop: tríptico de fotografías reales del portafolio (cada una identificada).
 * Móvil: una sola fotografía vertical a pantalla completa (formato nativo del material 4:5).
 */
export function Hero({
  panels,
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
}: {
  panels: Panel[];
  eyebrow: string;
  title: string;
  subtitle: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}) {
  return (
    <section className="relative h-[100svh] min-h-[620px] overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 grid grid-cols-1 gap-px bg-ink md:grid-cols-3">
        {panels.map((p, i) => (
          <div key={p.src} className={`relative overflow-hidden ${i > 0 ? "hidden md:block" : ""}`}>
            <Image
              src={p.src}
              alt={p.alt}
              fill
              priority={i === 0}
              quality={85}
              sizes="(min-width: 768px) 34vw, 100vw"
              className="hero-settle object-cover"
              style={{ animationDelay: `${i * 140}ms` }}
            />
            <Link
              href={p.href}
              className="fade-up absolute top-24 right-5 hidden items-center gap-2 text-[0.6875rem] tracking-wide text-paper/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.55)] hover:text-paper md:top-28 md:flex"
              style={{ ["--delay" as string]: `${900 + i * 120}ms` }}
            >
              <span aria-hidden className="h-px w-5 bg-current" />
              {p.caption}
            </Link>
          </div>
        ))}
      </div>

      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />

      <div className="shell relative flex h-full flex-col justify-end pb-10 md:pb-16">
        <p className="eyebrow fade-up text-paper/75" style={{ ["--delay" as string]: "200ms" }}>
          {eyebrow}
        </p>
        <h1
          className="fade-up mt-5 max-w-[14ch] font-display text-[3.4rem] leading-[0.92] font-medium md:text-[7rem] xl:text-[9rem]"
          style={{ ["--delay" as string]: "320ms" }}
        >
          {title}
        </h1>
        <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
          <p
            className="fade-up max-w-md text-[1rem] leading-relaxed text-paper/85 md:text-[1.125rem]"
            style={{ ["--delay" as string]: "480ms" }}
          >
            {subtitle}
          </p>
          <div className="fade-up flex flex-col gap-3 sm:flex-row" style={{ ["--delay" as string]: "620ms" }}>
            <ButtonLink href={primary.href} tone="light" className="sm:min-w-56">
              {primary.label}
            </ButtonLink>
            <ButtonLink href={secondary.href} tone="light" variant="outline" className="sm:min-w-56">
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
        <p className="mt-6 text-[0.6875rem] text-paper/55 md:hidden">{panels[0].caption}</p>
      </div>
    </section>
  );
}
