# Connor Close — Portfolio · Design & Build Spec

> Build target for Claude Code. This is a **design-led** brief: the portfolio is the
> proof of the work, so motion and media handling carry the most weight. Reference
> implementation ships as `prototype.html` — match its layout, palette, and feel,
> then elevate the motion and media per the systems below.
>
> **North star:** restrained, expensive, intentional. Every transition should feel
> *engineered* — smooth and surprising, never bouncy, gimmicky, or cartoonish.

---

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind · **Framer Motion** (reveals, orchestration) · **Lenis** (smooth scroll). Deploy: Vercel.

```bash
npx create-next-app@latest portfolio --ts --tailwind --app
npm i framer-motion lenis
```

---

## Design tokens
```
--bg:#0e0e0c   --bg-2:#15150f   --paper:#f4f0e6
--accent:#e8851f (CTA)  --accent-deep:#c8542b (clay)  --accent-2:#d8b46a (gold)
--muted:rgba(244,240,230,.55)   --line:rgba(244,240,230,.12)
```
**Single dark theme.** Warm near-black, paper text, clay+gold accents.

**Type**
- Fraunces (300 + italic) — headings, hero name, statements, stat numbers, CTA
- Sora (600/700) — nav only
- Space Mono — kickers, labels, tags, meta

Signature move: an **italic gold/clay word** inside a serif heading. Use sparingly.

---

## THE MOTION SYSTEM  ← the core of this build

One transition language across the whole site. Define it once, reuse everywhere.

**The easing.** Everything uses `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out). No spring
overshoot, no bounce. Durations live in a **0.6s–1.1s** band — slow enough to feel
deliberate, never sluggish. Stagger children by **60–90ms**. Define these as shared
constants (`EASE`, `DUR`, `STAGGER`) and import them — consistency is what makes it
read as "designed," not assembled.

**Smooth scroll (Lenis).** Wrap the app in a client provider, drive via rAF, lerp
~0.08–0.1. This single layer is most of the "flow." Route anchor clicks through
`lenis.scrollTo()`. The whole motion system is tuned to this scroll feel — don't ship without it.

**Reveal-on-scroll (the workhorse).** One `<Reveal>` component, `whileInView`,
`viewport={{ once:true, margin:"-12%" }}`: opacity 0→1, y 28→0, the shared ease/dur.
A `delay` prop drives stagger. This is used for nearly every block. Restraint is the
point — a clean fade-rise on the house easing beats ten different effects.

**Hero load.** Split name CONNOR / CLOSE mask-reveals: each word in an
`overflow:hidden` wrapper, child translates y 110%→0, ~1s, staggered. Labels + clock
fade-rise after. Fires once on mount.

**Section-to-section continuity.** This is what should feel *unique* without being
loud. Pick ONE through-line and commit:
- A subtle **scroll-linked parallax** — section kickers / large headings drift a few
  px slower than the body via `useScroll`+`useTransform`, giving depth as you pass
  between sections. Keep displacement small (≤40px) — felt, not seen.
- Numbers and stat figures can **count up** once on reveal (e.g. $4.6M, 32K) — a
  single tasteful data flourish, not on everything.
- The marquee strip is the connective tissue between hero-area and services — keep its
  speed slow and constant.

**Micro-interactions.** Nav: active link → gold + small glowing clay dot; "Work"
chevron nudges right on hover; CTA lifts 1px with a warmer gradient + shadow. Service
rows: heading → gold, tag borders warm to clay, on hover. All on the house easing.

**Discipline.** No parallax on small elements, no rotating/skewing on scroll, no
confetti, no easing that overshoots. `prefers-reduced-motion`: kill Lenis + reveals +
mask + count-up; render everything static (clock still ticks). If a motion needs a
comment to justify it, cut it.

---

## MEDIA HANDLING  ← second pillar; this is web-design proof

Images and short videos will populate the **Work** cards and possibly the hero photo.
Treatment must look intentional and bespoke — the media *is* the portfolio.

**Loading / entrance.**
- No raw pop-in. Media reveals behind a **clip/scale mask**: poster or first frame
  scales from ~1.06→1 while a clip-path or overlay wipes open, on the house easing
  (~0.9s). Feels like the image "settles" into place.
- Use `next/image` with `placeholder="blur"` for stills; a low-res blurhash/poster
  resolves into the full asset. Never a white flash.
- Lazy-load below the fold; eager-load only the hero photo.

**Video (Work cards & hero).**
- Always `muted loop playsInline preload="metadata"` with a **poster** = first frame,
  so a still is visible before play and JS-off.
- **Play on in-view, pause on out-of-view** (IntersectionObserver) — cards don't all
  play at once; video wakes as it enters. Optionally **play on hover, poster at rest**
  for the grid (cheaper, feels responsive). Pick one and apply consistently.
- Respect `prefers-reduced-motion`: hold the poster, don't autoplay.
- Wrap in the same rounded card + clay-overlay + soft-shadow treatment as the
  placeholders already in the prototype, so swapping a placeholder for real media
  changes nothing structurally.

**Hover on Work cards.** Card lifts (−6px), the clay→gold gradient overlay strengthens,
and (if video) playback begins — one coordinated move, house easing. Caption (title +
role) sits over the gradient and stays legible at every state.

**Aspect ratios.** Work cards 4:3, hero photo 3:4.1 — fixed via `aspect-ratio` so
layout never shifts as media loads (CLS = 0). Author assets to these ratios.

**Asset pipeline.** Stills as AVIF/WebP via `next/image`. Video as compressed MP4
(H.264) + WebM where possible; keep clips short (≤10s) and small; always ship a poster.

---

## Sections (order)
1. **Nav** — floating bottom-center pill (themed: blur, gold hairline, clay-gradient CTA, active=gold+dot). Home icon · Skills · About · Work › · Contact · CTA. Collapses to icon+CTA on mobile.
2. **Hero** — dark, full-viewport. Three columns: label+**CONNOR** / portrait card / label+**CLOSE** + meta. Serif name, mask-reveal. Labels: "Founder / Builder" · "Engineering · Product · AI". Meta: "Philadelphia, PA — [live EST clock]". Photo card is a styled placeholder until the real photo lands (see Media).
3. **Statement + Stats** — serif line w/ italic-clay accent; 4-up stats ($4.6M · ~$80K/yr · 32K · 5/5), serif/gold, optional count-up on reveal.
4. **Marquee** — slow infinite strip: Product Design ✱ UI/UX ✱ Web Design ✱ Engineering ✱ AI Automation.
5. **Services** — numbered 01–05 stack (number · heading · description+tags). Outcome-first copy, real metrics. Hover warms heading→gold, tags→clay. Sections: Product Design & GTM · UI/UX · Web Design & Dev · Software Engineering · AI Automation & Agents.
6. **About** — two columns: big serif line (italic-clay) + short body + pill button.
7. **Work** — 2-col card grid, 4 entries, each takes image/video per Media system: Mobile Commerce App (Product Lead · Sole Eng) · B2B Wholesale Network ($4.6M · GTM) · Browser Automation Agent (Playwright · AI) · ETL & Data Pipeline (Python · GCP).
8. **CTA** — giant serif "Let's *build* together" + email link.
9. **Footer** — © year · Fishtown, Philadelphia PA · LinkedIn / GitHub / Email.

All section copy already written in `prototype.html` — lift it verbatim.

---

## Architecture
Keep content in `lib/content.ts` (services[], projects[], nav, contact, profile) — single source of truth. Motion constants in `lib/motion.ts`. Components: `SmoothScroll`, `Reveal`, `Nav`, `Clock`, `Hero`, `Statement`, `Marquee`, `Services`, `About`, `Work` (+ `MediaCard`), `CTA`, `Footer`.

`MediaCard` is the important one — it owns the still/video logic, the in-view play, the entrance mask, and the hover coordination, so every Work item behaves identically.

---

## Done when
- Lenis live; one shared easing/duration system; nothing bounces or overshoots
- Hero mask-reveals; EST clock ticks; section parallax is felt, not obvious
- `MediaCard` handles stills + video with masked entrance, in-view play, zero CLS, poster fallback — swapping in real assets needs no layout change
- Themed pill nav (active=gold+dot); micro-interactions on house easing
- `prefers-reduced-motion` fully honored
- Content + motion constants centralized; responsive; Lighthouse perf ≥90 / a11y ≥95

## Non-goals
Original design only — no third-party assets/copy. No CMS v1 (content in `content.ts`). Keep deps to Next + Tailwind + Framer Motion + Lenis.