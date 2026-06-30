## Usage

```tsx
import { Select, SelectTrigger, SelectContent, SelectItem, SelectLabel, SelectDescription, SelectSection } from "@/components/jk/select"

<Select placeholder="Select a role...">
  <SelectTrigger />
  <SelectContent items={roles}>
    {(role) => (
      <SelectItem id={role.id} textValue={role.name}>
        {role.name}
      </SelectItem>
    )}
  </SelectContent>
</Select>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/select.json
```

Depends on: `@jk-ui/dropdown`, `@jk-ui/input`, `@jk-ui/popover`

## API

### SelectTrigger Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `styled` `unstyled` | `styled` | Trigger styling |
| size | `none` `sm` `md` `lg` | `md` | Trigger height |
| border | boolean | `true` | Show border |
| bg | boolean | `true` | Background fill |
| radius | `none` `default` | `default` | Border radius |
| prefix | ReactNode | — | Leading content |

### Subcomponents

| Export | Description |
|--------|-------------|
| `SelectTrigger` | The trigger button (shows selected value) |
| `SelectContent` | Popover with ListBox |
| `SelectItem` | Individual option (uses DropdownItem) |
| `SelectSection` | Option group (uses DropdownSection) |
| `SelectLabel` | Item label |
| `SelectDescription` | Item description |
| `SelectSeparator` | Section separator |

## Guidance

- Uses RAC `Select` with `PopoverContent` for the dropdown.
- `SelectTrigger` without children renders a default select with chevron icon.
- Accepts `placeholder` prop on the root `Select` element.
- Use `defaultValue` (key or null) for uncontrolled default selection, not `defaultSelectedKey`.
- Use `onChange` for selection change events, not `onSelectionChange`.

## Avoid

- Do not use `SelectTrigger` without a matching `SelectContent`.
- Do not pass native `<option>` elements — use `SelectItem` with RAC collection API.
- Do not use `defaultSelectedKey` or `onSelectionChange` — these are deprecated in RAC. Use `defaultValue` and `onChange` instead.
