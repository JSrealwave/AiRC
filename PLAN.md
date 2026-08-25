# AiRC Website Bootstrap — Implementation Plan

## Understanding

**AiRC** (Active Image Recognition Corporation) is launching a Phase 1 (2026) B2B marketing + quote-request platform for embedded AI camera modules and edge AI cameras, powered by the **Seyeon Tech FlexWATCH** partnership and **Hailo-8L** acceleration.

**Primary buyers:** Toll/ETC operators, ITS integrators, PTZ camera manufacturers (e.g., PIPS/Neology, Cohu, Transcore, Thales).

**Core message:** Add advanced on-device AI to existing PTZ or roadway camera platforms without a full hardware redesign.

**Trust signals:** Official Seyeon model numbers, partner photography, NDAA-free stack, 1997 heritage, ONVIF, Seyeon partnership.

## Implementation Phases

### Phase 1 — Foundation
- [x] Explore workspace (docs only, no Next.js)
- [x] Initialize Next.js 15 (App Router, TypeScript, Tailwind, ESLint)
- [x] Add Prettier, strict TS, `.env.example`
- [x] Initialize shadcn/ui + Lucide
- [x] Design tokens (navy/charcoal + electric blue + accent orange)

### Phase 2 — Data & Content Layer
- [x] `data/products.ts` — official Seyeon SKUs with specs, shutter, form class, Hailo attach
- [x] `content/verticals.ts` — toll, PTZ, ITS solution copy
- [x] `lib/` — metadata helpers, structured data, form validation

### Phase 3 — Shared UI
- [x] Layout: Header, Footer, mobile nav
- [x] Reusable: Hero, ArchitectureDiagram, TrustBadges, SpecTable, ProductCard, ProductCatalog filters, CTASection

### Phase 4 — Pages
- [x] Home — product hero, architecture, verticals, differentiators, CTA
- [x] Products — filterable grid (resolution / shutter / form) + `[slug]` detail with specs + JSON-LD
- [x] Solutions — index + `[slug]` vertical pages
- [x] Technology — Open AI SDK, Hailo, architecture, integration story
- [x] Resources — family datasheet PDF + toll/ANPR application note
- [x] About — heritage narrative
- [x] Contact — quote / partnership / integration forms (server actions)

### Phase 5 — Polish & Docs
- [x] SEO metadata per route, loading/error states
- [x] README.md — canonical project brief
- [x] MDX-ready placeholder note in README
- [x] Seyeon partner photography on catalog, detail, and homepage
- [x] Nested-button / hydration fix on mobile nav
- [x] AiRC brand assets (bug, lockup, favicon, OG) wired in header/footer/metadata

## Production (live as of 2026-08-25)

Site is live.

| Piece | Status |
|-------|--------|
| Canonical URL | https://www.activeimagerecognition.com |
| Apex | https://activeimagerecognition.com (redirect to www) |
| Host | Vercel — [sullyjj-3116s-projects/airc](https://vercel.com/sullyjj-3116s-projects/airc) |
| DNS | GoDaddy |
| Quote / contact / integration forms | Server Actions → Resend (account `sullyjj`) → `sales@activeimagerecognition.com` |
| Inbox | Outlook on `sales@activeimagerecognition.com` |
| CRM | None. Do not set `CONTACT_WEBHOOK_URL` until a CRM exists. |
| Identity | AiRC · Active Image Recognition Corporation · Carlsbad NAP · (858) 876-2276 |

**Resend proof:** `resend-screen-shot.png` (project root). Sending log shows `[AiRC Quote] John Sullivan — John Sullivan` **Delivered** to `sales@activeimagerecognition.com`. No API keys in the screenshot; `RESEND_API_KEY` stays in Vercel env only.

## Launch remaining

- [x] **Contact identity** — www.activeimagerecognition.com, sales@, phone, Carlsbad NAP
- [x] **Form backend** — Resend → sales@; Outlook receives mail
- [x] **Deploy** — Vercel + GoDaddy DNS, apex → www
- [ ] **Seyeon approval** — confirm catalog photos and Hailo-8L attach language for US web use
- [ ] **Analytics** — Plausible or GA4
- [ ] **Held** — zoom-block and thermal SKUs until Seyeon confirms

## Open Questions (post-MVP)

- Analytics (Plausible/GA4)
- CRM later — then optional `CONTACT_WEBHOOK_URL` in addition to Resend
- Headless commerce (Stripe/Shopify) when quote flow graduates to checkout
- Blog / R&D lab (MDX under `content/blog/`)

## Tech Stack

Next.js 15 · TypeScript (strict) · Tailwind CSS · shadcn/ui · Lucide · Server Actions (forms) · Resend · Vercel
