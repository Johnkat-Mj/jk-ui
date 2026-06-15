"use client"

import Image from "next/image"
import { buttonStyles } from "../jk/button"



export const AboutUs = () => {
    return (
        <section
            id="about"
            className="relative bg-bg-muted/30 dark:bg-bg-muted/20 border-t border-border py-20 px-5 sm:px-10 md:px-12 lg:px-5 lg:max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 rounded-3xl xl:px-16"
        >
            <div
                aria-hidden="true"
                className="absolute pointer-event-none top-0 left-0 size-40 bg-linear-to-br from-primary rounded-full blur-3xl opacity-20 dark:opacity-50"
            >
            </div>
            <div
                aria-hidden="true"
                className="absolute pointer-event-none bottom-0 right-0 size-40 bg-linear-to-br from-primary rounded-full blur-3xl opacity-20 dark:opacity-50"
            >
            </div>
            <div className="flex-1 lg:pr-10 relative flex justify-center">
                <div className="w-[calc(100%-2rem)] md:h-full flex justify-center">
                    <Image
                        src="/grow-perf.webp"
                        alt="Growing business"
                        width="1920"
                        height="1200"
                        className="w-full min:h-92 md:min-hauto md:hfull object-cover relative rounded-lg"
                    />
                </div>
            </div>
            <div className="md:py-16 md:w-1/2 xl:w-[45%] relative">
                <span className="px-2 py-0.5 rounded-lg bg-muted border border-border/40 text-fg-muted text-sm">
                    The AgenceX Edge
                </span>
                <h2
                    className="text-accent-foreground font-medium text-3xl/snug text-balance max-w-xl mt-6"
                >
                    Transforming Visions into Market Leaders
                </h2>
                <p className="mt-6 max-w-md text-fg-muted">
                    We are a team of passionate marketers dedicated to elevating your brand.
                    With years of experience, we turn your vision into reality.
                </p>

                <ul
                    className="mt-7 border px-3 rounded-lg bg-bg/40 border-border/50 text-fg-muted divide-y divide-border *:py-2"
                >
                    <li className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-1 iconify ph--lightbulb-filament opacity-60"></span>
                        <span className="flex-1"> Expert team of certified professionals. </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-1 iconify ph--lightning opacity-60"></span>
                        <span className="flex-1"> Customized strategies for every client. </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-1 iconify ph--fire opacity-60"></span>
                        <span className="flex-1"> Transparent reporting and communication. </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-1 iconify ph--head-circuit opacity-60"></span>
                        <span className="flex-1"> Continuous innovation and adaptation. </span>
                    </li>
                </ul>

                <div className="mt-8 flex">
                    <a
                        href="#"
                        className={buttonStyles({})}
                    >
                        Start Your Journey
                    </a>
                </div>
            </div>
        </section>
    )
}