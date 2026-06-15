## Usage

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from "@/components/jk/card"
import { Button } from "@/components/jk/button"

<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
  <CardBody>Content goes here</CardBody>
  <CardFooter className="flex justify-end gap-2">
    <Button variant="outline" size="sm">Cancel</Button>
    <Button size="sm">Save</Button>
  </CardFooter>
</Card>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/card.json
```

## API

### Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `none` `solid` `soft` `subtle` `outline` | `none` | Visual variant via uiStyles |
| intent | variant-specific | — | Semantic color |
| size | `md` `custom` `none` | `md` | Padding with `--card-padding` var |
| fill | `default` `gray` `none` | `default` | Background fill |
| border | boolean | `true` | Card border |
| shadow | boolean | `true` | Card shadow |

### CardHeader Props

| Prop | Type | Default |
|------|------|---------|
| direction | `column` `row` | `column` |
| justify | `start` `end` `center` | `start` |
| gap | `1` `2` `3` `4` | `2` |
| flexNone | boolean | `false` |

### CardTitle Props

| Prop | Type | Default |
|------|------|---------|
| level | `1` `2` `3` `4` | `2` |
| size | `sm` `md` `lg` `xl` | `lg` |
| weight | `medium` `semibold` `bold` | `semibold` |

### CardDescription Props

| Prop | Type | Default |
|------|------|---------|
| size | `sm` `base` `lg` | `sm` |

### CardBody Props

| Prop | Type | Default |
|------|------|---------|
| gap | `1` `2` `3` `4` | `3` |

## Composition

Card provides a header/content/footer layout with subcomponents. The `--card-padding` CSS variable controls gutter spacing.

## Avoid

- Do not hand-roll card layouts with raw divs when subcomponents exist.
- Do not pass `variant` without a matching `intent` — resolves to default gray.
