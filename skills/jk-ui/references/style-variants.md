# Style Variants (uiStyles)

jk-ui provides a shared variant/intent system accessible via `@/lib/ui-variants.ts`. Components like `Alert`, `Badge`, `Card`, and `Callout` use this system for consistent styling.

The `Button` component has its own extended variant system with separate intent naming.

## Shared Variant System

### Variants

| Variant | Description |
|---------|-------------|
| `none` | No variant styling |
| `solid` | Filled background |
| `soft` | Light tinted background |
| `subtle` | Very light tinted background |
| `outline` | Bordered with transparent background |

### Intents (prefixed by variant)

```tsx
solid-primary    solid-secondary    solid-success    solid-danger
solid-warning    solid-info         solid-gray       solid-neutral

soft-primary     soft-secondary     soft-accent      soft-success
soft-danger      soft-warning       soft-info        soft-gray
soft-neutral

subtle-primary   subtle-secondary  subtle-success   subtle-danger
subtle-accent    subtle-warning    subtle-info      subtle-gray
subtle-neutral

outline-primary  outline-secondary  outline-success  outline-danger
outline-warning  outline-info       outline-gray     outline-neutral
```

### Usage Pattern

All shared-variant components follow this pattern:

```tsx
import { uiStyles, type UiVariant, type UiIntent } from "@/lib/ui-variants"
import { resolveIntent } from "@/lib/ui-variant-types"

const classes = uiStyles({
    variant: "solid" as UiVariant,
    intent: "solid-primary" as UiIntent<"solid">,
})
```

## Button Variants

Button has broader variant set with variant-specific intents. Intent values are inlined in `tv()` config — no separate CSS utility classes needed.

| Variant | Available Intents |
|---------|------------------|
| `solid` | `primary`, `secondary`, `success`, `danger`, `neutral` |
| `outline` | `gray`, `primary`, `secondary`, `success`, `danger`, `neutral` |
| `soft` | `gray`, `primary`, `secondary`, `success`, `danger`, `neutral` |
| `ghost` | `gray`, `primary`, `secondary`, `danger`, `neutral` |
| `white/black-outline` | automatic light/dark inversion |
| `none` | raw unstyled button |

Button sizes: `xs`, `sm`, `md`, `lg`, `xl`
Button radius: `none`, `default`, `circle`

### Button Helper

```tsx
import { buttonStyles } from "@/components/jk/button"

// Use buttonStyles as a class utility outside of <Button>
buttonStyles({ variant: "solid", intent: "primary", size: "md" })
```

## CSS Utilities

jk-ui's CSS layer provides the actual styling through Tailwind v4 `@utility` definitions:

| File | Utilities |
|------|-----------|
| `src/styles/jk-ui/button.css` | Button base utilities (`btn`, `btn-solid`, `btn-outline`, `btn-soft`, `btn-ghost`, `btn-xs`..`btn-xl`, `btn-icon-*`) |
| `src/styles/jk-ui/ui.css` | Shared UI variant utilities (`ui-solid`, `ui-soft`, `ui-outline`, `ui-subtle`) |
| `src/styles/jk-ui/form.css` | Form/checkbox/radio utilities (`ui-form-*`, `ui-c_r-*`, `ui-checkbox-base`, `ui-radio-base`) |
| `src/styles/jk-ui/base.css` | `@custom-variant fx-*` definitions |

Intent-specific CSS was **inlined into component `tv()` configs** — intent utilities like `btn-solid-primary` and `ui-solid-primary` no longer exist as separate CSS classes. Use the component's `variant` + `intent` props instead of manually composing CSS classes.
