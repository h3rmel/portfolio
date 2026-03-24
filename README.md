# isaachermel-portfolio

Personal portfolio site (Next.js App Router).

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

## Performance baseline (Lighthouse)

Captured from [lighthouse-results.json](lighthouse-results.json): **Lighthouse 13.0.2**, **Chrome 146**, `pnpm start` at `http://localhost:3001/`, **2026-03-24** (local run; scores differ on production HTTPS and real network).

| Metric            | Value                   |
| ----------------- | ----------------------- |
| Performance score | 98 / 100                |
| LCP               | ~0.57 s (~571 ms)       |
| CLS               | ~0.0002 (reported as 0) |
| TBT               | ~132 ms                 |
| FCP               | ~0.21 s                 |
| Speed Index       | ~0.30 s                 |

**Caveats:** “Does not use HTTPS” is expected on localhost. Re-run on the production URL for numbers comparable to field data and Core Web Vitals.
