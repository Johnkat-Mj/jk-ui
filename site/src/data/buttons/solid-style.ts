const btnSolid = `
@utility btn-solid-primary {
    --btn-solid-top-shadow: var(--color-primary-500);
    --btn-solid-bottom-shadow: var(--color-primary-700);
    --btn-solid-top-shadow-hover: var(--color-primary-600);
    --btn-solid-bottom-shadow-hover: var(--color-primary-800);
    --btn-solid-color: var(--color-primary-600);
    --btn-solid-color-hover: var(--color-primary-700);
    --btn-solid-color-press: var(--color-primary-800);
}

@utility btn-solid-secondary {
    --btn-solid-top-shadow: var(--color-secondary-500);
    --btn-solid-bottom-shadow: var(--color-secondary-700);
    --btn-solid-top-shadow-hover: var(--color-secondary-600);
    --btn-solid-bottom-shadow-hover: var(--color-secondary-800);
    --btn-solid-color: var(--color-secondary-600);
    --btn-solid-color-hover: var(--color-secondary-700);
    --btn-solid-color-press: var(--color-secondary-800);
}

@utility btn-solid-accent {
    --btn-solid-top-shadow: var(--color-accent-500);
    --btn-solid-bottom-shadow: var(--color-accent-700);
    --btn-solid-top-shadow-hover: var(--color-accent-600);
    --btn-solid-bottom-shadow-hover: var(--color-accent-800);
    --btn-solid-color: var(--color-accent-600);
    --btn-solid-color-hover: var(--color-accent-700);
    --btn-solid-color-press: var(--color-accent-800);
}

@utility btn-solid-danger {
    --btn-solid-top-shadow: var(--color-danger-500);
    --btn-solid-bottom-shadow: var(--color-danger-700);
    --btn-solid-top-shadow-hover: var(--color-danger-600);
    --btn-solid-bottom-shadow-hover: var(--color-danger-800);
    --btn-solid-color: var(--color-danger-600);
    --btn-solid-color-hover: var(--color-danger-700);
    --btn-solid-color-press: var(--color-danger-800);
}

@utility btn-solid-warning {
    --btn-solid-top-shadow: var(--color-warning-500);
    --btn-solid-bottom-shadow: var(--color-warning-700);
    --btn-solid-top-shadow-hover: var(--color-warning-600);
    --btn-solid-bottom-shadow-hover: var(--color-warning-800);
    --btn-solid-color: var(--color-warning-600);
    --btn-solid-color-hover: var(--color-warning-700);
    --btn-solid-color-press: var(--color-warning-800);
}

@utility btn-solid-info {
    --btn-solid-top-shadow: var(--color-info-500);
    --btn-solid-bottom-shadow: var(--color-info-700);
    --btn-solid-top-shadow-hover: var(--color-info-600);
    --btn-solid-bottom-shadow-hover: var(--color-info-800);
    --btn-solid-color: var(--color-info-600);
    --btn-solid-color-hover: var(--color-info-700);
    --btn-solid-color-press: var(--color-info-800);
}

@utility btn-solid-success {
    --btn-solid-top-shadow: var(--color-success-500);
    --btn-solid-bottom-shadow: var(--color-success-700);
    --btn-solid-top-shadow-hover: var(--color-success-600);
    --btn-solid-bottom-shadow-hover: var(--color-success-800);
    --btn-solid-color: var(--color-success-600);
    --btn-solid-color-hover: var(--color-success-700);
    --btn-solid-color-press: var(--color-success-800);
}`

export const btnSolidStyle = {
    "btn-solid-light":{
        title:"light",
        lang:"css",
        code:`${btnSolid}

@utility btn-solid-neutral {
    --btn-solid-top-shadow: var(--color-gray-800);
    --btn-solid-bottom-shadow: var(--color-gray-700);
    --btn-solid-top-shadow-hover: var(--color-gray-800);
    --btn-solid-bottom-shadow-hover: var(--color-gray-900);
    --btn-solid-color: var(--color-gray-900);
    --btn-solid-color-hover: var(--color-gray-950);
    --btn-solid-color-press: var(--color-gray-900);
}`
    },
    "btn-solid-dark":{
        title:"dark",
        lang:"css",
        code:`${btnSolid}

@utility btn-solid-neutral {
    --btn-solid-top-shadow: var(--color-gray-200);
    --btn-solid-bottom-shadow: var(--color-gray-100);
    --btn-solid-top-shadow-hover: var(--color-gray-300);
    --btn-solid-bottom-shadow-hover: var(--color-gray-200);
    --btn-solid-color: var(--color-gray-100);
    --btn-solid-color-hover: var(--color-white);
    --btn-solid-color-press: var(--color-gray-200);
}`
    },
    "btn-solid-both":{
        title:"both",
        lang:"css",
        code:`${btnSolid}

@utility btn-solid-neutral {
    --btn-solid-top-shadow: var(--color-gray-800);
    --btn-solid-bottom-shadow: var(--color-gray-700);
    --btn-solid-top-shadow-hover: var(--color-gray-800);
    --btn-solid-bottom-shadow-hover: var(--color-gray-900);
    --btn-solid-color: var(--color-gray-900);
    --btn-solid-color-hover: var(--color-gray-950);
    --btn-solid-color-press: var(--color-gray-900);

    &:is(.dark *) {
        --btn-solid-top-shadow: var(--color-gray-200);
        --btn-solid-bottom-shadow: var(--color-gray-100);
        --btn-solid-top-shadow-hover: var(--color-gray-300);
        --btn-solid-bottom-shadow-hover: var(--color-gray-200);
        --btn-solid-color: var(--color-gray-100);
        --btn-solid-color-hover: var(--color-white);
        --btn-solid-color-press: var(--color-gray-200);
    }
}`
    },
} as const