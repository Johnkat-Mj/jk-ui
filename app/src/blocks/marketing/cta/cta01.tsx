import React from 'react'

export const Cta01 = () => {
    return (
        <section className="py32 relative">
            <div className="relative py20 px5 sm-px10 md-px12 lg-px5 lg-max-w-7xl mxa wfull flex flex-col space-y-16 b b-border-strong/60 rd-xl overflow-hidden">
                <div className="absolute inset-0 h-full w-full text-primary ui-radial-gradient" />
                <div className="text-center relative">
                    <h2 className="font-semibold text-foreground text-4xl lg-text-5xl mxa max-w3xl">
                        Ready to Elevate Your Brand?
                    </h2>
                    <p className="text-foreground mt5 mxa max-wmd">
                        Partner with our marketing agency to boost your online presence,
                        attract more customers, and grow your business. Let’s create
                        impactful campaigns together.
                    </p>
                    <div className="mt12 flex items-center flex-wrap justify-center gap4">
                        <a href="#" className="btn btn-lg btn-solid btn-solid-primary text-white rd-xl">
                            Get a Free Consultation
                        </a>
                        <a href="/services" className="btn btn-lg btn-outline btn-outline-gray rd-xl">
                            View Our Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
