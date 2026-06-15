## Usage

```tsx
import { Tabs, TabList, Tab, TabPanel } from "@/components/jk/tabs"

<Tabs orientation="horizontal">
  <TabList border>
    <Tab id="tab1">Overview</Tab>
    <Tab id="tab2">Details</Tab>
    <Tab id="tab3">Settings</Tab>
  </TabList>
  <TabPanel id="tab1">Overview content</TabPanel>
  <TabPanel id="tab2">Details content</TabPanel>
  <TabPanel id="tab3">Settings content</TabPanel>
</Tabs>
```

## Installation

```bash
npx shadcn add https://jk-ui.unoforge.com/r/tabs.json
```

## API

### Tabs Props

| Prop | Type | Default |
|------|------|---------|
| orientation | `horizontal` `vertical` | `horizontal` |

Accepts all RAC `TabsProps`.

### TabList Props

| Prop | Type | Default |
|------|------|---------|
| border | boolean | `true` |

### Tab Props

| Prop | Type | Default |
|------|------|---------|
| indicatorStyle | `full` `border` `border-top` `border-right` | `full` |

## Guidance

- Uses RAC `Tabs` — keyboard navigable, accessible by default.
- `TabPanel` is hidden when not selected via `fx-inert:hidden` utility.
- Supports function-as-children patterns on `Tab`.

## Avoid

- Do not use `TabPanel` without a matching `Tab` with same `id`.
- Do not wrap `TabList` or `TabPanel` in extra divs — they manage their own layout.
