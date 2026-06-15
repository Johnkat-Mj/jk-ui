import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from "@/components/jk/card"
import { Button } from "@/components/jk/button"

export const CardDemo = () => {
    return (
        <Card className="w-full max-w-md">
            <CardHeader className="border-b border-border">
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardBody className="bg-bg-surface rounded-ui py-14 my-4">
                <span></span>
            </CardBody>
            <CardFooter className="flex gap-2 justify-end border-t border-border">
                <Button variant="outline" intent="outline-gray" size="sm">Cancel</Button>
                <Button size="sm">Save</Button>
            </CardFooter>
        </Card>
    )
}
