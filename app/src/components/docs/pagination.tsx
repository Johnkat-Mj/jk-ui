import type { SlugPaginate } from "@/lib/pager";
import { Link } from "@tanstack/react-router";


export const DocsPagination = ({ prevSlug, nextSlug }: {
    prevSlug: SlugPaginate | null;
    nextSlug: SlugPaginate | null;
}) => {
    return (
        <div className="grid">
            <div
                data-pagefind-ignore
                className="flex w-full justify-between gap-4 bg-bg-subtle/70 rounded-lg p-1 ease-linear duration-300 overflow-hidden"
            >
                {
                    prevSlug ? (
                        nextSlug ? (
                            <Link
                                to={prevSlug.slug}
                                className="flex items-center px-5 h-16 text-gray-500 hover:text-fg-title"
                            >
                                <div className="flex items-center gap-x-1 text-sm">
                                    <span aria-hidden="true" className="flex iconify ph--caret-left" />
                                    <span>Prev</span>
                                </div>
                            </Link>
                        ) : (
                            <Link
                                to={prevSlug.slug}
                                className="group flex *:first:pr-4 *:last:pl-4 items-center px-4 h-16 text-fg-subtitle hover:text-fg-title flex-1 rounded-md bg-background divide-x divide-border-strong/40 hover:ring-1 hover:ring-gray-200 dark:hover:ring-gray-800 ease-linear duration-300"
                            >
                                <div className="flex items-center gap-x-1 text-sm pl-3 border-r border-border text-gray-500 group-hover:text-fg-title ease-linear duration-300">
                                    <span aria-hidden="true" className="flex iconify ph--caret-left" />
                                    <span>Prev</span>
                                </div>
                                <div className="flex flex-1 flex-col justify-center text-sm">
                                    <span className="line-clamp-1">{prevSlug.title}</span>
                                    <p className="text-muted-foreground font-light truncate line-clamp-1">
                                        {prevSlug.description.length > 20
                                            ? prevSlug.description.slice(0, 20)
                                            : prevSlug.description}
                                    </p>
                                </div>
                            </Link>
                        )
                    ) : null
                }
                {
                    nextSlug ? (
                        <Link
                            to={nextSlug.slug}
                            className="group flex *:first:pr-4 *:last:pl-4 items-center px-4 h-16 text-foreground hover:text-fg-title flex-1 rounded-md bg-background divide-x divide-border-strong/40 hover:ring-1 hover:ring-gray-200 dark:hover:ring-gray-800 ease-linear duration-300"
                        >
                            <div className="flex flex-1 flex-col justify-center text-sm text-right">
                                <span className="line-clamp-1">{nextSlug.title}</span>
                                <p className="text-muted-foreground ont-light truncate line-clamp-1 text-wrap text-right lg:pl-10">
                                    {nextSlug.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-x-1 text-sm pl-3 border-r border-border text-gray-500 group-hover:text-fg-title ease-linear duration-300">
                                <span>Next</span>
                                <span aria-hidden="true" className="flex iconify ph--caret-right" />
                            </div>
                        </Link>
                    ) : null
                }
            </div>
        </div >

    )
}
