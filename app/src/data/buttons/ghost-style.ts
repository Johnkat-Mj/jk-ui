export const btnGhostStyle = {
    "btn-ghost-light":{
        title:"light",
        lang:"css",
        code:`
@utility btn-ghost-primary {
    --btn-ghost-bg-color-hover: --alpha(var(--color-primary-100) / 50%);
    --btn-ghost-bg-color-press: --alpha(var(--color-primary-100) / 70%);
    --btn-ghost-text-color: var(--color-primary-600);
    --btn-ghost-text-color-hover: var(--color-primary-700);
}

@utility btn-ghost-danger {
    --btn-ghost-bg-color-hover: --alpha(var(--color-danger-100) / 50%);
    --btn-ghost-bg-color-press: --alpha(var(--color-danger-100) / 70%);
    --btn-ghost-text-color: var(--color-danger-600);
    --btn-ghost-text-color-hover: var(--color-danger-700);
}

@utility btn-ghost-gray {
    --btn-ghost-bg-color-hover: --alpha(var(--color-gray-200) / 40%);
    --btn-ghost-bg-color-press: --alpha(var(--color-gray-200) / 75%);
    --btn-ghost-text-color: var(--color-gray-800);
    --btn-ghost-text-color-hover: var(--color-gray-900);
}`
    },
    "btn-ghost-dark":{
        title:"dark",
        lang:"css",
        code:`
@utility btn-ghost-primary {
    --btn-ghost-bg-color-hover: --alpha(var(--color-primary-600) / 30%);
    --btn-ghost-bg-color-press: --alpha(var(--color-primary-600) / 25%);
    --btn-ghost-text-color: var(--color-primary-300);
    --btn-ghost-text-color-hover: var(--color-primary-200);
}

@utility btn-ghost-danger {
    --btn-ghost-bg-color-hover: --alpha(var(--color-danger-600) / 30%);
    --btn-ghost-bg-color-press: --alpha(var(--color-danger-600) / 25%);
    --btn-ghost-text-color: var(--color-danger-300);
    --btn-ghost-text-color-hover: var(--color-danger-200);
}

@utility btn-ghost-gray {
    --btn-ghost-bg-color-hover: --alpha(var(--color-gray-700) / 70%);
    --btn-ghost-bg-color-press: --alpha(var(--color-gray-800) / 60%);
    --btn-ghost-text-color: var(--color-gray-100);
    --btn-ghost-text-color-hover: var(--color-gray-50);
}`
    },
    "btn-ghost-both":{
        title:"both",
        lang:"css",
        code:`
@utility btn-ghost-primary {
    --btn-ghost-bg-color-hover: --alpha(var(--color-primary-100) / 50%);
    --btn-ghost-bg-color-press: --alpha(var(--color-primary-100) / 70%);
    --btn-ghost-text-color: var(--color-primary-600);
    --btn-ghost-text-color-hover: var(--color-primary-700);

    &:is(.dark *) {
        --btn-ghost-bg-color-hover: --alpha(var(--color-primary-600) / 30%);
        --btn-ghost-bg-color-press: --alpha(var(--color-primary-600) / 25%);
        --btn-ghost-text-color: var(--color-primary-300);
        --btn-ghost-text-color-hover: var(--color-primary-200);
    }
}

@utility btn-ghost-danger {
    --btn-ghost-bg-color-hover: --alpha(var(--color-danger-100) / 50%);
    --btn-ghost-bg-color-press: --alpha(var(--color-danger-100) / 70%);
    --btn-ghost-text-color: var(--color-danger-600);
    --btn-ghost-text-color-hover: var(--color-danger-700);

    &:is(.dark *) {
        --btn-ghost-bg-color-hover: --alpha(var(--color-danger-600) / 30%);
        --btn-ghost-bg-color-press: --alpha(var(--color-danger-600) / 25%);
        --btn-ghost-text-color: var(--color-danger-300);
        --btn-ghost-text-color-hover: var(--color-danger-200);
    }
}

@utility btn-ghost-gray {
    --btn-ghost-bg-color-hover: --alpha(var(--color-gray-200) / 40%);
    --btn-ghost-bg-color-press: --alpha(var(--color-gray-200) / 75%);
    --btn-ghost-text-color: var(--color-gray-800);
    --btn-ghost-text-color-hover: var(--color-gray-900);

    &:is(.dark *) {
        --btn-ghost-bg-color-hover: --alpha(var(--color-gray-700) / 70%);
        --btn-ghost-bg-color-press: --alpha(var(--color-gray-800) / 60%);
        --btn-ghost-text-color: var(--color-gray-100);
        --btn-ghost-text-color-hover: var(--color-gray-50);
    }
}`
    },
} as const