# Memory Bank — isaachermel.dev.br

> Single source of truth for architecture, design decisions, and styling patterns.

---

## 1. Tech Stack

| Layer        | Technology                        | Notes                                                              |
| ------------ | --------------------------------- | ------------------------------------------------------------------ |
| Framework    | Next.js (App Router)              | Server Components by default; `"use client"` only when required    |
| Language     | TypeScript (strict)               | No `any`. Explicit types/interfaces for all exports                |
| Styling      | Tailwind CSS                      | Utility-first; design tokens via CSS variables                     |
| Components   | shadcn/ui                         | Foundation for accessibility & infrastructure; customized per spec  |
| Animations   | Framer Motion                     | Mechanical micro-interactions only; no fluid/organic motion        |
| Linting      | Biome                             | Formatting + linting in a single pass                              |
| Package Mgr  | pnpm (or bun — TBD)              | Lockfile committed                                                 |

---

## 2. Visual Identity — "Teenage Engineering / Industrial Raw"

### Design Principles

- The interface must look like **professional hardware equipment**, an advanced terminal, or a physical control panel.
- **Visible grids** and solid dividing lines structure every section.
- **Sharp corners** — zero or minimal `border-radius` everywhere.
- **Monospace fonts** for any technical data (metrics, code, versions).
- Typography hierarchy uses a geometric sans-serif for headings and a monospace for body/data.
- Components behave like **physical switches, dials, and indicators** — tactile, not decorative.

### Animation Rules (Framer Motion)

| Allowed                                    | Forbidden                              |
| ------------------------------------------ | -------------------------------------- |
| Snap-in transitions (spring, stiff)        | Fluid/organic easing                   |
| Mechanical slide/reveal                    | Bouncy/playful motion                  |
| Cursor blink, indicator pulse              | Parallax scrolling                     |
| Hover state with hard displacement (2-4px) | Elastic overshoot                      |
| Stagger with fixed delay (40-80ms)         | Random/physics-based particle effects  |

---

## 3. Color Palette — Audi F1 Inspiration (60-30-10 Rule)

### Hex Reference

| Role                  | Token                | Hex       | Usage                                              |
| --------------------- | -------------------- | --------- | -------------------------------------------------- |
| 60% Base              | `--background`       | `#0C0C0E` | Main background, modals, negative space             |
| 30% Structure (light) | `--foreground`       | `#D1D5DB` | Primary text, headings                              |
| 30% Structure (dark)  | `--border`           | `#374151` | Borders, grid lines, dark metallic surfaces         |
| 10% Highlight         | `--primary`          | `#E60000` | CTA buttons, hover states, terminal cursor, alerts  |
| Derived               | `--primary-foreground` | `#FFFFFF` | Text on primary backgrounds                       |
| Derived               | `--muted`            | `#18181B` | Elevated surfaces, cards                            |
| Derived               | `--muted-foreground` | `#9CA3AF` | Secondary/disabled text                             |
| Derived               | `--accent`           | `#1F1F23` | Subtle highlights, active nav items                 |
| Derived               | `--accent-foreground`| `#D1D5DB` | Text on accent surfaces                             |
| Derived               | `--destructive`      | `#E60000` | Maps to primary (errors = same red indicator)       |
| Derived               | `--ring`             | `#E60000` | Focus rings                                         |

### Application Rules

1. **Background** (`#0C0C0E`) dominates — 60% of visible surface area.
2. **Silver/Gray tones** (`#D1D5DB`, `#374151`) provide structure — 30%.
3. **Lava Red** (`#E60000`) is surgical — 10% max. Only interactive elements, alerts, and focal indicators.
4. Never use red for decorative purposes. Every red pixel must signal **action** or **status**.

---

## 4. Content Structure & Sections

### 4.1 Hero Section

- **Title statement:** _"Software Engineer focused on front-end with 4 years of experience, specializing in performance optimization and resolving rendering bottlenecks."_
- **CTA buttons** styled as physical switches:
  - "Resume" (primary/red)
  - "GitHub" (secondary/outlined)
  - "LinkedIn" (secondary/outlined)
- No abstract illustrations. Data-driven visual or terminal-style animation.

### 4.2 Professional Experience

Metrics-first. No generic task lists.

| Company  | Key Metric                                                                 |
| -------- | -------------------------------------------------------------------------- |
| Zenvia   | Structural refactoring with React — **200ms response time reduction**      |
| Catency  | **LCP < 2.5s**, full Core Web Vitals compliance                           |
| Umbler   | End-to-end automation pipeline for **100,000 clients**                     |

### 4.3 Open-Source & Architecture

| Project                        | Highlight                                              |
| ------------------------------ | ------------------------------------------------------ |
| Distributed Systems Lab        | 5M records with 57MB RAM, 7.35ms P95, 60 FPS          |
| Guarahooks                     | 50 React hooks, shadcn registry distribution           |
| MagicUI                        | Visual engineering, bundle size reduction               |
| Enterprise React Architecture  | Shift-Left Testing, TDD/BDD methodology                |

### 4.4 Visual Stack

- Minimalist grid of **monochromatic icons or typography**.
- Core technologies: React, Node.js, Docker, Kubernetes, Jest, Figma.
- No color logos — all icons reduced to single-tone (silver or white on carbon).

---

## 5. Tone of Voice (Copywriting)

- **Direct, technical, metrics-driven.**
- Replace vague adjectives with hard numbers.
- No: _"passionate about technology"_ → Yes: _"reduced bundle size by 40% via tree-shaking and code-splitting"_.
- Every sentence must communicate **engineering value** or a **measurable outcome**.

---

## 6. Architecture Decisions Log

| Date       | Decision                          | Rationale                                        |
| ---------- | --------------------------------- | ------------------------------------------------ |
| 2026-03-19 | Next.js App Router                | Server Components, streaming, RSC for performance |
| 2026-03-19 | Tailwind + CSS variables palette  | Token-based theming aligned with shadcn/ui        |
| 2026-03-19 | Framer Motion (mechanical only)   | Matches industrial design language                |
| 2026-03-19 | Single-page portfolio (no routing)| All sections on one page, anchor navigation       |
| 2026-03-19 | shadcn/ui v4 initialized          | Base UI primitives with registry-driven components |
| 2026-03-19 | `Badge` adopted for tags          | Consistent tokenized pills across sections         |
| 2026-03-19 | Projects bento grid               | Highlights Distributed Systems Lab as primary case |
| 2026-03-19 | Hero CTA staggered entrance       | Improves visual rhythm and scanability             |
| 2026-03-19 | Global motion tuned slower        | Smoother, more fluid transitions and typing pace   |

---

## 7. Component Patterns (to be populated)

> Document each complex component here as it is built.

---

## 8. File Structure Convention

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, providers)
│   ├── page.tsx            # Single-page composition
│   └── globals.css         # CSS variables + Tailwind directives
├── components/
│   ├── ui/                 # shadcn/ui primitives (button, separator, etc.)
│   ├── sections/           # Page sections (hero, experience, projects, stack)
│   └── shared/             # Cross-section components (grid, indicator, switch)
├── config/                 # Static data (experience, projects, links)
├── lib/                    # Utilities (cn, variants)
└── types/                  # Shared TypeScript interfaces
```
