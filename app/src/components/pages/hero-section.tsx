"use client"
import { UiLink } from "@/components/atoms/ui-link"
import { buttonStyles } from "@/components/jk/button"
import { SiteContainer } from "@/components/atoms/site-container"
import { SiteCaret } from "@/components/atoms/site-caret"
import { LinearPattern } from "./linear-pattern"
import { DemoIllustration } from "./demo-illustration"


export const HeroSection = () => {
    return (
        <>
            <section className="relative w-full hmax">
                <div aria-hidden="true" className="absolute inset-x-1.5 sm:inset-x-5 xl:inset-x-0 -bottom-20 -top-20 pointer-events-none">
                    <SiteContainer className="flex justify-between size-full relative">
                        <div className="absolute inset-0 bg-gray50/40 dark:bg-gray9/20 rounded-ui"></div>
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-8 top-14 flex noise-subtle opacity-80 dark:opacity-70"
                        >
                        </div>
                        <LinearPattern className="relative" />
                        <LinearPattern className="relative" />
                        <SiteCaret className="top-8.5 left-[-3.5px]" />
                        <SiteCaret className="top-12.5 left-2.75" />
                        <SiteCaret className="top-8.5 right-[-3.5px]" />
                        <SiteCaret className="top-12.5 right-2.75" />

                        <SiteCaret className="bottom-7 left-[-3.5px]" />
                        <SiteCaret className="bottom-7 right-[-3.5px]" />

                    </SiteContainer>
                </div>
                <SiteContainer className={"pt-20 pb-14 relative z-14"}>
                    <div className="flex flex-col items-center text-center pt-8 max-w-5xl mx-auto px-6 sm:px-16 md:px-20 relative">
                        <UiLink
                            href={"https://flexiwind.unoforge.com/"}
                            aria-label={`URL to flexiwind UI`}
                            className={"relative text-fg-muted dark:text-fg-title/70 w-max bg-bg ring-1 ring-border before:absolute before:inset-0.5 px-2 py-1 rounded-ui before:bg-bg-surface dark:before:bg-bg-muted/80 before:rounded-[7px]"}
                        >
                            <span className="text-sm relative"> Flexiwind v1 is live </span>
                        </UiLink>
                        <h1
                            className="max-w-3xl md:max-w-4xl mt-7 font-semibold text-transparent bg-clip-text bg-linear-to-t from-primary-950 via-fg to-fg-muted dark:from-primary-50 dark:to-fg-title text-4xl sm:text-5xl/tight text-balance"
                        >
                            Modern, Beautifull and Accessible React components
                        </h1>
                        <p className="text-sm md:text-base text-fg mt-8 max-w-md">
                            A Set of modern, accessible UI components built with React aria components and Tailwind CSS.
                        </p>
                        <div className="flex items-center flex-wrap gap-2 mt-10">
                            <UiLink href="/blocks" className={buttonStyles({})}>
                                Browse blocks
                            </UiLink>
                            <UiLink href="/docs/introduction" className={buttonStyles({ variant: "outline" })}>
                                Documentation
                            </UiLink>
                        </div>
                    </div>
                </SiteContainer>
            </section>
            <DemoIllustration />
        </>
    )
}
