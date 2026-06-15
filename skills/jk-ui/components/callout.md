## Usage

```tsx
import { Callout, CalloutTitle, CalloutDescription } from "@/components/jk/callout"

<Callout type="note">
  <CalloutTitle>Note</CalloutTitle>
  <CalloutDescription>This is a note callout.</CalloutDescription>
</Callout>

<Callout type="warning" variant="soft" title="Warning" message="Check your settings." noIcon={false} />
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/callout.json
```

Depends on: `@jk-ui/alert`

## API

| Prop | Type | Default |
|------|------|---------|
| type | `default` `update` `note` `warning` `important` | `default` |
| variant | `solid` `soft` `subtle` `outline` | `solid` |
| size | `none` `xs` `sm` `md` `lg` | `md` |
| title | string | — |
| message | string | — |
| noIcon | boolean | `false` |
| radius | `none` `default` | `default` |
| iconWrapper | string | — |

### Type Presets

| Type | Intent | Icon |
|------|--------|------|
| default | gray | `ph--info` |
| update | info | `ph--note` |
| note | primary | `ph--lightbulb-filament` |
| warning | warning | `ph--warning` |
| important | danger | `ph--smiley-sad` |

## Guidance

- Built on top of `Alert`. Uses the same variant/intent system.
- Auto-resolves icon and intent based on `type`.
- Use child composition (`CalloutTitle` + `CalloutDescription`) for rich content.
