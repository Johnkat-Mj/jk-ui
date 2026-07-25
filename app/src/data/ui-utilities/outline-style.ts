export const uiOutlineStyle = {
    "ui-outline-light":{
        title:"light",
        lang:"css",
        code:`
@utility ui-outline-success {
    --ui-outline-border: var(--color-success-600);
    --ui-outline-text: var(--color-success-600);
}

@utility ui-outline-warning {
    --ui-outline-border: var(--color-warning-600);
    --ui-outline-text: var(--color-warning-600);
}

@utility ui-outline-danger {
    --ui-outline-border: var(--color-danger-600);
    --ui-outline-text: var(--color-danger-600);
}`
    },
    "ui-outline-dark":{
        title:"dark",
        lang:"css",
        code:`
@utility ui-outline-success {
    --ui-outline-border: var(--color-secondary-500);
    --ui-outline-text: var(--color-secondary-500);
}

@utility ui-outline-warning {
    --ui-outline-border: var(--color-warning-500);
    --ui-outline-text: var(--color-warning-500);
}

@utility ui-outline-danger {
    --ui-outline-border: var(--color-danger-500);
    --ui-outline-text: var(--color-danger-500);
}`
    },
    "ui-outline-both":{
        title:"both",
        lang:"css",
        code:`
@utility ui-outline-success {
    --ui-outline-border: var(--color-success-600);
    --ui-outline-text: var(--color-success-600);

    &:is(.dark *) {
        --ui-outline-border: var(--color-secondary-500);
        --ui-outline-text: var(--color-secondary-500);
    }
}

@utility ui-outline-warning {
    --ui-outline-border: var(--color-warning-600);
    --ui-outline-text: var(--color-warning-600);

    &:is(.dark *) {
        --ui-outline-border: var(--color-warning-500);
        --ui-outline-text: var(--color-warning-500);
    }
}

@utility ui-outline-danger {
    --ui-outline-border: var(--color-danger-600);
    --ui-outline-text: var(--color-danger-600);

    &:is(.dark *) {
        --ui-outline-border: var(--color-danger-500);
        --ui-outline-text: var(--color-danger-500);
    }
}`
    },
} as const