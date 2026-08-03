## Usage

```tsx
import { Alert } from "@/components/jk/alert"

<Alert intent="primary">Primary Alert</Alert>
<Alert variant="soft" intent="success" size="sm">Success Alert</Alert>
<Alert variant="outline" intent="destructive">Destructive Alert</Alert>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/alert.json
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `solid` `soft` `subtle` `outline` `default` `none` | `solid` | Visual style |
| intent | variant-specific | `solid-gray` | Semantic color |
| size | `none` `xs` `sm` `md` `lg` | `md` | Padding and text size |
| radius | `none` `default` | `default` | Border radius |

Uses the shared `uiStyles` variant system. `Callout` is a richer wrapper built on top of `Alert`.

## Guidance

- Alert is a simple container with variant/intent styling.
- For alerts with icon + title + description, use `Callout` instead.
