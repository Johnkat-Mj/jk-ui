"use client"

import Link from "next/link"
import { buttonStyles } from "../jk/button"

export const Cta = () => {
    return (
        <section id="cta" className="py-32 relative">
            <div className="relative py-20 px-5 sm:px-10 md:px-12 lg:px-5 lg:max-w-7xl mx-auto w-full flex flex-col space-y-16 border border-border rounded-lg overflow-hidden">
                <div className="[--unify-radial-bg:var(--color-bg)] absolute inset-0 h-full w-full text-primary ui-radial-gradient">
                </div>
                <div className="text-center relative">
                    <h2 className="font-semibold text-fg text-4xl lg:text-5xl mx-auto max-w-3xl">
                        Ready to Elevate Your Brand?
                    </h2>
                    <p className="text-fg-muted mt-5 mx-auto max-w-md">
                        Partner with our marketing agency to boost your online presence, attract
                        more customers, and grow your business. Let's create impactful campaigns
                        together.
                    </p>
                    <div className="mt-12 flex items-center flex-wrap justify-center gap-4">
                        <Link href="#" className={buttonStyles({})}>
                            Get a Free Consultation
                        </Link>
                        <Link href="/services" className={buttonStyles({variant:"outline"})}>
                            View Our Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
