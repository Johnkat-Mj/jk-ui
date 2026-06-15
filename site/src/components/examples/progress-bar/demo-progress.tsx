"use client"

import { Description, Label } from "@/components/jk/input"
import { ProgressBar, ProgressBarHeader, ProgressBarValue, ProgressBarTrack } from "@/components/jk/progress-bar"
import { useEffect, useState } from "react"


export const DemoProgress = () => {
    const [value, setValue] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => (prev < 100 ? prev + 1 : 100))
        }, 70)

        return () => clearInterval(interval)
    }, [])
    return (
        <ProgressBar value={value}>
            <ProgressBarHeader>
                <Label>Loading…</Label>
                <ProgressBarValue className="text-primary"/>
            </ProgressBarHeader>
            <ProgressBarTrack />
            <Description>This is an example of a progress bar indicating 50% completion.</Description>
        </ProgressBar>
    )
}
