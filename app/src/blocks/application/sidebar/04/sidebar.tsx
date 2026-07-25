import { SidebarBase, SidebarOverlayElement } from '@/components/jk/sidebar'
import { SidebarItem } from './sidebar-item';


export const CounterInbox = () => {
    return (
        <span className="bg-destructive text-white text-xs px-1 py-px rounded-lg">
            10
        </span>
    )
}


export const items = [
    {
        id: "01",
        href: "/#",
        text: "Dashboard",
        icon: "ph--squares-four",
        isActive: true,
    },
    {
        id: "02",
        href: "/#",
        text: "Inbox",
        icon: "ph--envelope-open",
        badge: CounterInbox,
    },
    {
        id: "03",
        href: "/#",
        text: "Courses",
        icon: "ph--book-open",
    },
    {
        id: "04",
        href: "/#",
        text: "Quizzes",
        icon: "ph--seal-question",
    },
    {
        id: "05",
        href: "/#",
        text: "Assignments",
        icon: "ph--notebook",
    },
    {
        id: "06",
        href: "/#",
        text: "Announcement",
        icon: "ph--megaphone",
    },
    {
        id: "07",
        href: "/#",
        text: "Students",
        icon: "ph--users",
    }
];


export const Sidebar = () => {
    return (
        <>
            <SidebarOverlayElement className="md:hidden fx-open:visible fx-open:opacity-100 opacity-0 invisible" />
            <SidebarBase className="w-64 h-screen fixed border-r border-border bg-background lg:translate-x-0 left-0 -translate-x-full fx-open:translate-x-0 transform transition-transform ease-linear lg:transition-none z-50">
                <div className="flex items-center gap-2 pt-6 px-6">
                    <span className="size-8 d-flex-place-center ring-1 bg-primary ring-primary-800 dark:ring-primary-400 rounded-lg">
                        <svg
                            width={15}
                            height={15}
                            aria-label="icon app"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.63491 9.53674e-07V14.5455H-3.3319e-05V9.53674e-07H2.63491ZM7.94563 8.15341V14.5455H5.37461V3.63636H7.832V5.49006H7.95984C8.21079 4.87926 8.61088 4.39394 9.16012 4.03409C9.7141 3.67424 10.3983 3.49432 11.2127 3.49432C11.9655 3.49432 12.6213 3.6553 13.18 3.97727C13.7435 4.29924 14.1791 4.76563 14.4868 5.37642C14.7993 5.98722 14.9532 6.72822 14.9485 7.59943V14.5455H12.3775V7.99716C12.3775 7.26799 12.1881 6.69744 11.8093 6.28551C11.4352 5.87358 10.9168 5.66761 10.2539 5.66761C9.80406 5.66761 9.40397 5.76705 9.05359 5.96591C8.70795 6.16004 8.43569 6.44176 8.23683 6.81108C8.0427 7.1804 7.94563 7.62784 7.94563 8.15341Z"
                                fill="white"
                            />
                        </svg>
                    </span>
                    <span className="font-semibold text-foreground text-lg">
                        Intouch
                    </span>
                </div>
                <ul className="flex flex-col space-y-1.5 pt-10.5 px-3.25 text-foreground">
                    {items.map((item) => (
                        <SidebarItem key={item.id} {...item} />
                    ))}
                </ul>
            </SidebarBase>
        </>
    )
}
