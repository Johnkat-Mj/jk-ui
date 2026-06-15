## Usage

```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/jk/tooltip"

<Tooltip delay={200}>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent arrow inverse>
    Tooltip content here
  </TooltipContent>
</Tooltip>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/tooltip.json
```

## API

### Tooltip

Accepts all RAC `TooltipTriggerProps` (`delay`, `closeDelay`, `trigger`, etc.).

### TooltipContent Props

| Prop | Type | Default |
|------|------|---------|
| arrow | boolean | `true` |
| inverse | boolean | `false` |
| offset | number | `10` |

- `inverse`: white text on dark background (for tooltips on light surfaces).
- Without `inverse`: follows theme (overlay background).

### TooltipTrigger

Alias of RAC `Button`. Can be any focusable element.

## Guidance

- Tooltip wraps RAC `TooltipTrigger` + `Tooltip` + `OverlayArrow`.
- `TooltipTrigger` must be a React.forwardRef component (RAC Button works).

## Avoid

- Do not nest interactive elements inside TooltipTrigger.
- Do not use `offset` very large — tooltip may detach from anchor.
