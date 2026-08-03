import { Link } from "../jk/link"
import { SiteLogo } from "../atoms/site-logo"
import { footerItems } from "@/data/footer-items"
import { SiteBlockFooter } from "../molecules/site-block-footer"
import { SiteCaret } from "../atoms/site-caret"
import { SiteContainer } from "../atoms/site-container"


export const SiteFooter = () => {
    return (

        <footer className="mt-auto">
            <SiteContainer className="mx-auto w-full relative pt-20 border-dashed">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                    <div className="flex justify-between size-full w-full relative">
                        <div className="relative h-full w-4 border-x border-pattern-fg/70 linear-gradient-pattern"></div>
                        <div className="relative h-full w-4 border-x border-pattern-fg/70 linear-gradient-pattern"></div>
                        <SiteCaret
                            className="-top-1 left-[-3.5px]"/>
                        <SiteCaret
                            className="-top-1 left-2.75"/>
                        <SiteCaret
                            className="-top-1 right-2.75"/>
                        <SiteCaret
                            className="-top-1 right-[-3.5px]"/>
                    </div>
                </div>
                <div
                    className="pb-10 px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 lg:gap-x-10 gap-y-8">
                    <div className="col-span-2 md:col-span-1 lg:col-span-2">
                        <div className="flex">
                            <Link href="/" aria-label="Link to home page" className="flex">
                                <SiteLogo />
                            </Link>
                        </div>
                        <div className="flex flex-col mt-8">
                            <p className="text-sm max-w-xs text-muted-foreground">
                                Composable jk-ui blocks for modern developers.
                                Built for speed. Designed for control.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <Link href="https://github.com/johnkat-mj/jk-ui"
                                    className="flex items-center px-2 h-6.5 rounded-ui ring ring-border-strong/70 text-sm text-muted-foreground hover:text-fg-title hover:bg-bg-surface">
                                    <span aria-hidden="true" className="iconify ph--github-logo"/>
                                    <span>
                                        Github
                                    </span>
                                </Link>
                                <Link href="https://x.com/johnkat_Mj"
                                    className="flex items-center px-2 h-6.5 rounded-ui ring ring-border-strong/70 text-sm text-muted-foreground hover:text-fg-title hover:bg-bg-surface">
                                    <span aria-hidden="true" className="iconify ph--x-logo"/>
                                    <span>
                                        Follow us
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {
                        footerItems.map(footerGroup => <SiteBlockFooter key={footerGroup.id} {...footerGroup} />)
                    }
                </div>
                <div className="col-span-full text-muted-foreground text-sm px-4 sm:px-6 lg:px-8 pb-3">
                    <div className="text-sm border border-border bg-bg-surface/50 px-4 py-2 rounded-ui text-center">
                        © jk-ui {new Date().getFullYear()}.
                        Designed by <Link href="https://x.com/johnkat_Mj" aria-label="Link to https://x.com/johnkat_Mj"
                            underlined>Johnkat MJ</Link>.
                    </div>
                </div>
            </SiteContainer>
        </footer>
    )
}
