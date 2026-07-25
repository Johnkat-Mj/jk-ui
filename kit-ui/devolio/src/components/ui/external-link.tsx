import { Link } from "@/components/jk/link"

interface ExternalLinkProps {
    href: string
    className?: string
    children?: React.ReactNode
}

export const ExternalLink = ({ href, className, children }: ExternalLinkProps) => {
    return (
        <Link
            href={href}
            className={className}
        >
            {children}
        </Link>
    )
}
