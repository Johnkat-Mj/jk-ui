## Usage

```tsx
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from "@/components/jk/dialog"

<Dialog role="dialog" className="...">
  <DialogHeader title="Title" description="Description" />
  <DialogBody>Content</DialogBody>
  <DialogFooter justify="end">
    <DialogClose>Cancel</DialogClose>
  </DialogFooter>
</Dialog>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/dialog.json
```

Depends on: `@jk-ui/button`

## API

### Dialog Props

| Prop | Type | Default |
|------|------|---------|
| role | `dialog` `alertdialog` | `dialog` |

### DialogHeader Props

| Prop | Type | Default |
|------|------|---------|
| title | string | — |
| description | string | — |
| paddingNone | boolean | `false` |

### DialogFooter Props

| Prop | Type | Default |
|------|------|---------|
| justify | `start` `end` `between` `center` | `end` |

### Exports

| Export | Description |
|--------|-------------|
| `Dialog` | RAC Dialog wrapper |
| `DialogTrigger` | Trigger button (RAC Button) |
| `DialogHeader` | Header with optional title/description |
| `DialogTitle` | Heading slot (RAC Heading) |
| `DialogDescription` | Description text |
| `DialogBody` | Scrollable content area |
| `DialogFooter` | Footer with justify control |
| `DialogClose` | Close button (outline variant) |
| `DialogCloseIcon` | X close icon button (ghost) |

## Guidance

- `Dialog` is the base primitive. `Modal`, `Sheet`, `Popover` all build on it.
- Uses RAC `Dialog` with `role` support for both `dialog` and `alertdialog`.
- Provides `DialogCloseIcon` for an X button in the top-right corner.

## Avoid

- Do not use Dialog standalone for overlays — use Modal, Sheet, or Popover instead.
- Dialog is a layout primitive, not a trigger-based overlay.
