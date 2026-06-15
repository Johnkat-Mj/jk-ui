import { SiteContainer } from "@/components/atoms/site-container";
import LeftAbout from "./bloc/left-about";
import RightAbout from "./bloc/right-about";

export const AboutIntro = () => {
    return (
        <section id="about-us" className="pt-24 md:pt-32 relative scroll-mt-22">
            <SiteContainer className=" relative flex md:flex-row flex-col gap-12 xl:gap-14">
                <LeftAbout />
                <RightAbout />
            </SiteContainer>
        </section>
    )
}

export default AboutIntro

