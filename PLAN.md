# AiRC Website Bootstrap — Implementation Plan

## Understanding

**AiRC** (Active Image Recognition Command / Corporation) is launching a Phase 1 (2026) B2B marketing + quote-request platform for embedded AI camera modules and edge AI cameras, powered by the **Seyeon Tech FlexWATCH** partnership and **Hailo-8L** acceleration.

**Primary buyers:** Toll/ETC operators, ITS integrators, PTZ camera manufacturers (e.g., PIPS/Neology, Cohu, Transcore, Thales).

**Core message:** Add advanced on-device AI to existing PTZ or roadway camera platforms without a full hardware redesign.

**Trust signals:** NDAA-free stack, 1997 heritage, ONVIF, real specs, Seyeon partnership.

## Implementation Phases

### Phase 1 — Foundation
- [x] Explore workspace (docs only, no Next.js)
- [ ] Initialize Next.js 15 (App Router, TypeScript, Tailwind, ESLint)
- [ ] Add Prettier, strict TS, `.env.example`
- [ ] Initialize shadcn/ui + Lucide
- [ ] Design tokens (navy/charcoal + electric blue + accent orange)

### Phase 2 — Data & Content Layer
- [ ] `data/products.ts` — catalog with specs, tags, Hailo variants
- [ ] `content/verticals.ts` — toll, PTZ, ITS solution copy
- [ ] `lib/` — metadata helpers, structured data, form validation

### Phase 3 — Shared UI
- [ ] Layout: Header, Footer, mobile nav
- [ ] Reusable: Hero, TrustBadges, SpecTable, ProductCard, CTASection, QuoteButton

### Phase 4 — Pages
- [ ] Home — hero, verticals preview, differentiators, CTA
- [ ] Products — grid + `[slug]` detail with specs + JSON-LD
- [ ] Solutions — index + `[slug]` vertical pages
- [ ] Technology — Open AI SDK, Hailo, integration story
- [ ] About — heritage narrative
- [ ] Contact — quote / partnership / integration forms (server actions)

### Phase 5 — Polish & Docs
- [ ] SEO metadata per route, loading/error states
- [ ] README.md — canonical project brief
- [ ] MDX-ready placeholder note in README

## Open Questions (post-MVP)
- Real product photography and Seyeon-approved assets
- Form backend (Resend, HubSpot, etc.)
- Analytics (Plausible/GA4)
- Headless commerce (Stripe/Shopify) when quote flow graduates to checkout

## Tech Stack
Next.js 15 · TypeScript (strict) · Tailwind CSS · shadcn/ui · Lucide · Server Actions (forms)
