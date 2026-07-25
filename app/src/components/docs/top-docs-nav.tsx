
export const TopDocsNav = ({ hideTableOfContent }: { hideTableOfContent?: boolean }) => {
    return (
        <>
            {
                hideTableOfContent ? null : (
                    <div
                        className={`h-12 top-14 sticky ${hideTableOfContent ? "hidden" : "flex xl:hidden"} z-80 lg:pl-8 border-b border-border`}
                    >
                        <span
                            aria-hidden="true"
                            className="flex absolute inset-0 bg-bg/70 backdrop-blur-sm py-1"
                        />
                        <div className="relative h-full w-full flex justify-end items-center px-4 sm:px-8 lg:px-0">
                            <button
                                data-trigger-tab-content
                                aria-expanded="false"
                                aria-label="show table of content"
                                className="text-foreground border border-border rounded-lg py-1.5 px-2 flex items-center gap-x-1 text-sm hover:bg-muted ease-linear group"
                            >
                                On this page
                                <span
                                    aria-hidden="true"
                                    className="iconify ph--caret-down flex ease-linear duration-200 group-[aria-expanded=true]:rotate-180"
                                />
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}
