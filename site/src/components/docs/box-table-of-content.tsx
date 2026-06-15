
import { TableOfContent } from './table-of-content'
import { ContribBox } from './contrib-box'
import type { GroupedHeading } from '@/lib'


export const BoxTableOfContent = ({ toc, fileName }: { toc: GroupedHeading[], fileName: string }) => {
    return (
        <>
            <div
                data-pagefind-ignore
                data-table-of-content
                className="box-tab-content tab-content-ui-bg xl:bg-transparent xl:z-auto tab-content-ui-states tab-content-ui flex overflow-hidden"
            >
                <div className="w-full p-4 flex flex-col flex-1 overflow-y-auto">
                    <div className="gap-y-8 flex flex-col min-h-full w-full">
                        <div className="flex flex-col space-y-3">
                            <span className="text-fg-muted flex items-center">
                                <span className="iconify ph--book-open text-xs mr-2"></span>
                                On this page
                            </span>
                            <div>
                                <TableOfContent toc={toc} />
                            </div>
                        </div>
                        <ContribBox fileName={fileName} />
                    </div>
                </div>
            </div>

        </>
    )
}
