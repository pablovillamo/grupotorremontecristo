"use client";

import Link from "next/link";
import { useEffect } from "react";
import { nav, site } from "@/lib/site";

export function MobileNavigation({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onNavigate();
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onNavigate]);

  return (
    <div
      id="mobile-nav"
      aria-hidden={!open}
      inert={!open}
      className={`fixed inset-0 z-40 flex flex-col bg-bone pt-16 text-ink transition-[opacity,visibility] duration-500 md:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <nav aria-label="Móvil" className="shell flex flex-1 flex-col justify-center">
        <ul className="border-t border-ink/10">
          <li className="border-b border-ink/10">
            <Link href="/" onClick={onNavigate} className="flex items-baseline justify-between py-5">
              <span className="font-display text-[2.5rem] leading-none font-medium">Inicio</span>
              <span className="eyebrow text-stone-dark">00</span>
            </Link>
          </li>
          {nav.map((item, i) => (
            <li
              key={item.href}
              className="border-b border-ink/10"
              style={{
                transition: "opacity .7s var(--ease-editorial), transform .7s var(--ease-editorial)",
                transitionDelay: open ? `${80 + i * 60}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(12px)",
              }}
            >
              <Link href={item.href} onClick={onNavigate} className="flex items-baseline justify-between py-5">
                <span className="font-display text-[2.5rem] leading-none font-medium">{item.label}</span>
                <span className="eyebrow text-stone-dark">{String(i + 1).padStart(2, "0")}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="shell flex items-end justify-between pb-8 text-stone-dark">
        <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="text-[0.8125rem]">
          {site.instagram.handle}
        </a>
        <span className="eyebrow">{site.country}</span>
      </div>
    </div>
  );
}
