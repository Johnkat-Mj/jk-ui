## Usage

```tsx
import { Icon } from "@/components/jk/icon"

<Icon name="ph--star" />
<Icon name="ph--user" size="lg" intent="primary" />
<Icon name="ph--warning" size="xl" intent="danger" />
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/icon.json
```

## API

| Prop | Type | Default |
|------|------|---------|
| name | string (iconify name) | required |
| size | `xs` `sm` `md` `lg` `xl` `2xl` | `sm` |
| intent | `current` `fg` `muted` `primary` `secondary` `success` `warning` `danger` | `current` |

- Uses `@iconify-json/ph` for Phosphor icons. Icons use the `iconify` class utility.
- Icon names follow the pattern: `ph--{icon-name}` (e.g., `ph--arrow-right`, `ph--check-circle`).
- Size maps to predefined width/height classes.
- Renders as `<span aria-hidden="true">`.
