## Usage

```tsx
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetBody, SheetFooter, SheetClose } from "@/components/jk/sheet"
import { Button } from "@/components/jk/button"

<Sheet>
  <Button variant="outline">Open Sheet</Button>
  <SheetContent side="right" size="md">
    <SheetHeader>
      <SheetTitle>Panel Title</SheetTitle>
    </SheetHeader>
    <SheetBody>Content</SheetBody>
    <SheetFooter>
      <SheetClose>Close</SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/sheet.json
```

Depends on: `@jk-ui/dialog`

## API

### SheetContent Props

| Prop | Type | Default |
|------|------|---------|
| side | `left` `right` `top` `bottom` | `right` |
| size | `sm` `md` `lg` `xl` `full` | `md` |

Uses RAC `ModalOverlay` + `Modal` with Dialog subcomponents (SheetHeader, SheetBody, SheetFooter, SheetClose, SheetTitle all alias Dialog equivalents).

## Guidance

- Sheet is a slide-in panel (drawer), built on the same Dialog primitives as Modal.
- Supports four sides: left, right, top, bottom.

## Avoid

- Do not use Sheet for centered overlays — use Modal.
