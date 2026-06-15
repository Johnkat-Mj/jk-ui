// import { Radio } from "@/components/ui/radio"

import { Label, Description } from "@/components/jk/input"
import { Radio, RadioGroup } from "@/components/jk/radio"



export const RadioDemo = () => {
    return (
        <div>
            <RadioGroup>
                <Label>Billing Cycle</Label>
                <Description>Select how often you&apos;d like to be billed</Description>

                <Radio value="monthly">
                    <Label>Monthly</Label>
                    <Description>Billed every month</Description>
                </Radio>
                <Radio value="quarterly">
                    <Label>Quarterly</Label>
                    <Description>Billed every 3 months</Description>
                </Radio>
                <Radio value="yearly">
                    <Label>Yearly</Label>
                    <Description>Billed once per year with a discount</Description>
                </Radio>
            </RadioGroup>
        </div>
    )
}
