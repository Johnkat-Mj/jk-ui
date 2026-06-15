## Usage

```tsx
"use client"

import { SidebarProvider, SidebarBase, SidebarToggler, SidebarOverlayElement, SidebarClose, SidebarResizer } from "@/components/jk/sidebar"
import { Button } from "@/components/jk/button"

<SidebarProvider>
  <SidebarToggler aria-label="Toggle sidebar" />
  <SidebarOverlayElement isBlured />
  <SidebarBase className="w-64">
    <SidebarClose aria-label="Close" />
    <SidebarResizer aria-label="Resize" />
    <nav>Sidebar content</nav>
  </SidebarBase>
</SidebarProvider>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/sidebar.json
```

Depends on: `@jk-ui/button`

## API

### SidebarProvider

Context provider for sidebar state. Must wrap all sidebar subcomponents.

### SidebarBase

Renders `<aside>` with `data-state` and `data-resized` attributes.

### SidebarToggler / SidebarClose / SidebarResizer

All accept `ButtonProps` (variant, intent, size, iconOnly). Defaults: `variant="ghost"`, `size="sm"`, `iconOnly={true}`.

### SidebarOverlayElement

| Prop | Type | Default |
|------|------|---------|
| isBlured | boolean | — |
| isStatic | boolean | — |

### Context Methods

```tsx
const { isOpenSidebar, isResizedSidebar, openSidebar, closeSidebar, toggleSidebar, resizeSidebar } = useSidebarContext()
```

## Exports

| Export | Description |
|--------|-------------|
| `SidebarProvider` | Context provider |
| `SidebarBase` | `<aside>` wrapper |
| `SidebarToggler` | Open/close toggle button |
| `SidebarClose` | Close button |
| `SidebarResizer` | Resize toggle button |
| `SidebarOverlayElement` | Overlay backdrop |
| `useSidebarContext` | Access sidebar state |

## Guidance

- Sidebar uses React Context + useReducer for state management (no Alpine/Livewire dependency).
- `data-state` attribute: `"open"` or `"close"` on `SidebarBase`.
- `data-resized` attribute present when resized.
- Style the sidebar appearance with your own CSS/Tailwind utilities on `SidebarBase`.

## Avoid

- Do not use SidebarToggler outside a SidebarProvider.
- Do not flatten — always use provider + subcomponents.
