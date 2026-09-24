/**
 * PUNTO DE INTEGRACIÓN DE LEADS
 * ------------------------------------------------------------------
 * Esta demo valida el formulario en front-end y simula el envío.
 * Para producción, reemplazar `submitLead` por una de estas opciones:
 *
 *  1. Route Handler propio:   POST /api/leads  (app/api/leads/route.ts)
 *  2. Supabase:               insert en tabla `leads` (07_DATA/LEAD_SCHEMA.md)
 *  3. CRM:                    webhook / API del CRM elegido (03_SALES/CRM_PIPELINE.md)
 *  4. Email:                  info@ / ventas@grupotorremontecristo.com cuando Workspace esté activo
 *  5. WhatsApp:               enlace wa.me o WhatsApp Business API cuando exista número oficial
 *
 * El payload ya sigue el esquema del Brain (07_DATA/LEAD_SCHEMA.md).
 */

export type LeadInput = {
  name: string;
  phone: string;
  email: string;
  property_id: string | null; // GTM-00X o null (consulta general)
  message: string;
};

export type LeadPayload = LeadInput & {
  source: "Website";
  status: "NEW LEAD";
  created_at: string;
};

export function buildLeadPayload(input: LeadInput): LeadPayload {
  return {
    ...input,
    source: "Website",
    status: "NEW LEAD",
    created_at: new Date().toISOString(),
  };
}

export async function submitLead(input: LeadInput): Promise<{ ok: true } | { ok: false; error: string }> {
  const payload = buildLeadPayload(input);

  // TODO(integración): reemplazar la simulación por el destino real.
  // await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  void payload;
  await new Promise((r) => setTimeout(r, 900));
  return { ok: true };
}
