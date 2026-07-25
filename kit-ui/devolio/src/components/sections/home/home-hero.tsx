
import { SiteContainer } from "@/components/atoms/site-container";
import { HeroLeft } from "./bloc/hero-left";
import { HeroRight } from "./bloc/hero-right";
import { SvgPattern } from "@/components/atoms/svg-pattern";



export const HomeHero = () => {
    return (
        <section id="home" className="relative lg:h-screen py-3 lg:min-h-max flex items-center">
            <SvgPattern className="inset-x-0 md:inset-x-2 inset-y-2" />
            <SiteContainer className="flex lg:flex-row lg:items-center flex-col gap-12 xl:gap-14 h-full pt-28 md:pt-32 lg:pt-36 xl:pt-40 relative pb-16">
                <HeroLeft />
                <HeroRight />
            </SiteContainer>
        </section>
    )
}


