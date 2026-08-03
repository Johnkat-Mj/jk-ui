---
name: jk-ui
description: Use this skill when an AI assistant needs to help someone use jk-ui components in a React project (Next.js, TanStack Start, or any React framework).
license: MIT
---

# jk-ui Skill

jk-ui is a React 19 component library built on **react-aria-components** and distributed via **shadcn registry**. Think of it like shadcn/ui but with a full semantic theming system, Phosphor icons, and prebuilt blocks — all installable via CLI into your own codebase.

**Docs site:** `https://jk-ui.unoforge.com`  
**GitHub:** `https://github.com/Johnkat-Mj/jk-ui`

## Quick Navigation

- [Goal](#goal) — What this skill does
- [How jk-ui Works](#how-jk-ui-works) — The three-layer architecture
- [Source of Truth](#source-of-truth) — Files to reference
- [Tech Stack](#tech-stack) — Dependencies and versions
- [Setup Flow](#setup-flow) — Quick vs Manual setup (pick one)
- [Component Categories](#component-categories) — Find what you need
- [Install Commands](#install-commands) — How to add components
- [Theming](#theming) — Colors, tokens, presets
- [Key Composition Patterns](#key-composition-patterns) — Common examples
- [Working Rules](#working-rules) — Never break these
- [Important Name Mappings](#important-name-mappings) — Registry vs Import

## Goal

Help users build accurate jk-ui integrations without inventing components, props, install commands, or block names.

## How jk-ui Works

jk-ui has three layers:

1. **Components** (`@/components/jk/*`) — Copy-paste React primitives installed individually via `npx shadcn add`. Each component is a TSX file you own and customize.

2. **Blocks** — Pre-built page sections (login forms, sidebars, KPI cards, hero sections, etc.) composed from primitives. Listed in the registry as `type: "registry:block"`.

3. **Theme** — shadcn-style semantic values and Tailwind mappings in the application's main CSS, with variant/intent utilities in `styles/jk-ui/`.

## Source of Truth

**Use the files in this skill first** — they are the single source of truth for accurate jk-ui information. The public docs site (`https://jk-ui.unoforge.com`) is secondary and may lag behind.

### References (Read these for accuracy)
- **[references/components.md](./references/components.md)** — Full component index, install commands, exports
- **[references/theming.md](./references/theming.md)** — CSS variable tokens, theme setup, semantic colors
- **[references/colors.md](./references/colors.md)** — Light/dark mode CSS variable reference
- **[references/style-variants.md](./references/style-variants.md)** — Shared variant/intent system (uiStyles)

### Best Practices (Read these before answering)
- **[references/best-practices.md](./references/best-practices.md)** — Verified usage patterns (DO this)
- **[references/things-to-avoid.md](./references/things-to-avoid.md)** — Common mistakes and invented APIs (DON'T do this)
- **[references/composition-patterns.md](./references/composition-patterns.md)** — Common React composition patterns
- **[references/accessibility.md](./references/accessibility.md)** — RAC-based accessibility patterns (WCAG compliance)
- **[references/performance.md](./references/performance.md)** — Performance guidance

### When Uncertain
1. Check [references/components.md](./references/components.md) first
2. Then check [references/things-to-avoid.md](./references/things-to-avoid.md) for what NOT to do
3. If still uncertain, say "I need to check the component file" rather than inventing

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

### ✅ DO
1. **Reference the skill files first** — components.md, best-practices.md, things-to-avoid.md
2. **Use exact install commands** from [references/components.md](./references/components.md)
3. **Follow documented composition patterns** — don't invent new abstractions
4. **Check variant/intent system** — use only the variants listed in [references/style-variants.md](./references/style-variants.md)
5. **Use `cx()` from `@/lib/utils`** — this is the standard class merge utility
6. **Mark client components** with `"use client"` when needed

### ❌ DON'T
1. **Never invent components** — if it's not in [references/components.md](./references/components.md), it doesn't exist
2. **Never invent props** — only use documented props for each component
3. **Never invent install commands** — use exact names: `npx shadcn add @jk-ui/{name}`
4. **Never invent block names** — blocks are listed in [SKILL.md](#blocks-pre-built-sections)
5. **Never use `cva()`** — jk-ui uses `tailwind-variants` instead
6. **Never use `clsx()`** — use `cx()` from `@/lib/utils`
7. **Never invent variants** — only use variants documented in [references/style-variants.md](./references/style-variants.md)

### Common Pitfalls
| Wrong | Right | Fix |
|-------|-------|-----|
| `variant="primary"` | `variant="solid" intent="primary"` | Variants are style types, intents are colors |
| `npx shadcn add button` | `npx shadcn add @jk-ui/button` | Must include `@jk-ui/` namespace |
| Import from `jk-ui` | Import from `@/components/jk/button` | Always use local path after install |
| `clsx()` for classes | `cx()` from `@/lib/utils` | jk-ui provides cx() |

## Setup Flow

jk-ui setup is straightforward — just 5 manual steps. No CLI overhead.

### 5 Simple Steps

**Step 1: Initialize shadcn with React Aria base**
```bash
bunx --bun shadcn@latest init --base aria
```

**Step 2: Register the `@jk-ui` namespace**
```bash
bunx shadcn@latest registry add @jk-ui=https://jk-ui.unoforge.com/r/{name}.json
```

**Step 3: Install the base**
```bash
bunx shadcn add @jk-ui/base
```

**Step 4: Install an icon library** (choose one)
```bash
# Phosphor (default)
bun add -D @iconify-json/ph

# Or: Heroicons, Lucide, HugeIcons, Solar
bun add -D @iconify-json/heroicons  # or lucide, hugeicons, solar
```

Update `iconLibrary` in `components.json`:
```json
{ "iconLibrary": "ph" }  // or "heroicons", "lucide", etc.
```

**Step 5: Update your main CSS file** (e.g., `src/styles/globals.css` or `globals.css`)
```css
@import "tailwindcss";
@import "tw-animate-css";

@reference "./jk-ui/base.css";
@reference "./jk-ui/form.css";
@reference "./jk-ui/button.css";
@reference "./jk-ui/ui.css";
@reference "./jk-ui/intents.css";
@reference "./jk-ui/utils.css";

@plugin "@iconify/tailwind4" {
  prefixes: ph;
  scale: 1.0;
}
```

**Done.** Now install components:
```bash
bunx shadcn add @jk-ui/button
bunx shadcn add @jk-ui/card
bunx shadcn add @jk-ui/input
```


## Install Commands

Once the `@jk-ui` namespace is configured in `components.json`, all components install via the shadcn CLI:

```bash
# Using the namespace
npx shadcn add @jk-ui/{name}
```

If the namespace is not configured, use the full registry URL instead:

```bash
npx shadcn add https://jk-ui.unoforge.com/r/{name}.json
```

Or use the GitHub namespace (no config needed):

```bash
npx shadcn add johnkat-mj/jk-ui/{name}
```

Each component brings its own CSS variables — no manual CSS setup needed.

## Answering Pattern

### 4-Step Framework

1. **Identify** — Component, block, theming, install, or patterns question?
2. **Source** — Read the relevant reference file (components.md, best-practices.md, things-to-avoid.md)
3. **Provide** — Install command + minimal working example + key props
4. **Protect** — Add one "avoid" note if there's a common mistake

### Template

```
**To add a [component]:**

# Install
npx shadcn add @jk-ui/{name}

# Usage
\`\`\`tsx
import { Component } from "@/components/jk/{name}"

export function Example() {
  return <Component prop="value" />
}
\`\`\`

**Key props:** `prop1` (values), `prop2` (values)  
**Avoid:** [one common mistake]
```

### Example ✅ (Good)

> **To add a button:**
>
> Install:
> ```bash
> npx shadcn add @jk-ui/button
> ```
>
> Usage:
> ```tsx
> import { Button } from "@/components/jk/button"
>
> <Button variant="solid" intent="primary" size="md">
>   Click me
> </Button>
> ```
>
> **Key props:**
> - `variant` — solid|outline|soft|ghost|white-outline|black-outline|none
> - `intent` — varies by variant (primary/gray/success/warning/destructive)
> - `size` — xs|sm|md|lg|xl
> - `radius` — none|default|circle
>
> **Avoid:** Don't use `variant="primary"` — primary is an intent, not a variant.

### Example ❌ (Bad)

> Use `<Button variant="primary" />`.
>
> ❌ Wrong — "primary" is not a variant. Variants are solid|outline|soft|ghost...

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
| `destructive` | Destructive actions |
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
- Background: `--bg-subtle`, `--bg-surface`, `--bg-muted`
- Foreground: `--fg-title`, `--fg-subtitle`
- Border: `--border-strong`, `--border-card`
- Semantic states: `--destructive`, `--info`, `--warning`, `--success`
- Internal: `--focus-ring`, etc.

### Theme Presets

17 built-in theme presets are available. Install via `npx shadcn add @jk-ui/theme-{name}`.

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

## Loading Strategy

### Don't Load Everything
Load only files relevant to the task. This keeps context small and prevents outdated information.

### What to Load When

**For component questions:**
1. Load `references/components.md` first
2. Then load `references/style-variants.md` for variant/intent details
3. Load component-specific file from `components/` if needed

**For theming questions:**
1. Load `references/theming.md` for structure
2. Load `references/colors.md` for token values

**For "how do I use X?" questions:**
1. Load `references/best-practices.md` first
2. Load `references/composition-patterns.md` for examples

**For "is this valid?" questions:**
1. Load `references/things-to-avoid.md` first
2. Then load component file to verify correct usage

## Quick Start

```bash
# Initialize
bunx --bun shadcn@latest init --base aria
bunx shadcn@latest registry add @jk-ui=https://jk-ui.unoforge.com/r/{name}.json
bunx shadcn add @jk-ui/base
bun add -D @iconify-json/ph

# Update src/styles/globals.css (see Setup Flow step 5 above)

# Install components
bunx shadcn add @jk-ui/button
bunx shadcn add @jk-ui/card
bunx shadcn add @jk-ui/input
```

## Resources

- **Docs Site:** https://jk-ui.unoforge.com
- **GitHub:** https://github.com/Johnkat-Mj/jk-ui
- **CLI Help:** `npx jk-ui@latest --help`
- **Install:** `npx jk-ui@latest init`
- **Add Components:** `npx shadcn add @jk-ui/{name}`
