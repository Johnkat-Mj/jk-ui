"use client"

import { copyToClipboard } from "@/lib"
import { cx, } from "@/lib/utils"
import { useRef, useState } from "react"

interface BtnCopyCodeProps {
    className?: string
    btnClass?: string
}

export const BtnCopyInTabs = ({
    className = '',
    btnClass = '',
}: BtnCopyCodeProps) => {
    const [copiedState, setCopiedState] = useState<'' | 'copied'>('')
    const buttonRef = useRef<HTMLButtonElement>(null)

    const handleCopy = () => {
        if (buttonRef.current) {
            const tabsContainer = buttonRef.current.closest("[data-code-tabs]")

            const codePanel = tabsContainer?.querySelector("[data-code-snippet]")

            if (codePanel) {
                const value_ = codePanel.textContent
                copyToClipboard({
                    snippet: value_,
                    onCopy: () => {
                        setCopiedState('copied')
                    },
                    onCopyCompleted: () => {
                        setCopiedState('')
                    }
                })
            }
        }
        // const closesEl = 

    }

    return (
        <div className={cx(className)}>
            <button
                ref={buttonRef}
                onClick={handleCopy}
                aria-label="copy code to clipboard"
                data-state={copiedState}
                disabled={copiedState === 'copied'}
                className={cx(
                    "group cursor-pointer btn btn-icon-sm rounded-lg hover-bg-gray950 dark-hover-bg-gray900 flex",
                    btnClass
                )}
            >
                <span aria-hidden="true" className="flex relative ease-linear text-sm">
                    <span
                        aria-hidden="true"
                        className="flex iconify ph--copy-simple absolute opacity-100 scale-100 group-data-[state='copied']:opacity-0 group-data-[state='copied']:scale-60 top-1/2 left-1/2 -translate-1/2 ease-linear duration-200"
                    ></span>
                    <span
                        aria-hidden="true"
                        className="iconify ph--check-square-offset group-data-[state='copied']:flex absolute opacity-0 scale-60 group-data-[state='copied']:opacity-100 group-data-[state='copied']:scale-100 top-1/2 left-1/2 -translate-1/2 ease-linear duration-200"
                    ></span>
                </span>
            </button>
        </div>
    )
}
