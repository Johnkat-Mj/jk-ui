## Usage

```tsx
import { Separator } from "@/components/jk/separator"

<Separator />
<Separator size="2" />
<Separator label="Section" labelPlacement="middle" />
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/separator.json
```

## API

| Prop | Type | Default |
|------|------|---------|
| size | `default` `2` `3` `4` | `default` |
| label | ReactNode | — |
| labelPlacement | `start` `middle` `end` | `start` |
| labelClass | string | — |

- Without label: renders `<hr>`.
- With label: renders `<div>` with label text and decorative lines.

## Guidance

- Use `size` for border thickness when rendered as `<hr>`.
- Labeled separator uses CSS grid lines for decorative left/right bars.
