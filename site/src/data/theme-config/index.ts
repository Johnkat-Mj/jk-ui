

export const themeConfig: Record<string, { title: string; code: string, lang: "css" | "ts" | "js" | "jsx" }> = {
  'css-variables-color-both': {
    title: 'Both',
    code: `/* CSS Variables for Both Light and Dark Themes */
:root {
  --primary: var(--color-primary-600);
  --secondary: var(--color-secondary-600);
  --accent: var(--color-accent-600);
  --info: var(--color-info-600);
  --warning: var(--color-warning-600);
  --danger: var(--color-danger-600);
  --success: var(--color-success-600);

  --fg-title: var(--color-gray-900);
  --fg-subtitle: var(--color-gray-800);
  --fg: var(--color-gray-700);
  --fg-muted: var(--color-gray-600);

  --bg: var(--color-white);
  --bg-subtle: var(--color-gray-100);
  --bg-surface: var(--color-gray-50);
  --bg-muted: var(--color-gray-200);
  --card: var(--bg);
  --overlay: var(--bg);

  --border-strong: var(--color-gray-300);
  --border: var(--color-gray-200);
  --border-card: var(--color-gray-200);
  --border-input: var(--color-gray-200);

  --ui-input-focus-outline: var(--color-primary);
  --ui-input-place-holder: var(--color-gray-500);
  --ui-input-invalid-outline: var(--color-danger);
  --ring-bg: var(--color-primary);
  --ring-offset-color: var(--bg);

  --focus-ring: var(--color-primary-200);

  --ui-radius: var(--radius-lg);
  --card-radius: var(--radius-lg);
  --checkbox-radius: var(--radius-sm);

  --checkbox-bg: var(--bg);
  --checkbox-fg: transparent;
  --checkbox-bg-checked: var(--color-primary);
  --checkbox-fg-checked: var(--color-white);
  --checkbox-bg-invalid: var(--color-danger);
  --checkbox-fg-invalid: var(--color-white);


  --dropdown-item-hover-and-select: var(--bg-muted);
  --dropdown-item-hover-and-select-fg: var(--fg-title);
  --dropdown-item-selected-fg: var(--fg-title);

  --dropdown-item-danger-fg: var(--color-danger);
  --dropdown-item-warning-fg: var(--color-warning);
  --dropdown-item-danger-hover-and-select: --alpha(var(--color-danger-100)/40%);
  --dropdown-item-danger-hover-and-select-fg: var(--color-danger-600);
  --dropdown-item-warning-hover-and-select: --alpha(var(--color-warning-100)/40%);
  --dropdown-item-warning-hover-and-select-fg: var(--color-warning-600);

  --date-segment-focus-bg: var(--color-primary);
  --date-segment-focus-fg: var(--color-white);
  --range-selected-bg: var(--color-primary-100);
  --range-selected-invalid-bg: var(--color-danger-100);

  --range-selected-bg-hover: var(--color-primary-200);
  --range-selected-invalid-bg-hover: var(--color-danger-200);

  --range-selected-fg: var(--color-primary-600);
  --range-selected-invalid-fg: var(--color-danger-600);

  --range-selected-bg-pressed: var(--color-primary-300);
  --range-selected-invalid-bg-pressed: var(--color-danger-300);

  --chart-1: oklch(0.546 0.245 262.881);
  --chart-2: oklch(0.623 0.214 259.815);
  --chart-3: oklch(0.707 0.165 254.624);
  --chart-4: oklch(0.809 0.105 251.813);
  --chart-5: oklch(0.882 0.059 254.128);
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
  --fg-subtitle: var(--color-gray-100);
  --fg: var(--color-gray-300);
  --fg-muted: var(--color-gray-400);

  --bg: var(--color-gray-950);
  --bg-subtle: var(--color-gray-900);
  --bg-surface: --alpha(var(--color-gray-900)/70%);
  --bg-muted: var(--color-gray-800);

  --border-strong: var(--color-gray-700);
  --border: var(--color-gray-900);
  --border-card: var(--color-gray-800);
  --border-input: var(--color-gray-700);

  --focus-ring: --alpha(var(--primary-800)/30%);

  --dropdown-item-danger-hover-and-select: --alpha(var(--color-danger-900)/30%);
  --dropdown-item-danger-hover-and-select-fg: var(--color-danger-300);
  --dropdown-item-warning-hover-and-select: --alpha(var(--color-warning-900)/30%);
  --dropdown-item-warning-hover-and-select-fg: var(--color-warning-300);

  --range-selected-bg: --alpha(var(--color-primary-900)/30%);
  --range-selected-invalid-bg: --alpha(var(--color-danger-800)/30%);

  --range-selected-bg-hover: var(--color-primary-800);
  --range-selected-invalid-bg-hover: var(--color-danger-800);

  --range-selected-fg: var(--color-primary-200);
  --range-selected-invalid-fg: var(--color-danger-200);

  --range-selected-bg-pressed: var(--color-primary-700);
  --range-selected-invalid-bg-pressed: var(--color-danger-700);

  
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.623 0.214 259.815);
  --chart-3: oklch(0.707 0.165 254.624);
  --chart-4: oklch(0.809 0.105 251.813);
  --chart-5: oklch(0.882 0.059 254.128);
}`,
    lang: 'css'
  },
  'css-variables-color-light': {
    title: 'Light Only',
    code: `/* CSS Variables for Light Theme Only */
:root {
  --primary: var(--color-primary-600);
  --secondary: var(--color-secondary-600);
  --accent: var(--color-accent-600);
  --info: var(--color-info-600);
  --warning: var(--color-warning-600);
  --danger: var(--color-danger-600);
  --success: var(--color-success-600);

  --fg-title: var(--color-gray-900);
  --fg-subtitle: var(--color-gray-800);
  --fg: var(--color-gray-700);
  --fg-muted: var(--color-gray-600);

  --bg: var(--color-white);
  --bg-subtle: var(--color-gray-100);
  --bg-surface: var(--color-gray-50);
  --bg-muted: var(--color-gray-200);
  --card: var(--bg);
  --overlay: var(--bg);

  --border-strong: var(--color-gray-300);
  --border: var(--color-gray-200);
  --border-card: var(--color-gray-200);
  --border-input: var(--color-gray-200);

  --ui-input-focus-outline: var(--color-primary);
  --ui-input-place-holder: var(--color-gray-500);
  --ui-input-invalid-outline: var(--color-danger);
  --ring-bg: var(--color-primary);
  --ring-offset-color: var(--bg);

  --focus-ring: var(--color-primary-200);

  --ui-radius: var(--radius-lg);
  --card-radius: var(--radius-lg);
  --checkbox-radius: var(--radius-sm);

  --checkbox-bg: var(--bg);
  --checkbox-fg: transparent;
  --checkbox-bg-checked: var(--color-primary);
  --checkbox-fg-checked: var(--color-white);
  --checkbox-bg-invalid: var(--color-danger);
  --checkbox-fg-invalid: var(--color-white);


  --dropdown-item-hover-and-select: var(--bg-muted);
  --dropdown-item-hover-and-select-fg: var(--fg-title);
  --dropdown-item-selected-fg: var(--fg-title);

  --dropdown-item-danger-fg: var(--color-danger);
  --dropdown-item-warning-fg: var(--color-warning);
  --dropdown-item-danger-hover-and-select: --alpha(var(--color-danger-100)/40%);
  --dropdown-item-danger-hover-and-select-fg: var(--color-danger-600);
  --dropdown-item-warning-hover-and-select: --alpha(var(--color-warning-100)/40%);
  --dropdown-item-warning-hover-and-select-fg: var(--color-warning-600);

  --date-segment-focus-bg: var(--color-primary);
  --date-segment-focus-fg: var(--color-white);
  --range-selected-bg: var(--color-primary-100);
  --range-selected-invalid-bg: var(--color-danger-100);

  --range-selected-bg-hover: var(--color-primary-200);
  --range-selected-invalid-bg-hover: var(--color-danger-200);

  --range-selected-fg: var(--color-primary-600);
  --range-selected-invalid-fg: var(--color-danger-600);

  --range-selected-bg-pressed: var(--color-primary-300);
  --range-selected-invalid-bg-pressed: var(--color-danger-300);

  --chart-1: oklch(0.546 0.245 262.881);
  --chart-2: oklch(0.623 0.214 259.815);
  --chart-3: oklch(0.707 0.165 254.624);
  --chart-4: oklch(0.809 0.105 251.813);
  --chart-5: oklch(0.882 0.059 254.128);
}`,
    lang: 'css'
  },
  'css-variables-color-dark': {
    title: 'Dark Only',
    code: `/* CSS Variables for Dark Theme Only */
:root {
  --color-primary: var(--color-primary-500);
  --color-secondary: var(--color-secondary-500);
  --color-accent: var(--color-accent-500);
  --color-info: var(--color-info-500);
  --color-warning: var(--color-warning-500);
  --color-danger: var(--color-danger-500);
  --color-success: var(--color-success-500);

  --fg-title: var(--color-white);
  --fg-subtitle: var(--color-gray-100);
  --fg: var(--color-gray-300);
  --fg-muted: var(--color-gray-400);

  --bg: var(--color-gray-950);
  --bg-subtle: var(--color-gray-900);
  --bg-surface: --alpha(var(--color-gray-900)/70%);
  --bg-muted: var(--color-gray-800);
  --card: var(--bg);
  --overlay: var(--bg);

  --border-strong: var(--color-gray-700);
  --border: var(--color-gray-900);
  --border-card: var(--color-gray-800);
  --border-input: var(--color-gray-700);

  --ui-input-focus-outline: var(--color-primary);
  --ui-input-place-holder: var(--color-gray-500);
  --ui-input-invalid-outline: var(--color-danger);
  --ring-bg: var(--color-primary);
  --ring-offset-color: var(--bg);

  --focus-ring: --alpha(var(--primary-800)/30%);

  --ui-radius: var(--radius-lg);
  --card-radius: var(--radius-lg);
  --checkbox-radius: var(--radius-sm);

  --checkbox-bg: var(--bg);
  --checkbox-fg: transparent;
  --checkbox-bg-checked: var(--color-primary);
  --checkbox-fg-checked: var(--color-white);
  --checkbox-bg-invalid: var(--color-danger);
  --checkbox-fg-invalid: var(--color-white);


  --dropdown-item-hover-and-select: var(--bg-muted);
  --dropdown-item-hover-and-select-fg: var(--fg-title);
  --dropdown-item-selected-fg: var(--fg-title);

  --dropdown-item-danger-fg: var(--color-danger);
  --dropdown-item-warning-fg: var(--color-warning);
  --dropdown-item-danger-hover-and-select: --alpha(var(--color-danger-900)/30%);
  --dropdown-item-danger-hover-and-select-fg: var(--color-danger-300);
  --dropdown-item-warning-hover-and-select: --alpha(var(--color-warning-900)/30%);
  --dropdown-item-warning-hover-and-select-fg: var(--color-warning-300);

  --date-segment-focus-bg: var(--color-primary);
  --date-segment-focus-fg: var(--color-white);
  
  --range-selected-bg: --alpha(var(--color-primary-900)/30%);
  --range-selected-invalid-bg: --alpha(var(--color-danger-800)/30%);

  --range-selected-bg-hover: var(--color-primary-800);
  --range-selected-invalid-bg-hover: var(--color-danger-800);

  --range-selected-fg: var(--color-primary-200);
  --range-selected-invalid-fg: var(--color-danger-200);

  --range-selected-bg-pressed: var(--color-primary-700);
  --range-selected-invalid-bg-pressed: var(--color-danger-700);



  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.623 0.214 259.815);
  --chart-3: oklch(0.707 0.165 254.624);
  --chart-4: oklch(0.809 0.105 251.813);
  --chart-5: oklch(0.882 0.059 254.128);
}`,
    lang: 'css'
  },
  'css-variables-colors': {
    title: 'CSS Variables - Theme Configuration',
    code: `/* Theme Configuration */
@theme {
  --color-primary-50: hsl(252, 100%, 97%);
  --color-primary-100: hsl(252, 100%, 94%);
  --color-primary-200: hsl(251, 98%, 89%);
  --color-primary-300: hsl(249, 95%, 82%);
  --color-primary-400: hsl(247, 90%, 74%);
  --color-primary-500: hsl(245, 86%, 67%);
  --color-primary-600: hsl(243, 75%, 59%);
  --color-primary-700: hsl(244, 57%, 51%);
  --color-primary-800: hsl(245, 54%, 41%);
  --color-primary-900: hsl(245, 47%, 35%);
  --color-primary-950: hsl(246, 47%, 20%);

  /* Define : secondary, accent, danger, warning, info... colors as needed  */
}
@theme inline {
  --font-sans: "Instrument Sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

  --radius-ui: var(--ui-radius);
  --radius-card: var(--card-radius);
  --radius-checkbox: var(--checkbox-radius);
  --radius-dropdown-item: var(--popover-inner-radius, 0px);

  --color-dark: var(--color-gray-950);
  --color-ring: var(--color-primary-600);

  --color-primary: var(--primary);
  --color-secondary: var(--secondary);
  --color-accent: var(--accent);
  --color-info: var(--info);
  --color-warning: var(--warning);
  --color-danger: var(--danger);
  --color-success: var(--success);

  --color-fg-title: var(--fg-title);
  --color-fg-subtitle: var(--fg-subtitle);
  --color-fg: var(--fg);
  --color-fg-muted: var(--fg-muted);

  --color-bg: var(--bg);
  --color-bg-subtle: var(--bg-subtle);
  --color-bg-surface: var(--bg-surface);
  --color-bg-muted: var(--bg-muted);
  --color-card: var(--card);
  --color-popover: var(--bg);
  --color-overlay: var(--overlay);

  --color-border-strong: var(--border-strong);
  --color-border: var(--border);
  --color-border-card: var(--border-card);
  --color-border-input: var(--border-input);

  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
}`,
    lang: 'css'
  },
  'inner-radius-example': {
    title: 'Inner Radius Example',
    code: `import { Card } from "@/components/ui/card"
        
const ProfileCard = () => {
  return (
      <Card className="[--card-padding:--spacing(2)] [--card-radius:var(--radius-2xl)]">
          // Inner element with calculated radius 
          <div className="inner-radius bg-primary text-white p-4">
              Content that fits perfectly
          </div>
      </Card>
  )
}`,
    lang: 'jsx'
  }
}