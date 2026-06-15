## Prerequisites

jk-ui color tokens are defined with CSS variables and consumed through Tailwind v4 utilities. Load base CSS before theme overrides.

## Theme Modes

Choose one strategy. Most apps should start with "both" for light and dark support.

| Mode | Description |
|------|-------------|
| both | Define variables for light and dark modes. Best default with `next-themes`. |
| light | Light mode only. |
| dark | Dark-first products. |

## Variable Tokens (Both Modes)

```css
:root {
    --primary: var(--color-primary-600);
    --secondary: var(--color-secondary-600);
    --accent: var(--color-accent-600);
    --info: var(--color-info-600);
    --warning: var(--color-warning-600);
    --danger: var(--color-danger-600);
    --success: var(--color-success-600);

    --fg-title: var(--color-gray-900);
    --fg: var(--color-gray-700);
    --fg-muted: var(--color-gray-600);

    --bg: var(--color-white);
    --bg-subtle: var(--color-gray-100);
    --bg-surface: var(--color-gray-50);
    --bg-muted: var(--color-gray-200);
    --card: var(--color-bg);
    --card-gray: var(--color-bg-subtle);
    --overlay: var(--color-bg);

    --border-strong: var(--color-gray-300);
    --border: var(--color-gray-200);
    --border-card: var(--color-gray-200);
    --border-input: var(--color-gray-200);

    --ui-radius: var(--radius-lg);
}

.dark {
    --primary: var(--color-primary-500);
    --secondary: var(--color-secondary-500);
    --accent: var(--color-accent-500);
    --info: var(--color-info-500);
    --warning: var(--color-warning-500);
    --danger: var(--color-danger-500);
    --success: var(--color-success-500);

    --fg-title: var(--color-white);
    --fg: var(--color-gray-300);
    --fg-muted: var(--color-gray-400);

    --bg: var(--color-gray-950);
    --bg-subtle: var(--color-gray-900);
    --bg-surface: --alpha(var(--color-gray-900)/70%);
    --bg-muted: var(--color-gray-800);

    --border-strong: var(--color-gray-700);
    --border: var(--color-gray-900);
    --border-card: var(--color-gray-800);
    --border-input: var(--color-gray-800);
}
```

## @theme Registration

Register tokens in `@theme inline` so Tailwind generates the utility classes:

```css
@theme inline {
    --color-primary: var(--primary);
    --color-secondary: var(--secondary);
    --color-fg-title: var(--fg-title);
    --color-fg: var(--fg);
    --color-fg-muted: var(--fg-muted);
    --color-bg: var(--bg);
    --color-bg-subtle: var(--bg-subtle);
    --color-bg-surface: var(--bg-surface);
    --color-bg-muted: var(--bg-muted);
    --color-card: var(--card);
    --color-card-gray: var(--card-gray);
    --color-overlay: var(--overlay);
    --color-border-strong: var(--border-strong);
    --color-border: var(--border);
    --color-border-card: var(--border-card);
    --color-border-input: var(--border-input);
    --radius-ui: var(--ui-radius);
}
```

Once registered, use `bg-primary`, `text-fg`, `border-border-input`, etc. throughout the UI.
