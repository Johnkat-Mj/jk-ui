## Usage

```tsx
import { DropdownItem, DropdownLabel, DropdownDescription, DropdownSeparator, DropdownSection, DropdownIcon, DropdownKeyboard } from "@/components/jk/dropdown"

<DropdownItem onAction={() => alert("Clicked")}>
  <DropdownIcon><span className="iconify ph--user" /></DropdownIcon>
  <DropdownLabel>Profile</DropdownLabel>
  <DropdownDescription>View your profile</DropdownDescription>
  <DropdownKeyboard keys="⌘P" />
</DropdownItem>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/dropdown.json
```

Depends on: `@jk-ui/keyboard`

## API

### DropdownItem Props

| Prop | Type | Description |
|------|------|-------------|
| intent | `danger` `warning` | Semantic intent for destructive items |

Accepts all RAC `ListBoxItemProps`.

### DropdownItem Children Pattern

```tsx
<DropdownItem>
  <DropdownIcon>...</DropdownIcon>
  <DropdownLabel>Label</DropdownLabel>
  <DropdownDescription>Description</DropdownDescription>
  <DropdownKeyboard keys="⌘K" />
</DropdownItem>
```

String children auto-wrap in `DropdownLabel`.

### DropdownSection

```tsx
<DropdownSection title="Group Title">
  <DropdownItem>...</DropdownItem>
</DropdownSection>
```

## Exports

| Export | Description |
|--------|-------------|
| `DropdownItem` | ListBoxItem with icon/label/desc/keyboard layout |
| `DropdownLabel` | Text slot="label" |
| `DropdownDescription` | Text slot="description" |
| `DropdownSeparator` | Horizontal separator |
| `DropdownSection` | ListBoxSection with header |
| `DropdownKeyboard` | Keyboard shortcut display |
| `DropdownIcon` | Icon slot |

## Avoid

- DropdownItem is used inside Select, Menu, and ComboBox — do not use standalone.
- Intent `danger` provides red hover state for destructive actions.
