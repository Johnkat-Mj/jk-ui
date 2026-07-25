import { SidebarItem } from "./sidebar-item"


export const SidebarNavGroup = ({ title, items }: { title: string, items: { id: string, href: string, text: string, icon: string, isActive?: boolean }[] }) => {
    return (
        <div className="mt-6 first:mt-1">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider ease-linear duration-300 md:in-fx-resized:hidden line-clamp-1">
                {title}
            </div>
            <ul className="flex flex-col mt-1.5 space-y-0.5 w-full">
                {
                    items.map(item => <SidebarItem key={`item-${item.id}`} {...item} />)
                }
            </ul>
        </div>
    )
}
