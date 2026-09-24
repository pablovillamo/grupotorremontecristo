import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

/**
 * Open Sauce Sans (OFL) — tipografía oficial de UI, servida localmente.
 * Helvetica Now Display (licenciada) — no incluida. Para activarla, agregar los .woff2
 * licenciados en app/fonts y declarar aquí una segunda localFont con variable
 * "--font-helvetica-now", luego actualizar --font-display en globals.css.
 */
const openSauce = localFont({
  src: [
    { path: "./fonts/OpenSauceSans-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/OpenSauceSans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/OpenSauceSans-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/OpenSauceSans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-open-sauce",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.claim}`,
    template: `%s · ${site.name}`,
  },
  description: `${site.description} ${site.promise}`,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "es_CR",
    siteName: site.name,
    url: site.url,
    title: `${site.name} — ${site.claim}`,
    description: "Tierra, propiedades y oportunidades inmobiliarias en Costa Rica.",
    images: [{ url: "/images/quinta-la-garita/garita-01.jpg", width: 1122, height: 1240, alt: "Quinta La Garita" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0f0f0e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CR" className={openSauce.variable}>
      <body className="min-h-screen">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
