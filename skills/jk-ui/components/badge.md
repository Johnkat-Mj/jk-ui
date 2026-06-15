## Usage

```tsx
import { Badge } from "@/components/jk/badge"

<Badge intent="solid-primary">Primary</Badge>
<Badge variant="soft" intent="soft-success" size="sm">Success</Badge>
<Badge variant="outline" intent="outline-danger">Danger</Badge>
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

Uses the shared `uiStyles` variant system from `@/lib/ui-variants.ts`. Intent values are prefixed: `solid-primary`, `soft-success`, `outline-danger`, etc.

## Examples

```tsx
<Badge size="xs">Extra Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
<Badge variant="soft" size="sm" intent="soft-success">Completed</Badge>
<Badge variant="outline" intent="outline-warning">Pending</Badge>
```
