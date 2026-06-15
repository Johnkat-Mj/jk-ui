"use client"

import type { ReactNode } from "react"
import { TopDocsNav } from "./top-docs-nav"
import { DocsPageHeader } from "./docs-page-header"
import { UiLink } from "../atoms/ui-link"
import { DocsPagination } from "./pagination"
import { repoContentLocation } from "@/const"
import type { SlugPaginate } from "@/lib/pager"
import { BoxTableOfContent } from "./box-table-of-content"
import type { GroupedHeading } from "@/lib"
import { cx } from "@/lib/utils"


export const DocsWrapper = ({ hideTableOfContent = false, nextSlug, prevSlug,
    title, description, links, words, filePath, toc,
    children }: {
        hideTableOfContent?: boolean, children: ReactNode, nextSlug: SlugPaginate | null, prevSlug: SlugPaginate | null, title: string, description: string, links: Record<string, string>[] | undefined, words: string[], filePath: string,
        toc?: GroupedHeading[]
    }) => {
    return (
        <>
            <TopDocsNav hideTableOfContent={hideTableOfContent} />
            <main className={cx(
                "grid",
                {
                    "xl:grid-cols-[1fr_15rem]": !hideTableOfContent
                }
            )}>
                <article className=" px-4 sm:px-8 xl:px-16 grid text-fg w-full relative">
                    <div className="absolute bottom-0 top-1 sm:top-2 inset-x-1 sm:inset-x-2 border border-b-0 border-border bg-bg dark:bg-gray-900/10 rounded-t-2xl"></div>
                    <div className={cx(
                        "relative w-full  mx-auto mb-13",
                        {
                            "xl:max-w-4xl":hideTableOfContent,
                            "xl:max-w-2xl":!hideTableOfContent
                        }
                    )}>
                        <DocsPageHeader
                            title={title}
                            subTitle={description}
                            links={links}
                            breadcrumbsMain={{ href: "/components", text: "Components" }}
                            breadcrumbsWords={words}
                        />
                        <div data-doc-content className="py-10 w-full">
                            {children}
                        </div>
                        <div>
                            <UiLink
                                href={`${repoContentLocation}/${filePath}`}
                                aria-label="edit this page on github"
                                className="w-max flex items-center gap-x-2 underline underline-dashed underline-offset-3 hover:text-fg-title"
                            >
                                <span aria-hidden="true" className="flex iconify ph--pencil-simple-line"
                                ></span>
                                Edit this page
                            </UiLink>
                        </div>

                        <div className="flex w-full hpx my-8 border-b border-border"></div>
                        <DocsPagination nextSlug={nextSlug} prevSlug={prevSlug} />
                    </div>
                </article>

                {
                    toc ? <BoxTableOfContent
                        toc={toc}
                        fileName={filePath}
                    /> : null
                }
            </main>
        </>
    )
}


