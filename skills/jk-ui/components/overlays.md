# Overlays & Disclosure

Use this reference for components that open, reveal, or layer content over the page.

## Individual Component Files

- [modal.md](./modal.md)
- [dialog.md](./dialog.md)
- [sheet.md](./sheet.md)
- [popover.md](./popover.md)
- [tooltip.md](./tooltip.md)
- [dropdown.md](./dropdown.md)
- [disclosure-group.md](./disclosure-group.md)

## Component Summaries

### Menu
```tsx
import { Menu } from "@/components/jk/menu"
// Composed from Dropdown + Popover. Depends on @jk-ui/dropdown, @jk-ui/popover
// RAC MenuTrigger + Popover + ListBox
```

### Export Patterns

All overlay components follow a consistent subcomponent pattern:
- `{Component}/{Component}Trigger` — element that opens the overlay
- `{Component}/{Component}Content` — overlay content wrapper
- `{Component}/{Component}Header`, `Body`, `Footer` — layout subcomponents
- `{Component}/{Component}Close` — close button
- `{Component}/{Component}Title`, `Description` — slot elements

## Install Commands

```bash
npx shadcn add https://jk-ui.unoforge.com/r/menu.json
```

## Avoid

- Do not flatten overlays into single tags — use trigger + content structure.
- Do not use Modal for slide-in panels — use Sheet.
