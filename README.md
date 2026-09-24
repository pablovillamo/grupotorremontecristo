# Grupo Torre Montecristo — Demo front-end V1

Primera demo del website **grupotorremontecristo.com**.
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · next/image · lucide-react.

## Ejecutar localmente

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
# producción local
npm run build && npm start
```

## Estructura

```
app/                      rutas (home, propiedades, propiedades/[slug], proyectos, nosotros, contacto)
components/               Header, MobileNavigation, Footer, Hero, PropertyCard, PropertyGrid,
                          PropertyGallery, PropertyMetadata, PropertyFeature, ProjectFeature,
                          CategoryIndex, SectionHeading, EditorialStatement, CTASection,
                          ContactForm, Logo, Reveal, PendingNote, TypographicCover
data/types.ts             tipos + estados del Brain (VERIFIED / PROVIDED / PROVISIONAL / PENDING / NOT_APPLICABLE)
data/properties.ts        fuente única de las 7 fichas GTM (PENDING = null)
data/categories.ts        categorías del Brain (04_WEBSITE)
lib/site.ts               marca, dominio, Instagram, navegación
lib/leads.ts              PUNTO DE INTEGRACIÓN del formulario (CRM / Supabase / email / WhatsApp)
public/images/<slug>/     fotografías por propiedad (marca de agua recortada)
public/images/contexto/   imágenes de apoyo (La Fortuna / Costa Rica) — solo uso editorial
public/brand/             wordmark oficial (blanco / negro) extraído del archivo de logo
```

## Reglas de datos

- Toda la información proviene de `Grupo_Torre_Montecristo_Brain`.
- Un dato `PENDING` es `null` y nunca se muestra como valor; la UI muestra "Información disponible próximamente" u omite la sección.
- Los tiempos de traslado de GTM-001 están en `unverified` con `publish: false` (PROVIDED / PENDING VERIFICATION).
- Las imágenes de contexto nunca se presentan como fotografía de una propiedad.

## Tipografías

- **Open Sauce Sans** (licencia OFL) incluida en `app/fonts`.
- **Helvetica Now Display** es licenciada y no está incluida. El stack de fallback usa Helvetica Neue / Helvetica / Arial.
  Para activarla: copiar los `.woff2` licenciados a `app/fonts`, declararlos con `localFont` en `app/layout.tsx`
  y apuntar `--font-display` en `app/globals.css` a la nueva variable.

## Antes de publicar

- `app/robots.ts` bloquea la indexación (demo). Cambiar a `allow: "/"` en el lanzamiento.
- Conectar `lib/leads.ts` al destino real.
