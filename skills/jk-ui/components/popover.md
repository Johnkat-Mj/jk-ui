## Usage

```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverBody, PopoverFooter } from "@/components/jk/popover"

<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent placement="bottom" arrow>
    <PopoverHeader>
      <PopoverTitle>Title</PopoverTitle>
    </PopoverHeader>
    <PopoverBody>Content</PopoverBody>
    <PopoverFooter>Footer</PopoverFooter>
  </PopoverContent>
</Popover>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/popover.json
```

Depends on: `@jk-ui/dialog`

## API

### PopoverContent Props

| Prop | Type | Default |
|------|------|---------|
| placement | RAC Placement | — |
| arrow | boolean | `false` |
| offset | number | `8` (or `12` with arrow) |

### Exports

| Export | Description |
|--------|-------------|
| `Popover` | RAC DialogTrigger wrapper |
| `PopoverTrigger` | DialogTrigger button |
| `PopoverContent` | RAC Popover with styling |
| `PopoverHeader` | Alias of DialogHeader |
| `PopoverTitle` | Alias of DialogTitle |
| `PopoverBody` | Alias of DialogBody |
| `PopoverFooter` | Alias of DialogFooter |
| `PopoverClose` | Alias of DialogClose |
| `PopoverDescription` | Alias of DialogDescription |

## Guidance

- Popover reuses Dialog subcomponents for header/body/footer.
- Uses RAC's built-in positioning and overlay management.

## Avoid

- Do not use Popover for data-heavy content — prefer Modal or Sheet.
