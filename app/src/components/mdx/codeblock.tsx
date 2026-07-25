import { cx } from '@/lib/utils'
import type { ReactNode } from 'react'

export const Codeblock = ({ noBorderRadiusTop, children, className, ...rest }: { noBorderRadiusTop?: boolean, children: ReactNode, className?: string, [key: string]: unknown }) => {
    return (
        <>
            <div
                data-code-component
                className={cx(
                    "relative group overflow-hidden max-h-full w-full grid",
                    "border border-gray-800/60 p-(--card-padding) rounded-(--card-radius) ui-card [--card-padding:--spacing(1)] [--card-radius:var(--radius-ui)] bg-gray-800 dark:bg-gray-900/50 text-gray-300",
                    "border border-gray-200 dark:border-gray-800/60 ui-card [--card-padding:--spacing(1)] [--card-radius:var(--global-main-radius)] bg-gray-800 dark:bg-gray-900/50",
                    "my-4 first:mt-0 last:mb-0",
                )}
            >
                <figure
                    role="region"
                    aria-label="codeblock region"
                    className="w-full py-4 flex h-full overflow-auto border border-gray-700 dark:border-gray-800 bg-(--start-code-color-background) inner-radius"
                >
                    <pre className={cx("w-full *:grid inner-radius **:text-(--shiki-dark)", className)} {...rest}>{children}</pre>
                </figure>
            </div>

        </>
    )
}
