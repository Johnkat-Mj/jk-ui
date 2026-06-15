"use client"

import type { HighlightResult } from "@/lib/shiki"
import { TabPanel } from "../jk/tabs"


export const CodeLoadPanels = ({ data }: { data: HighlightResult[] }) => {
    return (
        <>
            {
                data.map(item => <TabPanel key={item.key} className={`relative group border 
                border-gray-700 dark:border-gray-800 
                bg-(--start-code-color-background) inner-radius grid  overflow-auto h-auto max-h-140`} id={item.key}>
                    <>
                            <figure className="h-max w-full bg-(--start-code-color-background) "
                                dangerouslySetInnerHTML={{ __html: item.html }}
                                data-code-snippet
                            />
                        </>
                </TabPanel>)
            }
        </>
    )
}
