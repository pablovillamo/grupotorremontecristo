import { ButtonLink } from "@/components/ArrowLink";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-end bg-bone pt-32 pb-20">
      <div className="shell">
        <p className="eyebrow text-stone-dark">404</p>
        <h1 className="mt-6 font-display text-[3rem] leading-[0.95] font-medium md:text-[6rem]">Esta página no existe.</h1>
        <div className="mt-10">
          <ButtonLink href="/propiedades">Explorar propiedades</ButtonLink>
        </div>
      </div>
    </section>
  );
}
