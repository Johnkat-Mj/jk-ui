import { Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/jk/card"
import { Badge } from "@/components/jk/badge"
import { Button } from "@/components/jk/button"

const features = [
    'Advanced Analytics',
    'Custom Branding',
    'Priority Support',
    'API Integration',
    'Team Collaboration',
]

export const PricingCard = () => {
    return (
        <Card size="md" className="md:[--card-padding:--spacing(8)] max-w-sm [--gutter:--spacing(6)]">
            <CardHeader>
                <CardTitle>Enterprise Plan</CardTitle>
                <CardDescription>
                    Perfect for growing businesses that need powerful features and dedicated support.
                </CardDescription>
                <div className="flex items-end gap-4 py-4 border-y border-border-strong/50">
                    <span className="bg-clip-text text-transparent bg-linear-to-br from-primary-500 to-accent-400 font-bold text-4xl">
                        $999
                    </span>
                    <Badge variant="soft" intent="primary">
                        annual
                    </Badge>
                </div>
            </CardHeader>
            <CardBody>
                {/* Features List */}
                <ul className="flex flex-col gap-y-3">
                    {features.map((feature) => (
                        <li key={feature} className="flex items-center gap-x-4">
                            <span
                                aria-hidden="true"
                                className="flex iconify ph--folder-open text-primary size-4 shrink-0"
                            />
                            <span className="text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardBody>
            <CardFooter className="flex">
                <Button className="w-full justify-center">
                    Start Free Trial
                </Button>
            </CardFooter>
        </Card>
    )
}
