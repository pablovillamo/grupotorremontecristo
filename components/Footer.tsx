import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell pt-20 pb-10 md:pt-28">
        <div className="grid grid-cols-12 gap-x-5 gap-y-14">
          <div className="col-span-12 md:col-span-6">
            <Logo tone="light" size="lg" />
            <p className="mt-10 max-w-sm font-display text-2xl leading-tight font-medium text-paper/90 md:text-[1.75rem]">
              {site.narrative}
            </p>
          </div>

          <nav aria-label="Pie de página" className="col-span-12 sm:col-span-6 md:col-span-3">
            <p className="eyebrow mb-6 text-paper/50">Explorar</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-line text-[0.9375rem] text-paper/85 hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <p className="eyebrow mb-6 text-paper/50">Contacto</p>
            <ul className="space-y-3 text-[0.9375rem] text-paper/85">
              <li>
                <a href={site.url} className="link-line hover:text-paper">
                  {site.domain}
                </a>
              </li>
              <li>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="link-line hover:text-paper">
                  {site.instagram.handle}
                </a>
              </li>
              <li className="text-paper/60">{site.country}</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-paper/15 pt-6 text-[0.75rem] text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>{site.claim}</p>
        </div>
      </div>
    </footer>
  );
}
