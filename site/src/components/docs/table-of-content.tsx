
import type { GroupedHeading } from '@/lib'


export const TableOfContent = ({ toc }: { toc: GroupedHeading[] }) => {


    return (
        <>

            <nav
                id="table-of-contents"
                aria-label="Table Of Contents"
                className="ml-1 pt-3 text-fg-muted w-full text-sm xl:pt-0 border-l border-border-strong border-dashed"
            >
                <ol className="space-y-2">

                    {toc.map((h) => <li key={h.slug} className="flex flex-col ml-4">
                        <a
                            href={`${h.slug}`}
                            className="text-fg-muted hover:text-fg-title ease-linear duration-200"
                        >
                            {h.text}
                        </a>
                        {h.subheadings.length > 0 ? (
                            <ol className="pl-4 space-y-2 pt-2">
                                {h.subheadings.map((sub) => (
                                    <li key={sub.slug}>
                                        <a
                                            href={`${sub.slug}`}
                                            className="d-flex-items-center gap-x-1 text-fg-muted hover:text-fg-title ease-linear duration-200"
                                        >
                                            {sub.text}
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        ) : null}
                    </li>)}
                </ol>
            </nav>

        </>
    )
}
