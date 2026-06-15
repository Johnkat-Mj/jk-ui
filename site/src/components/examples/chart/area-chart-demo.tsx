"use client"

import { useMemo, useRef } from "react"
import { AreaChart } from "@/components/jk/area-chart"
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from "@/components/jk/card"


type EngagementPoint = {
    day: string
    likes: number
    comments: number
    shares: number
}

function generateEngagementData(): EngagementPoint[] {
    return Array.from({ length: 7 }, (_, i) => ({
        day: `Day ${i + 1}`,
        likes: Math.floor(100 + Math.random() * 300),
        comments: Math.floor(20 + Math.random() * 80),
        shares: Math.floor(10 + Math.random() * 50),
    }))
}

export const AreaChartDemo = () => {
    const dataRef = useRef<EngagementPoint[] | null>(null)
    
    const engagementData = useMemo(() => {
        if (!dataRef.current) {
            dataRef.current = generateEngagementData()
        }
        return dataRef.current
    }, [])

    return (
        <Card>
            <CardHeader>
                <CardTitle>Engagement last 7d</CardTitle>
                <CardDescription>
                    Tracks likes, comments, and shares during the most recent 7-day period.
                </CardDescription>
            </CardHeader>
            <CardBody>
                <AreaChart
                    
                    data={engagementData}
                    dataKey="day"
                    xAxisProps={{ interval: 0 }}
                    config={{
                        likes: { label: "Likes" },
                        comments: { label: "Comments" },
                        shares: { label: "Shares" },
                    }}
                />
            </CardBody>
        </Card>
    )
}
