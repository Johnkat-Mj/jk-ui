import { Link } from "../jk/link";


export const FooterItem = ({ href, text }: { href: string, text: string }) => {

    const isInternal = href.startsWith("/") || href.startsWith("#")
    return (
        <li>
            <Link href={href} aria-label="Link to {{ $text }}"
                className="ease-linear duration-200 transition-colors hover:text-fg-title group flex items-center">
                {text}
                {
                    !isInternal ?
                        <span aria-hidden="true" className="iconify ph--arrow-up-right size-3 ml-2 scale-90 group-hover:ml-3 group-hover:scale-100 ease-linear duration-200"></span> : null
                }
            </Link>
        </li>
    )
}
