import { UiLink } from "../atoms/ui-link";
import { SocialLinks } from "../molecules/social-links";


const links = [
    {
        text: "Demo",
        href: "https:",
    },
    {
        text: "Blocks",
        href: "#",
    },
    {
        text: "Templates",
        href: "#",
    },
    {
        text: "Club",
        href: "#",
    },
];
export const DocsFooter = () => {
    return (
        <>
            <footer className="px-4 sm:px-8 xl:px-16 mt-1 border-t border-border pt-16">
                <div className="px-4 py-6 sm:px-6 pt4 flex flex-col gap-5 bg-gray-50/60 dark:bg-gray-900/30 border border-border">
                    <div
                        className="w-full flex flex-col md:flex-row gap-6 md:justify-between items-center text-sm"
                    >
                        <div className="text-sm text-foreground">
                            Published under <UiLink
                                href="https://github.com/johnkat-mj/jk-ui"
                                aria-label="MIT License"
                                className={"text-muted-foreground"}>MIT License</UiLink>
                        </div>
                        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            {
                                links.map((link) => (
                                    <UiLink key={`footer-link-${link.text.trim()}`}
                                        aria-label={`Link to ${link.text}`}
                                        href={link.href}
                                        className={"text-muted-foreground hover:text-fg-title flex items-center gap-x-0.5"}
                                    >
                                        {link.text}
                                        {link.href.startsWith("/") || link.href.startsWith("#") ? null : (
                                            <span
                                                aria-hidden="true"
                                                className="flex iconify ph--arrow-up-right text-xs"
                                            />
                                        )}
                                    </UiLink>
                                ))
                            }
                        </ul>
                        <div className="flex">
                            <SocialLinks />
                        </div>
                    </div>
                    <div
                        className="text-sm border-t border-border bg-bg-subtle px-4 py-2 rounded-lg text-muted-foreground text-center"
                    >
                      Copyright © jk-ui {new Date().getFullYear()}. Designed By <UiLink
                            href="#linkUnifyDev"
                            className={"underline underline-offset-2 text-fg-title"}
                        >Johnkat MJ
                        </UiLink>.
                    </div>
                </div>
            </footer>
        </>
    )
}
