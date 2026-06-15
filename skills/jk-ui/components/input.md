## Usage

```tsx
import { Input } from "@/components/jk/input"

<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="Name" size="lg" variant="outline" placeholder="Large input" />
<Input variant="flush" placeholder="Flush variant (no border)" />
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/input.json
```

## API

### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `default` `outline` `flush` `unstyled` | `default` | Visual style |
| size | `none` `sm` `md` `lg` | `md` | Input height |
| label | string | — | Automatically wraps with Label |
| inlinedLabel | boolean | `false` | Inline label layout |
| labelClass | string | — | Custom label class |
| fieldGroupClass | string | — | Wrapper class when label used |

Accepts all RAC `InputProps`.

### InputGroup (Composed)

```tsx
import { Input, InputGroup, InputLeading, InputTrailing } from "@/components/jk/input"

<InputGroup size="md" variant="default">
  <InputLeading absolute>
    <span className="iconify ph--at text-sm" />
  </InputLeading>
  <Input variant="unstyled" placeholder="Email" className="ps-9" />
  <InputTrailing>
    <span className="iconify ph--check text-sm" />
  </InputTrailing>
</InputGroup>
```

### InputGroup Props

| Prop | Type | Default |
|------|------|---------|
| size | `none` `sm` `md` `lg` | `md` |
| variant | `default` `outline` `flush` `unstyled` | `default` |
| radius | boolean | `true` |

### InputLeading / InputTrailing Props

| Prop | Type | Default |
|------|------|---------|
| absolute | boolean | `false` |
| clickable | boolean | `false` |

### Other Exports

| Export | Description |
|--------|-------------|
| `Label` | RAC Label wrapper |
| `FieldError` | RAC FieldError wrapper |
| `Description` | RAC Text slot="description" |

## Guidance

- Use `variant="unstyled"` inside `InputGroup`. Never pass `label` to grouped input.
- The `Input` with `label` prop wraps in a div; without it renders raw RAC `Input`.

## Avoid

- Do not use `label` prop together with `InputGroup` — the label belongs outside.
- Do not use `variant="unstyled"` outside of a group context.
