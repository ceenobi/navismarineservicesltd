# Navis Marine Services — Progress

## Recent Accomplishments

### About Navis section (completed)
- Built out the About page `AboutNavis` section (`app/components/features/about-navis/about.tsx`) into a full editorial two-column layout matching the site's design language.
- Left column: `About Navis` badge, split heading **"Founded on *watchkeeping discipline*."** (deepOrange accent preserved by `useSplitWords`), two intro paragraphs, and dual CTA buttons (Explore our services / Get in touch).
- Right column: rounded vessel image with `data-reveal-from="right"` slide-in, plus a 3-up stat strip (24/7 coverage, 15+ years, 100% transparency) animated with `useCountUp`.
- Below: a 3-card values grid (Watchkeeping Discipline, Local Expertise, Integrated Solutions) with hover shadow lift, all wired into the shared `useReveal`/`useSplitWords`/`useCountUp` animation layer with reduced-motion handling.
- Content reflects the real company story (bridge-watch heritage, Nigerian ports, integrated agency/consultancy/HSSEQ/procurement/logistics).
- Verified: SSR renders all content + animation hooks, `yarn typecheck` and `yarn build` pass.

### SEO readiness (completed)
- Added `app/lib/seo.ts` as a single source of truth for SEO: `SITE_NAME`, `SITE_URL` (https://navismarineservicesltd.com), description, OG/twitter/canonical meta builders via `seoMeta()`, and JSON-LD builders (`Organization`, `WebSite`, `ProfessionalService` with contact + service offers).
- Replaced the placeholder `"New React Router App"` meta on the index route with a full meta set: descriptive title, keyword-rich description, `robots` index/follow, canonical, Open Graph (type, site_name, title, description, url, 1200×630 image, locale `en_NG`), and Twitter cards.
- `root.tsx`: added root-level fallback meta (404/error pages), `theme-color` `#0a2342`, `apple-touch-icon`, and three separate valid JSON-LD `<script>` blocks (Organization, WebSite, ProfessionalService) in the head.
- Added `public/robots.txt` (allow all + sitemap reference) and `public/sitemap.xml`.
- Generated `public/og-image.png` (1200×630) — branded deep-blue gradient with the NAVIS logo, tagline, and service list, rendered via headless Chrome and downscaled to 449KB.
- Verified in browser: title/description/canonical/OG/twitter all render, JSON-LD parses (3 valid blocks), robots/sitemap/og-image all serve 200. `yarn typecheck` and `yarn build` pass; assets copied to `build/client`.

### Font delivery optimization (completed)
- **Eliminated the Google Fonts dependency entirely.** Inter was loaded twice: from `fonts.googleapis.com` via a `<link>` in `root.tsx` AND self-hosted via `@fontsource-variable/inter` in `app.css` — but the self-hosted copy registered the family as `"Inter Variable"` while the theme referenced `"Inter"`, so only the CDN copy was ever used and all 7 bundled Inter subsets were dead weight.
- Renamed the `--font-sans` theme token to `"Inter Variable"` (matching the self-hosted family) and removed the Google Fonts preconnect + stylesheet links from `root.tsx`.
- **Slimmed subsets from 13 to 4 woff2 files.** Replaced the `@fontsource-variable/*` full-package CSS imports (which shipped cyrillic, cyrillic-ext, greek, greek-ext, vietnamese subsets the site never uses) with hand-written `@font-face` rules in `app.css` pointing at only the `latin` + `latin-ext` variable woff2 files, split into separate `@font-face` blocks with per-subset `unicode-range` so latin-ext is only fetched when accented chars appear.
- Verified in browser: body renders `Inter Variable`, headings `Source Serif 4 Variable`, both fonts report `loaded`, and the network panel shows zero requests to Google Fonts — only the self-hosted latin woff2 files. `yarn typecheck` and `yarn build` pass; the 4 fonts are the only font assets in `build/client/assets`.

### Home page GSAP animation suite (completed)- Created `app/lib/animations.ts` as a shared, self-contained animation layer:
  - `useReveal` — scroll-triggered reveal for `[data-reveal]` targets (opacity + transform only), snappy `power3.out`, supports `data-reveal-from="left|right"` and `data-reveal-scale` per-element overrides via function-based from-values.
  - `useSplitWords` — hand-rolled SplitText-style heading animation (no paid Club plugin). Splits heading text into masked word spans (`overflow-hidden` + `translateY(110%)`), staggers them up, preserves nested styled `<span>` elements (e.g. `.text-deepOrange` accents), sets `aria-label` on the heading for accessibility, and restores plain text on unmount.
  - `useCountUp` — animates `[data-count]` targets on scroll. Numeric values count up with `snap`; single letters cycle A→Z to land on the target (used for the NAVIS N-A-V-I-S letter roulette).
  - `useHoverTilt` — subtle `rotationX/rotationY` 3D tilt on hover via `gsap.quickTo`, gated to `(hover: hover)` devices.
- All animations wrapped in `gsap.matchMedia("(prefers-reduced-motion: no-preference)")` — reduced-motion users get static, immediately-visible content (never hidden). Only `transform`/`opacity` animated; `clearProps` frees layers after each reveal.
- Wired the suite into home sections: `about.tsx` (split headline + reveal), `services.tsx` (batch reveal + card hover tilt), `why-choose.tsx` (zig-zag left/right reveals + icon pop-in), `navis-way.tsx` (row reveals + count-up letter roulette on both mobile & desktop layouts), `industries.tsx` (badge cloud staggered reveal).
- Verified in browser: 57 reveals all clean up, 6 split headings render with accents preserved, NAVIS letters resolve correctly, hover tilt applies & resets, reduced-motion path is static, no console errors. `yarn typecheck` and `yarn build` both pass.

### Prior work (context)
- Hero section: video background (Cloudinary asset rejects most transforms; `ar_16:9,c_fill,g_center` works), GSAP entrance with `gsap.matchMedia` reduced-motion handling, persistent zoom crop to hide video letterboxing.
- Fonts: Inter (body) + Source Serif 4 Variable (headings). Poppins/Crimson Pro removed.
- Nav: fixed-header centering fix, focus-visible rings, `aria-current`, `aria-label` on nav.
- ErrorBoundary/404 redesigned with theme colors.

## Known Issues
- Cloudinary assets in this project reject most image/video transform parameters (return 400). Only plain URLs or `ar_16:9,c_fill,g_center` work.
- Multiple `h1` elements across the home page are pre-existing (not introduced by this work).

## Animation Fixes (this session)
- **Split-word wrapping bug:** `useSplitWords` joined words with `\u00A0` (non-breaking space) and wrapped them in an `inline-block` container, so headings could never wrap — breaking mobile responsiveness. Rewrote it to flat-tokenize words and re-insert them joined with normal spaces inside a `block` wrapper. Each word (including styled `<span>` words) becomes its own animated span with the original class preserved.
- **Space-before-span bug:** The old splitter dropped the whitespace between a plain text node and a following styled `<span>` (e.g. `and <span>energy</span>` rendered as `andenergy`). The flat tokenizer now preserves inter-word spacing across node boundaries.
- **Page horizontal overflow:** Hidden `data-reveal-from="left|right"` cards (offset by ±48px) below the fold inflated `scrollWidth`, causing 32px horizontal scroll on mobile. Added `overflow-x: clip` to `html, body` in `app.css` (clip, not hidden, so `position: fixed` nav is unaffected).
- Verified at 390px mobile viewport: all 6 split headings wrap (3–5 lines), orange accents render with correct spacing, and `scrollWidth === clientWidth` (0px overflow) at all scroll positions.