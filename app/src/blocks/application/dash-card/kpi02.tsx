import { Card } from "@/components/jk/card"

export const Kpi02 = () => {
    return (
        <div className="max-w-7xl px-4 mx-auto my-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">Monthly Recurring Revenue</span>
                        <span className="iconify ph--currency-circle-dollar size-5 text-primary"></span>
                    </div>
                    <span className="text-3xl font-semibold text-foreground mt-3">$48.5K</span>
                    <span className="w-max ui-soft ui-soft-success mt-4 inline-flex items-center gap-x-1.5 rounded-md px-2 py-1.5 text-xs font-medium">
                        <span aria-hidden="true" className="iconify size-4 ph--trend-up"></span>
                        +12.5% MoM
                    </span>
                </Card>

                <Card className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">Active Subscriptions</span>
                        <span className="iconify ph--users-three size-5 text-primary"></span>
                    </div>
                    <span className="text-3xl font-semibold text-foreground mt-3">1,247</span>
                    <span className="w-max ui-soft ui-soft-success mt-4 inline-flex items-center gap-x-1.5 rounded-md px-2 py-1.5 text-xs font-medium">
                        <span aria-hidden="true" className="iconify size-4 ph--trend-up"></span>
                        +28 this month
                    </span>
                </Card>

                <Card className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">Churn Rate</span>
                        <span className="iconify ph--chart-line-down size-5 text-destructive"></span>
                    </div>
                    <span className="text-3xl font-semibold text-foreground mt-3">2.3%</span>
                    <span className="w-max ui-soft ui-soft-destructive mt-4 inline-flex items-center gap-x-1.5 rounded-md px-2 py-1.5 text-xs font-medium">
                        <span aria-hidden="true" className="iconify size-4 ph--trend-down"></span>
                        Critical threshold: 3%
                    </span>
                </Card>

                <Card className="flex flex-col">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">Customer Lifetime Value</span>
                        <span className="iconify ph--target size-5 text-primary"></span>
                    </div>
                    <span className="text-3xl font-semibold text-foreground mt-3">$2,847</span>
                    <span className="w-max ui-soft ui-soft-success mt-4 inline-flex items-center gap-x-1.5 rounded-md px-2 py-1.5 text-xs font-medium">
                        <span aria-hidden="true" className="iconify size-4 ph--trend-up"></span>
                        +18% YoY
                    </span>
                </Card>
            </div>
        </div>
    )
}
