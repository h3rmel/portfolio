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

Same tool (**Lighthouse 13.0.2**, **Chrome 146**), **2026-03-24**. Default Lighthouse applies **simulated throttling** (mobile-class); scores are not identical to [CrUX](https://developer.chrome.com/docs/crux) field data.

### Production — [lighthouse-results-prd.json](lighthouse-results-prd.json)

`https://isaachermel.dev.br/` · fetch **2026-03-24T21:27:34Z**

| Metric              | Value                          |
| ------------------- | ------------------------------ |
| Performance         | 70 / 100                       |
| LCP                 | ~1.30 s (~1300 ms)             |
| CLS                 | ~0.0003 (reported as 0)        |
| TBT                 | ~737 ms (main score drag)      |
| FCP                 | ~0.50 s                        |
| Speed Index         | ~1.25 s                        |
| Accessibility       | 94 / 100                       |
| Best Practices      | 81 / 100                       |
| SEO                 | 100 / 100                      |

**Note:** **TBT** is weighted heavily in the Performance score; improving long main-thread tasks (JS parse/execute, Framer/Motion on the client bundle) is the highest-leverage follow-up if you want a higher Lighthouse number. **LCP** is still in a healthy range (~1.3 s under simulated mobile).

### Local — [lighthouse-results.json](lighthouse-results.json)

`pnpm start` at `http://localhost:3001/`

| Metric      | Value    |
| ----------- | -------- |
| Performance | 98 / 100 |
| LCP         | ~0.57 s  |
| CLS         | ~0.0002  |
| TBT         | ~132 ms  |
| FCP         | ~0.21 s  |
| Speed Index | ~0.30 s  |

Local run flagged “Does not use HTTPS”; production run passes HTTPS.

### Chasing ~95 on Best Practices and Performance

**Best Practices (~81 → ~95)**  
Your production JSON fails **only** the **“Uses deprecated APIs”** audit (weight **5**). The stack trace points at **Cloudflare** `cdn-cgi/challenge-platform/scripts/jsd/main.js` (Bot Fight / JS challenge / similar), not this repo. To clear it: relax or disable that layer for normal HTML navigations (e.g. turn off **Bot Fight Mode** / **Super Bot Fight** where safe, or use rules that do not inject the challenge script on `isaachermel.dev.br` document requests). There is no app-level fix while that script runs on first paint.

**Performance (~70 → ~95)**  
Under **simulated mobile**, **TBT** (~737 ms) drives the score. Hitting **95** usually means **much less main-thread JS** than a Framer/Motion-heavy client page—often **CSS-only** motion, fewer client islands, or accepting a **desktop** Lighthouse profile. This repo now **code-splits** Experience / Projects / Stack (`next/dynamic`) and enables **`optimizePackageImports: ['lucide-react']`** to trim work a bit; re-measure after deploy.

**Clean runs (avoid false “unused JS”)**  
`lighthouse-results-prd.json` lists **`chrome-extension://`** URLs—browser extensions (e.g. password managers) inflate “unused JavaScript/CSS”. Re-run in **Incognito with extensions disabled** or **`lighthouse` CLI** for numbers that reflect only your site.
