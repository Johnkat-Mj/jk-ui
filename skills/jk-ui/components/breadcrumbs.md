## Usage

```tsx
import { Breadcrumbs, BreadcrumbsItem } from "@/components/jk/breadcrumbs"

<Breadcrumbs spacing="1.5">
  <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
  <BreadcrumbsItem href="/products">Products</BreadcrumbsItem>
  <BreadcrumbsItem>Current Page</BreadcrumbsItem>
</Breadcrumbs>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/breadcrumbs.json
```

Depends on: `@jk-ui/link`

## API

### Breadcrumbs Props

| Prop | Type | Default |
|------|------|---------|
| spacing | `none` `0` `0.5` `1` `1.5` `2` `3` | `1.5` |
| separator | string (iconify name) | `ph--caret-right` |
| separatorNotIcon | boolean | `false` |
| separatorIconColor | boolean | `false` |
| activeClass | string | `text-fg-title font-medium` |

### BreadcrumbsItem Props

| Prop | Type |
|------|------|
| href | string |

- Last item (current) renders as `<span>` with `aria-current="page"`.
- Non-current items with `href` render as `<Link>`.
- Accepts function-as-children pattern for custom rendering.

### BreadcrumbSeparator

```tsx
<BreadcrumbSeparator separator="ph--caret-right" />
```

## Guidance

- Uses RAC `Breadcrumbs` + `Breadcrumb` primitives.
- Icon separators use iconify: `ph--caret-right`, `ph--slash`, etc.

## Avoid

- Do not manually add separators — `BreadcrumbsItem` adds them automatically.
