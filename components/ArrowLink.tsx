import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ArrowLink({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`arrow-nudge group inline-flex items-center gap-3 text-[0.8125rem] font-medium tracking-wide ${
        tone === "light" ? "text-paper" : "text-ink"
      } ${className}`}
    >
      <span className="link-line">{children}</span>
      <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={1.25} />
    </Link>
  );
}

/** Botón editorial: contorno fino, sin gigantismo. */
export function ButtonLink({
  href,
  children,
  variant = "solid",
  tone = "dark",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  tone?: "dark" | "light";
  className?: string;
}) {
  const base =
    "arrow-nudge inline-flex h-12 items-center justify-between gap-6 px-6 text-[0.8125rem] font-medium tracking-wide transition-colors duration-500";
  const styles =
    tone === "light"
      ? variant === "solid"
        ? "bg-paper text-ink hover:bg-bone"
        : "border border-paper/50 text-paper hover:border-paper hover:bg-paper/10"
      : variant === "solid"
        ? "bg-ink text-paper hover:bg-ink-soft"
        : "border border-ink/30 text-ink hover:border-ink";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={1.25} />
    </Link>
  );
}
