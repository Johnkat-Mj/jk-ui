# Theming

jk-ui uses semantic CSS variable tokens instead of hardcoded color values. Define meaning-first roles (`primary`, `danger`, `fg`, `bg`, etc.), then consume them through Tailwind v4 `@theme` utilities.

## Semantic Color Roles

| Color | Description |
|-------|-------------|
| primary | Brand color for core actions (primary buttons, links, active states) |
| secondary | Supporting brand color for visual hierarchy |
| accent | Highlight color for badges and special interactions |
| info | Neutral/informational messages |
| success | Positive states and confirmations |
| warning | Caution states requiring attention |
| danger | Destructive actions and critical errors |
| gray | Neutral scale for backgrounds, borders, text, disabled states |

## Background Tokens

Control app surfaces and elevation layers:

| Token | Utility | Description |
|-------|---------|-------------|
| `--bg` | `bg-bg` | Default app background |
| `--bg-subtle` | `bg-bg-subtle` | Subtle section separation |
| `--bg-surface` | `bg-bg-surface` | Elevated surface layers |
| `--bg-muted` | `bg-bg-muted` | Muted background |
| `--card` | `bg-card` | Card background |
| `--card-gray` | `bg-card-gray` | Gray card variant |
| `--popover` | `bg-popover` | Popover/tooltip background |
| `--overlay` | `bg-overlay` | Modal/drawer overlays |

## Foreground Tokens

| Token | Utility | Description |
|-------|---------|-------------|
| `--fg-title` | `text-fg-title` | High-emphasis headings |
| `--fg` | `text-fg` | Default body text |
| `--fg-muted` | `text-fg-muted` | Secondary/tertiary text |

## Border Tokens

| Token | Utility | Description |
|-------|---------|-------------|
| `--border-strong` | `border-border-strong` | Strong borders |
| `--border` | `border-border` | Default borders |
| `--border-subtle` | `border-border-sub` | Subtle dividers |
| `--border-card` | `border-border-card` | Card borders |
| `--border-input` | `border-border-input` | Input borders |

## Border Radius

| Variable | Utility | Description |
|----------|---------|-------------|
| `--radius-ui` | `rounded-ui` | Default component radius |

## Theme Presets

Five built-in themes in `src/styles/themes/`:
- `default-colors.css` — Default theme
- `air.css` — Light, airy palette
- `earth.css` — Warm earthy tones
- `fire.css` — Bold red/orange palette
- `water.css` — Cool blue palette

## Base CSS Files

Five base files in `src/styles/jk-ui/`:
- `base.css` — Reset and base element styles
- `button.css` — Button variant CSS utilities
- `form.css` — Form input CSS utilities
- `ui.css` — Shared variant CSS utilities (`ui-solid`, `ui-soft`, etc.)
- `utils.css` — Extra utility classes

## CSS Setup

```css
/* app.css */
@import "tailwindcss";

/* Base styles (installed from registry) */
@import "./styles/jk-ui/base.css";
@import "./styles/jk-ui/button.css";
@import "./styles/jk-ui/form.css";
@import "./styles/jk-ui/ui.css";
@import "./styles/jk-ui/utils.css";

/* Theme colors */
@import "./styles/themes/default-colors.css";

@theme inline {
    --color-primary: var(--primary);
    --color-secondary: var(--secondary);
    --color-fg: var(--fg);
    --color-bg: var(--bg);
    --color-border: var(--border);
    --radius-ui: var(--ui-radius);
}
```
