import type { UiCardProps } from '@/types'
import { LinkCard } from './link-card'


export const LinksGrid = ({ links }: { links: UiCardProps[] }) => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 mt-6 first:mt-0 last:mb-0">
            {links.map((link, index) => <LinkCard key={`link-card-${link.title.trim()}-${index}`} {...link} />)}
        </div>
    )
}
