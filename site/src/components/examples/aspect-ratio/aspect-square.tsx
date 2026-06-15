import { AspectRatio } from "@/components/jk/aspect-ratio"


export const AspectSquare = () => {
    return (
        <AspectRatio aspect="square">
            <img src="/images/img2.webp" className="w-full h-full object-cover rounded-lg" width="2400"
                alt="Image by Johnnathan Tshibangu" />
        </AspectRatio>
    )
}
