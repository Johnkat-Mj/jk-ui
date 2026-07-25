"use client"

import { Paragraph } from "@/components/atoms/paragraph";
import { SectionTitle } from "@/components/elements/section-title";
import { buttonStyles } from "@/components/jk/button";


export const RightAbout = () => {
    return (
        <div className="flex flex-col md:w-1/2 md:py-5 lg:py-8 md:flex-1 relative">
            <div className="absolute p-1 top-16 right-2 w-36 h-28 bg-linear-to-br from-primary to-orange-400 blur-3xl dark:opacity-60"></div>
            <div className="absolute p-1 pb-0.5 right-0 bottom-0 md:bottom-8 md:right-5 w-16 h-14 md:w-20 md:h-16 bg-linear-to-br from-primary to-orange-400 blur-3xl opacity-50"></div>
            <SectionTitle htext="We're a Digital Agency" boxClassName="relative">
                Transforming ideas into powerful digital experiences
            </SectionTitle>
            <Paragraph className="pt-10 relative">
                We are a full-service digital agency dedicated to helping businesses thrive in the digital landscape. Our team of talented designers, developers, and strategists work together to create innovative solutions that drive growth and deliver exceptional results. From stunning websites to comprehensive digital marketing campaigns, we're your partners in digital success.
            </Paragraph>
            <div className="pt-12 flex">
                <a href={"#"} className={buttonStyles({})}>
                    Learn About Us
                </a>
            </div>
        </div>
    )
}

export default RightAbout
