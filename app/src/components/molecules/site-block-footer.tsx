import { FooterItem } from "../atoms/footer-item"


export const SiteBlockFooter = ({ title, items }: { title: string, items: { text: string, id: string, href: string }[] }) => {
    return (
        <nav className="flex flex-col">
            <h3 className="mb-5 text-sm text-fg-title font-medium">
                {title}
            </h3>
            <ul className="flex flex-col space-y-2 text-sm text-muted-foreground">
                {
                    items.map(item => <FooterItem key={item.id} {...item} />)
                }
            </ul>
        </nav>
    )
}
