export const btnSoftStyle = {
    "btn-soft-light":{
        title:"light",
        lang:"css",
        code:`
@utility btn-soft-primary {
    --btn-soft-bg-color: var(--color-primary-50);
    --btn-soft-bg-color-hover: --alpha(var(--color-primary-400) / 60%);
    --btn-soft-bg-color-press: --alpha(var(--color-primary-400) / 40%);
    --btn-soft-text-color: var(--color-primary-600);
    --btn-soft-text-color-hover: var(--color-primary-700);
}

@utility btn-soft-danger {
    --btn-soft-bg-color: var(--color-danger-50);
    --btn-soft-bg-color-hover: --alpha(var(--color-danger-400) / 60%);
    --btn-soft-bg-color-press: --alpha(var(--color-danger-400) / 40%);
    --btn-soft-text-color: var(--color-danger-600);
    --btn-soft-text-color-hover: var(--color-danger-700);
}

@utility btn-soft-gray {
    --btn-soft-bg-color: var(--color-gray-50);
    --btn-soft-bg-color-hover: --alpha(var(--color-gray-200) / 75%);
    --btn-soft-bg-color-press: --alpha(var(--color-gray-200) / 80%);
    --btn-soft-text-color: var(--color-gray-800);
    --btn-soft-text-color-hover: var(--color-gray-900);
}`
    },
    "btn-soft-dark":{
        title:"dark",
        lang:"css",
        code:`
@utility btn-soft-primary {
    --btn-soft-bg-color: --alpha(var(--color-primary-600) / 15%);
    --btn-soft-bg-color-hover: --alpha(var(--color-primary-600) / 30%);
    --btn-soft-bg-color-press: --alpha(var(--color-primary-600) / 25%);
    --btn-soft-text-color: var(--color-primary-300);
    --btn-soft-text-color-hover: var(--color-primary-300);
}

@utility btn-soft-danger {
    --btn-soft-bg-color: --alpha(var(--color-danger-600) / 15%);
    --btn-soft-bg-color-hover: --alpha(var(--color-danger-600) / 30%);
    --btn-soft-bg-color-press: --alpha(var(--color-danger-600) / 25%);
    --btn-soft-text-color: var(--color-danger-300);
    --btn-soft-text-color-hover: var(--color-danger-300);
}

@utility btn-soft-gray {
    --btn-soft-bg-color: --alpha(var(--color-gray-600) / 20%);
    --btn-soft-bg-color-hover: --alpha(var(--color-gray-600) / 40%);
    --btn-soft-bg-color-press: --alpha(var(--color-gray-600) / 25%);
    --btn-soft-text-color: var(--color-gray-100);
    --btn-soft-text-color-hover: var(--color-gray-50);
}`
    },
    "btn-soft-both":{
        title:"both",
        lang:"css",
        code:`
@utility btn-soft-primary {
    --btn-soft-bg-color: var(--color-primary-50);
    --btn-soft-bg-color-hover: --alpha(var(--color-primary-400) / 60%);
    --btn-soft-bg-color-press: --alpha(var(--color-primary-400) / 40%);
    --btn-soft-text-color: var(--color-primary-600);
    --btn-soft-text-color-hover: var(--color-primary-700);

    &:is(.dark *) {
        --btn-soft-bg-color: --alpha(var(--color-primary-600) / 15%);
        --btn-soft-bg-color-hover: --alpha(var(--color-primary-600) / 30%);
        --btn-soft-bg-color-press: --alpha(var(--color-primary-600) / 25%);
        --btn-soft-text-color: var(--color-primary-300);
        --btn-soft-text-color-hover: var(--color-primary-300);
    }
}

@utility btn-soft-danger {
    --btn-soft-bg-color: var(--color-danger-50);
    --btn-soft-bg-color-hover: --alpha(var(--color-danger-400) / 60%);
    --btn-soft-bg-color-press: --alpha(var(--color-danger-400) / 40%);
    --btn-soft-text-color: var(--color-danger-600);
    --btn-soft-text-color-hover: var(--color-danger-700);

    &:is(.dark *) {
        --btn-soft-bg-color: --alpha(var(--color-danger-600) / 15%);
        --btn-soft-bg-color-hover: --alpha(var(--color-danger-600) / 30%);
        --btn-soft-bg-color-press: --alpha(var(--color-danger-600) / 25%);
        --btn-soft-text-color: var(--color-danger-300);
        --btn-soft-text-color-hover: var(--color-danger-300);
    }
}

@utility btn-soft-gray {
    --btn-soft-bg-color: var(--color-gray-50);
    --btn-soft-bg-color-hover: --alpha(var(--color-gray-200) / 75%);
    --btn-soft-bg-color-press: --alpha(var(--color-gray-200) / 80%);
    --btn-soft-text-color: var(--color-gray-800);
    --btn-soft-text-color-hover: var(--color-gray-900);

    &:is(.dark *) {
        --btn-soft-bg-color: --alpha(var(--color-gray-600) / 20%);
        --btn-soft-bg-color-hover: --alpha(var(--color-gray-600) / 40%);
        --btn-soft-bg-color-press: --alpha(var(--color-gray-600) / 25%);
        --btn-soft-text-color: var(--color-gray-100);
        --btn-soft-text-color-hover: var(--color-gray-50);
    }
}`
    },
} as const