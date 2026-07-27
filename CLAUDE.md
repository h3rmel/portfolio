# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio for Isaac Hermel (single-page site at [isaachermel.dev.br](https://isaachermel.dev.br)). Next.js 16 App Router, React 19, TypeScript (strict), Tailwind CSS v4. Package manager is **pnpm 9** (Node 20).

## Commands

| Command        | Purpose                                      |
| -------------- | -------------------------------------------- |
| `pnpm dev`     | Dev server                                   |
| `pnpm build`   | Production build                             |
| `pnpm lint`    | ESLint with `--fix`                          |
| `pnpm lint:ci` | ESLint, zero warnings allowed — what CI runs |
| `pnpm format`  | Prettier write across the repo               |

There is **no test suite**. CI (`.github/workflows/ci.yml`) runs `pnpm lint:ci` then `pnpm build` — treat those two as the gate before considering a change done.

## Architecture

**Content is data, not markup.** Each page section renders from a typed array in `src/config/`:

- `site.ts` — single source of truth for name, URL, social links, resume, locale, location. Layout metadata, OG/Twitter images, `robots.ts`, and `sitemap.ts` all derive from it. Change deployment URL or identity here, not in the section files.
- `experience.ts`, `projects.ts`, `stack.ts` — export a typed array (e.g. `ExperienceEntry[]`) that the matching section maps over. **To edit portfolio copy, edit the config, not the JSX.**

**Page composition** (`src/app/page.tsx`): `HeroSection` and `Footer` are static; `Experience`, `Projects`, and `Stack` are lazy-loaded via `next/dynamic` with `SectionLazyFallback` placeholders. The fallbacks carry hard-coded `min-h-*` values matching each section to prevent layout shift — update the placeholder height if a section's size changes materially.

**Section wrapper** (`src/components/shared/section.tsx`): all sections wrap in `<Section index title>`, which renders the `[ NN / TITLE ]` corner label via `TypingAnimation` and an `sr-only` `<h2>` for the document outline. Hero passes `hideSectionHeading` because it owns the page `<h1>`.

**Layout tiers** under `src/components/`: `sections/` (page sections) → `shared/` (Section, StatusIndicator, fallbacks) → `ui/` (primitives: badge, button, separator, plus animated pieces like `glare-hover`, `typing-animation`, `grid-pattern`).

## Design system & styling

- **Tailwind v4 is CSS-first**: all theme config lives in `src/app/globals.css` under `@theme inline` — there is no `tailwind.config`. Colors are `oklch` tokens (`--color-background`, etc.).
- **Industrial/dark-only theme**: `<html>` is hard-set to `dark` in `layout.tsx`; there is no theme toggle. Border radius is globally zeroed (`--radius* : 0rem`) — squared corners are intentional, don't add rounding.
- **Font**: Departure Mono (local woff2, loaded in `src/app/fonts.ts`) is bound to _both_ `--font-sans` and `--font-mono`. Everything is monospace by design.
- **shadcn** is configured (`components.json`, style `base-nova`, Base UI primitives, Lucide icons) with `@react-bits` and `@magicui` registries. Use `pnpm dlx shadcn@latest add` to pull components; aliases resolve `@/components`, `@/lib`, etc.
- Compose classes with `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge).

## Motion

Animations use `motion/react` (formerly imported as `framer-motion`; both packages resolve to the same v12 release, but only `motion` is a dependency now — always import from `motion/react`). **Every animated section must respect reduced motion**: the shared `useMechanicalVariants()` hook in `src/lib/motion.ts` encapsulates the `useReducedMotion()` branch to a zero-duration, no-offset path, plus the `EASE_MECHANICAL` easing constant — call it instead of hand-rolling a new variants factory per section.

## Conventions

- **React Compiler is enabled** (`reactCompiler: true` in `next.config.ts`) — manual memoization is usually unnecessary.
- **Explicit return types are enforced** by ESLint; components are annotated `: ReactElement`.
- **Import ordering is enforced** (builtin → external → internal → parent → sibling → index, alphabetized, blank line between groups). `pnpm lint` auto-fixes it.
- Path alias `@/*` → `src/*`.
- Prettier: single quotes (incl. JSX), semicolons, trailing commas, 120 print width, 2-space indent.
- Unused vars/args must be prefixed `_` to pass lint.
- App Router special files live in `src/app/`: `opengraph-image.tsx` / `twitter-image.tsx` render via `next/og` (edge runtime) from the shared `_og/og-image-shared.tsx`.
