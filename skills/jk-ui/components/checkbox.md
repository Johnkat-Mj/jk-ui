## Usage

```tsx
import { Checkbox, CheckboxGroup, CheckboxLabel } from "@/components/jk/checkbox"

<Checkbox>Accept terms</Checkbox>
<Checkbox isIndeterminate>Mixed state</Checkbox>

<CheckboxGroup>
  <Checkbox value="option1">Option 1</Checkbox>
  <Checkbox value="option2">Option 2</Checkbox>
</CheckboxGroup>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/checkbox.json
```

Depends on: `@jk-ui/input`

## API

Accepts all RAC `CheckboxProps` and `CheckboxGroupProps`.

- String children auto-wrap in `CheckboxLabel`.
- Supports `isIndeterminate` for mixed/partial state.
- CheckboxGroup for multiple checkboxes.
- Uses RAC's built-in selection state management.
