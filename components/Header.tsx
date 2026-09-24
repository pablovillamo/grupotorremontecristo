"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";

/** Rutas cuyo primer bloque es fotográfico/oscuro: el header inicia transparente. */
const overlayRoute = (p: string) =>
  p === "/" || p === "/nosotros" || p === "/proyectos" || p.startsWith("/propiedades/");

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = overlayRoute(pathname) && !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-700 ${
          transparent
            ? "border-b border-transparent bg-transparent text-paper"
            : "border-b border-ink/10 bg-bone/90 text-ink backdrop-blur-md"
        }`}
      >
        {transparent && (
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 h-32 bg-gradient-to-b from-ink/45 to-transparent" />
        )}
        <div className="shell flex h-16 items-center justify-between md:h-20">
          <Link href="/" aria-label="Grupo Torre Montecristo — Inicio" onClick={() => setOpen(false)} className="relative z-[60]">
            <Logo tone={transparent ? "light" : "dark"} size="md" priority />
          </Link>

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-10">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`link-line text-[0.8125rem] tracking-wide ${active ? "bg-[length:100%_1px]" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="relative z-[60] -mr-2 flex h-11 items-center gap-3 px-2 md:hidden"
          >
            <span className="eyebrow">{open ? "Cerrar" : "Menú"}</span>
            <span aria-hidden className="relative block h-3 w-6">
              <span className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </header>
      <MobileNavigation open={open} onNavigate={() => setOpen(false)} />
    </>
  );
}
