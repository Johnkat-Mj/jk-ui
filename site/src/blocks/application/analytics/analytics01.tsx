import { Card } from "@/components/jk/card"

const metrics = [
  {
    label: "Total Page Views",
    value: "284.5K",
    change: "+12.3%",
    trend: "up",
    icon: "ph--eye",
    color: "text-primary",
  },
  {
    label: "Unique Visitors",
    value: "142.2K",
    change: "+8.7%",
    trend: "up",
    icon: "ph--users",
    color: "text-accent",
  },
  {
    label: "Avg. Session Duration",
    value: "4m 32s",
    change: "+5.2%",
    trend: "up",
    icon: "ph--clock",
    color: "text-success",
  },
  {
    label: "Bounce Rate",
    value: "38.1%",
    change: "-2.4%",
    trend: "down",
    icon: "ph--arrow-circle-down",
    color: "text-destructive",
  },
]

const pageViews = [
  { page: "/dashboard", views: "45,234", bounce: "32%", avgTime: "3m 45s", trend: "up" },
  { page: "/analytics", views: "28,912", bounce: "28%", avgTime: "5m 12s", trend: "up" },
  { page: "/settings/profile", views: "12,456", bounce: "45%", avgTime: "2m 30s", trend: "down" },
  { page: "/reports", views: "8,234", bounce: "22%", avgTime: "6m 15s", trend: "up" },
  { page: "/team", views: "5,678", bounce: "35%", avgTime: "4m 05s", trend: "up" },
]

export const Analytics01 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Analytics</h1>
        <p className="text-sm text-muted-foreground mt-1">Track your key metrics and performance</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{metric.label}</span>
              <span aria-hidden="true" className={`iconify ${metric.icon} size-5 ${metric.color}`} />
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-semibold text-foreground">{metric.value}</span>
              <span
                className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                  metric.trend === "up" ? "text-success" : "text-destructive"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`iconify ${metric.trend === "up" ? "ph--trend-up" : "ph--trend-down"} size-3.5`}
                />
                {metric.change}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-8">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground">Page Views Overview</h3>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="size-2.5 rounded-full bg-primary" />
                Current period
              </span>
              <span className="flex items-center gap-1">
                <span className="size-2.5 rounded-full bg-border-strong" />
                Previous period
              </span>
            </div>
          </div>
          <div className="h-48 rounded-lg bg-muted flex items-center justify-center">
            <span className="text-sm text-muted-foreground">Chart placeholder</span>
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground">Traffic Sources</h3>
          </div>
          <div className="space-y-4">
            {[
              { source: "Organic Search", percentage: 42, color: "bg-primary" },
              { source: "Direct", percentage: 28, color: "bg-accent" },
              { source: "Social Media", percentage: 18, color: "bg-success" },
              { source: "Referral", percentage: 12, color: "bg-warning" },
            ].map((item) => (
              <div key={item.source}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-foreground">{item.source}</span>
                  <span className="text-muted-foreground">{item.percentage}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted">
                  <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card size="none" className="rounded-lg overflow-hidden border border-border">
        <div className="p-4 border-b border-border">
          <h3 className="text-sm font-semibold text-foreground">Top Pages</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Page</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Views</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Bounce Rate</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Avg Time</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {pageViews.map((row) => (
                <tr key={row.page} className="hover:bg-muted/30">
                  <td className="px-4 py-3 font-medium text-foreground">{row.page}</td>
                  <td className="px-4 py-3 text-foreground">{row.views}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.bounce}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.avgTime}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-medium ${
                        row.trend === "up" ? "text-success" : "text-destructive"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`iconify ${row.trend === "up" ? "ph--trend-up" : "ph--trend-down"} size-3.5`}
                      />
                      {row.trend === "up" ? "Rising" : "Declining"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
