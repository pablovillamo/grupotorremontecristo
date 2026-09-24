import type { Property } from "@/data/types";

/** Portada tipográfica para activos sin fotografía disponible. No simula imágenes. */
export function TypographicCover({ property, tone = "stone" }: { property: Property; tone?: "stone" | "ink" }) {
  const dark = tone === "ink";
  const [prefix, num] = property.id.split("-");
  return (
    <div className={`relative flex h-full w-full flex-col justify-end p-6 md:p-8 ${dark ? "bg-ink text-paper" : "bg-bone-dark text-ink"}`}>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <p aria-hidden className="relative font-display text-[5rem] leading-[0.85] font-medium tabular-nums md:text-[7rem]">
        <span className="block text-[0.35em] opacity-50">{prefix}</span>
        {num}
      </p>
      <p className="eyebrow relative mt-6 opacity-60">Fotografía próximamente</p>
    </div>
  );
}
