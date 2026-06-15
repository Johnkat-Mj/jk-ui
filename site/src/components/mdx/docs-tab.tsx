"use client"

import type { ReactNode } from "react"
import { Tabs, TabList, Tab } from "@/components/jk/tabs"
import { cx } from "@/lib/utils"

interface TabValue {
    value?: string;
    text?: string;
    icon?: string;
}

interface DocsTabProps {
    values?: (string | TabValue)[];
    docPanelClass?: string;
    class?: string;
    triggersClass?: string;
    tabListContainer?: string;
    children?: ReactNode;
}

export function DocsTab({
    values = [],
    class: className = '',
    triggersClass = '',
    tabListContainer = '',
    children,
}: DocsTabProps) {
    // Extract the first value as the default selected key
    const defaultSelectedKey = typeof values[0] === "string"
        ? values[0]
        : values[0]?.value

    return (
        <Tabs
            defaultSelectedKey={defaultSelectedKey}
            className={cx('mt-5 first:mt-0', className)}
        >
            <TabList border={false}
                aria-label="Tabs"
                className={cx(
                    'flex items-center gap-x-3',
                    tabListContainer
                )}
            >
                {values.map((value) => {
                    if (typeof value === 'string') {
                        return (
                            <Tab
                                key={value}
                                id={value}
                                className={cx(
                                    'relative flex disabled:cursor-not-allowed disabled:opacity-80 fx-active:text-fg-title outline-none focus:outline-0 focus:outline-transparent focus-visible:outline focus-visible:outline-primary',
                                    triggersClass !== '' ? triggersClass : 'px-4 pt-1.5 pb-2.5'
                                )}
                            >
                                {value}
                            </Tab>
                        );
                    } else {
                        return (
                            <Tab
                                key={value.value}
                                id={value.value}
                                className={cx(
                                    'relative flex items-center disabled:cursor-not-allowed disabled:opacity-80 fx-active:text-fg-title outline-none focus:outline-0 focus:outline-transparent focus-visible:outline focus-visible:outline-primary',
                                    triggersClass !== '' ? triggersClass : 'px-4 pt-1.5 pb-2.5'
                                )}
                            >
                                {value.icon && value.icon !== '' && (
                                    <span
                                        aria-hidden="true"
                                        className={cx("iconify text-sm mr-2", value.icon)}
                                    />
                                )}
                                <span>{value.text ?? ''}</span>
                            </Tab>
                        );
                    }
                })}
            </TabList>
            {children}
        </Tabs>
    );
}