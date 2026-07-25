import { cx } from "@/lib/utils"
import { DocResLink } from "../atoms/doc-res-link"

export const DocsPageHeader = ({ breadcrumbsMain, breadcrumbsWords: words, title, subTitle: description, links }: {
    breadcrumbsMain: { href: string; text: string };
    breadcrumbsWords: string[];
    title: string;
    subTitle?: string;
    links: Record<string, string>[] | undefined;
}) => {
    return (
        <>
            <header className="pt-8 xl:pt-10 pb-5 border-b border-border space-y-2.5">
                <ol
                    className=    "pb-3 flex items-center gap-2.5 whitespace-nowrap text-foreground text-sm capitalize"
                >
                    <li>
                        <a
                            aria-label="Go to Docs Index page"
                            href={breadcrumbsMain.href}
                            className="flex items-center  gap-1"
                        >
                            {breadcrumbsMain.text}
                            <span aria-hidden="true" className="flex iconify ph--caret-right"></span>
                        </a>
                    </li>
                    {
                        words.map((word, index) => (
                            <li key={`a-new-${index}`}
                                className={cx(
                                    {
                                        "truncate text-muted-foreground":
                                            index === words.length - 1,
                                        "flex items-center gap-1": index < words.length - 1,
                                    },
                                )}
                            >
                                <span className="flex">{word}</span>
                                {index === words.length - 1 ? null : (
                                    <span aria-hidden="true" className="flex iconify ph--caret-right" />
                                )}
                            </li>
                        ))
                    }
                </ol>
                <h1 className="text-2xl font-semibold text-fg-title">
                    {title}
                </h1>
                <p className="text-foreground">
                    {description}
                </p>
                {
                    links ? (
                        <div className="flex items-center flex-wrap gap-2">
                            {links.map((link) =>
                                Object.entries(link).map(([key, value]) => (
                                    <DocResLink key={`doc-res-${value.trim()}`} href={value} text={key} />
                                )),
                            )}
                        </div>
                    ) : null
                }
            </header>

        </>
    )
}
