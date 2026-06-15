# Best Practices

Verified rules when guiding jk-ui usage.

## Start From The Registry

- Check `registries/components.json` first to verify a component exists before suggesting it.
- Check `registries/blocks.json` for block availability.
- If in doubt about a prop, check the actual component source in `src/components/jk/{name}.tsx`.

## Prefer Existing jk-ui Patterns

- Use documented jk-ui primitives before raw HTML.
- Use subcomponents that already exist (Card, Modal, Dialog, DisclosureGroup families).
- Use blocks when the user needs a complete section instead of a single primitive.

## Import Paths

All components import from `@/components/jk/{component}`:

```tsx
import { Button } from "@/components/jk/button"
import { Card, CardHeader, CardTitle } from "@/components/jk/card"
```

The `@/` alias maps to `./src/` in user projects (configured in tsconfig).

## The `cx()` Utility

jk-ui uses `clsx` + `tailwind-merge` merged into a `cx()` function from `@/lib/utils`. When composing classes, prefer `cx()` over template literals.

```tsx
import { cx } from "@/lib/utils"

cx("base-class", condition && "conditional-class", className)
```

## Variant/Intent System

Components like `Alert`, `Badge`, `Card`, and `Callout` share a common variant/intent system via `@/lib/ui-variants.ts`:

- **Variants**: `none`, `solid`, `soft`, `subtle`, `outline`
- **Intents**: Prefixed by variant name, e.g. `solid-primary`, `soft-success`, `outline-danger`
- Use `resolveIntent()` helper from `@/lib/ui-variant-types.ts` for default intent fallback

The `Button` component has its own extended variant system (adds `ghost`, `white/black-outline`).

## Theming

- Prefer semantic CSS variable tokens over hardcoded colors (`--primary`, `--fg`, `--bg`).
- Use Tailwind v4 `@theme` utilities (`bg-primary`, `text-fg`, `border-border-input`).
- Change token values centrally in `src/styles/jk-ui/` or the theme preset instead of patching each component.

## Client Components

Components with `"use client"` directive (state, interactivity, RAC hooks) must be client components. The consumer's bundler handles the rest.
