export const uiCSSTheme = {
  "ui-intents": {
    title: "UI intents",
    lang: "css",
    code: `@utility ui-solid-primary {
  --ui-color: var(--color-primary);
  --ui-fg: var(--color-primary-foreground);
}

@utility ui-soft-destructive {
  --ui-color: var(--color-destructive);
  --ui-fg: var(--color-destructive-foreground);
}`,
  },
  "ui-custom-intent": {
    title: "Custom UI intent",
    lang: "css",
    code: `@utility ui-solid-brand {
  --ui-color: var(--color-brand);
  --ui-fg: var(--color-brand-foreground);
}

@utility ui-soft-brand {
  --ui-color: var(--color-brand);
  --ui-fg: var(--color-brand-foreground);
}`,
  },
} as const
