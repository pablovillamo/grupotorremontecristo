import Image from "next/image";

/**
 * Wordmark oficial (archivo /logo del proyecto) + descriptor.
 * Nota: los archivos de logo entregados dicen "REAL STATE"; el Brain define "REAL ESTATE".
 * Se usa el wordmark real y el descriptor correcto en texto hasta recibir el archivo corregido.
 */
export function Logo({
  tone = "dark",
  size = "md",
  className = "",
  priority = false,
}: {
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}) {
  const h = size === "lg" ? 30 : size === "sm" ? 15 : 18;
  const w = Math.round(h * (1607 / 174));
  return (
    <span className={`inline-flex flex-col items-end leading-none ${className}`} style={{ width: w }}>
      <Image
        src={tone === "light" ? "/brand/torremontecristo-wordmark-white.png" : "/brand/torremontecristo-wordmark-black.png"}
        alt="torremontecristo"
        width={w}
        height={h}
        priority={priority}
        loading={priority ? undefined : "eager"}
        className="block h-auto w-full"
      />
      <span
        className="mt-[0.35em] font-sans font-normal uppercase"
        style={{ fontSize: h * 0.42, letterSpacing: "0.32em", marginRight: "-0.32em" }}
      >
        Real Estate
      </span>
    </span>
  );
}
