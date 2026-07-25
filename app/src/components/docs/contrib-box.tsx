import { getContribLinks, startDiscussion } from "@/const"


export const ContribBox = (
    { fileName }: {
        fileName: string;
    }
) => {
    return (
        <div className="mb-2 pt-3 border-t border-border-strong border-dashed">
            <h2 className="text-sm font-semibold hidden lg:flex text-fg-subtitle">Community</h2>
            <nav aria-label="Contribute Links" className="mt-3 flex flex-col">
                <ol className="flex flex-col space-y-2 text-fg-muted text-sm">
                    {
                        getContribLinks(fileName).map((link) => (
                            <li key={`contrib-link-${link.text.trim()}`} className="flex">
                                <a
                                    href={`${link.href}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Link to ${link.text}`}
                                    className="flex items-center gap-x-2 hover:text-fg-title ease-linear duration-200"
                                >
                                    <span className="flex">
                                        <span aria-hidden="true" className={`flex mr-2 ${link.icon}`}></span>
                                        <span className="flex "> {link.text}</span>
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="flex iconify ph--arrow-square-out text-[11px]"
                                    />
                                </a>
                            </li>
                        ))
                    }
                </ol>
            </nav>
        </div>

    )
}
