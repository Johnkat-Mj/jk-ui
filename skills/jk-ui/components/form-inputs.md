# Form & Input Components

Use this reference for form-related components.

## Individual Component Files

- [button.md](./button.md)
- [input.md](./input.md)
- [select.md](./select.md)
- [checkbox.md](./checkbox.md)
- [link.md](./link.md)

## Input Variants

All input-based components (`Input`, `SelectTrigger`, `Textarea`) share these variants:
- `default` — Filled background with border
- `outline` — Transparent with border
- `flush` — Transparent no border (use in composed layouts)
- `unstyled` — Raw element (use inside InputGroup)

Input sizes: `none` | `sm` | `md` | `lg`

## Input Group Pattern

For inputs with leading/trailing icons:

```tsx
<InputGroup size="md" variant="default">
  <InputLeading absolute>
    <span className="iconify ph--at" />
  </InputLeading>
  <Input variant="unstyled" placeholder="Email" className="ps-9" />
</InputGroup>
```

Rules: `variant="unstyled"` inside group, no `label` on grouped input.

## Component Summaries

### Textarea
```tsx
import { Textarea } from "@/components/jk/textarea"
// Shares Input variants: default, outline, flush, unstyled
```

### Switch
```tsx
import { Switch } from "@/components/jk/switch"
// RAC Switch, depends on @jk-ui/input
```

### Radio
```tsx
import { Radio, RadioGroup } from "@/components/jk/radio"
// RAC Radio + RadioGroup, depends on @jk-ui/input
```

### Slider
```tsx
import { Slider } from "@/components/jk/slider"
// RAC Slider
```

### Number Field
```tsx
import { NumberField } from "@/components/jk/number-field"
// RAC NumberField, depends on @jk-ui/input, @jk-ui/text-field
```

### Search Field
```tsx
import { SearchField } from "@/components/jk/search-field"
// RAC SearchField with clear button
```

### Combo Box
```tsx
import { ComboBox } from "@/components/jk/combo-box"
// RAC ComboBox with filter. Depends on @jk-ui/text-field, @jk-ui/input, @jk-ui/dropdown, @jk-ui/popover
```

### Date Picker
```tsx
import { DatePicker } from "@/components/jk/date-picker"
// RAC DatePicker. Depends on @jk-ui/field-button, @jk-ui/calendar, @jk-ui/input, @jk-ui/input-date, @jk-ui/popover
```

### Date Range Picker
```tsx
import { DateRangePicker } from "@/components/jk/date-range-picker"
// RAC DateRangePicker. Depends on @jk-ui/field-button, @jk-ui/range-calendar, @jk-ui/input, @jk-ui/input-date, @jk-ui/popover
```

### Input OTP
```tsx
import { InputOTP } from "@/components/jk/input-otp"
// OTP input with paste support. Depends on input-otp library + @jk-ui/input
```

### Input Date / Input Time
```tsx
import { InputDate } from "@/components/jk/input-date"
import { InputTime } from "@/components/jk/input-time"
// RAC date/time input fields
```

### Tag Field / Tag Group
```tsx
import { TagField } from "@/components/jk/tag-field"
import { TagGroup } from "@/components/jk/tag-group"
// TagField depends on @jk-ui/tag-group, @jk-ui/input, @jk-ui/text-field
```

### File Trigger / Drop Zone
```tsx
import { FileTrigger } from "@/components/jk/file-trigger"  // depends on @jk-ui/button, @jk-ui/loader
import { DropZone } from "@/components/jk/drop-zone"
```

## Install Commands

```bash
npx shadcn add https://jk-ui.unoforge.com/r/textarea.json
npx shadcn add https://jk-ui.unoforge.com/r/switch.json
npx shadcn add https://jk-ui.unoforge.com/r/radio.json
npx shadcn add https://jk-ui.unoforge.com/r/slider.json
npx shadcn add https://jk-ui.unoforge.com/r/number-field.json
npx shadcn add https://jk-ui.unoforge.com/r/search-field.json
npx shadcn add https://jk-ui.unoforge.com/r/combo-box.json
npx shadcn add https://jk-ui.unoforge.com/r/date-picker.json
npx shadcn add https://jk-ui.unoforge.com/r/date-range-picker.json
npx shadcn add https://jk-ui.unoforge.com/r/input-otp.json
npx shadcn add https://jk-ui.unoforge.com/r/input-date.json
npx shadcn add https://jk-ui.unoforge.com/r/input-time.json
npx shadcn add https://jk-ui.unoforge.com/r/tag-field.json
npx shadcn add https://jk-ui.unoforge.com/r/tag-group.json
npx shadcn add https://jk-ui.unoforge.com/r/file-trigger.json
npx shadcn add https://jk-ui.unoforge.com/r/drop-zone.json
```

## Avoid

- Do not skip the InputGroup pattern for composed inputs with icons.
- Do not use `label` prop on an input inside InputGroup.
