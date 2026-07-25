export const btnCSSTheme = {
  "button-intents": {
    title: "Button intents",
    lang: "css",
    code: `@utility btn-solid-primary {
  --btn-color: var(--color-primary);
  --btn-fg: var(--color-primary-foreground);
}

@utility btn-soft-destructive {
  --btn-color: var(--color-destructive);
  --btn-fg: var(--color-destructive);
}`,
  },
  "button-custom-intent": {
    title: "Custom button intent",
    lang: "css",
    code: `@utility btn-solid-brand {
  --btn-color: var(--color-brand);
  --btn-fg: var(--color-brand-foreground);
}

@utility btn-soft-brand {
  --btn-color: var(--color-brand);
  --btn-fg: var(--color-brand);
}`,
  },
} as const
