# Portfolio

My personal portfolio built with Astro, showcasing my professional experience, education, and projects.

Deployed on [Vercel](https://vercel.com), you can check it live at [isaachermel.dev.br](https://isaachermel.dev.br).

## Why Astro?

I decided to rebuild my portfolio using Astro to dive deeper into this modern framework and its ecosystem. This project serves as a learning experience and a personal challenge to explore Astro's capabilities, including:

- **Zero JavaScript by default** - Perfect for content-focused sites
- **Island Architecture** - Interactive components only where needed
- **Built-in optimizations** - Automatic image optimization, asset handling, and more
- **Framework flexibility** - Using React components alongside Astro's native templates
- **Type-safety** - Full TypeScript support across the project

The result is a blazing-fast, SEO-friendly portfolio with minimal client-side JavaScript.

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5
- **UI Components**: React 19 with Radix UI primitives
- **Styling**: Tailwind CSS v4
- **Icons**: Tabler Icons
- **Type Safety**: TypeScript with strict mode
- **Deployment**: Vercel Edge Network
- **Package Manager**: Bun

## Features

- 🌍 Internationalization (English/Portuguese)
- 🎨 Dark/Light theme support
- 📱 Fully responsive design
- ⚡ Static Site Generation (SSG) for optimal performance
- 🖼️ Optimized images with `astro:assets`
- ♿ Accessible UI components
- 🎯 Type-safe translations and configuration

## How to Run the Project

### Prerequisites

- [Bun](https://bun.sh) (version 1.0 or higher)
- Node.js (version 20 or higher) - optional, Bun can be used standalone

### Step by Step

1. **Clone the repository**

   ```bash
   git clone https://github.com/h3rmel/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Run the development environment**

   ```bash
   bun dev
   ```

   The application will be available at `http://localhost:4321`

4. **For production build**

   ```bash
   bun run build
   ```

   Optimized files will be generated in the `dist/` folder

5. **To preview the production version locally**

   ```bash
   bun run preview
   ```

## Project Structure

```tree
/
├── public/              # Static assets (served as-is)
├── src/
│   ├── assets/         # Images and media (processed by Astro)
│   ├── components/     # Reusable components
│   │   ├── layout/    # Layout components (navigation, etc)
│   │   ├── pages/     # Page-specific components
│   │   └── ui/        # UI primitives (buttons, cards, etc)
│   ├── config/        # Configuration files (logos, projects, etc)
│   ├── constants/     # Application constants
│   ├── i18n/          # Internationalization (translations, utils)
│   ├── layouts/       # Page layouts
│   ├── lib/           # Utility functions
│   ├── pages/         # File-based routing
│   ├── styles/        # Global styles
│   └── types/         # TypeScript type definitions
├── astro.config.mjs   # Astro configuration
└── package.json
```

## Available Commands

All commands are run from the root of the project:

| Command              | Action                                           |
| :------------------- | :----------------------------------------------- |
| `bun install`        | Installs dependencies                            |
| `bun dev`            | Starts local dev server at `localhost:4321`      |
| `bun run build`      | Build your production site to `./dist/`          |
| `bun run preview`    | Preview your build locally, before deploying     |
| `bun run format`     | Format code with Prettier                        |
| `bun run format:check` | Check code formatting                          |

## License

This project is licensed under the [MIT](LICENSE) License.

---

Built with ❤️ using [Astro](https://astro.build)
