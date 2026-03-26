# isaachermel-portfolio

Personal portfolio for **Isaac Hermel Reginato** — software engineer focused on full-stack TypeScript, scalable systems, and performance. Live site: [isaachermel.dev.br](https://isaachermel.dev.br).

## Stack

| Layer     | Choices                                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| Framework | [Next.js](https://nextjs.org/) 16 (App Router), React 19                                                             |
| Language  | TypeScript (strict)                                                                                                  |
| Styling   | [Tailwind CSS](https://tailwindcss.com/) v4, `tw-animate-css`                                                        |
| UI        | [Base UI](https://base-ui.com/), [class-variance-authority](https://cva.style/), [Lucide](https://lucide.dev/) icons |
| Motion    | [Framer Motion](https://www.framer.com/motion/) (sections respect `prefers-reduced-motion`)                          |
| Tooling   | ESLint (Next + Prettier), React Compiler enabled in `next.config.ts`                                                 |

## Features

- **SEO / sharing**: Open Graph and Twitter metadata, dynamic `opengraph-image` / `twitter-image`, `robots.txt`, `sitemap.xml` (base URL from `siteConfig`).
- **Content**: Hero, experience, projects, and stack sections driven by typed config under `src/config/`.
- **Accessibility**: Semantic headings, focus-visible on interactive cards, `aria-label` where needed, reduced-motion paths for animated UI.

## Repository layout

```
src/
  app/           # App Router: layout, page, metadata, robots, sitemap, not-found
  components/    # Sections, shared UI, primitives
  config/        # site, experience, projects, stack — edit here to update copy
```

## Configuration

Global site constants (name, URL, social links, resume, locale) live in `src/config/site.ts`. Update that file when changing deployment URL or social links so metadata and OG URLs stay consistent.

## Requirements

- **Node.js** 20.x
- **pnpm** 9.x (`corepack enable` then `corepack prepare pnpm@9 --activate`, or use the version from your package manager)

## Scripts

| Script         | Description                       |
| -------------- | --------------------------------- |
| `pnpm dev`     | Development server                |
| `pnpm build`   | Production build                  |
| `pnpm start`   | Serve production build locally    |
| `pnpm lint`    | ESLint with auto-fix              |
| `pnpm lint:ci` | ESLint check (no fix; used in CI) |
| `pnpm format`  | Prettier write across the repo    |

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on pushes and pull requests to `main`, `master`, and `v2`: install with frozen lockfile, `pnpm lint:ci`, then `pnpm build`.
