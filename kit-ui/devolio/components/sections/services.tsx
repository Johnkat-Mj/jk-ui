import { CardService, ServiceProps } from "../cards/card-service";

import { SiteContainer } from "@/components/atoms/site-container";
import { SectionTitle } from "../elements/section-title";


const services: ServiceProps[] = [
    {
        id: 0,
        icon: "",
        title: "Service 0",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta consectetur quis animi"
    },
    {
        id: 1,
        icon: "",
        title: "Service 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta consectetur quis animi"
    },
    {
        id: 2,
        icon: "",
        title: "Service 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta consectetur quis animi"
    },
    {
        id: 3,
        icon: "",
        title: "Service 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta consectetur quis animi"
    },
    {
        id: 4,
        icon: "",
        title: "Service 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta consectetur quis animi"
    },
    {
        id: 5,
        icon: "",
        title: "Service 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta consectetur quis animi"
    },
]
export const Services = () => {
    return (
        <section id="services" className="pt-24 md:pt-32 relative">
            <div className="absolute right-0 top-8 w-2/5 aspect-video bg-linear-to-br from-primary to-purple-400 blur-3xl opacity-30 dark:opacity-20 rounded-full -skew-y-12"></div>
            <SiteContainer className="relative">
                <div className="mx-auto text-center max-w-2xl">
                    <SectionTitle htext="Services">
                        What I do!
                    </SectionTitle>
                </div>
                <div id="services" className="pt-16 grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-none mx-auto sm:mx-0 max-w-lg">
                    {services.map(service => (
                        <CardService key={service.id} {...service} />
                    ))
                    }
                </div>
            </SiteContainer>
        </section>
    )
}

