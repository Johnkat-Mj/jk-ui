import { Icon } from "@/components/jk/icon"


export const SidebarItem = ({ text, icon, href, isActive }: { text: string, icon: string, href: string, isActive?: boolean }) => {
  return (

    <li className="w-full flex">
      <a href={href} data-state={isActive ? 'active' : 'inactive'}
        className="w-full flex items-center text-sm gap-2.5 px-3 py-2 text-muted-foreground hover:bg-card hover:text-foreground-subtitle rounded-lg fx-current:bg-muted/60 fx-active:bg-muted/60 fx-current:text-foreground fx-active:text-foreground"
      >
        <span className="flex min-w-max">
          <Icon name={icon} />
        </span>
        <span className="flex-1 truncate inline md:in-fx-resized:opacity-0 md:transition-opacity ease-linear">{text}</span>
      </a>
    </li>
  )
}
