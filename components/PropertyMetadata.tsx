import type { Property } from "@/data/types";
import { categoryLabel } from "@/data/categories";
import { PendingNote } from "./PendingNote";

/** Ficha técnica: solo datos publicables; PENDING se expresa, nunca se rellena. */
export function PropertyMetadata({ property }: { property: Property }) {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: "Código", value: property.id },
    { label: "Ubicación", value: property.location.status === "PENDING" ? <PendingNote>Por anunciar</PendingNote> : `${property.location.label}, ${property.location.country}` },
    { label: "Categoría", value: property.categories.map(categoryLabel).join(" · ") },
    { label: "Tipo", value: property.typeLabel },
    { label: "Estado", value: property.statusLabel },
    ...property.keyFacts
      .filter((f) => !["Tipo", "Estado", "Categoría"].includes(f.label))
      .map((f) => ({ label: f.label, value: f.value })),
    { label: "Precio", value: property.price.value === null ? <PendingNote /> : String(property.price.value) },
  ];

  return (
    <dl className="border-t border-ink/15">
      {rows.map((r) => (
        <div key={r.label} className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-ink/10 py-4 md:grid-cols-[11rem_1fr]">
          <dt className="eyebrow pt-1 text-stone-dark">{r.label}</dt>
          <dd className="text-[0.9375rem] leading-snug">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
