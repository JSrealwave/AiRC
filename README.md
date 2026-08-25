# AiRC — Active Image Recognition Corporation

**Edge AI camera modules for tolling, ITS, and PTZ platforms.**

AiRC is building the next generation of AI-native proactive physical security—turning reactive video surveillance into intelligent, anticipatory systems through edge AI camera modules, drones, mobile towers, robots, and central orchestration (**AiR Command**).

## Phase 1 focus (2026)

Launch a high-trust **B2B marketing + quote-request platform** for:

- Official **Seyeon Tech FlexWATCH** IP modules, LVDS boards, and finished cameras
- **Hailo-8L** on-device AI, quoted and integrated by AiRC (not a factory option on every Seyeon SKU)

Checkout remains **Request Quote** in Phase 1. Headless commerce (Stripe / Shopify Hydrogen) is planned for a later phase.

## Seyeon partnership

AiRC distributes and integrates **Seyeon FlexWATCH** hardware with:

- **Official model numbers** — launch catalog of 12 SKUs (e.g. FWC-EX2-0234, FW7300-GKN, FWM-EX1-L2M)
- **FlexWATCH Open AI SDK** — five-step path to run customer proprietary models on-device
- **Hailo-8L** — 13 TOPS, ~1.5W, multi-model, industrial temperature (AiRC attach)
- **NDAA-free SoCs** — Eyenix, Ambarella, Hailo
- **2 MP – 12 MP** — rolling and global shutter, as listed per SKU
- **ONVIF** Profile S / T / M
- **Flexible inputs** — BT1120, LVDS, YUV for PTZ blocks and multi-sensor gateways

Zoom-block and thermal cameras are **out of catalog** until Seyeon confirms them.

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
- Product catalog: `data/products.ts` (filterable by resolution, shutter, form)
- Vertical content: `content/verticals.ts`
- Contact forms: Server Actions (`app/actions/contact.ts`)
- Family datasheet: `public/resources/airc-flexwatch-edge-ai-datasheet.pdf` (regenerate with `scripts/generate-datasheet.py`)

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
app/                 # Routes (home, products, solutions, technology, resources, about, contact)
components/          # UI, layout, marketing, products, contact
data/products.ts     # Official Seyeon SKUs — edit here for catalog changes
content/             # Vertical solution copy (+ MDX blog placeholder)
lib/                 # Site config, metadata, validations, structured data
public/brand/        # Favicon/lockup/OG exports
public/products/     # Seyeon partner photography
public/resources/    # Family datasheet PDF
logo/                # Brand masters (archive/ holds unused long lockups)
scripts/             # Datasheet + brand export generators
```

## Identity

- **Brand:** AiRC
- **Legal name:** Active Image Recognition Corporation
- **Canonical URL:** https://www.activeimagerecognition.com
- **Apex:** https://activeimagerecognition.com redirects to www (`next.config.ts` host redirect; also set both hostnames on Vercel)
- **Email:** sales@activeimagerecognition.com
- **Phone:** (858) 876-2276
- **Address:** 5857 Owens Avenue, Suite 300, Carlsbad, CA 92008

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (https://www.activeimagerecognition.com) |
| `CONTACT_EMAIL` | Inbox and displayed email (sales@activeimagerecognition.com) |
| `RESEND_API_KEY` | Server only — Resend API key |
| `RESEND_FROM` | Verified Resend from address (`AiRC <sales@activeimagerecognition.com>`) |
| `CONTACT_WEBHOOK_URL` | Optional CRM/webhook POST after a successful email |

Never commit `.env.local` or a real `re_` key. Copy `.env.example` and fill `RESEND_API_KEY` locally and on Vercel.

## Production

Live on Vercel ([project](https://vercel.com/sullyjj-3116s-projects/airc)). DNS at GoDaddy. Canonical https://www.activeimagerecognition.com (apex redirects to www). Forms send through Resend to `sales@activeimagerecognition.com`; Outlook manages that inbox. No CRM — leave `CONTACT_WEBHOOK_URL` empty. Resend delivery screenshot: `resend-screen-shot.png`.

## Next steps

1. **Seyeon approval** — confirm photography and Hailo-8L attach wording for US web use
2. **Analytics** — Plausible or GA4
3. **Commerce** — Stripe B2B quotes or Shopify Hydrogen when ready
4. **Blog / R&D lab** — MDX under `content/blog/` (see `content/mdx-placeholder.md`)

## License

Proprietary — AiRC / Active Image Recognition Corporation.
