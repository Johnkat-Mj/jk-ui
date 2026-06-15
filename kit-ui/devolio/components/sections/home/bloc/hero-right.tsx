import Image from "next/image"


export const HeroRight = () => {
    return (
        <div className="flex items-center lg:w-1/2 m lg:h-full lg:pl-10 xl:pl-20 order-1 lg:order-2 sm:pt-10 sm:pt-0">
            <div className="w-11/12 lg:w-full h-80 xs:h-88 sm:h-96 
                lg:h-150 relative max-w-md mx-auto lg:max-w-none lg:mx-0">
                <div className="absolute w-full h-full bg-linear-to-tl from-purple-400 dark:from-pattern-bg-4 to-primary dark:to-pattern-bg-3 clippathtripzoide"></div>
                <Image src={"/images/devwithc.webp"} alt="banner image" width={1240} height={1376}
                    className="h-auto w-full  left-1/2 -translate-x-1/2 absolute bottom-2 lg:bottom-8" />
                <div className="absolute 2xl:-right-16 md:-right-12 -right-8 top-8 md:top-14">
                    <div className="p-4 pt-0 2xl:p-6 relative text-center flex flex-col gap-y-4">
                        <span className="absolute bg-bg/40 backdrop-blur-sm inset-0 clippathtripzoide"></span>
                        <Image src={"/svg/trophy.svg"} width={50} height={50} alt="Trophie"
                            className="h-12 w-auto relative mx-auto" />
                        <span className="relative text-fg-title font-medium text-sm sm:text-base">Best design<br /> Award</span>
                    </div>
                </div>
            </div>
        </div>
    )
}