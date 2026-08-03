"use client"

import { DocsTab } from "./docs-tab"
import { TabPanel } from "../jk/tabs";
import { type ReactNode, useId } from "react";
import { cx } from "@/lib/utils";



export const PreviewerCodeUI = ({ noInTabs, component, codeblock, isFrame = false }: { noInTabs?: boolean, component: ReactNode, codeblock: ReactNode, isFrame?: boolean }) => {
    const id = useId();
    
    if (noInTabs) {
        return <>
            <div
                className="grid w-full gap-1 border border-gray-200 dark:border-gray-800/60 ui-card [--card-padding:--spacing(1)] [--card-radius:var(--radius-ui)] bg-gray-50 dark:bg-gray-900/50 my-5 first:mt-0">
                <div data-gen-ignore
                    className={
                        cx("inner-radius  bg-background shadow border border-gray-200 dark:border-gray-800/60 flex justify-center min-h-max",
                            {
                                "p-4 md:p-10": !isFrame
                            }
                        )
                    }>
                    {component}
                </div>
                {codeblock}
            </div>
        </>
    }

    return <>


        <DocsTab values={[
            { 'text': 'Preview', 'icon': 'ph--eye', 'value': `Preview-${id}` },
            { 'text': 'Code', 'icon': 'ph--code', 'value': `Code-${id}` },
        ]}
            triggersClass="px-3 cursor-pointer py-1 rounded-(--global-main-radius) fx-selected:bg-white dark:fx-selected:bg-gray-800 border border-transparent fx-selected:border-gray-200 dark:fx-selected:border-gray-700/60 fx-selected:shadow fx-selected:text-fg-title"
            tabListContainer="relative text-muted-foreground" docPanelClass="rounded-[8px]">
            <TabPanel id={`Preview-${id}`} className={"border border-gray-200 dark:border-gray-800/60 ui-card [--card-padding:--spacing(1)] [--card-radius:var(--global-main-radius)] bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center h-max"} >
                <div className={
                    cx(
                        "min-h-60 lg:min-h-80 w-full inner-radius bg-background shadow border border-gray-200 dark:border-gray-800/60",
                        {
                            "flex items-center justify-center p-4 md:p-10": !isFrame
                        }
                    )
                }>
                    {component}
                </div>
            </TabPanel>
            <TabPanel shouldForceMount id={`Code-${id}`} className={"grid border border-gray-200 dark:border-gray-800/60 ui-card [--card-padding:--spacing(1)] [--card-radius:var(--global-main-radius)] bg-gray-800 dark:bg-gray-900/50 overflow-hidden"}>
                {codeblock}
            </TabPanel>
        </DocsTab>
    </>
}
