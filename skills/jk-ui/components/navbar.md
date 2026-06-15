## Usage

```tsx
"use client"

import { NavbarProvider, NavbarBase, NavbarToggler, NavbarClose, NavbarOverlayElement } from "@/components/jk/navbar"

<NavbarProvider>
  <NavbarToggler aria-label="Toggle navigation" />
  <NavbarBase className="w-full">
    <NavbarClose aria-label="Close" />
    <nav>Navigation content</nav>
  </NavbarBase>
  <NavbarOverlayElement isBlured />
</NavbarProvider>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/navbar.json
```

Depends on: `@jk-ui/button`

## API

### NavbarProvider

Context provider for navbar state. Must wrap all navbar subcomponents.

### NavbarBase

Renders `<div>` with `data-state` attribute (`"open"` or `"close"`).

### NavbarToggler / NavbarClose

Accept `ButtonProps`. Defaults: `variant="ghost"`, `size="sm"`, `iconOnly={true}`.

### NavbarOverlayElement

| Prop | Type | Default |
|------|------|---------|
| isBlured | boolean | — |
| isStatic | boolean | — |

### Context Methods

```tsx
const { isOpenNavbar, openNavbar, closeNavbar, toggleNavbar } = useNavbarContext()
```

## Exports

| Export | Description |
|--------|-------------|
| `NavbarProvider` | Context provider |
| `NavbarBase` | Wrapper div |
| `NavbarToggler` | Toggle button |
| `NavbarClose` | Close button |
| `NavbarOverlayElement` | Overlay backdrop |
| `useNavbarContext` | Access navbar state |

## Guidance

- Navbar uses React Context + useReducer for state management.
- Style the navbar with your own CSS/Tailwind utilities.
- `NavbarToggler` sets `aria-expanded` based on current state.

## Avoid

- Do not use outside a NavbarProvider.
- Navbar is a stateful wrapper for mobile navigation — it does not render header structure itself.
