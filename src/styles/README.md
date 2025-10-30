# Styles Architecture

## Directory Structure

```tree
src/styles/
├── global.css              # Main entry point
├── tokens/                 # Design tokens (CSS custom properties)
│   ├── colors.css         # Color palette (OKLCH)
│   ├── spacing.css        # Spacing scale & sizes
│   ├── typography.css     # Fonts & letter spacing
│   ├── shadows.css        # Shadow scale
│   └── animations.css     # Timing & easing functions
└── components/
    └── utilities.css      # Composition utility classes
```

## Token System

### CSS Custom Properties

All design tokens are defined as CSS custom properties and organized by category:

#### Colors (`tokens/colors.css`)

- Semantic color tokens using OKLCH color space
- Automatic dark mode support via `.dark` class
- Follows shadcn/ui color system

#### Spacing (`tokens/spacing.css`)

- Base spacing unit: `--spacing-base: 0.25rem` (4px)
- Icon sizes: `--icon-size-{sm,md,lg,xl}`
- Avatar sizes: `--avatar-size-{sm,md,lg}`

#### Typography (`tokens/typography.css`)

- Font families: `--font-{sans,serif,mono}`
- Letter spacing: `--tracking-normal`

#### Shadows (`tokens/shadows.css`)

- Consistent shadow scale: `--shadow-{2xs,xs,sm,md,lg,xl,2xl}`
- Uses OKLCH for consistency with color system

#### Animations (`tokens/animations.css`)

- Duration: `--duration-{fast,normal,slow}`
- Easing: `--ease-{in,out,in-out}`
- Transform values: `--scale-active`, `--translate-hover`

### TypeScript Integration

Design tokens are also exported as TypeScript constants for type-safe access:

```typescript
import { DESIGN_TOKENS } from '@/lib/design-tokens';

// Type-safe token access
const iconSize = DESIGN_TOKENS.iconSize.md; // "1.25rem"
const duration = DESIGN_TOKENS.animation.normal; // "250ms"
```

## Composition Utilities

### Utility Classes (`components/utilities.css`)

Reusable composition classes for common patterns:

- `.focus-ring` - Focus visible styling
- `.invalid-ring` - Invalid state styling
- `.active-scale` - Active state scale effect
- `.icon-translate-x` - Icon hover translation
- `.svg-normalize` - SVG size normalization

### Class Groups (`lib/class-groups.ts`)

Pre-composed Tailwind class strings for complex patterns:

```typescript
import { FOCUS_VISIBLE, ACTIVE_SCALE } from '@/lib/class-groups';

// Use in components
className={cn(FOCUS_VISIBLE, ACTIVE_SCALE, 'custom-class')}
```

### Variants (`lib/variants.ts`)

CVA-based variant definitions for composite components:

```typescript
import { linkItemVariants } from '@/lib/variants';

// Use with cn() helper
className={cn(linkItemVariants({ size: 'lg' }), className)}
```

## Usage Guidelines

### Adding New Tokens

1. **Create token in appropriate CSS file:**

   ```css
   /* tokens/spacing.css */
   :root {
     --my-custom-spacing: 1.5rem;
   }
   ```

2. **Add to @theme layer in global.css:**

   ```css
   @theme inline {
     --my-custom-spacing: var(--my-custom-spacing);
   }
   ```

3. **Add to TypeScript constants (optional):**

   ```typescript
   // lib/design-tokens.ts
   export const DESIGN_TOKENS = {
     spacing: {
       custom: '1.5rem',
     },
   } as const;
   ```

### Creating New Composition Utilities

1. **For simple patterns, use CSS utility classes:**

   ```css
   /* components/utilities.css */
   @layer components {
     .my-pattern {
       @apply flex items-center gap-2;
     }
   }
   ```

2. **For complex patterns, use class groups:**

   ```typescript
   // lib/class-groups.ts
   export const MY_PATTERN = 'flex items-center gap-2 hover:bg-accent';
   ```

3. **For variants, use CVA:**

   ```typescript
   // lib/variants.ts
   export const myVariants = cva('base-classes', {
     variants: {
       size: {
         sm: 'text-sm',
         lg: 'text-lg',
       },
     },
   });
   ```

## Best Practices

### DO ✅

- Use design tokens for all spacing, colors, and sizes
- Compose utilities with the `cn()` helper
- Define reusable patterns in class groups
- Use CVA for multi-variant components
- Keep tokens semantic (e.g., `--button-padding` over `--spacing-3`)

### DON'T ❌

- Don't use arbitrary values (e.g., `h-[1.2rem]`) when tokens exist
- Don't duplicate class compositions across components
- Don't hardcode colors; use semantic tokens
- Don't create new tokens without adding to @theme layer
- Don't mix px, rem, and em without clear rationale

## Migration from Old Structure

See root-level `MIGRATION.md` for step-by-step guide on:

- Replacing arbitrary values with tokens
- Converting inline classes to composition utilities
- Using new variant patterns
