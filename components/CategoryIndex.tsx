"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { categories, countByCategory } from "@/data/categories";

/**
 * Índice tipográfico de categorías.
 * Desktop: al pasar el cursor, una fotografía real del portafolio aparece en la columna derecha.
 * Móvil: filas limpias con miniatura.
 */
export function CategoryIndex() {
  const [hover, setHover] = useState(0);

  return (
    <div className="grid grid-cols-12 gap-x-5">
      <ul className="col-span-12 border-t border-ink/15 lg:col-span-7">
        {categories.map((c, i) => {
          const count = countByCategory(c.id);
          return (
            <li key={c.id} className="border-b border-ink/15">
              <Link
                href={`/propiedades?categoria=${c.id}`}
                onMouseEnter={() => setHover(i)}
                onFocus={() => setHover(i)}
                className="group grid grid-cols-[2.25rem_1fr_auto] items-center gap-4 py-5 md:grid-cols-[3rem_1fr_auto] md:py-7"
              >
                <span className="eyebrow tabular-nums text-stone-dark">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span
                    className={`block font-display text-[2.5rem] leading-none font-medium transition-[color,transform] duration-700 ease-[var(--ease-editorial)] md:text-[4.5rem] ${
                      hover === i ? "lg:translate-x-3 lg:text-ink" : "lg:text-ink/35"
                    } group-hover:text-ink`}
                  >
                    {c.label}
                  </span>
                  <span className="mt-2 block text-[0.8125rem] text-stone-dark md:mt-3">{c.line}</span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="relative h-14 w-11 overflow-hidden bg-bone-dark lg:hidden">
                    <Image src={c.image.src} alt="" fill sizes="44px" className="object-cover" />
                  </span>
                  <span className="hidden text-[0.8125rem] tabular-nums text-stone-dark md:inline">
                    {String(count).padStart(2, "0")} {count === 1 ? "activo" : "activos"}
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.25}
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="relative col-span-5 hidden lg:block">
        <div className="sticky top-28 ml-auto aspect-[4/5] w-[88%] overflow-hidden bg-bone-dark">
          {categories.map((c, i) => (
            <Image
              key={c.id}
              src={c.image.src}
              alt={c.image.alt}
              fill
              sizes="35vw"
              className={`object-cover transition-[opacity,transform] duration-[1200ms] ease-[var(--ease-editorial)] ${
                hover === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
              }`}
            />
          ))}
          <span className="absolute bottom-4 left-4 bg-bone/90 px-2.5 py-1.5 text-[0.6875rem] text-ink backdrop-blur-sm">
            {categories[hover].image.alt}
          </span>
        </div>
      </div>
    </div>
  );
}
