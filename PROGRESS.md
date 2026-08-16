# Navis Marine Services — Progress

## Recent Accomplishments

### Repository licensing, documentation & insights (completed)
- **README rewritten** (`README.md`) to reflect the actual project: Navis Marine Services Ltd description, feature list (SSR + prerender, Brevo contact form, GSAP, SEO), Yarn 4 install/dev/build/start/typecheck commands, `BREVO_API_KEY` env table, Vercel (primary) + Docker deployment, and the `test` → `main` git workflow. Added `.env.example` (was referenced but missing).
- **LICENSE (All Rights Reserved):** Added a proprietary license file for Navis Marine Services Ltd — viewing for reference only; no reproduction/distribution/reuse without written consent. GitHub now detects a license on the repo (`Other` / `NOASSERTION`). README carries an "All Rights Reserved" badge + license section.
- **Community health files** (feed the Insights → Community Standards tab): `SECURITY.md` (private vulnerability reporting via info@), `CONTRIBUTING.md` (setup, git workflow, coding standards per AGENTS.md, licensing note), `CODE_OF_CONDUCT.md` (Contributor Covenant 2.1).
- **README badges:** License, Node 24.x, React Router 8, TypeScript strict, Tailwind 4, Vercel-deployed, and CI workflow status (shields.io).
- Shipped via PR #3 (`test` → `main`), CI green, merged (`6b7bf6b`), local `main` synced.

### Deployed to production on Vercel (completed)
- **Git flow:** Set `main` as the GitHub default branch (was `test`). Committed production-readiness work (`671d1cc`), opened PR #1 (`test` → `main`) via GitHub API, waited for CI (GitGuardian + Typecheck & Build all green), merged (merge commit `6c94a94`), and synced local `main`.
- **Vercel project:** Created project `navis` (`prj_ZYg43ZTcNfKYjB2Jh29E2OaymZxJ`) under team `cobis-projects`, authenticated as `ceenobi`. Production deployment `dpl_FE7LedpUGnXhhAg6rmMjM5XpAq6G` is **Ready** with aliases `navis-cobis-projects.vercel.app` and `navis-six.vercel.app` (Node 24.x). Updated Vercel CLI 41.0.1 → 59.1.3 (old CLI failed uploads with `ECONNREFUSED`).
- **Custom domain live:** Connected `navismarineservicesltd.com` (registered with Vercel, nameservers on Vercel DNS) to the `navis` project via the Projects API. `https://navismarineservicesltd.com/` returns **200** with all security headers (HSTS, CSP, X-Frame-Options, nosniff, Referrer/Permissions-Policy, immutable `/assets/*` cache). `www.` 307-redirects to the apex. All routes serve prerendered HTML: `/`, `/about/`, `/contact/`, plus `/sitemap.xml`, `/robots.txt`, `/navislogo.svg` verified.
- **Remaining:** `BREVO_API_KEY` still empty (not set in `.env` or Vercel env vars) — contact form action degrades gracefully until a key is added and `info@navismarineservicesltd.com` is verified as a Brevo sender. Vercel GitHub app not installed, so `vercel git connect` fails and push-based auto-deploys aren't wired yet (deploys currently via `vercel deploy --prod`). Deployment protection (SSO) is enabled on the deployment URL.

### Production readiness for Vercel (completed)
- **Pre-rendering:** Added `prerender: ["/", "/about", "/contact"]` to `react-router.config.ts` alongside `ssr: true` + `vercelPreset()`. Build now emits static HTML (`build/client/index.html`, `about/index.html`, `contact/index.html`); the `/contact` POST `action` still runs on the runtime server. Verified via `yarn build` + `react-router-serve` (GETs 200, POST action executes).
- **Security headers:** Added a `headers` block to `vercel.json` (the correct place — prerendered HTML is served as static files, so middleware-set headers would never reach it). HSTS, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, Permissions-Policy, and a static CSP (`default-src 'self'`; `'unsafe-inline'` for scripts since React Router SSR inline hydration + inline JSON-LD can't be nonced on static files; `img-src`/`media-src` allowlist `res.cloudinary.com` + phone-flag CDN `purecatamphetamine.github.io`; `object-src 'none'`; `frame-ancestors 'none'`; `upgrade-insecure-requests`). Immutable `Cache-Control` for `/assets/*`.
- **.gitignore:** Added `.vercel/` and untracked the committed build artifact `.vercel/react-router-build-result.json`.
- **CI workflow:** Added `.github/workflows/ci.yml` (Node 24, Corepack-enable + Yarn 4, `yarn typecheck` + `yarn build` on push/PR to `test`/`main`), matching the AGENTS.md test→PR→CI→merge flow.
- **package.json:** Added `packageManager: "yarn@4.16.0"` (pins Corepack for Vercel builds); fixed the `start` script to locate the hashed server bundle (`find ./build/server -name index.js`) since the Vercel preset's `serverBundles` no longer emits `build/server/index.js`.
- **Logo optimization:** Recompressed the 912KB `public/navislogo.svg` to 112KB — the embedded raster was a 1080×1080 PNG rendered at 75×75; downscaled to 300×300 (4× retina) and re-embedded. Pixel-diff verified (only resampling edge variance in the raster mark; vector text identical).
- **Sitemap:** Added `/about` and `/contact` URLs to `public/sitemap.xml`.
- **Housekeeping:** Removed the committed `public/.well-known/appspecific/com.chrome.devtools.json` dev-tooling artifact.
- Verified: `yarn typecheck`, `yarn build` (all 3 routes prerender), `yarn start` serves `/`, `/about/`, `/contact/` (200) and the contact POST action executes gracefully with the empty `BREVO_API_KEY`.

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