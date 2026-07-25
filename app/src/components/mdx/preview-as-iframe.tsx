"use client"

import { useState } from "react"
import { Skeleton } from "../jk/skeleton"

export const PreviewAsIFrame = ({ preview }: { preview: string }) => {
    const [frameIsLoading, setFrameIsLoading] = useState(true)
    const loadingAction = () => {
        setFrameIsLoading(false)
    }
    return (
        <div className="w-full h-96 bg-background duration-300 ease-linear ui-preview-frame
    flex relative overflow-hidden">
            {
                frameIsLoading ? <Skeleton aria-hidden radius="none" className="rounded-lg absolute inset-0" /> : null
            }
            <iframe src={preview}
                data-frame-loading={frameIsLoading ? "true" : "false"}
                onLoad={loadingAction}
                className="w-full h-full max-h-full data-[frame-loading=true]:invisible data-[frame-loading=true]:opacity-0 overflow-hidden"
            ></iframe>

        </div>
    )
}