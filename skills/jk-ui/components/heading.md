## Usage

```tsx
import { Heading } from "@/components/jk/heading"

<Heading level={1}>Page Title</Heading>
<Heading level={2} intent="muted">Section Subtitle</Heading>
<Heading level={3} intent="primary">Primary Colored</Heading>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/heading.json
```

## API

| Prop | Type | Default |
|------|------|---------|
| level | `1` `2` `3` `4` `5` | `1` |
| intent | `title` `body` `muted` `primary` `secondary` `danger` `warning` | `title` |

- Level controls HTML heading tag (`<h1>`–`<h5>`) and size.
- Intent controls color (`text-fg-title`, `text-fg-muted`, etc.).
- Wraps RAC `Heading`.
