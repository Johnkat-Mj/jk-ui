"use client"

import { useMemo, useRef } from "react"
import { Card, CardBody , CardDescription, CardHeader, CardTitle } from "@/components/jk/card"
import { LineChart } from "@/components/jk/line-chart"


type EngagementPoint = {
  day: string
  likes: number
  comments: number
  shares: number
}

function generateData(): EngagementPoint[] {
  return Array.from({ length: 7 }, (_, i) => ({
    day: `Day ${i + 1}`,
    likes: Math.floor(100 + Math.random() * 300),
    comments: Math.floor(20 + Math.random() * 80),
    shares: Math.floor(10 + Math.random() * 50),
  }))
}

export const LineChartDemo = () => {
  const dataRef = useRef<EngagementPoint[] | null>(null)
  
  const engagementData = useMemo(() => {
    if (!dataRef.current) {
      dataRef.current = generateData()
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
        <LineChart
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
