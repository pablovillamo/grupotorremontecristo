"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { properties } from "@/data/properties";
import { submitLead } from "@/lib/leads";

type Values = { name: string; phone: string; email: string; property: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Indique su nombre.";
  const digits = v.phone.replace(/\D/g, "");
  if (digits.length < 8) e.phone = "Indique un teléfono válido (mínimo 8 dígitos).";
  if (!EMAIL.test(v.email.trim())) e.email = "Indique un correo válido.";
  if (v.message.trim().length > 0 && v.message.trim().length < 10) e.message = "Cuéntenos un poco más (mínimo 10 caracteres).";
  return e;
}

export function ContactForm() {
  const params = useSearchParams();
  const preset = properties.find((p) => p.slug === params.get("propiedad"));

  const [values, setValues] = useState<Values>({
    name: "",
    phone: "",
    email: "",
    property: preset?.id ?? "",
    message: params.get("motivo") === "visita" ? "Me gustaría agendar una visita." : "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof Values) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const next = { ...values, [k]: ev.target.value };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k: keyof Values) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    setTouched({ name: true, phone: true, email: true, message: true });
    if (Object.keys(e).length) {
      const first = document.getElementById(`f-${Object.keys(e)[0]}`);
      first?.focus();
      return;
    }
    setState("sending");
    const res = await submitLead({
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      property_id: values.property || null,
      message: values.message.trim(),
    });
    setState(res.ok ? "sent" : "error");
  };

  if (state === "sent") {
    const p = properties.find((x) => x.id === values.property);
    return (
      <div role="status" className="border-t border-ink/15 pt-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-paper">
          <Check className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <p className="mt-8 font-display text-[2.25rem] leading-tight font-medium md:text-[3rem]">Gracias, {values.name.split(" ")[0]}.</p>
        <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-ink/75">
          Recibimos su solicitud{p ? ` sobre ${p.name}` : ""}. Un asesor de Grupo Torre Montecristo le contactará.
        </p>
        <p className="mt-10 text-[0.75rem] text-stone-dark">Demo: el envío es simulado. Ver lib/leads.ts para la integración.</p>
      </div>
    );
  }

  const field = "peer w-full border-0 border-b border-ink/25 bg-transparent px-0 pt-7 pb-3 text-[1rem] text-ink outline-none transition-colors duration-300 placeholder:text-transparent focus:border-ink";
  const label = "pointer-events-none absolute top-7 left-0 text-[1rem] text-stone-dark transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.6875rem] peer-focus:tracking-[0.18em] peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.6875rem] peer-[:not(:placeholder-shown)]:tracking-[0.18em] peer-[:not(:placeholder-shown)]:uppercase";

  const err = (k: keyof Values) =>
    touched[k] && errors[k] ? (
      <p id={`e-${k}`} className="mt-2 text-[0.8125rem] text-earth">
        {errors[k]}
      </p>
    ) : null;

  const input = (k: "name" | "phone" | "email", text: string, type: string, auto: string) => (
    <div className="relative">
      <input
        id={`f-${k}`}
        name={k}
        type={type}
        autoComplete={auto}
        inputMode={k === "phone" ? "tel" : k === "email" ? "email" : undefined}
        placeholder={text}
        value={values[k]}
        onChange={set(k)}
        onBlur={blur(k)}
        aria-invalid={!!(touched[k] && errors[k])}
        aria-describedby={touched[k] && errors[k] ? `e-${k}` : undefined}
        required
        className={field}
      />
      <label htmlFor={`f-${k}`} className={label}>
        {text}
      </label>
      {err(k)}
    </div>
  );

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-9" aria-label="Solicitud de información">
      {input("name", "Nombre", "text", "name")}
      <div className="grid gap-9 md:grid-cols-2 md:gap-6">
        {input("phone", "Teléfono", "tel", "tel")}
        {input("email", "Correo", "email", "email")}
      </div>

      <div className="relative">
        <label htmlFor="f-property" className="eyebrow block text-stone-dark">
          Propiedad de interés
        </label>
        <select
          id="f-property"
          name="property"
          value={values.property}
          onChange={set("property")}
          className="mt-3 w-full cursor-pointer appearance-none rounded-none border-0 border-b border-ink/25 bg-transparent px-0 pb-3 text-[1rem] outline-none focus:border-ink"
        >
          <option value="">Consulta general</option>
          {properties.map((p) => (
            <option key={p.id} value={p.id}>
              {p.id} — {p.name}
            </option>
          ))}
        </select>
        <span aria-hidden className="pointer-events-none absolute right-0 bottom-4 text-stone-dark">
          ↓
        </span>
      </div>

      <div className="relative">
        <textarea
          id="f-message"
          name="message"
          rows={4}
          placeholder="Mensaje"
          value={values.message}
          onChange={set("message")}
          onBlur={blur("message")}
          aria-invalid={!!(touched.message && errors.message)}
          aria-describedby={touched.message && errors.message ? "e-message" : undefined}
          className={`${field} resize-none`}
        />
        <label htmlFor="f-message" className={label}>
          Mensaje (opcional)
        </label>
        {err("message")}
      </div>

      <div className="flex flex-col gap-5 pt-2 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xs text-[0.75rem] leading-relaxed text-stone-dark">
          Utilizaremos sus datos únicamente para responder a esta solicitud.
        </p>
        <button
          type="submit"
          disabled={state === "sending"}
          className="arrow-nudge inline-flex h-12 items-center justify-between gap-8 bg-ink px-6 text-[0.8125rem] font-medium tracking-wide text-paper transition-colors duration-500 hover:bg-ink-soft disabled:opacity-60 md:min-w-64"
        >
          <span>{state === "sending" ? "Enviando…" : "Enviar solicitud"}</span>
          <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={1.25} />
        </button>
      </div>
      {state === "error" && (
        <p role="alert" className="text-[0.875rem] text-earth">
          No pudimos enviar su solicitud. Intente nuevamente.
        </p>
      )}
    </form>
  );
}
