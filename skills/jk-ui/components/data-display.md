# Data Display

Components for presenting data and content to users.

## Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/jk/avatar"

<Avatar>
  <AvatarImage src="/portrait.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

| Prop | Type | Default |
|------|------|---------|
| size | `"sm"` \| `"md"` \| `"lg"` \| `"xl"` | `"md"` |
| className | `string` | `""` |

## Separator

```tsx
import { Separator } from "@/components/jk/separator"

<Separator />
<Separator orientation="vertical" className="h-8" />
```

| Prop | Type | Default |
|------|------|---------|
| orientation | `"horizontal"` \| `"vertical"` | `"horizontal"` |
| className | `string` | `""` |

## Skeleton

```tsx
import { Skeleton } from "@/components/jk/skeleton"

<Skeleton className="h-4 w-48" />
<Skeleton className="h-10 w-10 rounded-full" />
```

Use Tailwind classes to control shape and size. No props beyond `className`.

## Table

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/jk/table"
```

See [components/table.md](./table.md) for full API.

## Badge

See [components/badge.md](./badge.md) for variant and usage details.

## Installation

shadcn registries:

```bash
npx shadcn add https://jk-ui.unoforge.com/r/avatar.json
npx shadcn add https://jk-ui.unoforge.com/r/separator.json
npx shadcn add https://jk-ui.unoforge.com/r/skeleton.json
npx shadcn add https://jk-ui.unoforge.com/r/badge.json
npx shadcn add https://jk-ui.unoforge.com/r/table.json
```

## Avoid

- Do not wrap `Separator` with extra `<div>` elements — it handles layout on its own.
- Do not apply inline `width`/`height` to `Skeleton`; use `className` with `h-* w-*`.
- Do not render `Avatar` without an `AvatarFallback` — it ensures a placeholder shows while images load.
