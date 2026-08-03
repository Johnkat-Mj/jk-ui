## Usage

```tsx
import { Badge } from "@/components/jk/badge"

<Badge intent="primary">Primary</Badge>
<Badge variant="soft" intent="success" size="sm">Success</Badge>
<Badge variant="outline" intent="destructive">Destructive</Badge>
<Badge variant="default">Default</Badge>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/badge.json
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `solid` `soft` `subtle` `outline` `default` `none` | `solid` | Visual style |
| intent | variant-specific | `solid-gray` | Semantic color |
| size | `xs` `sm` `md` `lg` `xl` | `md` | Badge size |
| radius | `none` `default` | `default` | Border radius |

Uses the shared `uiStyles` variant system from `@/lib/ui-variants.ts`. Intent props are bare names: `primary`, `success`, `destructive`, etc.

## Examples

```tsx
<Badge size="xs">Extra Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
<Badge variant="soft" size="sm" intent="success">Completed</Badge>
<Badge variant="outline" intent="warning">Pending</Badge>
```
