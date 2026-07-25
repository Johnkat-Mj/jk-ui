"use client"

import { ColorifySpan } from "@/components/atoms/colorify-span";
import { ConnectOnSocial } from "@/components/elements/connect-on-social";
import { buttonStyles } from "@/components/jk/button";


export const HeroLeft = () => {
    return (
        <div className="flex-1 flex flex-col order-2 lg:order-1 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0">

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl/tight font-bold bg-clip-text text-transparent bg-linear-to-tl from-gray-600 to-gray-900 dark:from-gray-50 dark:to-gray-200 text-balance">
                Innovative <ColorifySpan text="Solutions" /> for modern need.
            </h1>
            <p className="text-lg text-foreground mt-6">
                We create stunning digital experiences that drive results and transform your brand's online presence.
            </p>
            <div className="flex items-center mt-10 gap-4 justify-center flex-col sm:w-max sm:flex-row lg:justify-start">
                <a href={"#"} className={buttonStyles({ className: "flex justify-center w-full sm:w-max" })}>
                    Start Your Project
                </a>
                <a href={"#"} className={buttonStyles({ variant: "ghost", className: "flex justify-center w-full sm:w-max border border-gray-400/80 dark:border-gray-600" })}>
                    View Our Work
                </a>
            </div>
            <div className="mt-12 flex justify-center text-center lg:text-left lg:justify-start lg:mx-0 mx-auto">
                <ConnectOnSocial />
            </div>
        </div>
    )
}

export default HeroLeft
