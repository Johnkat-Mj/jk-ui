"use client"

import { useMemo, useRef } from "react"
import { BarChart } from "@/components/jk/bar-chart"
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from "@/components/jk/card"


type EngagementPoint = {
  day: string
  likes: number
  comments: number
  shares: number
}



export const ChartBarDemo = () => {

  const engagementData: EngagementPoint[] = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        day: `Day ${i + 1}`,
        likes: Math.floor(100 + Math.random() * 300),
        comments: Math.floor(20 + Math.random() * 80),
        shares: Math.floor(10 + Math.random() * 50),
      })),
    [],
  )


  return (
    <Card className="w-full max-w-xl">
      <CardHeader className="border-b border-border">
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>
          A bar chart is a chart that uses bars to show comparisons between categories of data. The bars can be displayed horizontally or vertically.
        </CardDescription>
      </CardHeader>
      <CardBody className="pt-(--gutter)">
        <BarChart
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
