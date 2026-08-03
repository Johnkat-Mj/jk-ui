import { InputTrailing, Label } from "@/components/jk/input"
import { NumberField, NumberInput, StepperButton } from "@/components/jk/number-field"


export const NumberFieldAdvancedControls = () => {
  return (
    <NumberField className={"w-40 space-y-1.5"}>
      <Label htmlFor="cookies-count-2">Cookies</Label>
      <NumberInput id="cookies-count-2" className="pe-10"
        controls={
          <InputTrailing absolute clickable className="flex flex-col [--right-space:0px] border-l border-border-input divide-y divide-border-input">
            <StepperButton slot="increment" icon="ph--caret-up" unStyled className="flex-1 px-2 btn text-muted-foreground hover:text-fg-title *:size-3 hover:bg-bg-surface" />
            <StepperButton slot="decrement" icon="ph--caret-down" unStyled className="flex-1 px-2 btn text-muted-foreground hover:text-fg-title *:size-3 hover:bg-bg-surface" />
          </InputTrailing>
        } />
    </NumberField>
  )
}
