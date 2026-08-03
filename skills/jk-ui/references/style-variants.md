# Style variants and intents

jk-ui separates the visual recipe (`variant`) from the semantic color (`intent`). Props always use **bare intent names**; combined names only exist as internal CSS utilities.

```tsx
<Badge variant="soft" intent="success">Published</Badge>
<Button variant="solid" intent="destructive">Delete</Button>
```

## Shared UI variants

Used by Badge, Alert, Card, Callout and other components powered by `uiStyles()`.

- Variants: `none`, `solid`, `soft`, `subtle`, `outline`
- Intents: `none`, `primary`, `secondary`, `accent`, `success`, `destructive`, `warning`, `info`, `gray`, `neutral`

```tsx
uiStyles({ variant: "soft", intent: "primary" })
```

`uiStyles()` composes `ui-soft` with `ui-soft-primary`. Consumers should pass `intent="primary"`, never `intent="soft-primary"`.

## Button combinations

Buttons intentionally expose only the combinations shipped by default:

| Variant | Intents |
|---|---|
| `solid` | `primary`, `secondary`, `accent`, `neutral`, `destructive` |
| `soft` | `primary`, `destructive`, `warning`, `gray` |
| `ghost` | `gray` |
| `outline` | `gray` |
| `none` | `none` |

Sizes: `xs`, `sm`, `md`, `lg`, `xl`, `none`. Radii: `none`, `default`, `circle`.

## CSS organization

- `button.css`: visual button recipes and sizes.
- `ui.css`: visual recipes shared by UI components.
- `intents.css`: all `btn-{variant}-{intent}` and `ui-{variant}-{intent}` color-variable utilities.
- `form.css`, `base.css`, `utils.css`: forms, React Aria state variants and structural utilities.

To add an intent, add its variable-only utility to `intents.css`, then extend the TypeScript intent map. Do not place palette values inside `button.css` or `ui.css`.
