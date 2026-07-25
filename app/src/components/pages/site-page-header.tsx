import { LinearPattern } from "./linear-pattern"
import { SiteCaret } from "@/components/atoms/site-caret"
import { SiteContainer } from "@/components/atoms/site-container";


export const SitePageHeader = ({ tagline, title, description }: { tagline: string; title: string; description: string }) => {
    return (
        <section className="relative">
            <span aria-hidden="true" className="absolute bottom-0 h-px inset-x-0 flex pointer-events-none">
                <div className="xl:max-w-380 flex flex-col justify-between h-px w-full mx-auto">
                    <span className="h-px bg-linear-to-l from-border-strong to-border/70"></span>
                </div>
            </span>
            <div aria-hidden="true" className="absolute inset-0 -top-20 pointer-events-none">
                <SiteContainer className="flex justify-between size-full max-w-300 mx-auto relative">
                    <div aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 top-14 flex noise-subtle opacity-60 dark:opacity-50"></div>
                    <LinearPattern className="relative" />
                    <LinearPattern className="relative" />
                    <SiteCaret className="top-8.5 left-[-3.5px] " />
                    <SiteCaret className="top-12.5 left-2.75 " />
                    <SiteCaret className="top-8.5 right-[-3.5px] " />
                    <SiteCaret className="top-12.5 right-2.75 " />
                </SiteContainer>
            </div>
            <div
                className="pt-14 pb-20 md:pb-28 px-3.5 sm:px-8 md:px-16 lg:px-8 xl:px-0 mx-auto w-full max-w-3xl lg:max-w-5xl flex flex-col items-center text-center relative">
                <span className="relative text-fg-muted dark:text-fg-title/70 w-max bg-bg ring-1 ring-border before:absolute before:inset-0.5 px-2 py-1 rounded-ui before:bg-bg-surface dark:before:bg-bg-muted/80 before:rounded-[7px]">
                    <span className="text-sm relative">
                        {tagline}
                    </span>
                </span>
                <h2
                    className="font-bold text-3xl md:text-4xl/tight lg:text-5xl/[1.1] max-w-2xl text-balance text-transparent bg-clip-text bg-linear-to-br from-fg-title to-fg-muted/60 dark:via-fg mt-4">
                    {title}
                </h2>
                <p className="text-fg-muted max-w-md text-sm mt-6.5">
                    {description}
                </p>
            </div>
        </section>
    )
}