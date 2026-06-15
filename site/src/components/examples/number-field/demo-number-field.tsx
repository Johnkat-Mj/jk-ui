import { Label } from "@/components/jk/input"
import { NumberField, NumberInput } from "@/components/jk/number-field"


export const DemoNumberField = () => {
    return (
        <NumberField className={"space-y-1.5 max-w-36"}>
            <Label htmlFor="cookies-count">Cookies</Label>
            <NumberInput id="cookies-count" />
        </NumberField>
    )
}
