# Improvements Spec

Status tracker for planned code/SEO/quality improvements to the portfolio. Findings come from a full-repo review (2026-07-26). Nothing here is a production bug — these are incremental improvements, ordered by impact.

**Ground rules** (same as the content-update rounds):

- Content lives in `src/config/` and derives outward from `siteConfig` — don't hardcode identity in section files.
- Every animated section must respect `prefers-reduced-motion` (see the `mechanical` variants pattern).
- Gate before "done": `pnpm lint:ci` then `pnpm build`. No test suite exists.
- Branch + diff before push. One logical change per commit.

Legend: `[ ]` todo · `[~]` in progress · `[x]` done

---

## Tier 1 — Substantive

### 1. `[ ]` SEO: add JSON-LD structured data

**Problem:** No schema.org structured data anywhere. Search engines can't build a rich `Person` result for the portfolio.

**Fix:** Inject a `<script type="application/ld+json">` in `src/app/layout.tsx` with a `Person` graph derived from `siteConfig`:

- `name` ← `siteConfig.name`
- `url` ← `siteConfig.url`
- `jobTitle` ← "Software Engineer" (or derive from `siteConfig.title`)
- `sameAs` ← `[siteConfig.github, siteConfig.linkedin]`
- optionally `email`, `description`

Keep it data-driven (build the object from `siteConfig`, don't hardcode). Consider a `WebSite` node too.

**Files:** `src/app/layout.tsx` (+ maybe a small `src/config/site.ts` addition if new fields needed).
**Gate:** verify JSON parses and appears in the rendered `<head>` via `pnpm build` output / view-source.

### 2. `[ ]` Drop the duplicate motion library

**Problem:** `package.json` depends on BOTH `framer-motion` and `motion` (both `^12.38.0`). `motion` is the successor; `framer-motion` v12 just re-exports it. Imports are split — 4 section files use `framer-motion`, `typing-animation.tsx` uses `motion/react`.

**Fix:** Standardize all imports on `motion/react`, then remove `framer-motion` from `package.json` and re-lock.

**Files:** `src/components/sections/{hero,experience,projects,stack}.tsx`, `package.json`, `pnpm-lock.yaml`.
**Watch:** `Variants` type import in `projects.tsx` — comes from `motion/react` too.
**Gate:** `pnpm build` must still resolve all motion imports.

### 3. `[ ]` De-duplicate the `mechanical` motion variants

**Problem:** `EASE_MECHANICAL = [0.22, 1, 0.36, 1]` is copy-pasted in 4 files (`hero`, `experience`, `projects`, `stack`), and the reduced-motion `mechanical` variant factory (`useMemo` + `useReducedMotion` branch) is near-identical in 3 of them.

**Fix:** Extract to shared code, e.g. `src/lib/motion.ts`:

- `export const EASE_MECHANICAL = [0.22, 1, 0.36, 1] as const;`
- `export function useMechanicalVariants(opts?) { ... }` returning the variants, honoring `useReducedMotion()`.

Parameterize the small differences (stagger delay, duration, whether `y` offset is used — stack fades opacity only, no `y`).

**Files:** new `src/lib/motion.ts`; refactor the 4 section files.
**Note:** React Compiler is on, so the `useMemo` may be unnecessary — but keep behavior identical; measure before removing.

---

## Tier 2 — Polish

### 4. `[ ]` Add `viewport` export + canonical

- Add a Next `viewport` export (in `layout.tsx`) with `themeColor: '#0c0c0e'` so mobile browser chrome matches the dark theme.
- Add `alternates: { canonical: '/' }` to the metadata object.

**Files:** `src/app/layout.tsx`.

### 5. `[ ]` `cursor-pointer` on non-interactive stack cells

`src/components/ui/glare-hover.tsx:131` hardcodes `cursor-pointer`. The Stack section wraps non-clickable tech cells in `GlareHover`, so the cursor falsely implies clickability. Make the cursor opt-in (prop) or drop it from the base class and let consumers add it.

**Files:** `src/components/ui/glare-hover.tsx`, possibly `stack.tsx`.
**Watch:** don't regress any place that legitimately relies on the pointer cursor.

### 6. `[ ]` Trivia cleanups

- `src/components/sections/footer.tsx:24-31` — `mailto:` link has `target='_blank' rel='noopener noreferrer'`; meaningless for mail, remove.
- `src/components/shared/status-indicator.tsx:19-21` — `aria-label` on a bare decorative `<span>` is announced inconsistently; it's decorative (status is conveyed by adjacent text), so prefer `aria-hidden`. Confirm no place relies on it as the sole status signal before changing.

---

## Tier 3 — Follow-up from recent content change

### 7. `[ ]` Re-check lazy-fallback height for Stack

The stack list grew 20 → 25 items (one extra grid row) in the content refresh. The placeholder in `src/app/page.tsx:20` is still `min-h-56`. CLAUDE.md flags keeping these in sync to avoid layout shift. Re-measure the rendered Stack section height and bump the fallback if it now understates it.

**Files:** `src/app/page.tsx`.
**Note:** sections are `'use client'` but SSR'd by `next/dynamic` (no `ssr:false`), so the fallback mainly guards the hydration/chunk-fetch window — impact is real but bounded.

---

## Suggested sequencing

1. Tier 1 items as three separate branches/commits (independent).
2. Tier 2 as one "polish" commit.
3. Tier 3 as a quick verify + one-line fix if needed.
