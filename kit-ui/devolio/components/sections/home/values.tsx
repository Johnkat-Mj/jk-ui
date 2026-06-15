import {CardValue} from "@/components/cards/card-value";
import { SiteContainer } from "@/components/atoms/site-container";

const values = [
    {
        id: 1,
        text: "Strategic Design",
        subtext: "Visually stunning designs that align with your business goals.",
        icon:"ph--head-circuit"
    },
    {
        id: 2,
        text: "Technical Excellence",
        subtext: "Cutting-edge solutions with latest technologies and practices.",
        icon: "ph--handshake"
    },
    {
        id: 3,
        text: "Client Success",
        subtext: "Your success is our success. We deliver measurable results.",
        icon: "ph--mask-happy"
    },
]

export const Values = () => {
    return (
        <section className="pt-20">

            <SiteContainer className="relative">
                <div className="grid gap-y-6 md:gap-y-4 grid-cols-2 md:flex md:flex-wrap lg:flex-nowrap gap-4 sm:gap-8 md:gap-10 lg:gap-4">
                    <div className="space-y-5 bg-primary p-6 md:w-full  lg:w-1/4 lg:p-10">
                        <h2 className="font-bold text-4xl text-white">150+</h2>
                        <p className="text-lg text-gray-100">Projects <br /> Delivered</p>
                    </div>
                    {values.map((experience) => (
                        <div key={experience.id} className="md:w-1/3 lg:w-1/4 flex-1 sm:p-5 sm:border sm:border-border/60 sm:bg-gray-50/50 dark:bg-gray-900/30 space-y-4">
                            <CardValue {...experience} />
                        </div>
                    ))

                    }
                </div>
            </SiteContainer>
        </section>
    )
}

