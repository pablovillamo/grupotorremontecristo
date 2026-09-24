/** Etiqueta elegante para datos PENDING. Nunca sustituye un dato con valores ficticios. */
export function PendingNote({ children = "Información disponible próximamente", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-stone-dark ${className}`}>
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full border border-current" />
      <span className="text-[0.8125rem] italic">{children}</span>
    </span>
  );
}
