# Portfolio roadmap

Ordered checklist derived from the improvement plan. Complete items in sequence where dependencies exist; parallel work is noted.

---

## 1. Open Graph, Twitter cards, and social preview

**Goal:** Correct title, description, and preview image when the site is shared (LinkedIn, Slack, X).

- [x] Design or export a static OG image (e.g. 1200×630) matching the industrial palette (carbon / silver / lava accent). Store under `public/` (e.g. `og.png`) **or** use App Router file conventions.
- [x] Wire metadata in `src/app/layout.tsx`:
  - [x] `openGraph.images` → absolute URL to the image (use `metadataBase` + path, or full `https://isaachermel.dev.br/og.png`).
  - [x] `twitter.card` = `summary_large_image` and `twitter.images` aligned with OG.
- [ ] Verify with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator) (or equivalent) after deploy.
- [x] Optional: add `opengraph-image.tsx` / `twitter-image.tsx` for generated art later; static asset is enough for v1.

---

## 2. `robots.txt` and `sitemap.xml`

**Goal:** Crawlers can discover the canonical URL and index the main page cleanly.

- [x] Add `src/app/robots.ts` (App Router) that allows all user agents and points `sitemap` to your production origin (same as `siteConfig.url`).
- [x] Add `src/app/sitemap.ts` returning at least the home route (`/`) with `lastModified` and `changeFrequency` / `priority` as appropriate.
- [x] Confirm `metadataBase` in layout matches production domain so sitemap URLs are absolute.
- [ ] After deploy, request indexing in Google Search Console (optional) and hit `/robots.txt` and `/sitemap.xml` manually.

---

## 3. Resume as external link (Google Docs)

**Goal:** Hero “Resume” opens your live CV; no `public/resume.pdf` required.

- [x] Verify or update `siteConfig.resume` to the **published** Google Docs link (Viewer or “anyone with link can view”), not an edit-only URL. _(Uses `/preview`; confirm read-only in incognito.)_
- [x] Keep `target="_blank"` and `rel="noopener noreferrer"` on the resume `Link`.
- [x] Optional: add `aria-label` on the button, e.g. “Open resume (Google Docs)”.
- [ ] Smoke-test: incognito window, not logged into Google, confirms the document opens read-only.

---

## 4. Performance (Lighthouse / Core Web Vitals)

**Goal:** Fast first paint, minimal layout shift, no regressions as content grows.

- [x] Run `pnpm build && pnpm start` (or production deploy) and Lighthouse on `/`. _(Local run → `lighthouse-results.json`.)_
- [x] Document baseline LCP, CLS, TBT; fix regressions (font loading, large images, blocking scripts). _(README: local + production `lighthouse-results-prd.json`.)_
- [ ] If sections grow: consider dynamic import for below-the-fold client sections (only if metrics justify it).
- [ ] Re-run Lighthouse after meaningful UI changes.

---

## 5. Accessibility

**Goal:** Keyboard and screen-reader friendly; respects user preferences.

- [x] Tab through hero CTAs, project cards, and footer links; ensure visible focus matches design tokens (`ring`).
- [x] Add missing `aria-label`s only where the visible label is insufficient (e.g. external-only icons).
- [x] Implement `prefers-reduced-motion`: reduce or disable Framer/Motion sequences and typing animation when `(prefers-reduced-motion: reduce)`.
- [ ] Optional: run axe DevTools or Lighthouse accessibility audit and fix critical issues.

---

## 6. Polish and resilience

**Goal:** Professional edge cases and tone consistency.

- [x] Audit all external `href`s for consistent `rel="noopener noreferrer"` (and `target="_blank"` where intended).
- [x] Customize `src/app/not-found.tsx` copy to match industrial / terminal tone.
- [ ] Optional: lightweight error boundary UI for client subtree failures (if you add more client-only features later).

---

## 7. Developer experience and CI

**Goal:** Every PR proves the site still builds and passes lint.

- [x] Add GitHub Actions workflow: checkout → `pnpm install` → `pnpm lint` → `pnpm build`. _(Uses `pnpm lint:ci` without `--fix`, then `pnpm build`.)_
- [x] Document in README: Node/pnpm version, scripts (`dev`, `build`, `lint`).
- [ ] Optional: enable branch protection requiring the workflow to pass.

---

## 8. Deployment and observability

**Goal:** Stable production URL, previews, light analytics.

- [ ] Deploy to Vercel (or chosen host); set env vars if any are introduced later.
- [ ] Enable preview deployments for PRs.
- [ ] Optional: privacy-conscious analytics (e.g. Vercel Analytics or Plausible) if you want traffic insight without heavy scripts.

---

## Suggested order of execution

1. §1 OG / Twitter metadata + image  
2. §2 `robots.ts` + `sitemap.ts`  
3. §3 Google Docs resume URL in config + hero verification  
4. §4 Lighthouse pass  
5. §5 Accessibility + reduced motion  
6. §6 Polish (`not-found`, link audit)  
7. §7 CI  
8. §8 Deploy + optional analytics  

Update this file as items ship (check boxes or move done work to a “Done” section at the bottom).

---

## Manual follow-ups (post-deploy / local)

- §1: Facebook Sharing Debugger + Twitter Card Validator.
- §3: Incognito smoke-test on resume URL.
- §4: Lighthouse run and fill in baseline numbers in README.
- §2 / §8: Hit `/robots.txt`, `/sitemap.xml`, Search Console, Vercel previews as needed.
