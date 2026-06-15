

import { Link } from 'react-aria-components'
import { ToggleDocsSidebar } from '../atoms/toggle-docs-sidebar'
import { ToggleTheme } from '../atoms/toggle-theme'
import { UiLink } from '../atoms/ui-link'
import { SiteLogo } from '../atoms/site-logo'
import { SiteSearch } from '../molecules/site-search'

export const DocsNavbar = () => {
    return (
        <>
            <header data-pagefind-ignore
                className="h-14 sticky border-b border-border top-0 bg-bg/80 backdrop-blur-lg saturate-150 z-40"
            >
                <nav
                    className="docs-container px-4 sm:px-8 flex justify-between h-full items-center"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex lg:hidden -ml-1.5">
                            <ToggleDocsSidebar />
                        </div>
                        <Link href="/" className="hidden min-[34rem]:flex gap-2 items-center relative">
                            <SiteLogo />
                        </Link>
                    </div>
                    <div className="flex items-center gap-px">
                        <div className="max-w-20 sm:max-w-40 flex-1 mr-2 flex justify-end">
                            <SiteSearch />
                        </div>
                        <UiLink
                            href="https://github.com/johnkat-mj/jk-ui"
                            className="hidden min-[22rem]:d-flex-place-center size-8 hover:bg-bg-muted rounded-lg text-fg hover:text-fg-title"
                        >
                            <span className="iconify ph--github-logo"></span>
                        </UiLink>
                        <UiLink
                            href="https://x.com/johnkat_Mj"
                            className="hidden min-[22rem]:d-flex-place-center size-8 hover:bg-bg-muted rounded-lg text-fg hover:text-fg-title"
                        >
                            <span className="iconify ph--x-logo"></span>
                        </UiLink>
                        <ToggleTheme />
                    </div>
                </nav>
            </header>
        </>
    )
}
