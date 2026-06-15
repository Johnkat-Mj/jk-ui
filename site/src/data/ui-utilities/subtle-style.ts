export const uiSubtleStyle = {
    "ui-subtle-light":{
        title:"light",
        lang:"css",
        code:`
@utility ui-subtle-success {
    --ui-subtle-bg: --alpha(var(--color-success-100) / 40%);
    --ui-subtle-text: var(--color-success-600);
    --ui-subtle-border: var(--color-success-300);
}

@utility ui-subtle-warning {
    --ui-subtle-bg: --alpha(var(--color-warning-100) / 40%);
    --ui-subtle-text: var(--color-warning-600);
    --ui-subtle-border: var(--color-warning-300);
}

@utility ui-subtle-danger {
    --ui-subtle-bg: --alpha(var(--color-danger-100) / 40%);
    --ui-subtle-text: var(--color-danger-600);
    --ui-subtle-border: var(--color-danger-300);
}`
    },
    "ui-subtle-dark":{
        title:"dark",
        lang:"css",
        code:`
@utility ui-subtle-success {
    --ui-subtle-bg: --alpha(var(--color-success-900) / 30%);
    --ui-subtle-text: var(--color-success-300);
    --ui-subtle-border: --alpha(var(--color-success-900) / 60%);
}

@utility ui-subtle-warning {
    --ui-subtle-bg: --alpha(var(--color-warning-900) / 30%);
    --ui-subtle-text: var(--color-warning-300);
    --ui-subtle-border: --alpha(var(--color-warning-900) / 60%);
}

@utility ui-subtle-danger {
    --ui-subtle-bg: --alpha(var(--color-danger-900) / 30%);
    --ui-subtle-text: var(--color-danger-300);
    --ui-subtle-border: --alpha(var(--color-danger-900) / 60%);
}`
    },
    "ui-subtle-both":{
        title:"both",
        lang:"css",
        code:`
@utility ui-subtle-success {
    --ui-subtle-bg: --alpha(var(--color-success-100) / 40%);
    --ui-subtle-text: var(--color-success-600);
    --ui-subtle-border: var(--color-success-300);

    &:is(.dark *) {
        --ui-subtle-bg: --alpha(var(--color-success-900) / 30%);
        --ui-subtle-text: var(--color-success-300);
        --ui-subtle-border: --alpha(var(--color-success-900) / 60%);
    }
}

@utility ui-subtle-warning {
    --ui-subtle-bg: --alpha(var(--color-warning-100) / 40%);
    --ui-subtle-text: var(--color-warning-600);
    --ui-subtle-border: var(--color-warning-300);

    &:is(.dark *) {
        --ui-subtle-bg: --alpha(var(--color-warning-900) / 30%);
        --ui-subtle-text: var(--color-warning-300);
        --ui-subtle-border: --alpha(var(--color-warning-900) / 60%);
    }
}

@utility ui-subtle-danger {
    --ui-subtle-bg: --alpha(var(--color-danger-100) / 40%);
    --ui-subtle-text: var(--color-danger-600);
    --ui-subtle-border: var(--color-danger-300);

    &:is(.dark *) {
        --ui-subtle-bg: --alpha(var(--color-danger-900) / 30%);
        --ui-subtle-text: var(--color-danger-300);
        --ui-subtle-border: --alpha(var(--color-danger-900) / 60%);
    }
}`
    },
} as const