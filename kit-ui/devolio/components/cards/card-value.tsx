import type { ReactNode } from "react"

export const CardValue = ({ text, subtext, icon }: { text: string, subtext: string, icon: string | ReactNode }) => {

    return (
        <>
            <div className="text-fg">
                <span aria-hidden className={`iconify size-10 ${icon}`}></span>
            </div>
            <div className="space-y-3">
                <h3 className="font-semibold text-fg-title text-xl">
                    {text}
                </h3>
                <p className="text-fg text-sm">
                    {subtext}
                </p>
            </div>
        </>
    )
}