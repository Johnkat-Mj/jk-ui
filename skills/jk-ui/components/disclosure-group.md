## Usage

```tsx
import { DisclosureGroup, DisclosureItem, DisclosureItemTrigger, DisclosurePanel, DisclosureItemTriggerIndicator } from "@/components/jk/disclosure-group"

<DisclosureGroup variant="outline" allowsMultipleExpanded>
  <DisclosureItem>
    <DisclosureItemTrigger>Accordion Item 1</DisclosureItemTrigger>
    <DisclosurePanel>Content for item 1</DisclosurePanel>
  </DisclosureItem>
  <DisclosureItem>
    <DisclosureItemTrigger>Accordion Item 2</DisclosureItemTrigger>
    <DisclosurePanel>Content for item 2</DisclosurePanel>
  </DisclosureItem>
</DisclosureGroup>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/disclosure.json
```

## API

### DisclosureGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `default` `link` `outline` `soft` `solid` `subtle` `none` | `default` | Item visual variant |
| withIndicator | boolean | `true` | Show expand indicator |

Accepts all RAC `DisclosureGroupProps` (`allowsMultipleExpanded`, `expandedKeys`, etc.).

### DisclosureItemTrigger Props

Accepts RAC `ButtonProps`. The indicator can be a `sign` (plus-to-minus) or `icon` type.

```tsx
<DisclosureItemTrigger>
  Item Title
  <DisclosureItemTriggerIndicator type="sign" />
</DisclosureItemTrigger>
```

## Guidance

- Uses RAC `DisclosureGroup` + `Disclosure` + `DisclosurePanel` primitives.
- Item variant inherits from group. `link` variant renders without borders/background.
- `DisclosurePanel` has slide animation via CSS `transition-[height]`.

## Avoid

- Do not use Disclosure subcomponents outside a DisclosureGroup.
- `DisclosureItem` must be a direct child of `DisclosureGroup`.
