# MedXpertsHub — Health & Medicine Editorial Landing Page

A pixel-faithful, responsive implementation of the **Front_End_Task** Figma design
(*"Landing page"* — a light-themed medical/health blog magazine). Built with
**hand-written HTML + SCSS**, compiled to CSS by **Dart Sass on Node** — no framework,
no bundler, no build tooling beyond the Sass compiler.

- **Live design reference:** [Figma — Front_End_Task](https://www.figma.com/design/1MLn82sowIyhOz5LbCcPLz/Front_End_Task?node-id=2034-4260)
- **Desktop frame:** 1440 × 8167 px · content column 1260 px, centred (90 px side gutters)
- **Approach:** Faithful desktop rebuild at 1440 px that degrades gracefully to tablet and
  mobile via CSS grid/flex. The Figma file has no mobile frame, so smaller breakpoints are
  designed sensibly rather than copied.

---

## ✨ Highlights

- **Single font family** — [Inter](https://fonts.google.com/specimen/Inter) (400/500/600/700), loaded from Google Fonts.
- **Token-driven styling** — all colours, spacing, radii and breakpoints come from
  `abstracts/_variables.scss`; no hard-coded hex inside section partials.
- **Modern Sass modules** — `@use` / `@forward` throughout, organised 7-1 style.
- **Reusable components** — cards, overlay cards, horizontal rows, category tiles, pills.
- **Progressive enhancement** — mobile nav toggle plus an `IntersectionObserver`
  scroll-reveal that falls back to fully-visible content when unsupported or when
  `prefers-reduced-motion` is set.

---

## 🚀 Quick Start

```bash
# 1. Install the one dev dependency (Dart Sass)
npm install

# 2. Watch SCSS → dist/css/main.css while you work
npm run dev

# 3. One-off production build (compressed, no source map)
npm run build
```

Then open `src/index.html` directly in a browser, or serve it via WAMP at
`http://localhost/sklentr/MedXpertsHub/src/`.

| Script | Does |
|--------|------|
| `npm run dev` / `npm start` | Watch `src/scss/main.scss` → `dist/css/main.css` (expanded + source map) |
| `npm run build` | Compile once, compressed, no source map |

> `dist/` is **generated output** — never edit it by hand (it's also git-ignored).

---

## 📁 Project Structure

```
MedXpertsHub/
├── CLAUDE.md                 ← detailed design/build notes
├── README.md
├── package.json              ← Dart Sass scripts
├── dist/css/main.css         ← GENERATED — do not edit (git-ignored)
├── assets/
│   ├── images/               ← photos exported from Figma
│   ├── icons/                ← (icons are inline SVG in the markup)
│   └── fonts/                ← (Inter is a Google web font)
└── src/
    ├── index.html            ← full page markup (~980 lines)
    ├── js/main.js            ← mobile nav toggle + scroll-reveal
    └── scss/
        ├── main.scss         ← entry, @use's every partial
        ├── abstracts/        ← _variables, _mixins, _index (tokens only)
        ├── base/             ← _reset, _typography
        ├── layout/           ← _container, _header, _footer
        ├── components/       ← _buttons, _pill, _bits, _card, _animations
        └── sections/         ← _hero, _categories, _stories, _feature-rows,
                                 _mental, _doctors, _promos
```

Every partial that needs tokens starts with `@use '../abstracts' as *;`.

---

## 🎨 Design Tokens

**Colours** (excerpt — full set in `abstracts/_variables.scss`):

| Token | Value | Usage |
|-------|-------|-------|
| `$c-ink` / `$c-header` | `#1e2a38` | Primary text + dark header bar |
| `$c-muted` | `#71777a` | Secondary text / read-time |
| `$c-page` / `$c-white` | `#ffffff` | Page & card background |
| `$c-border` | `#e5e5e5` | Card borders |
| `$c-blue` `$c-green` `$c-orange` `$c-red` `$c-cyan` `$c-purple` `$c-sky` | — | Category accent dots/pills |
| `$c-mint` / `$c-cta-bg` / `$c-footer-bg` | `#d9f6dc` / `#ecf8ff` / `#f5f5f5` | Section surfaces |

**Radii:** cards `16px`, thumbnails/collage `12px`, pills `20px`.

**Reusable SCSS components:** `.card`, `.ocard` (overlay, sizes `--hero`/`--tall`/`--feature`),
`.hcard` (`--lg`/`--sm`), `.catcard`, `.pill`, `.sec-head`, `.meta`, `.btn`, `.link-more`.

---

## 🧱 Page Sections (top → bottom)

1. Header / nav
2. Hero — big overlay feature + stacked cards + 4-card row
3. Category circles
4. Stories for you
5. Patient problems
6. Mental health — "Our Featured"
7. Nutrition & Diet
8. Full-width banner strip
9. Doctor's Advice & Tips
10. Must read
11. Newsletter (mint block + photo collage)
12. Recent posts
13. Find a Doctor CTA
14. Footer

---

## 🛠 Tech Stack

- **HTML5** — semantic, hand-written markup
- **SCSS** (Dart Sass) — modern module system, token-based, responsive
- **Vanilla JS** — no dependencies; mobile nav + scroll-reveal
- **Node + Dart Sass** — the only build tooling

---

## 📄 License

Private project — built as a front-end implementation task from a Figma design.
See `CLAUDE.md` for the full design specification and conventions.
