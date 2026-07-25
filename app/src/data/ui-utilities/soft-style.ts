export const uiSoftStyle = {
    "ui-soft-light":{
        title:"light",
        lang:"css",
        code:`
@utility ui-soft-success {
    --ui-soft-bg: --alpha(var(--color-success-100) / 40%);
    --ui-soft-text: var(--color-success-600);
}

@utility ui-soft-warning {
    --ui-soft-bg: --alpha(var(--color-warning-100) / 40%);
    --ui-soft-text: var(--color-warning-600);
}

@utility ui-soft-danger {
    --ui-soft-bg: --alpha(var(--color-danger-100) / 40%);
    --ui-soft-text: var(--color-danger-600);
}`
    },
    "ui-soft-dark":{
        title:"dark",
        lang:"css",
        code:`
@utility ui-soft-success {
        --ui-soft-bg: --alpha(var(--color-success-900) / 30%);
        --ui-soft-text: var(--color-success-300);
}

@utility ui-soft-warning {
    --ui-soft-bg: --alpha(var(--color-warning-900) / 30%);
    --ui-soft-text: var(--color-warning-300);
}

@utility ui-soft-danger {
    --ui-soft-bg: --alpha(var(--color-danger-900) / 30%);
    --ui-soft-text: var(--color-danger-300);
}`
    },
    "ui-soft-both":{
        title:"both",
        lang:"css",
        code:`
@utility ui-soft-success {
    --ui-soft-bg: --alpha(var(--color-success-100) / 40%);
    --ui-soft-text: var(--color-success-600);

    &:is(.dark *) {
        --ui-soft-bg: --alpha(var(--color-success-900) / 30%);
        --ui-soft-text: var(--color-success-300);
    }
}

@utility ui-soft-warning {
    --ui-soft-bg: --alpha(var(--color-warning-100) / 40%);
    --ui-soft-text: var(--color-warning-600);

    &:is(.dark *) {
        --ui-soft-bg: --alpha(var(--color-warning-900) / 30%);
        --ui-soft-text: var(--color-warning-300);
    }
}

@utility ui-soft-danger {
    --ui-soft-bg: --alpha(var(--color-danger-100) / 40%);
    --ui-soft-text: var(--color-danger-600);

    &:is(.dark *) {
        --ui-soft-bg: --alpha(var(--color-danger-900) / 30%);
        --ui-soft-text: var(--color-danger-300);
    }
}`
    },
} as const