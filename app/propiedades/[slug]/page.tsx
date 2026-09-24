import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { properties, getProperty, formatArea } from "@/data/properties";
import { categoryLabel } from "@/data/categories";
import { PropertyMetadata } from "@/components/PropertyMetadata";
import { PropertyGallery } from "@/components/PropertyGallery";
import { PendingNote } from "@/components/PendingNote";
import { ButtonLink } from "@/components/ArrowLink";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/propiedades/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) return {};
  const cover = p.images[0];
  return {
    title: p.seo.title,
    description: p.seo.description,
    alternates: { canonical: `/propiedades/${p.slug}` },
    openGraph: {
      title: `${p.name} · ${site.name}`,
      description: p.seo.description,
      url: `/propiedades/${p.slug}`,
      images: cover ? [{ url: cover.src, width: cover.width, height: cover.height, alt: cover.alt }] : undefined,
    },
  };
}

export default async function PropertyPage({ params }: PageProps<"/propiedades/[slug]">) {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) notFound();

  const idx = properties.findIndex((x) => x.id === p.id);
  const next = properties[(idx + 1) % properties.length];
  const hero = p.images[0] ?? null;
  const context = !hero ? p.contextImage ?? null : null;
  const hasRichContent = p.features.length > 0;

  return (
    <article>
      {/* HERO */}
      <header className="relative isolate h-[92svh] min-h-[560px] overflow-hidden bg-ink text-paper md:h-[100svh]">
        {hero && (
          <Image src={hero.src} alt={hero.alt} fill priority quality={85} sizes="100vw" className="hero-settle -z-10 object-cover" />
        )}
        {context && (
          <Image src={context.src} alt={context.alt} fill priority sizes="100vw" className="-z-10 object-cover opacity-45 grayscale" />
        )}
        {!hero && !context && (
          <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:72px_72px]" />
        )}
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/30" />

        <div className="shell flex h-full flex-col justify-end pb-10 md:pb-16">
          <nav aria-label="Ruta" className="fade-up mb-auto pt-28 text-[0.75rem] text-paper/65 md:pt-32">
            <Link href="/propiedades" className="link-line hover:text-paper">
              Propiedades
            </Link>
            <span className="mx-2">/</span>
            <span>{p.id}</span>
          </nav>

          <p className="eyebrow fade-up text-paper/70" style={{ ["--delay" as string]: "150ms" }}>
            {p.id} · {p.categories.map(categoryLabel).join(" / ")}
          </p>
          <h1
            className="fade-up mt-5 max-w-5xl font-display text-[3.25rem] leading-[0.92] font-medium md:text-[7.5rem]"
            style={{ ["--delay" as string]: "250ms" }}
          >
            {p.name}
          </h1>
          <div className="fade-up mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.9375rem] text-paper/85" style={{ ["--delay" as string]: "400ms" }}>
            <span>{p.location.status === "PENDING" ? "Ubicación por anunciar" : `${p.location.label}, ${p.location.country}`}</span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-paper" />
              {p.statusLabel}
            </span>
            {p.landArea.value !== null && <span className="tabular-nums">{formatArea(p.landArea.value)} m²</span>}
          </div>
          {context && <p className="mt-6 text-[0.6875rem] text-paper/50">{context.caption}. No corresponde a la propiedad.</p>}
        </div>
      </header>

      {/* INTRO + FICHA */}
      <section className="bg-bone py-20 md:py-32">
        <div className="shell grid grid-cols-12 gap-x-5 gap-y-14">
          <div className="col-span-12 md:col-span-6">
            <Reveal as="p" className="font-display text-[2rem] leading-[1.05] font-medium md:text-[3.25rem]">
              {p.headline}
            </Reveal>
            <Reveal delay={120} className="mt-10 max-w-lg space-y-5 text-[1rem] leading-relaxed text-ink/75 md:text-[1.0625rem]">
              {p.description.map((d) => (
                <p key={d}>{d}</p>
              ))}
            </Reveal>
            <Reveal delay={180} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/contacto?propiedad=${p.slug}`} className="sm:min-w-56">
                Solicitar información
              </ButtonLink>
              {!p.isProject && (
                <ButtonLink href={`/contacto?propiedad=${p.slug}&motivo=visita`} variant="outline" className="sm:min-w-48">
                  Agendar visita
                </ButtonLink>
              )}
            </Reveal>
          </div>
          <Reveal delay={100} className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="eyebrow mb-5 text-stone-dark">Ficha</p>
            <PropertyMetadata property={p} />
          </Reveal>
        </div>
      </section>

      {/* DATO GRANDE */}
      {p.landArea.value !== null && (
        <section className="border-y border-ink/10 bg-paper py-16 md:py-24">
          <div className="shell grid grid-cols-12 items-end gap-x-5 gap-y-6">
            <Reveal className="col-span-12 md:col-span-8">
              <p className="eyebrow text-stone-dark">Área de terreno</p>
              <p className="mt-4 font-display text-[4.5rem] leading-[0.85] font-medium tabular-nums md:text-[11rem]">
                {formatArea(p.landArea.value)}
                <span className="ml-3 align-top text-[2rem] md:text-[4rem]">m²</span>
              </p>
            </Reveal>
            {p.keyFacts.length > 1 && (
              <Reveal delay={120} as="ul" className="col-span-12 hidden border-t border-ink/15 md:col-span-4 md:block">
                {p.keyFacts.slice(1).map((f) => (
                  <li key={f.label} className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-3.5">
                    <span className="eyebrow text-stone-dark">{f.label}</span>
                    <span className="text-right text-[0.9375rem] leading-snug">{f.value}</span>
                  </li>
                ))}
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* GALERÍA */}
      {p.images.length > 1 && (
        <section className="bg-bone py-20 md:py-32" aria-labelledby="galeria">
          <div className="shell">
            <div className="mb-10 flex items-end justify-between md:mb-14">
              <h2 id="galeria" className="font-display text-[2.25rem] leading-none font-medium md:text-[3.5rem]">
                Galería
              </h2>
              <span className="eyebrow text-stone-dark tabular-nums">{String(p.images.length).padStart(2, "0")} fotografías</span>
            </div>
            <PropertyGallery images={p.images} name={p.name} />
          </div>
        </section>
      )}

      {/* CARACTERÍSTICAS */}
      {hasRichContent && (
        <section className="bg-bone pb-20 md:pb-32" aria-labelledby="caracteristicas">
          <div className="shell grid grid-cols-12 gap-x-5 gap-y-12">
            <div className="col-span-12 md:col-span-4">
              <h2 id="caracteristicas" className="font-display text-[2.25rem] leading-none font-medium md:text-[3.5rem]">
                Características
              </h2>
              <p className="mt-5 max-w-xs text-[0.8125rem] leading-relaxed text-stone-dark">
                Información suministrada por el propietario, en proceso de verificación documental.
              </p>
            </div>
            <div className="col-span-12 grid gap-10 md:col-span-8 md:grid-cols-3 md:gap-8">
              {p.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 90} className="border-t border-ink/20 pt-5">
                  <h3 className="eyebrow text-ink">{f.title}</h3>
                  <ul className="mt-5 space-y-2.5 text-[0.9375rem] text-ink/80">
                    {f.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PERSPECTIVA */}
      {p.perspectives.length > 0 && (
        <section className="bg-ink py-24 text-paper md:py-36" aria-labelledby="perspectiva">
          <div className="shell grid grid-cols-12 gap-x-5 gap-y-12">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow text-paper/50">Contexto · Oportunidad</p>
              <h2 id="perspectiva" className="mt-6 font-display text-[2.5rem] leading-[0.95] font-medium md:text-[4rem]">
                Una propiedad, varias lecturas.
              </h2>
            </div>
            <ol className="col-span-12 md:col-span-7 md:col-start-6">
              {p.perspectives.map((x, i) => (
                <Reveal as="li" key={x.title} delay={i * 90} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-paper/15 py-7 md:grid-cols-[4rem_12rem_1fr]">
                  <span className="eyebrow pt-1 text-paper/45 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-[1.375rem] leading-tight font-medium">{x.title}</h3>
                  <p className="col-start-2 text-[0.9375rem] leading-relaxed text-paper/70 md:col-start-3">{x.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* AVANCE DE OBRA (solo activos en construcción) */}
      {p.brainStatus === "UNDER CONSTRUCTION" && (
        <section className="bg-paper py-20 md:py-28">
          <div className="shell grid grid-cols-12 gap-x-5 gap-y-8">
            <p className="eyebrow col-span-12 text-stone-dark md:col-span-4">Avance de obra</p>
            <div className="col-span-12 md:col-span-8">
              <p className="font-display text-[2rem] leading-tight font-medium md:text-[3rem]">
                Construcción, materiales, fachada y distribución: documentaremos cada etapa aquí.
              </p>
              <PendingNote className="mt-8">Primer reporte de obra próximamente</PendingNote>
            </div>
          </div>
        </section>
      )}

      {/* UBICACIÓN */}
      <section className="bg-bone py-20 md:py-32" aria-labelledby="ubicacion">
        <div className="shell grid grid-cols-12 gap-x-5 gap-y-10 border-t border-ink/15 pt-10 md:pt-14">
          <div className="col-span-12 md:col-span-4">
            <h2 id="ubicacion" className="eyebrow text-stone-dark">
              Ubicación
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="font-display text-[2.75rem] leading-[0.95] font-medium md:text-[5rem]">
              {p.location.status === "PENDING" ? "Por anunciar" : p.location.label}
            </p>
            <p className="mt-4 text-[1rem] text-ink/70">
              {[p.location.region, p.location.country].filter(Boolean).join(" · ")}
            </p>
            <div className="mt-10 border-t border-ink/10 pt-5">
              <p className="eyebrow mb-3 text-stone-dark">Ubicación exacta y mapa</p>
              <PendingNote />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 text-paper md:py-36">
        <div className="shell grid grid-cols-12 gap-x-5 gap-y-12">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow text-paper/50">{p.id}</p>
            <h2 className="mt-6 font-display text-[2.5rem] leading-[0.98] font-medium md:text-[4.5rem]">
              ¿Desea conocer {p.name}?
            </h2>
            <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-paper/70">
              Precio, condiciones y documentación se comparten a medida que la información es validada.
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-end gap-3 md:col-span-4 md:col-start-9">
            <ButtonLink href={`/contacto?propiedad=${p.slug}`} tone="light">
              Solicitar información
            </ButtonLink>
            {!p.isProject && (
              <ButtonLink href={`/contacto?propiedad=${p.slug}&motivo=visita`} tone="light" variant="outline">
                Agendar visita
              </ButtonLink>
            )}
          </div>
        </div>
      </section>

      {/* SIGUIENTE */}
      <Link href={`/propiedades/${next.slug}`} className="group block bg-bone">
        <div className="shell flex items-center justify-between gap-6 py-12 md:py-16">
          <div>
            <p className="eyebrow text-stone-dark">Siguiente activo · {next.id}</p>
            <p className="mt-4 font-display text-[2rem] leading-none font-medium transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:translate-x-2 md:text-[4rem]">
              {next.name}
            </p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors duration-500 group-hover:bg-ink group-hover:text-paper md:h-20 md:w-20">
            <ArrowRight className="h-5 w-5" strokeWidth={1.25} />
          </span>
        </div>
      </Link>
    </article>
  );
}
