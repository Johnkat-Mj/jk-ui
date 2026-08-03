import { SiteContainer } from "../atoms/site-container"
import { SupportUsLink } from "../atoms/support-us-link"
import { Link } from "../jk/link"


export const SiteCta = () => {
    return (
        <section>
            <SiteContainer className="border-x border-border-strong/70 pt-14 border-dashed border-t relative">
                <div className="mx-auto w-full lg:max-w-300 relative py-10 lg:py-16 px-4">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex noise-subtle opacity-60 dark:opacity-50">
                    </div>
                    <div className="px-3.5 sm:px-8 md:px-16 lg:px-8 xl:px-0 mx-auto w-full max-w-3xl lg:max-w-5xl flex flex-col items-center text-center">
                        <h2
                            className="font-bold text-3xl md:text-4xl/tight max-w-2xl text-balance text-transparent bg-clip-text bg-linear-to-br from-fg-title to-fg-muted/60 dark:via-foreground">
                            Stop rebuilding UI. Start shipping beautiful apps faster.
                        </h2>
                        <p className="text-muted-foreground max-w-md text-sm mt-6.5">
                            Prebuilt React components and blocks designed for speed, structure, and complete code ownership.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-9 ">
                            <Link href="/blocks" asButton size="sm" className="sm:btn-md">
                                <span aria-hidden="true" className="iconify ph--cube-duotone opacity-80 mr-2 size-3.5"></span>
                                Browse blocks
                            </Link>
                            <SupportUsLink />
                        </div>
                    </div>

                </div>
                <div className="h-4 linear-gradient-pattern border-y border-dashed border-border-strong/70 mt-14"></div>
            </SiteContainer>
        </section>
    )
}
