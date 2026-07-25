import { Link } from "@tanstack/react-router"
import { SiteLogo } from "../atoms/site-logo"
import { NavItems } from "../molecules/nav-items"
import { UiLink } from "../atoms/ui-link"
import { ToggleTheme } from "../atoms/toggle-theme"
import { OverlayNavbar } from "../atoms/overlay-navbar"
import { SiteSearch } from "../molecules/site-search"

export const SiteNavbar = () => {
    return (
        <>
            <OverlayNavbar />
            <span aria-hidden="true" className="absolute top-8 h-4 inset-x-0 flex pointer-events-none">
                <div className="xl:max-w-380 flex flex-col justify-between h-4 w-full mx-auto">
                    <span className="h-px bg-linear-to-l from-bg-muted/80 to-pattern-fg"></span>
                    <span className="h-px bg-linear-to-r from-bg-muted/80 to-pattern-fg"></span>
                </div>
            </span>
            <header className="px-1.5 max-[350px]:px-2.5 sm:px-4 pt-2 w-full z-45 relative">
                <nav
                    className="sm:max-w-4xl bg-bg shadow-sm border border-border/60 dark:border-border-strong shadow-gray-50 dark:shadow-transparent sm:mx-auto w-full flex justify-between ui-card [--card-padding:--spacing(4)] [--card-radius:var(--radius-ui)]">
                    <div className="flex items-center gap-2 pr-3">
                        <div className="flex lg:hidden pr-2 border-r border-border-strong/70">

                        </div>
                        <Link href="/" className="hidden min-[20rem]:flex gap-2 items-center relative">
                            <SiteLogo />
                        </Link>
                    </div>

                    <NavItems />

                    <div className="flex items-center gap-1.5 w-max">
                        <div className="max-w-20 sm:max-w-40 flex-1 mr-2 flex justify-end">
                            {/* <button data-modal-trigger data-modal-target="page-find-modal"
                                className="btn px-2 h-8 border border-border shadow-sm shadow-bg-muted/20 bg-bg-subtle/60 hover:bg-bg-muted/60 w-full rounded-lg flex justify-between items-center"
                            >
                                <span className="mr-2 iconify ph--magnifying-glass text-xs text-muted-foreground"
                                ></span>
                                <span
                                    className="min-[32rem]:flex-1 min-[32rem]:flex hidden text-muted-foreground text-xs"
                                >Search...</span
                                >
                                <span className="flex items-center text-xs text-muted-foreground ml-1">
                                    <span aria-hidden="true" className="iconify ph--command"></span>
                                    K
                                </span>
                            </button> */}
                            <SiteSearch />
                        </div>
                        <UiLink
                            href="https://github.com/johnkat-mj/jk-ui"
                            className="hidden min-[22rem]:d-flex-place-center size-8 hover:bg-bg-muted rounded-lg text-foreground hover:text-fg-title"
                        >
                            <span className="iconify ph--github-logo"></span>
                        </UiLink>
                        <UiLink
                            href="https://x.com/johnkat_Mj"
                            className="hidden min-[22rem]:d-flex-place-center size-8 hover:bg-bg-muted rounded-lg text-foreground hover:text-fg-title"
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
