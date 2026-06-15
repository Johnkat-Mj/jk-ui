
export const SidebarItem = ({ text, icon, href, isActive }: { text: string, icon: string, href: string, isActive?: boolean }) => {
    return (
        <li
            className="flex w-full">
            <a href={href} data-state={isActive ? 'active' : null} aria-label={`Link to ${text}`}
                className="flex items-center gap-3 px-3 h-9 w-full fx-active:bg-bg-muted/60 fx-active:text-fg-title text-fg-muted hover:bg-bg-muted/50 rounded-ui text-sm">
                <span className={`flex min-w-4 iconify size-4 opacity-80 ${icon}`}></span>
                <span className="flex-1 ease-linear duration-300 md:in-fx-resized:opacity-0 md:in-fx-resized:invisible line-clamp-1">{text}</span>
            </a>
        </li>
    )
}
