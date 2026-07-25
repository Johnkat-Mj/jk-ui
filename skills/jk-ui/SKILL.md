---
name: jk-ui
description: Use this skill when an AI assistant needs to help someone use jk-ui components in a React project (Next.js, TanStack Start, or any React framework).
license: MIT
---

# jk-ui Skill

jk-ui is a React 19 component library built on **react-aria-components** and distributed via **shadcn registry**. Think of it like shadcn/ui but with a full semantic theming system, Phosphor icons, and prebuilt blocks — all installable via CLI into your own codebase.

**Docs site:** `https://jk-ui.unoforge.com`

## Goal

Help users build accurate jk-ui integrations without inventing components, props, install commands, or block names.

## How jk-ui Works

jk-ui has three layers:

1. **Components** (`@/components/jk/*`) — Copy-paste React primitives installed individually via `npx shadcn add`. Each component is a TSX file you own and customize.

2. **Blocks** — Pre-built page sections (login forms, sidebars, KPI cards, hero sections, etc.) composed from primitives. Listed in the registry as `type: "registry:block"`.

3. **Theme** — shadcn-standard CSS variable tokens (`--primary`, `--background`, `--foreground`, `--border`, `--input`, `--ring`, etc.) consumed through Tailwind v4 `@theme` utilities (`bg-primary`, `bg-background`, `text-foreground`, `border-input`, `ring-ring`). Also supports jk-ui extended tokens (`--fg-title`, `--bg-subtle`, `--border-strong`, etc.) for advanced styling. Supported by 17 built-in theme presets.

## Source of Truth

Use the files in this skill first. The public docs site is at `https://jk-ui.unoforge.com`.

- [references/components.md](./references/components.md) — Full component index with install commands
- [references/theming.md](./references/theming.md) — CSS variable tokens, theme setup, semantic colors
- [references/colors.md](./references/colors.md) — Light/dark CSS variable token reference
- [references/best-practices.md](./references/best-practices.md) — Verified usage patterns
- [references/things-to-avoid.md](./references/things-to-avoid.md) — Common mistakes and invented APIs
- [references/accessibility.md](./references/accessibility.md) — RAC-based accessibility patterns
- [references/performance.md](./references/performance.md) — Performance guidance
- [references/composition-patterns.md](./references/composition-patterns.md) — Common React composition patterns
- [references/style-variants.md](./references/style-variants.md) — Shared variant/intent system (uiStyles)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Component Primitives | react-aria-components |
| Styling | Tailwind CSS 4 |
| Variants | `tailwind-variants` 3.2 + `tailwind-merge` 3.4 |
| Icons | Phosphor via `@iconify-json/ph` |
| Animation | `motion` 12 + `tw-animate-css` |
| Charts | Recharts 3.7 (wrapped as jk-ui components) |
| OTP | `input-otp` 1.4 |

## Working Rules

1. Never invent jk-ui components that are not in the registry (`registries/components.json`).
2. Never invent props, install commands, or block names.
3. Components import from `@/components/jk/{name}` in docs site, but the actual install target is `components/jk/{name}.tsx`.
4. Prefer documented composition patterns over custom abstractions.
5. When a component, prop, or block is not in the skill files or the live docs, do not invent it.
6. Do not invent unused imports. jk-ui uses `tailwind-variants` (not `cva`), `clsx`+`tailwind-merge` (exported as `cx` from `@/lib/utils`).
7. The `cx()` utility from `@/lib/utils` is the standard class merge function.
8. Components with `"use client"` directive need to be client components.

## Setup Flow

Setting up jk-ui follows the standard shadcn flow:

1. **shadcn init** — Initialize your project with React Aria base:
   ```bash
   bunx --bun shadcn@latest init --base aria
   ```

2. **Install base CSS** — JK-UI base styles with the shadcn CLI:
   ```bash
   npx shadcn add @jk-ui/base
   ```

3. **jk-ui CLI setup** — Configure theme, icons, and registry namespace:
   ```bash
   npx jk-ui-cli setup
   ```

4. **Install components** — Add individual components:
   ```bash
   npx shadcn add @jk-ui/button
   npx shadcn add @jk-ui/card
   npx shadcn add @jk-ui/input
   ```

The `jk-ui-cli setup` command must run before installing @jk-ui/* components — without it, the `@jk-ui` namespace is not configured and installs will fail.

## Install Commands

Once the CLI has been run and the `@jk-ui` namespace is configured, all components install via the shadcn CLI:

```bash
# Using the namespace (setup must have been run first)
npx shadcn add @jk-ui/{name}
```

If the CLI has not been run, use the full registry URL instead:

```bash
npx shadcn add https://jk-ui.unoforge.com/r/{name}.json
```

Install base styles first:
```bash
npx shadcn add @jk-ui/base
```

## Answering Pattern

1. **Identify the need**: Component, block, theming, or install question?
2. **Read the source**: Open the relevant file from `components/*.md` or `references/*.md`.
3. **Give the smallest working example**:
   - Install command: `npx shadcn add @jk-ui/{name}` (if CLI has been run) or `npx shadcn add https://jk-ui.unoforge.com/r/{name}.json`
   - Import + minimal React usage
   - Note required providers (e.g., `react-aria-components` Provider for dialogs)
4. **Call out important props** — variant, intent, size, and any required attributes.
5. **Add one short "avoid" note** when there is a common jk-ui mistake.

### Example Answer (good)

> To add a button:
> ```bash
> npx shadcn add @jk-ui/button
> ```
> ```tsx
> import { Button } from "@/components/jk/button"
>
> export function MyComponent() {
>   return (
>     <Button variant="solid" intent="primary" size="md">
>       Click me
>     </Button>
>   )
> }
> ```
> Key props: `variant` (solid|outline|soft|ghost|white/black-outline|none), `intent` (variant-specific, e.g. `primary` for solid, `gray` for outline), `size` (xs|sm|md|lg|xl), `radius` (none|default|circle).
> Avoid: Do not invent variant names outside the documented set. Intents are variant-specific — `primary` is valid for `solid` but not for `ghost` (use `ghost-primary`).

### Example Answer (bad)

> Use `<Button variant="primary" />`.
> ❌ "primary" is not a variant. Variants are solid|outline|soft|ghost. Intents depend on the variant.

## Component Categories

### Form & Input
| Component | Install |
|-----------|---------|
| Button | `button` |
| Input | `input` |
| Textarea | `textarea` |
| Select | `select` |
| Checkbox | `checkbox` |
| Radio | `radio` |
| Switch | `switch` |
| Text Field | `text-field` |
| Number Field | `number-field` |
| Search Field | `search-field` |
| Combo Box | `combo-box` |
| Slider | `slider` |
| Input OTP | `input-otp` |
| Input Date | `input-date` |
| Input Time | `input-time` |
| File Trigger | `file-trigger` |
| Drop Zone | `drop-zone` |
| Tag Field | `tag-field` |
| Tag Group | `tag-group` |

### Layout & Structure
| Component | Install |
|-----------|---------|
| Card | `card` |
| Separator | `separator` |
| Aspect Ratio | `aspect-ratio` |
| Skeleton | `skeleton` |

### Navigation
| Component | Install |
|-----------|---------|
| Tabs | `tabs` |
| Breadcrumbs | `breadcrumbs` |
| Link | `link` |
| Navbar | `navbar` |
| Sidebar | `sidebar` |

### Overlays & Disclosure
| Component | Install |
|-----------|---------|
| Dialog | `dialog` |
| Modal | `modal` |
| Sheet | `sheet` |
| Popover | `popover` |
| Tooltip | `tooltip` |
| Dropdown | `dropdown` |
| Menu | `menu` |
| Disclosure Group | `disclosure` |

### Data & Feedback
| Component | Install |
|-----------|---------|
| Table | `table` |
| Native Table | `native-table` |
| Alert | `alert` |
| Badge | `badge` |
| Avatar | `avatar` |
| Callout | `callout` |
| Loader | `loader` |
| Progress Bar | `progress-bar` |
| Progress Bar Circle | `progress-bar-circle` |
| Keyboard (Kbd) | `keyboard` |

### Charts (Recharts-based)
| Component | Install |
|-----------|---------|
| Chart | `chart` |
| Area Chart | `area-chart` |
| Bar Chart | `bar-chart` |
| Line Chart | `line-chart` |
| Pie Chart | `pie-chart` |
| Leaderboard | `leaderboard` |
| Tracker | `tracker` |

### Typography
| Component | Install |
|-----------|---------|
| Heading | `heading` |
| Text | `text` |
| Icon | `icon` |

### Calendar
| Component | Install |
|-----------|---------|
| Calendar | `calendar` |
| Range Calendar | `range-calendar` |

### Miscellaneous
| Component | Install |
|-----------|---------|
| Toggle | `toggle` |
| Toggle Group | `toggle-group` |
| Command Menu | `command-menu` |
| Field Button | `field-button` |

## Blocks (Pre-built Sections)

Blocks are full page sections composed from primitives. They install as `type: "registry:block"`.

### Application Blocks

| Category | Blocks |
|----------|--------|
| Login | `login01`, `login02`, `login03` |
| Signup | `signup01` |
| OTP | `otp01` |
| Sidebar | `sidebar01`, `sidebar02`, `sidebar03`, `sidebar04`, `sidebar05` |
| Header | `header01`, `header02`, `header03` |
| Table | `table01`, `table02`, `table03` |
| App Shell | `shell01` |
| KPI Cards | `kpi01`, `kpi02`, `kpi03` |
| Empty States | `empty-state01` |
| Activity Feed | `activity01` |

### Marketing Blocks

| Category | Blocks |
|----------|--------|
| Hero | `hero01`, `hero02`, `hero03`, `hero04`, `hero05` |
| Features | `features01` |
| Content | `content01`, `content02` |
| Pricing | `pricing01`, `pricing02`, `pricing03` |

## Theming

### Semantic Colors

| Token | Usage |
|-------|-------|
| `primary` | Brand color for primary actions |
| `secondary` | Supporting brand color |
| `accent` | Highlights and badges |
| `info` | Informational messages |
| `success` | Positive states |
| `warning` | Caution states |
| `danger` / `destructive` | Destructive actions |
| `gray` | Neutrals and backgrounds |

### Token Families

**shadcn Standard CSS Variables:**
- `--background`, `--foreground` — page bg / body text
- `--card`, `--card-foreground` — card bg / title text
- `--popover`, `--popover-foreground` — popover bg / text
- `--primary`, `--primary-foreground` — brand / text on primary
- `--secondary`, `--secondary-foreground` — secondary brand / text
- `--muted`, `--muted-foreground` — subtle bg / secondary text
- `--accent`, `--accent-foreground` — accent / text on accent
- `--destructive`, `--destructive-foreground` — danger / text on danger
- `--border`, `--input`, `--ring` — borders, inputs, focus rings
- `--radius`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl` — border radius
- `--ui-radius` → `rounded-ui` — generic component radius (default `--radius-lg`)
- `--card-radius` → `rounded-card` — card radius (default `--radius-lg`)
- `--checkbox-radius` → `rounded-checkbox` — checkbox indicator radius (default `--radius-sm`)
- `--sidebar-*` — sidebar specific tokens
- `--chart-1..5` — chart color tokens

**jk-ui Extended Tokens (for internal component utilities):**
- Background: `--bg`, `--bg-subtle`, `--bg-surface`, `--bg-muted`
- Foreground: `--fg-title`, `--fg`, `--fg-muted`
- Border: `--border-strong`, `--border-card`
- Semantic aliases: `--danger`, `--info`, `--warning`, `--success`
- Internal: `--focus-ring`, etc.

### Theme Presets

17 built-in theme presets are available. Select one during `npx jk-ui-cli setup`.

## Key Composition Patterns

### Button with icon
```tsx
import { Button } from "@/components/jk/button"

<Button size="md">
  <span aria-hidden="true" className="iconify ph--atom mr-1.5" />
  Leading Icon
</Button>
```

### Input with leading icon
```tsx
import { Input, InputGroup, InputLeading } from "@/components/jk/input"

<InputGroup>
  <InputLeading absolute>
    <span className="iconify ph--at text-sm" />
  </InputLeading>
  <Input variant="unstyled" type="email" placeholder="you@example.com" className="ps-9" />
</InputGroup>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from "@/components/jk/card"
import { Button } from "@/components/jk/button"

<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description here</CardDescription>
  </CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter className="flex justify-end gap-2">
    <Button variant="outline" intent="gray" size="sm">Cancel</Button>
    <Button intent="primary" size="sm">Save</Button>
  </CardFooter>
</Card>
```

### Modal
```tsx
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter, ModalClose } from "@/components/jk/modal"
import { Button } from "@/components/jk/button"
import { Input } from "@/components/jk/input"

<Modal>
  <Button variant="outline" intent="gray">Open Modal</Button>
  <ModalContent>
    {({ close }) => (
      <>
        <ModalHeader>
          <ModalTitle>Title</ModalTitle>
          <ModalDescription>Description</ModalDescription>
        </ModalHeader>
        <ModalBody>
          <Input label="Name" placeholder="Enter name" />
        </ModalBody>
        <ModalFooter>
          <ModalClose>Cancel</ModalClose>
          <Button onPress={close}>Save</Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
</Modal>
```

### Table
```tsx
import { Table, TableColumns, TableColumn, TableBody as TableRows, TableRow, TableCell } from "@/components/jk/table"

<Table striped hoverable>
  <TableColumns>
    <TableColumn isRowHeader>Name</TableColumn>
    <TableColumn>Email</TableColumn>
  </TableColumns>
  <TableRows items={users}>
    {(user) => (
      <TableRow id={user.id} columns={["name", "email"]}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
      </TableRow>
    )}
  </TableRows>
</Table>
```

## Important Name Mappings

| Registry name | Import path |
|---------------|-------------|
| `button` | `@/components/jk/button` |
| `keyboard` | `@/components/jk/keyboard` |
| `disclosure` | `@/components/jk/disclosure-group` |
| `input-otp` | `@/components/jk/input-otp` |
| `progress-bar` | `@/components/jk/progress-bar` |
| `progress-bar-circle` | `@/components/jk/progress-bar-circle` |
| `native-table` | `@/components/jk/native-table` |

## Loading Files

Do not load everything at once. Read only the files relevant to the current task. Use the component map in `references/components.md` to find the right file.

## Quick Start

```bash
# Step 1: Initialize project with shadcn (React Aria base)
bunx --bun shadcn@latest init --base aria

# Step 2: Install base CSS
npx shadcn add @jk-ui/base
# Then add imports to main CSS:
#   @import "./jk-ui/base.css";
#   @import "./jk-ui/button.css";
#   @import "./jk-ui/form.css";
#   @import "./jk-ui/ui.css";
#   @import "./jk-ui/utils.css";

# Step 3: Run jk-ui setup (theme, icons, registry namespace)
npx jk-ui-cli setup

# Step 4: Install components
npx shadcn add @jk-ui/button
npx shadcn add @jk-ui/card
npx shadcn add @jk-ui/input
```

Docs: `https://jk-ui.unoforge.com`
