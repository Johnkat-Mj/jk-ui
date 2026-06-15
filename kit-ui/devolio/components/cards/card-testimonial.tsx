import Image from "next/image";
import Paragraph from "@/components/atoms/paragraph";
import { TestimonialProps } from "@/types";


export const CardTestimonial =({ image, description, by, role }:TestimonialProps) =>{
    return (
        <div className="flex h-full flex-col md:gap-16 lg:gap-28 md:flex-row border border-border/60 bg-card/50 md:border-0 md:bg-transparent relative p-5 md:p-0 after:absolute after:inset-x-0 after:top-0 after:origin-center after:ease-linear after:duration-300 after:opacity-0 hover:after:opacity-100 after:scale-x-0 hover:after:scale-x-100 after:h-1 after:bg-primary md:after:h-0">
            <div className="hidden md:block md:h-auto md:w-72 lg:w-96 relative bg-bg/40">
                <Image src={image} height={1200} width={1700} alt={`image of - ${by}`} className="md:absolute md:h-full md:inset-0 md:object-cover" />
            </div>
            <div className="flex flex-1 flex-col md:justify-between relative md:pt-14 lg:pt-16 xl:pt-20">
                <span className="absolute right-0 md:left-0 top-0 text-gray-300 dark:text-gray-600">
                    <svg className="opacity-30 w-16 md:w-20 lg:w-24 xl:w-28"
                        fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                    </svg>
                </span>
                <blockquote className="order-2 md:order-1 md:pb-10 pt-6 md:pt-0">
                    <Paragraph className="text-lg lg:text-2xl leading-relaxed md:leading-9">
                        {description}
                    </Paragraph>
                </blockquote>
                <div className="pb-3 md:pb-0 md:pt-5 flex items-center gap-4 order-1 md:order-2 md:max-w-xs">
                    <Image src={image} height={1200} width={1700} alt={`image of - ${by}`} className="size-12 md:hidden object-cover" />
                    <div className="flex flex-col">
                        <span className="text-fg-title font-medium text-lg">{by}</span>
                        <span className="text-fg-muted">{role}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
