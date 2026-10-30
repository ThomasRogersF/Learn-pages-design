# SpanishVIP Design System

Master design system for SpanishVIP landing pages — built for the **$29 first month** live-group-classes campaign and reusable for future marketing pages.

## Company context
SpanishVIP sells **live group Spanish classes with native, licensed teachers** (Medellín-based). Positioning: *not another gamified app* — years of streak apps still don't produce conversation; live classes do. Audience: adults done with gimmicks. Product on this system: the $29-first-month promo landing page (destination of a 4-email nurture sequence + paid ads).

## Sources provided
- `uploads/SpanishVIP-29-Landing-Page-Design-System.md` — full design system + build brief (colors sampled from logo, type, photography/icon direction, page structure).
- `uploads/Logo.png` — primary logo (teal speech-bubble box, "SPANISH" white + "VIP" orange italic).
- Teacher headshots (mint SpanishVIP tees, gradient backgrounds) + studio photos (Andrea Gómez lower-third, "We love Spanish" lightbox desk scenes).
- `uploads/Inner Circle Email (DM Sans).html` — production nurture email (source of voice, price-block patterns, warm postcard aesthetic).
- 4 glossy 3D icon renders — **brand-owned but excluded from this campaign** (they read "gamified app", which the campaign positions against). Kept in `assets/illustrations/` for other uses.
- No Figma or codebase provided.

## CONTENT FUNDAMENTALS
- **Voice:** direct, warm, second person ("Claim my $29 first month" — CTA in first person, body in "you"). Adult-to-adult, zero corporate filler.
- **Casing:** sentence case everywhere, including headlines and CTAs. Overlines/badges are UPPERCASE with wide tracking.
- **Tone:** confident, a little conspiratorial, honest about limits ("Results vary… not a guarantee"). Urgency is stated plainly, never shouty: "Offer ends in 7 days", "Tonight, it's gone. Not your Spanish."
- **Emoji:** almost none in page copy; occasionally one in email subject lines (⏳). Do not use emoji as icons.
- **Spanish sprinkles:** small, natural touches ("one final hola", "¿…? ¡…!") — flavor, never decoration overload.
- **Disclaimers:** always fully legible (WCAG AA), never decorative gray-on-white. Standard text: "After your first month at $29, your subscription automatically renews at the standard rate unless you cancel. Results vary based on individual dedication and practice. Offer valid for new students and former SpanishVIP students only."

## VISUAL FOUNDATIONS
- **Color:** warm cream base `#FAF6F0` (never stark white sections); navy ink `#1E3148` (never black); teal `#6DC1B9` as brand/identity color; **orange `#FF7D43` reserved exclusively for CTAs + urgency badge** ("contrast, not uniformity"); coral `#FC8854` softer alternative; cyan `#46BDC6` only for links/small details. Max 1–2 section background colors per page.
- **Type:** Kumbh Sans only (Google Fonts — exact match, no substitution needed). Display 800–900 weight, oversized, tight leading (1.04) and slight negative tracking; body 400 at 17px/1.6. Overlines 12px uppercase +0.14em.
- **Backgrounds:** flat warm cream; the email uses soft radial-gradient warm washes — acceptable for email, keep landing pages flat. No patterns, no textures.
- **Photography:** documentary/editorial, warm natural light, real teachers mid-conversation. No stock gloss, no gamified app screenshots, no mascots, no streak/badge iconography. Saturated gradient headshots get mounted on warm neutral card frames, not full-bleed.
- **Cards:** white or warm-white `#FBF6EC` surfaces, radius 14–20px, soft layered shadow (`--shadow-card`), 1px subtle navy-tint borders optional. No colored left-border accent cards.
- **Corner radii:** 8 / 14 / 20 / pill. CTAs are pill.
- **Shadows:** soft, navy-tinted, long-throw (`0 20px 60px -20px rgba(30,49,72,.18)`); CTA gets an orange glow shadow. No hard drop shadows.
- **Borders:** dashed navy-25% dividers (postcard motif from email); solid 1px navy-12% elsewhere.
- **Motion:** purposeful only. One signature moment per page (hero chat-bubble sequence). Elsewhere: scroll-reveal fades (~500ms ease-out, 12px rise), subtle CTA hover (darken to `#E8703C` + slight lift). Respect `prefers-reduced-motion`.
- **Hover:** CTAs darken; links shift cyan→teal-700. Press: none defined — keep subtle.
- **Transparency/blur:** not used. No glassmorphism.
- **Layout:** mobile-first single column; max container 1120px, narrow text 720px; persistent mobile-only sticky CTA bar after hero scroll.
- **Accessibility floor:** WCAG AA contrast, visible focus rings (cyan, `--focus-ring`), semantic heading hierarchy, alt text on every image.

## ICONOGRAPHY
- **Direction:** flat duotone/line icons — thin even stroke, rounded caps, teal + orange + navy on warm off-white, generous padding. No gradients, 3D bevels, gloss, or drop shadows.
- **No icon font or SVG set was provided.** Use **Lucide** from CDN (rounded caps, even stroke — closest match): `https://unpkg.com/lucide@latest` — **flagged substitution**; replace when brand icons arrive. Recommended glyphs: `messages-square` (live class), `calendar-clock` (unlimited), `users` (small groups), `book-open` (native teachers).
- The 4 glossy 3D renders in `assets/illustrations/` are off-limits for the anti-gamification campaign.
- Emoji and unicode-as-icons: not used.
- Logo: `assets/logo.png` (primary — teal box, for light backgrounds like cream); `assets/logo-white.png` (all-white wordmark — use on navy/dark backgrounds, e.g. the footer).

## Index
- `styles.css` → `tokens/` (colors, typography, spacing, base)
- `assets/` — logo, `photos/` (9 teacher headshots, founder, studio scenes, class video-call composite, 90-days collage), `illustrations/` (3D renders — non-campaign)
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/core/` — Button, UrgencyBadge, Overline
- `components/marketing/` — FeatureCard, TestimonialCard, TrustpilotBadge, PriceCard, FAQAccordion, ChatExchange, PageHeader, PageFooter, StickyCTABar, FinePrint
- `ui_kits/landing-29/` — full $29 landing page recreation
- `SKILL.md` — agent skill entry point

## Intentional additions
- All components above: no source component library existed, so a campaign-sized set was authored from the build brief + production email patterns.
