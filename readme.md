# Seasons Gone Bye — Design System

Brand system for **Seasons Gone Bye**, a fiction podcast (and companion website) set in 1990s Seattle: the ancient fairy courts that manage the boundary between the seen and unseen are failing, and the story unfolds from the Seasons Gone Bye café on the first floor of Smith Tower — with the courts' clubs occupying the floors above. Produced by Blue Pine Media Group.

**Audience:** urban-fantasy TV fans (Grimm, Lost Girl, Supernatural, X-Files, American Gods), fiction-podcast listeners (Old Gods of Appalachia), and grunge-era nostalgics — equally.

**Sources given:** two mood boards in `uploads/` (Seattle-90s color studies + crossover-audience TV references). Direction was locked through an exploration round (`Explorations.dc.html`): option 4a = primary tile, 5a = alternative tile, 3c = website world, 3b = poster/merch world.

## The three worlds (one brand, three surfaces)

The seen/unseen premise is the system's literal structure. Same type, same neons, three surface treatments:

1. **Night** (`--night-*`, pure black `#07090b`) — podcast tiles, app icons, avatars, social squares. Club-glow washes, maximum neon.
2. **Rain-slick twilight** (`--dusk-*`, indigo `#11141f`) — the website. Neon reads as reflections on wet pavement: hairline light streaks, dual-glow type.
3. **Deep teal ink** (`--tealink-*`, green-black `#0e2422`) — posters and merch. Teal is the world, pink is the rare electric interruption.

Cream `#f5efe4` is type-only — never a surface.

## Naming status

⚠ Working title **"Seasons Gone Bye"** (the café's name). Alternatives proposed and still open: *The Unseen Sound*, *Static & Glamour*, *The Court Below*, *Last Call at the Seasons*. The wordmark is set in type (Cinzel Decorative) — **no drawn logo exists yet**; the Smith Tower line mark (`assets/smith-tower.svg`) is the brand mark.

## CONTENT FUNDAMENTALS

Voice is **wry noir over an earnest mythic floor** — a narrator who has seen too much, in a city that remembers more.

- Short declaratives, then a turn: "Four courts. One tower. Last call is at moonset."
- Mythic register earns its weight with mundane detail: "The lobby smells of coffee and something older than rain."
- The uncanny is stated matter-of-factly, never exclaimed: "The tide went out in 1889. Something stayed."
- Sentence case for prose; UI labels and eyebrows are UPPERCASE Oswald with wide tracking ("THE COURTS KEEP THE DOOR", "SMITH TOWER · 1994").
- Dates and provenance in mono, like tape-box annotations: "SIDE A · RECORDED 03.94".
- "We/ours" for the show's voice; "you" for the listener, addressed like a regular at the counter.
- No emoji. No exclamation points. No modern slang — nothing that couldn't be said in 1994.

## VISUAL FOUNDATIONS

- **Color:** two neons only — pink `#e93f9b` and teal `#2fc4a7` — over near-black surfaces. The four courts get seasonal hues (spring teal, summer gold, autumn rust, winter ice-blue) used as dots, badges, and episode coding; pink is reserved for "the Unseen"/brand moments. Never more than two glowing elements per composition.
- **Type:** Cinzel Decorative (display/wordmark — 700 for the mark, 400 for H2s); Oswald (UI labels, always uppercase + 2.5px tracking); Libre Franklin 300/400 (body); Cormorant Garamond (editorial pull-quotes, loglines, italics); Courier Prime (annotations). Never mix Cinzel below 18px.
- **Glow system:** type glows via `text-shadow` tokens (`--glow-pink`, `--glow-teal`, `--glow-dual`); fills/strokes via `box-shadow`. Over imagery or the tower mark, type takes `--halo-dark` first, glow second.
- **Backgrounds:** flat dark surfaces + one atmospheric wash (`--wash-club`, `--wash-twilight`, `--wash-card`, `--wash-tealink`). Hairline vertical light streaks (1px gradient lines, pink or teal) are a signature motif. No photos as backgrounds without a dark protection layer.
- **Borders & cards:** 1px solid `--border-subtle` on `--surface-card`, radius 0–2px, no drop shadows (glow is the only shadow). Cards may carry `--wash-card`.
- **Buttons/hovers:** solid neon fill + `--glow-button-*`, text `--text-on-neon`, uppercase Oswald. Hover = brighter glow (never scale); press = glow tightens. Links: teal-bright, hover pink-bright.
- **Motion:** slow and cinematic — 400ms fades, glow intensity transitions; light flickers (opacity keyframes) allowed, sparingly. Nothing bounces.
- **Imagery:** 90s Seattle at night, rain, neon signage, wet asphalt; cool color grade with one warm source; film grain welcome. No daylight stock, no clean gradients-on-white.
- **Radii:** sharp. 2px max. Round is reserved for court dots.
- **Transparency/blur:** rgba washes yes; backdrop-blur no (it reads modern-app, not 1994).

## ICONOGRAPHY

- **Brand mark:** `assets/smith-tower.svg` — thin-line Smith Tower silhouette, pink→teal gradient stroke, no finial ball. Use at ≥48px tall; at full glow (drop-shadows) as a standalone sign, or at ~55% opacity as a ghost behind the wordmark.
- **UI icons:** thin-line, 1–1.5px stroke, sharp joins — use [Lucide](https://unpkg.com/lucide@latest) from CDN (`stroke-width="1.5"`), tinted `--text-mid` or a neon. This is a substitution (no icon set was provided) — flag if you'd rather commission custom glyphs.
- Court sigils are colored dots/squares for now (no drawn sigils exist). No emoji, ever. Unicode ornaments (· ✦ §) allowed in mono annotations.

## Index

- `Brand Guide.html` — 12-page printable brand & style guide (export to PDF; page 11 is a copy-paste AI prompt block)
- `styles.css` → `tokens/` (colors, typography, spacing, effects, fonts)
- `ds-fallback-loader.js` — loads component `.jsx` sources directly when `_ds_bundle.js` is unavailable
- `assets/smith-tower.svg` — brand mark
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/core/` — Button, Input, Card, CourtBadge, Tag, Tabs, Switch, EpisodeRow
- `ui_kits/website/` — twilight-world site (home + episode view)
- `ui_kits/podcast_art/` — primary/alt tiles + episode-art template
- `ui_kits/social/` — square + story templates
- `ui_kits/posters/` — teal-ink gig poster
- `Explorations.dc.html` — the decision record (turns 1–5)
- `SKILL.md` — portable skill wrapper

## Intentional additions

- `EpisodeRow`, `CourtBadge` — podcast-specific primitives with no generic equivalent.
- Lucide icons — CDN substitution, see Iconography.

## Caveats

- Fonts load from Google Fonts CDN; no binaries are shipped. Provide licensed files if you need offline/print-safe embedding.
- Name and logo are working placeholders pending a final decision.
- Mood-board logos ("Seasons Gone Bye" medallion, Blue Pine Media Group) exist only as low-res crops inside the board PNGs; not extracted. Attach originals to include them.
