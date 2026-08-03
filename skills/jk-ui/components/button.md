## Usage

```tsx
import { Button } from "@/components/jk/button"

<Button>Click Me</Button>
<Button variant="outline">Outline</Button>
<Button variant="soft" size="sm">Small Soft</Button>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/button.json
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `solid` `outline` `soft` `ghost` `white/black-outline` `none` | `solid` | Visual style |
| intent | variant-specific | `solid-primary` | Semantic color tone |
| size | `xs` `sm` `md` `lg` `xl` `none` | `md` | Button dimensions |
| iconOnly | boolean | `false` | Square icon-only geometry |
| radius | `none` `default` `circle` | `default` | Border radius |
| href | string | — | Renders as anchor when set |

Accepts all `react-aria-components/Button` props (`onPress`, `isDisabled`, `aria-label`, etc.).

## Variant/Intent Combinations

| Variant | Default Intent | Available Intents |
|---------|---------------|-------------------|
| solid | primary | primary, secondary, accent, neutral, destructive |
| outline | gray | gray |
| soft | gray | primary, destructive, warning, gray |
| ghost | gray | gray |
| white/black-outline | auto | — |

Intent props use bare semantic names: e.g. `intent="destructive"`, `intent="primary"`, `intent="gray"`.

## Sizes

```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

## With Icon

```tsx
<Button size="md">
  <span aria-hidden="true" className="iconify ph--atom mr-1.5" />
  Leading
</Button>

<Button size="xs" iconOnly aria-label="Search">
  <span aria-hidden="true" className="iconify ph--magnifying-glass" />
</Button>
```

## Guidance

- Use `variant` for visual treatment, `intent` for semantic meaning.
- Use `href` to render as an anchor `<a>` tag.
- Use `iconOnly` with `aria-label` for icon-only buttons.
- Use `onPress` instead of `onClick` for RAC buttons.

## Avoid

- Do not invent variant names outside the documented set.
- Do not use raw `<button>` when `Button` covers the need.
- Intent props use bare semantic names. Combined names such as `btn-solid-primary` are internal CSS utilities only.
