import { Button } from "@/components/jk/button"
import { Callout, CalloutDescription } from "@/components/jk/callout"

export const CalloutMessage = () => {
    return (
        <Callout type="note" variant="outline" intent="outline-gray">
            <CalloutDescription>The data export you requested is ready!</CalloutDescription>
            <div>
                <Button variant="outline" intent="outline-gray" size="sm" aria-label="View data in modal">
                    View the Data
                </Button>
            </div>
        </Callout>

    )
}

