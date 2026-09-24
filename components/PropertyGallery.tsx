"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { PropertyImage } from "@/data/types";
import { Reveal } from "./Reveal";

/** Galería asimétrica + visor a pantalla completa. */
export function PropertyGallery({ images, name }: { images: PropertyImage[]; name: string }) {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  if (images.length === 0) return null;

  // Patrón asimétrico en desktop; en móvil, carrusel horizontal nativo con scroll-snap.
  const pattern = [
    { cell: "md:col-span-7 md:row-span-2", frame: "md:aspect-auto md:h-full" },
    { cell: "md:col-span-5", frame: "md:aspect-[4/3]" },
    { cell: "md:col-span-5", frame: "md:aspect-[4/3]" },
    { cell: "md:col-span-4 md:mt-10", frame: "md:aspect-[4/5]" },
    { cell: "md:col-span-4 md:mt-20", frame: "md:aspect-[4/5]" },
  ];
  const single = images.length === 1;
  const pair = [
    { cell: "md:col-span-7", frame: "md:aspect-[4/5]" },
    { cell: "md:col-span-5 md:mt-32", frame: "md:aspect-[4/5]" },
  ];
  const layout = images.length === 2 ? pair : pattern;

  return (
    <>
      <div className={`-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-12 md:gap-5 md:overflow-visible md:px-0 ${single ? "[&>*]:w-full" : ""}`}>
        {images.map((im, i) => (
          <Reveal
            key={im.src}
            delay={(i % 3) * 90}
            className={`w-[82%] shrink-0 snap-start md:w-auto ${single ? "md:col-span-8 md:col-start-3" : layout[i % layout.length].cell}`}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className={`img-zoom relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden bg-bone-dark ${single ? "md:aspect-[16/10]" : layout[i % layout.length].frame}`}
              aria-label={`Ampliar fotografía ${i + 1} de ${images.length}: ${im.alt}`}
            >
              <Image src={im.src} alt={im.alt} fill sizes="(min-width: 768px) 50vw, 82vw" className="object-cover" />
            </button>
          </Reveal>
        ))}
      </div>
      {!single && <p className="mt-4 text-[0.75rem] text-stone-dark md:hidden">Deslice para ver más · {images.length} fotografías</p>}

      {active !== null && (
        <div role="dialog" aria-modal="true" aria-label={`Galería — ${name}`} className="fixed inset-0 z-[70] flex flex-col bg-ink/97 text-paper">
          <div className="shell flex h-16 items-center justify-between">
            <span className="eyebrow text-paper/60 tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
            <button type="button" onClick={close} className="flex h-11 w-11 items-center justify-center" aria-label="Cerrar galería">
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
          <div className="relative flex-1">
            <Image src={images[active].src} alt={images[active].alt} fill sizes="100vw" quality={85} className="object-contain" />
          </div>
          <div className="shell flex h-20 items-center justify-between">
            <p className="max-w-[60%] truncate text-[0.8125rem] text-paper/60">{images[active].alt}</p>
            <div className="flex gap-2">
              <button type="button" onClick={() => step(-1)} className="flex h-11 w-11 items-center justify-center border border-paper/25 hover:border-paper" aria-label="Anterior">
                <ArrowLeft className="h-4 w-4" strokeWidth={1.25} />
              </button>
              <button type="button" onClick={() => step(1)} className="flex h-11 w-11 items-center justify-center border border-paper/25 hover:border-paper" aria-label="Siguiente">
                <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
