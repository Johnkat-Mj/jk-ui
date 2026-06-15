import { SiteContainer } from "@/components/atoms/site-container"

export const SiteStats = () => {
    return (
        <section className="flex pt-16 relative">
            <SiteContainer>
                <div className="p-10 md:p-6 lg:p-14 text-fg-muted border border-border/60 bg-gray-50/50 dark:bg-gray-900/20 grid grid-cols-2 text-center gap-6 md:grid-cols-4 lg:px-16 md:gap-8 lg:gap-12">
                    <div className="relative space-y-3 flex flex-col">
                        <span className="absolute top-2 left-1/2 -translate-x-1/2 w-2/5 aspect-square scale-75 bg-linear-to-br from-primary to-purple-400 blur-3xl opacity-50"></span>
                        <span className="text-xl md:text-2xl lg:text-4xl text-fg-title font-bold">250+</span>
                        <h1>Happy clients</h1>
                    </div>
                    <div className="relative space-y-3 flex flex-col">
                        <span className="absolute top-2 left-1/2 -translate-x-1/2 w-2/5 aspect-square scale-75 bg-linear-to-br from-primary to-purple-400 blur-3xl opacity-50"></span>
                        <span className="text-xl md:text-2xl lg:text-4xl text-fg-title font-bold">500+</span>
                        <h1>complete projects</h1>
                    </div>
                    <div className="relative space-y-3 flex flex-col">
                        <span className="absolute top-2 left-1/2 -translate-x-1/2 w-2/5 aspect-square scale-75 bg-linear-to-br from-primary to-purple-400 blur-3xl opacity-50"></span>
                        <span className="text-xl md:text-2xl lg:text-4xl text-fg-title font-bold">15+</span>
                        <h1>team members</h1>
                    </div>
                    <div className="relative space-y-3 flex flex-col">
                        <span className="absolute top-2 left-1/2 -translate-x-1/2 w-2/5 aspect-square scale-75 bg-linear-to-br from-primary to-purple-400 blur-3xl opacity-50"></span>
                        <span className="text-xl md:text-2xl lg:text-4xl text-fg-title font-bold">10+</span>
                        <h1>years experience</h1>
                    </div>
                </div>
            </SiteContainer>
        </section>
    )
}
