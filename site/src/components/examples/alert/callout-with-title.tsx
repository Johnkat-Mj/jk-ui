import { Button } from "@/components/jk/button"
import { Callout, CalloutTitle, CalloutDescription } from "@/components/jk/callout"

export const CalloutWithTitle = () => {
    return (
        <Callout radius="none" variant="soft" type="important" className="border-l-2 border-danger">
            <CalloutTitle text="There was a problem with your submission" />
            <CalloutDescription>
                <p>
                    Must include at least 1 number
                </p>
                <p>
                    Must include at least 2 uppercase letters
                </p>
            </CalloutDescription>
            <div className="pt-1">
                <Button variant="outline" size="sm">
                    <span className="iconify ph--arrows-clockwise mr-2"></span>
                    Try again
                </Button>
            </div>
        </Callout>
    )
}

