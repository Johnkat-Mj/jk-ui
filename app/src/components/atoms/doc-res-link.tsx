
import { isInternalLink } from '@/lib';
import { UiLink } from './ui-link'

export const DocResLink = (
    { text, href }: {
        href: string,
        text: string
    }
) => {

    return (
        <UiLink href={href} className="btn btn-xs bg-bg-subtle border border-border-strong/40 hover:border-gray-400 dark:hover:border-gray-600 text-fg gap-x-1 rounded-lg">
            {text}
            {
                isInternalLink(href) ? null : (
                    <span aria-hidden="true" className="flex iconify ph--arrow-square-out text-xs" />
                )
            }
        </UiLink>
    )
}
