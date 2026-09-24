"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import type { CategoryId, Property } from "@/data/types";
import { categories } from "@/data/categories";
import { PropertyCard } from "./PropertyCard";

type Filter = "todos" | CategoryId;

export function PropertyGrid({ items }: { items: Property[] }) {
  const router = useRouter();
  const params = useSearchParams();
  const raw = params.get("categoria");
  const active: Filter = categories.some((c) => c.id === raw) ? (raw as CategoryId) : "todos";

  const filtered = useMemo(
    () => (active === "todos" ? items : items.filter((p) => p.categories.includes(active))),
    [active, items],
  );

  const setFilter = (f: Filter) => {
    const url = f === "todos" ? "/propiedades" : `/propiedades?categoria=${f}`;
    router.replace(url, { scroll: false });
  };

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: "todos", label: "Todos", count: items.length },
    ...categories.map((c) => ({ id: c.id, label: c.label, count: items.filter((p) => p.categories.includes(c.id)).length })),
  ];

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-5 border-y border-ink/10 bg-bone/92 px-5 backdrop-blur-md md:top-20 md:mx-0 md:px-0">
        <div role="tablist" aria-label="Filtrar por categoría" className="flex gap-7 overflow-x-auto py-4 [scrollbar-width:none] md:gap-10">
          {filters.map((f) => {
            const on = active === f.id;
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={on}
                onClick={() => setFilter(f.id)}
                className={`group flex shrink-0 items-baseline gap-2 text-[0.875rem] transition-colors duration-300 ${
                  on ? "text-ink" : "text-stone-dark hover:text-ink"
                }`}
              >
                <span className={`link-line ${on ? "bg-[length:100%_1px]" : ""}`}>{f.label}</span>
                <sup className="text-[0.625rem] tabular-nums opacity-70">{String(f.count).padStart(2, "0")}</sup>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-8 text-[0.8125rem] text-stone-dark" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "activo" : "activos"}
      </p>

      <ul className="mt-8 grid grid-cols-1 gap-x-5 gap-y-16 md:grid-cols-12 md:gap-y-24">
        {filtered.map((p, i) => {
          // Ritmo editorial: alterna anchos y desplazamientos verticales en desktop.
          const rhythm = [
            "md:col-span-7",
            "md:col-span-5 md:mt-40",
            "md:col-span-5",
            "md:col-span-6 md:col-start-7 md:-mt-20",
            "md:col-span-6",
            "md:col-span-5 md:col-start-8 md:mt-32",
          ][i % 6];
          return (
            <li key={p.id} className={rhythm}>
              <PropertyCard property={p} headingLevel="h2" sizes="(min-width: 768px) 55vw, 100vw" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
