# AiRC — Active Image Recognition Command

**Edge AI camera modules for tolling, ITS, and PTZ platforms.**

AiRC is building the next generation of AI-native proactive physical security—turning reactive video surveillance into intelligent, anticipatory systems through edge AI camera modules, drones, mobile towers, robots, and central orchestration (**AiR Command**).

## Phase 1 focus (2026)

Launch a high-trust **B2B marketing + quote-request platform** for:

- Embedded AI camera modules
- Intelligent edge AI cameras (private-label / powered by **Seyeon Tech FlexWATCH** + **Hailo-8L**)

Checkout remains **Request Quote** in Phase 1. Headless commerce (Stripe / Shopify Hydrogen) is planned for a later phase.

## Seyeon partnership

AiRC distributes and integrates **Seyeon FlexWATCH** hardware with:

- **FlexWATCH Open AI SDK** — five-step path to run customer proprietary models on-device
- **Hailo-8L** — 13 TOPS, ~1.5W, multi-model, industrial temperature
- **NDAA-free SoCs** — Eyenix, Ambarella, Hailo
- **2 MP – 12 MP** resolutions, extensive Sony sensor support (rolling + global shutter)
- **20+ Lego-style** compact form factors + bullet/dome/PTZ finished cameras
- **ONVIF** Profile S / T / M
- **Flexible inputs** — BT1120, LVDS, YUV for PTZ blocks, thermal, multi-sensor

Seyeon's CEO has confirmed strongest commercial traction with:

1. Toll road operators & ETC companies  
2. ITS (Intelligent Transportation Systems) firms  
3. Pan-Tilt-Zoom (PTZ) camera manufacturers  

**Target accounts:** PIPS/Neology, Cohu, Transcore, Thales, and similar OEMs/integrators.

**Core integration story:** Add advanced on-device AI (multi-model inference, better detection, behavior analytics, fewer false alarms) without redesigning the entire hardware stack.

## Heritage

Roots in computer vision since **1997** (Active Image Recognition Technology). More than 25 years of credible engineering heritage for technical B2B buyers.

## Tech stack (this repo)

- **Next.js 15** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS v4** + **shadcn/ui**
- **Lucide** icons
- Product catalog: `data/products.ts`
- Vertical content: `content/verticals.ts`
- Contact forms: Server Actions (`app/actions/contact.ts`)

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Project structure

```
app/              # Routes (home, products, solutions, technology, about, contact)
components/       # UI, layout, marketing, products, contact
data/             # Product catalog (edit here for new SKUs)
content/          # Vertical solution copy (+ MDX blog placeholder)
lib/              # Site config, metadata, validations, structured data
public/           # Static assets (add product photos here)
```

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO / JSON-LD |
| `CONTACT_EMAIL` | Displayed on contact page |
| `CONTACT_WEBHOOK_URL` | Optional POST endpoint for form submissions |

## Next steps

1. **Content** — Replace placeholder copy with Seyeon-approved specs and photography  
2. **Forms** — Wire `CONTACT_WEBHOOK_URL` to HubSpot, Resend, or CRM  
3. **Analytics** — Plausible or GA4  
4. **Commerce** — Stripe B2B quotes or Shopify Hydrogen when ready  
5. **Blog / R&D lab** — MDX under `content/blog/` (see `content/mdx-placeholder.md`)  
6. **Deploy** — Vercel or similar with production domain  

## License

Proprietary — AiRC / Active Image Recognition Command Corporation.
