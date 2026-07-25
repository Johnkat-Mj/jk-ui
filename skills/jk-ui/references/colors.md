## Prerequisites

jk-ui color tokens are defined with CSS variables and consumed through Tailwind v4 utilities. The `jk-ui-cli setup` command generates the theme file automatically.

## Theme Modes

Choose one strategy. Most apps should start with "both" for light and dark support.

| Mode | Description |
|------|-------------|
| both | Define variables for light and dark modes. Best default. |
| light | Light mode only. |
| dark | Dark-first products. |

## shadcn-Standard Variable Tokens

```css
:root {
  --background: var(--color-white);
  --foreground: var(--color-gray-700);
  --card: var(--color-white);
  --card-foreground: var(--color-gray-900);
  --popover: var(--color-white);
  --popover-foreground: var(--color-gray-700);
  --primary: var(--color-primary-600);
  --primary-foreground: var(--color-white);
  --secondary: var(--color-secondary-600);
  --secondary-foreground: var(--color-white);
  --muted: var(--color-gray-100);
  --muted-foreground: var(--color-gray-600);
  --accent: var(--color-accent-600);
  --accent-foreground: var(--color-white);
  --destructive: var(--color-danger-600);
  --destructive-foreground: var(--color-white);
  --border: var(--color-gray-200);
  --input: var(--color-gray-200);
  --ring: var(--color-primary-600);
}

.dark {
  --background: var(--color-gray-950);
  --foreground: var(--color-gray-300);
  --card: var(--color-gray-950);
  --card-foreground: var(--color-white);
  --popover: var(--color-gray-950);
  --popover-foreground: var(--color-gray-300);
  --primary: var(--color-primary-500);
  --primary-foreground: var(--color-white);
  --secondary: var(--color-secondary-500);
  --secondary-foreground: var(--color-white);
  --muted: var(--color-gray-900);
  --muted-foreground: var(--color-gray-400);
  --accent: var(--color-accent-500);
  --accent-foreground: var(--color-white);
  --destructive: var(--color-danger-500);
  --destructive-foreground: var(--color-white);
  --border: var(--color-gray-800);
  --input: var(--color-gray-700);
  --ring: var(--color-primary-500);
}
```

## jk-ui Extended Tokens

```css
:root {
  --fg-title: var(--color-gray-900);
  --fg: var(--foreground);
  --fg-muted: var(--muted-foreground);
  --bg: var(--background);
  --bg-subtle: var(--muted);
  --bg-surface: var(--color-gray-50);
  --bg-muted: var(--color-gray-200);
  --overlay: var(--background);
  --border-strong: var(--color-gray-300);
  --border-card: var(--border);
  --danger: var(--destructive);
  --info: var(--color-info-600);
  --warning: var(--color-warning-600);
  --success: var(--color-success-600);
}

.dark {
  --fg-title: var(--color-white);
  --fg: var(--foreground);
  --fg-muted: var(--muted-foreground);
  --bg: var(--background);
  --bg-subtle: var(--muted);
  --bg-surface: --alpha(var(--color-gray-900)/70%);
  --bg-muted: var(--color-gray-800);
  --border-strong: var(--color-gray-700);
  --border-card: var(--border);
  --danger: var(--destructive);
  --info: var(--color-info-500);
  --warning: var(--color-warning-500);
  --success: var(--color-success-500);
}
```

## @theme Registration

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius: var(--radius);

  /* jk-ui extended */
  --color-fg-title: var(--fg-title);
  --color-fg: var(--fg);
  --color-fg-muted: var(--fg-muted);
  --color-bg: var(--bg);
  --color-bg-subtle: var(--bg-subtle);
  --color-bg-surface: var(--bg-surface);
  --color-bg-muted: var(--bg-muted);
  --color-overlay: var(--overlay);
  --color-border-strong: var(--border-strong);
  --color-border-card: var(--border-card);
  --color-danger: var(--danger);
  --color-info: var(--info);
  --color-warning: var(--warning);
  --color-success: var(--success);
}
```

Once registered, use `bg-background`, `text-foreground`, `border-input`, `ring-ring`, etc. throughout the UI.
