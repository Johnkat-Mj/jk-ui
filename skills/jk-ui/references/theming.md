# Theming

jk-ui uses **shadcn-standard CSS variable tokens** consumed through Tailwind v4 `@theme` utilities. Define meaning-first roles (`primary`, `danger`, `background`, `foreground`, etc.), then consume them through standard Tailwind classes (`bg-primary`, `text-foreground`, `border-input`).

## Setup

The `jk-ui-cli setup` command generates a self-contained `jk-ui-theme.css` with your chosen theme preset. Import it after Tailwind:

```css
@import "tailwindcss";
@import "./jk-ui/base.css";
@import "./jk-ui/button.css";
@import "./jk-ui/form.css";
@import "./jk-ui/ui.css";
@import "./jk-ui/utils.css";
@import "./jk-ui-theme.css";
```

## shadcn-Standard Tokens

### Semantic Colors

| Token | Tailwind Utility | Description |
|-------|-----------------|-------------|
| `--background` | `bg-background` | Page background |
| `--foreground` | `text-foreground` | Body text |
| `--card` | `bg-card` | Card background |
| `--card-foreground` | `text-card-foreground` | Card heading text |
| `--popover` | `bg-popover` | Popover/tooltip background |
| `--popover-foreground` | `text-popover-foreground` | Popover text |
| `--primary` | `bg-primary` | Brand color |
| `--primary-foreground` | `text-primary-foreground` | Text on primary |
| `--muted` | `bg-muted` | Subtle background |
| `--muted-foreground` | `text-muted-foreground` | Muted/secondary text |
| `--accent` | `bg-accent` | Accent color |
| `--accent-foreground` | `text-accent-foreground` | Text on accent |
| `--destructive` | `bg-destructive` | Destructive actions |
| `--destructive-foreground` | `text-destructive-foreground` | Text on destructive |
| `--border` | `border-border` | Default borders |
| `--input` | `border-input` | Input borders |
| `--ring` | `ring-ring` | Focus rings |
| `--radius` | `rounded-lg` | Default border radius |
| `--ui-radius` | `rounded-ui` | Generic component radius (defaults to `--radius-lg`) |
| `--card-radius` | `rounded-card` | Card border radius (defaults to `--radius-lg`) |
| `--checkbox-radius` | `rounded-checkbox` | Checkbox indicator radius (defaults to `--radius-sm`) |

### jk-ui Extended Tokens

| Token | Tailwind Utility | Description |
|-------|-----------------|-------------|
| `--fg-title` | `text-fg-title` | High-emphasis headings |
| `--fg` | `text-fg` | Body text (alias) |
| `--fg-muted` | `text-fg-muted` | Secondary text (alias) |
| `--bg` | `bg-bg` | Background (alias) |
| `--bg-subtle` | `bg-bg-subtle` | Subtle section separation |
| `--bg-surface` | `bg-bg-surface` | Elevated surfaces |
| `--bg-muted` | `bg-bg-muted` | Muted backgrounds |
| `--overlay` | `bg-overlay` | Modal/drawer overlays |
| `--border-strong` | `border-border-strong` | Strong borders |
| `--border-card` | `border-border-card` | Card borders |
| `--danger` | `text-danger` / `bg-danger` | Backward-compat danger alias |
| `--info` | `text-info` / `bg-info` | Informational |
| `--warning` | `text-warning` / `bg-warning` | Caution |
| `--success` | `text-success` / `bg-success` | Success |

## Theme Presets

17 built-in themes. Each provides light and dark variable sets plus `@theme inline` mappings. Select during `npx jk-ui-cli setup`.

## Base CSS Files

Files in `src/styles/jk-ui/` (installed via `@jk-ui/base`):

| File | Contents |
|------|----------|
| `base.css` | Reset, `@custom-variant fx-*` definitions |
| `button.css` | Button variant utilities (`btn`, `btn-solid`, `btn-outline`, `btn-soft`, `btn-ghost`) |
| `form.css` | Form input utilities (`ui-c_r-wrapper`, `ui-checkbox-base`, `ui-radio-base`, etc.) |
| `ui.css` | Shared variant utilities (`ui-solid`, `ui-soft`, `ui-outline`, `ui-subtle`) |
| `utils.css` | Dropdown, card, and miscellaneous utilities |

## CSS Setup Example

```css
/* app.css */
@import "tailwindcss";

@import "./jk-ui/base.css";
@import "./jk-ui/button.css";
@import "./jk-ui/form.css";
@import "./jk-ui/ui.css";
@import "./jk-ui/utils.css";
@import "./jk-ui-theme.css";
```
