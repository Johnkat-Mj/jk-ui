"use client"

import { cx } from "@/lib/utils";
import { Tab, TabList, Tabs } from "../jk/tabs";
import type { ReactNode } from "react";
import { BtnCopyInTabs } from "../atoms/btn-copy-in-tabs";


export const DocTabCodeLoader = ({ children, values }: { children: ReactNode, values: { title: string, key: string }[] }) => {
    return (
        <>
            <Tabs
                defaultSelectedKey={values[0].key}
                data-code-tabs
                className={cx('border border-gray-800/60 p-(--card-padding) rounded-(--card-radius) ui-card [--card-padding:--spacing(1)] [--card-radius:var(--radius-ui)] bg-gray-800 dark:bg-gray-900/50 text-gray-300 grid mt-6 first:mt-0 gap-0')}
            >
                <div className="grid grid-cols-[1fr_2rem] overflow-hidden px-5 items-center h-10 pt-1 w-full">
                    <TabList border={false}
                        aria-label="Tabs"
                        className={cx(
                            'flex items-center gap-x-3 flex-1 overflow-hidden overflow-x-auto',

                        )}
                    >
                        {values.map((value) => <Tab
                            key={`tab-${value.key}`}
                            id={value.key}
                            className={cx(
                                'flex h-full cursor-pointer items-center rounded-md text-gray-400 fx-selected:text-white hover:text-white ease-linear duration-200 focus:outline-none text-nowrap',
                            )}
                        >
                            <span className="flex mr-2 text-xs iconify ph--brackets-curly"></span>
                            <span>{value.title ?? ''}</span>
                        </Tab>)}
                    </TabList>
                    <div className="w-8 flex items-center">
                        <BtnCopyInTabs/>
                    </div>
                </div>
                {children}
            </Tabs>
        </>
    )
}
