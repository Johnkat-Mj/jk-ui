import { Label } from "@/components/jk/input"
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from "@/components/jk/slider"


export const DemoSlider = () => {
    return (
        <Slider defaultValue={20} className={"w-full flex flex-col max-w-sm"}>
            <div className="flex items-center justify-between">
                <Label>Opacity</Label>
                <SliderOutput />
            </div>
            <SliderTrack>
                <SliderFill />
                <SliderThumb />
            </SliderTrack>
        </Slider>
    )
}
