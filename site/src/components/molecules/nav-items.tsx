"use client"
import { useGlobalContext } from '@/providers/global-provider'
import Link from 'next/link'

interface NavItem {
    text: string
    href: string
    onlyMobile?: boolean
}

const navItems: NavItem[] = [
    {
        text: 'Home',
        href: '/',
        onlyMobile: true,
    },
    {
        text: 'Docs',
        href: '/docs/introduction',
    },
    {
        text: 'Components',
        href: '/components/',
    },
    {
        text: 'Blocks',
        href: '/blocks',
    },
    {
        text: 'Templates',
        href: '/templates',
    }
]

export const NavItems = () => {
    const { openNavbar, isOpenNavbar } = useGlobalContext()
    return (
        <div data-state={isOpenNavbar ? 'open' : 'closed'}
            className="flex lg:flex-1 lg:px-4
        fixed w-full lg:w-auto left-0 top-16 lg:top-0 px-1 sm:px-2
        invisible fx-open:visible opacity-0 fx-open:opacity-100 lg:opacity-100 lg:visible scale-90 fx-open:scale-100 lg:scale-100 lg:relative ease-linear duration-200 transition-all lg:transition-none origin-top
        ">
            <ul className="w-full flex flex-col lg:flex-row lg:items-center gap-0.5 text-fg-muted bg-bg lg:bg-transparent rounded-ui p-2 lg:p-0 border border-border dark:border-border-strong lg:border-none">
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`relative group ${item.onlyMobile ? 'md:hidden' : ''}`}
                    >
                        <Link
                            href={item.href}
                            className="flex items-center text-sm hover:text-fg-title ease-linear duration-200 py-1.5 px-2.5 rounded-ui hover:bg-bg-muted/50"
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}