## Usage

```tsx
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter, ModalClose } from "@/components/jk/modal"
import { Button } from "@/components/jk/button"
import { Input } from "@/components/jk/input"

<Modal>
  <Button variant="outline">Open Modal</Button>
  <ModalContent size="md" isBlurred>
    {({ close }) => (
      <>
        <ModalHeader>
          <ModalTitle>Rename project</ModalTitle>
          <ModalDescription>Change how this appears across the dashboard.</ModalDescription>
        </ModalHeader>
        <ModalBody>
          <Input label="Name" placeholder="Enter a name" />
        </ModalBody>
        <ModalFooter>
          <ModalClose>Cancel</ModalClose>
          <Button onPress={close}>Save changes</Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
</Modal>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/modal.json
```

Depends on: `@jk-ui/dialog`

## API

### Modal (DialogTrigger)

| Prop | Type | Description |
|------|------|-------------|
| children | ReactNode | Trigger + ModalContent pair |

### ModalContent Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | `2xs` `xs` `sm` `md` `lg` `xl` `2xl` `3xl` `4xl` `5xl` `fullscreen` | `lg` | Modal width |
| closeButton | boolean | `true` | Show X close button |
| isBlurred | boolean | `false` | Backdrop blur |
| isDismissable | boolean | `true` | Close on overlay click |
| role | `dialog` `alertdialog` | `dialog` | ARIA role |

### Subcomponents

| Component | Description |
|-----------|-------------|
| `ModalHeader` | Header with title and description |
| `ModalTitle` | Modal heading (RAC Heading slot="title") |
| `ModalDescription` | Secondary text |
| `ModalBody` | Scrollable main content |
| `ModalFooter` | Action buttons area |
| `ModalClose` | Close button (inherits Button props) |

## Guidance

- `Modal` wraps RAC `DialogTrigger`. `ModalContent` wraps `ModalOverlay` + `Modal`.
- Uses RAC's built-in focus trap and dismiss on Escape.
- Use the render prop pattern `{({ close }) => ...}` in `ModalContent` to access the close function.

## Avoid

- Do not flatten modal into a single tag — always use trigger + content structure.
- Do not put `id` on content — RAC manages IDs internally.
