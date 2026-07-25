import { Badge } from "@/components/jk/badge"
import { Button } from "@/components/jk/button"
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "@/components/jk/card"
import { Separator } from "@/components/jk/separator"

const currentPlan = {
  name: "Professional",
  price: "$29",
  period: "per month",
  description: "For growing teams that need more power and flexibility",
  features: [
    "Up to 50 team members",
    "Advanced analytics & reports",
    "Priority support",
    "Custom integrations",
    "5GB file storage",
  ],
}

const invoices = [
  { id: "INV-2026-0042", date: "Jun 1, 2026", amount: "$29.00", status: "paid", method: "Visa ending in 4242" },
  { id: "INV-2026-0041", date: "May 1, 2026", amount: "$29.00", status: "paid", method: "Visa ending in 4242" },
  { id: "INV-2026-0040", date: "Apr 1, 2026", amount: "$29.00", status: "paid", method: "Visa ending in 4242" },
  { id: "INV-2026-0039", date: "Mar 1, 2026", amount: "$29.00", status: "paid", method: "Visa ending in 4242" },
  { id: "INV-2026-0038", date: "Feb 1, 2026", amount: "$29.00", status: "paid", method: "Visa ending in 4242" },
]

export const Billing01 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Billing</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your subscription and payment history</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6 mb-8">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <p className="text-sm text-muted-foreground">You are on the {currentPlan.name} plan</p>
          </CardHeader>
          <CardBody>
            <div className="mb-4">
              <span className="text-3xl font-semibold text-foreground">{currentPlan.price}</span>
              <span className="text-sm text-muted-foreground ml-1">{currentPlan.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{currentPlan.description}</p>
            <ul className="space-y-2">
              {currentPlan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                  <span aria-hidden="true" className="iconify ph--check-circle size-4 text-success" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardBody>
          <CardFooter className="flex gap-2">
            <Button variant="outline" size="sm">Downgrade</Button>
            <Button size="sm">Upgrade Plan</Button>
          </CardFooter>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span aria-hidden="true" className="iconify ph--credit-card size-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Visa ending in 4242</p>
                <p className="text-xs text-muted-foreground">Expires 12/2027</p>
              </div>
              <span className="ml-auto">
                <Badge variant="soft" intent="soft-success" size="sm">Default</Badge>
              </span>
            </div>
            <Button variant="ghost" size="sm" className="mt-3 w-full">
              <span aria-hidden="true" className="iconify ph--plus size-3.5 mr-1.5" />
              Add payment method
            </Button>
          </CardBody>
          <Separator className="my-0" />
          <CardBody>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Next billing date</span>
              <span className="font-medium text-foreground">Jul 1, 2026</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-medium text-foreground">{currentPlan.price}/mo</span>
            </div>
          </CardBody>
        </Card>
      </div>

      <Card size="none" className="rounded-lg overflow-hidden border border-border">
        <div className="p-4 border-b border-border">
          <h3 className="text-sm font-semibold text-foreground">Invoice History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Invoice</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Date</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Amount</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Status</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Payment Method</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-muted/30">
                  <td className="px-4 py-3 font-medium text-foreground">{inv.id}</td>
                  <td className="px-4 py-3 text-muted-foreground">{inv.date}</td>
                  <td className="px-4 py-3 text-foreground">{inv.amount}</td>
                  <td className="px-4 py-3">
                    <Badge variant="soft" intent="soft-success" size="sm" className="inline-flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-current" />
                      {inv.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">{inv.method}</td>
                  <td className="px-4 py-3">
                    <Button size="xs" variant="ghost" iconOnly aria-label="Download">
                      <span aria-hidden="true" className="iconify ph--download size-3.5" />
                    </Button>
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
