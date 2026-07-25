## Usage

```tsx
import { Skeleton } from "@/components/jk/skeleton"

<Skeleton className="h-4 w-48" />
<Skeleton className="h-10 w-10" radius="none" />
<Skeleton className="h-32 w-full" radius="none" />
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/skeleton.json
```

## API

| Prop | Type | Default |
|------|------|---------|
| radius | `none` `full` | `full` |
| bg | boolean | `true` |

- `radius="full"` gives rounded-full (pill/circle shape).
- `bg` controls background color (`bg-muted`).
- Always has `animate-pulse` for the loading animation.
