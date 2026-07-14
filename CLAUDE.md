# MedXpertsHub — Health & Medicine Editorial Landing Page

A pixel-faithful, responsive implementation of the **Front_End_Task** Figma design
(frame `2034:4260`, *"Landing page"* — a light-themed medical/health blog magazine).
Built with **hand-written HTML + SCSS**, compiled to CSS by **Dart Sass running on Node**
(no framework, no bundler).

- **Figma:** https://www.figma.com/design/1MLn82sowIyhOz5LbCcPLz/Front_End_Task?node-id=2034-4260
- **Canvas size (desktop frame):** 1440 × 8167 px
- **Content column:** 1260 px, centred, 90 px side gutters on the 1440 canvas
- **Approach:** Faithful desktop rebuild at 1440 px, degrading gracefully to tablet/mobile
  with CSS grid/flex (the Figma file has **no** mobile frame, so mobile breakpoints are
  designed sensibly, not copied).

> ⚠️ **Note:** an earlier version of this file described a *different* design (a dark-navy
> "digital agency" page in Mont). That was superseded — the delivered build is the
> **MedXpertsHub** medical blog documented here.

---

## 1. Font

The whole design uses a single family: **Inter** (Google Fonts), weights **400 / 500 / 600 / 700**,
loaded via `<link>` in `index.html`. Token: `$font-base` in `abstracts/_variables.scss`.

| Role | Size / weight |
|------|---------------|
| Logo / big headings | 28–40px · 600/700 |
| Card titles | 20–24px · 600 |
| Body / excerpt | 14–16px · 400 |
| UI labels, author, pills | 13–16px · 500 |

---

## 2. Colour Palette (extracted from Figma)

| Token | Value | Usage |
|-------|-------|-------|
| `$c-header` / `$c-ink` | `#1e2a38` | Dark slate header bar + primary text |
| `$c-muted` | `#71777a` | Secondary text / read-time |
| `$c-muted-2` | `#676d70` | Paragraph grey |
| `$c-page` / `$c-white` | `#ffffff` | Page background + cards |
| `$c-border` | `#e5e5e5` | Card borders |
| **Category accents** | | coloured dot + label on pills |
| `$c-blue` | `#0b6eef` | |
| `$c-green` | `#38a169` | |
| `$c-orange` | `#f78800` | |
| `$c-red` | `#ff0000` | |
| `$c-cyan` | `#0094bd` | |
| `$c-purple` | `#8307e2` | |
| `$c-sky` | `#00c8ff` | |
| **Section surfaces** | | |
| `$c-mint` / `$c-mint-ink` | `#d9f6dc` / `#035228` | Newsletter block |
| `$c-cta-bg` | `#ecf8ff` | "Find a Doctor" CTA |
| `$c-footer-bg` | `#f5f5f5` | Footer |
| `$c-logo-blue` | `#1f95d3` | Footer logo |

Radii: cards `16px` (`$radius`), thumbnails/collage `12px` (`$radius-sm`), pills `20px`.

---

## 3. Folder Structure

```
MedXpertsHub/
├── CLAUDE.md
├── index.html                ← full page markup (project root)
├── package.json              ← Dart Sass scripts
├── dist/css/main.css         ← GENERATED — do not edit
├── assets/
│   ├── images/               ← 73 photos exported from Figma (resized to ≤1400px JPEG)
│   ├── icons/  fonts/         ← (icons are inline SVG in the HTML; Inter is a Google web font)
└── src/
    ├── js/main.js            ← mobile nav toggle
    └── scss/
        ├── main.scss         ← entry, @use's every partial
        ├── abstracts/        ← _variables, _mixins, _index (tokens only)
        ├── base/             ← _reset, _typography
        ├── layout/           ← _container, _header, _footer
        ├── components/       ← _buttons, _pill, _bits (meta+section head), _card
        └── sections/         ← _hero, _categories, _feature-rows, _mental, _doctors, _promos
```

SCSS uses the modern module system (`@use` / `@forward`). Every partial that needs tokens
starts with `@use '../abstracts' as *;`.

### Reusable components (SCSS)
- `.card` — white vertical article card (image top + body)
- `.ocard` — overlay card: full-bleed image + gradient scrim + text (sizes `--hero`, `--tall`, `--feature`)
- `.hcard` — horizontal thumbnail + text row (variants `--lg`, `--sm`)
- `.catcard` — circular category tile
- `.pill` — category chip; colour comes from inline `--c` custom property
- `.sec-head`, `.meta`, `.btn`, `.link-more`

---

## 4. Build — SCSS via Node

```bash
npm install          # once
npm run dev          # watch src/scss → dist/css/main.css (expanded + source map)
npm run build        # one-off production compile (compressed)
```

Open `index.html` in the browser, or serve via WAMP at
`http://localhost/sklentr/MedXpertsHub/`.

`dist/` is generated output — never edit by hand.

---

## 5. Section Order (Figma top → bottom)

1. Header / nav (MedXpertsHub · Home · Features · Latest · More · Contact us)
2. Hero — big overlay feature + 2 stacked cards + 4-card row
3. Category circles (Medical treatment, Physical Therapy, Health & Wellness, …)
4. Stories for you — feature + list column
5. Patient problems — card · feature · card
6. Mental health — "Our Featured": 2 features + promo, then 6 list rows
7. Nutrition & Diet — feature + 2×2 grid
8. Banner strip (full-width promo image)
9. Doctor's Advice & Tips — main list column + sidebar (promo, mini rows, Load more)
10. Must read — feature + 2 cards
11. Newsletter — mint block + photo collage
12. Recent posts — 2 × 4 card grid
13. Find a Doctor — CTA collage + search card
14. Footer — brand + socials, Company links, newsletter signup, copyright

---

## Conventions
- **Do not edit `dist/`** — compiled output.
- Colours/fonts/spacing come **only** from tokens in `abstracts/_variables.scss` — no hard-coded
  hex inside section partials.
- Keep the desktop match exact at 1440px; responsive rules live under the `$bp-lg/$bp-md/$bp-sm` breakpoints.
- Figma image-fill URLs expire after ~7 days — assets are already downloaded locally into
  `assets/images/` (named by Figma `imageRef`), so don't hot-link.

## Figma access (this environment)
- Connected via the Framelink Figma MCP (`figma-token`) using a personal access token, plus the
  official hosted `figma` server. Node data was also pulled directly through the Figma REST API
  (`https://api.figma.com/v1/files/1MLn82sowIyhOz5LbCcPLz/nodes?ids=2034:4260`).
