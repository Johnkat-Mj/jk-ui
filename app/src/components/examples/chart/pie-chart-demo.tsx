"use client"

import { useMemo } from "react"
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from "@/components/jk/card"
import { PieChart } from "@/components/jk/pie-chart"

export const PieChartDemo = () => {
  const data = useMemo(
    () => [
      { name: "Organic", amount: 1240 },
      { name: "Paid", amount: 880 },
      { name: "Referral", amount: 360 },
      { name: "Social", amount: 220 },
    ],
    [],
  )

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Traffic source breakdown</CardTitle>
        <CardDescription>Where your website traffic is coming from.</CardDescription>
      </CardHeader>
      <CardBody>
        <PieChart
          containerHeight={200}
          data={data}
          dataKey="amount"
          nameKey="name"
          config={{
            Organic: { label: "Organic" },
            Paid: { label: "Paid" },
            Referral: { label: "Referral" },
            Social: { label: "Social" },
          }}
        />
      </CardBody>
    </Card>
  )
}
