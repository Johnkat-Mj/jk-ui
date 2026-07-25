export const btnOutlineStyle = {
    "btn-outline-light":{
        title:"light",
        lang:"css",
        code:`
@utility btn-outline-primary {
    --btn-outline-bg: var(--color-primary-50);
    --btn-outline-color: var(--color-primary-200);
    --btn-outline-text-color: var(--color-primary-800);
    --btn-outline-bg-hover: --alpha(var(--color-primary-100) / 60%);
}

@utility btn-outline-success {
    --btn-outline-bg: var(--color-success-50);
    --btn-outline-color: var(--color-success-200);
    --btn-outline-text-color: var(--color-success-800);
    --btn-outline-bg-hover: --alpha(var(--color-success-100) / 60%);
}

@utility btn-outline-warning {
    --btn-outline-bg: var(--color-warning-50);
    --btn-outline-color: var(--color-warning-200);
    --btn-outline-text-color: var(--color-warning-800);
    --btn-outline-bg-hover: --alpha(var(--color-warning-100) / 60%);
}


@utility btn-outline-danger {
    --btn-outline-bg: var(--color-danger-50);
    --btn-outline-color: var(--color-danger-200);
    --btn-outline-text-color: var(--color-danger-800);
    --btn-outline-bg-hover: --alpha(var(--color-danger-100) / 60%);
}

@utility btn-outline-gray {
    --btn-outline-bg: var(--color-gray-50);
    --btn-outline-color: var(--color-gray-200);
    --btn-outline-text-color: var(--color-gray-800);
    --btn-outline-bg-hover: --alpha(var(--color-gray-100) / 60%);
}`
    },
    "btn-outline-dark":{
        title:"dark",
        lang:"css",
        code:`
@utility btn-outline-primary {
    --btn-outline-color: --alpha(var(--color-primary-500) / 30%);
    --btn-outline-text-color: var(--color-primary-300);
    --btn-outline-bg: --alpha(var(--color-primary-500) / 5%);
    --btn-outline-bg-hover: --alpha(var(--color-primary-500) / 10%);
}

@utility btn-outline-success {
    --btn-outline-color: --alpha(var(--color-success-500) / 30%);
    --btn-outline-text-color: var(--color-success-300);
    --btn-outline-bg: --alpha(var(--color-success-500) / 5%);
    --btn-outline-bg-hover: --alpha(var(--color-success-500) / 10%);
}

@utility btn-outline-warning {
    --btn-outline-color: --alpha(var(--color-warning-500) / 30%);
    --btn-outline-text-color: var(--color-warning-300);
    --btn-outline-bg: --alpha(var(--color-warning-500) / 5%);
    --btn-outline-bg-hover: --alpha(var(--color-warning-500) / 10%);
}

@utility btn-outline-danger {
    --btn-outline-color: --alpha(var(--color-danger-500) / 30%);
    --btn-outline-text-color: var(--color-danger-300);
    --btn-outline-bg: --alpha(var(--color-danger-500) / 5%);
    --btn-outline-bg-hover: --alpha(var(--color-danger-500) / 10%);
}

@utility btn-outline-gray {
    --btn-outline-color: --alpha(var(--color-gray-500) / 30%);
    --btn-outline-text-color: var(--color-gray-300);
    --btn-outline-bg: --alpha(var(--color-gray-500) / 5%);
    --btn-outline-bg-hover: --alpha(var(--color-gray-500) / 15%);
}`
    },
    "btn-outline-both":{
        title:"both",
        lang:"css",
        code:`
@utility btn-outline-primary {
    --btn-outline-bg: var(--color-primary-50);
    --btn-outline-color: var(--color-primary-200);
    --btn-outline-text-color: var(--color-primary-800);
    --btn-outline-bg-hover: --alpha(var(--color-primary-100) / 60%);

    &:is(.dark *) {
        --btn-outline-color: --alpha(var(--color-primary-500) / 30%);
        --btn-outline-text-color: var(--color-primary-300);
        --btn-outline-bg: --alpha(var(--color-primary-500) / 5%);
        --btn-outline-bg-hover: --alpha(var(--color-primary-500) / 10%);
    }
}

@utility btn-outline-success {
    --btn-outline-bg: var(--color-success-50);
    --btn-outline-color: var(--color-success-200);
    --btn-outline-text-color: var(--color-success-800);
    --btn-outline-bg-hover: --alpha(var(--color-success-100) / 60%);

    &:is(.dark *) {
        --btn-outline-color: --alpha(var(--color-success-500) / 30%);
        --btn-outline-text-color: var(--color-success-300);
        --btn-outline-bg: --alpha(var(--color-success-500) / 5%);
        --btn-outline-bg-hover: --alpha(var(--color-success-500) / 10%);
    }
}

@utility btn-outline-warning {
    --btn-outline-bg: var(--color-warning-50);
    --btn-outline-color: var(--color-warning-200);
    --btn-outline-text-color: var(--color-warning-800);
    --btn-outline-bg-hover: --alpha(var(--color-warning-100) / 60%);

    &:is(.dark *) {
        --btn-outline-color: --alpha(var(--color-warning-500) / 30%);
        --btn-outline-text-color: var(--color-warning-300);
        --btn-outline-bg: --alpha(var(--color-warning-500) / 5%);
        --btn-outline-bg-hover: --alpha(var(--color-warning-500) / 10%);
    }
}


@utility btn-outline-danger {
    --btn-outline-bg: var(--color-danger-50);
    --btn-outline-color: var(--color-danger-200);
    --btn-outline-text-color: var(--color-danger-800);
    --btn-outline-bg-hover: --alpha(var(--color-danger-100) / 60%);

    &:is(.dark *) {
        --btn-outline-color: --alpha(var(--color-danger-500) / 30%);
        --btn-outline-text-color: var(--color-danger-300);
        --btn-outline-bg: --alpha(var(--color-danger-500) / 5%);
        --btn-outline-bg-hover: --alpha(var(--color-danger-500) / 10%);
    }
}

@utility btn-outline-gray {
    --btn-outline-bg: var(--color-gray-50);
    --btn-outline-color: var(--color-gray-200);
    --btn-outline-text-color: var(--color-gray-800);
    --btn-outline-bg-hover: --alpha(var(--color-gray-100) / 60%);

    &:is(.dark *) {
        --btn-outline-color: --alpha(var(--color-gray-500) / 30%);
        --btn-outline-text-color: var(--color-gray-300);
        --btn-outline-bg: --alpha(var(--color-gray-500) / 5%);
        --btn-outline-bg-hover: --alpha(var(--color-gray-500) / 15%);
    }
}`
    },
} as const