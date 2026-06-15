## Usage

```tsx
import { Text } from "@/components/jk/text"

<Text intent="body">Body text content</Text>
<Text intent="muted" elementType="span">Muted inline text</Text>
<Text intent="caption">Small caption text</Text>
<Text intent="primary">Primary colored text</Text>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/text.json
```

## API

| Prop | Type | Default |
|------|------|---------|
| intent | `muted` `body` `title` `caption` `primary` `secondary` `warning` `danger` | `muted` |
| elementType | `p` `span` `div` `label` `small` | `p` |

- Wraps RAC `Text`.
- Intent controls color via semantic tokens.
