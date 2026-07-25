import { Link } from '../jk/link'


export const Reference = ({ href, title, description }: { href: string, title: string, description: string }) => {
    return (
        <Link href={href} className='ring ring-border/50 rounded-ui p-2.5 bg-bg-surface ease-linear duration-200 hover:bg-bg-muted/50'>
            <span className="font-semibold text-sm text-fg-title">
                {title}
            </span>
            <p className="mt-1 text-xs sm:text-sm text-fg-muted">
                {description}
            </p>
        </Link>
    )
}
