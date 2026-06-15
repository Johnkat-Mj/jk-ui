## Usage

```tsx
import { Link } from "@/components/jk/link"

<Link href="/dashboard">Dashboard</Link>
<Link href="https://example.com" underlined underlineOffset="2">External Link</Link>
<Link asButton variant="solid" intent="solid-primary" size="sm" href="/action">Button Link</Link>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/link.json
```

Depends on: `@jk-ui/button`

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| underlined | boolean | `false` | Show underline |
| underlineOffset | `none` `1` `2` `3` `4` `8` | `none` | Underline offset |
| disabled | boolean | `false` | Disabled state |
| asButton | boolean | `false` | Render as button style |
| variant | ButtonProps variant | — | When asButton=true |
| intent | ButtonProps intent | — | When asButton=true |
| size | ButtonProps size | — | When asButton=true |
| iconOnly | boolean | — | When asButton=true |

Accepts all RAC `LinkProps`.

## Guidance

- Without `asButton`, renders as a styled text link.
- With `asButton`, applies button styles via `buttonStyles()`.
- External links open based on the RAC Link primitive behavior.
