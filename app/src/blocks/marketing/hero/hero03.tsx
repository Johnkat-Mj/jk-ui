import { NavbarBase, NavbarOverlayElement, NavbarProvider, NavbarToggler } from "@/components/jk/navbar"


const Navbar = () => {
    return (
        <NavbarProvider>
            <NavbarOverlayElement className="fixed invisible fx-open:visible inset-0 lg:hidden bg-gray-800/60 backdrop-blur-xl z-40" />
            <header className="absolute inset-x-0 top-0 z-50 py-6">
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                    <nav className="w-full flex justify-between gap-6 relative">
                        <div className="min-w-max inline-flex relative">
                            <a href="/" className="relative flex items-center gap-3">
                                <div className="relative size-7 overflow-hidden flex rounded-xl">
                                    <span className="absolute size-4 -top-1 -right-1 bg-secondary rounded-md rotate-45" />
                                    <span className="absolute size-4 -bottom-1 -right-1 bg-secondary rounded-md rotate-45" />
                                    <span className="absolute size-4 -bottom-1 -left-1 bg-primary rounded-md rotate-45" />
                                    <span className="absolute size-2 rounded-full bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                </div>
                                <div className="inline-flex text-lg font-semibold text-foreground">
                                    AgenceX
                                </div>
                            </a>
                        </div>
                        <NavbarBase className="invisible opacity-0 translate-y-10 lg:visible lg:opacity-100 fx-open:translate-y-0 fx-open:visible fx-open:opacity-100 lg:translate-y-0 duration-300 ease-linear overflow-hidden 
                                flex flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:w-max lg:flex-1
                                lg:justify-between lg:items-center absolute lg:relative top-14 lg:top-0 bg-background 
                                lg:bg-transparent border-x border-border lg:border-x-0 rounded-xl z-50">
                            <ul className="border-t border-border lg:border-t-0 p-6 lg:p-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-foreground w-full lg:justify-center lg:items-center">
                                <li>
                                    <a href="#" className="duration-300 font-medium ease-linear text-muted-foreground hover:text-primary py-3">
                                        Case studies
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="duration-300 font-medium ease-linear text-muted-foreground hover:text-primary py-3">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="duration-300 font-medium ease-linear text-muted-foreground hover:text-primary py-3">
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="duration-300 font-medium ease-linear text-muted-foreground hover:text-primary py-3">
                                        Faq
                                    </a>
                                </li>
                            </ul>
                        </NavbarBase>
                        <div className="min-w-max flex items-center gap-x-3">
                            <a href="#" className="btn btn-sm btn-solid btn-solid-primary text-white rounded-xl">
                                Get Started
                            </a>
                            <NavbarToggler aria-label="Toggle navbar" className="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative group">
                                <span className="w-6 h-0.5 rounded-full bg-fg transition-all duration-300 ease-linear in-aria-expanded:translate-y-1.5 in-aria-expanded:rotate-40" />
                                <span className="w-6 origin-center  mt-1 h-0.5 rounded-ful bg-fg transition-all duration-300 ease-linear in-aria-expanded:opacity-0 in-aria-expanded:scale-x-0" />
                                <span className="w-6 mt-1 h-0.5 rounded-ful bg-fg transition-all duration-300 ease-linear in-aria-expanded:-translate-y-1.5 in-aria-expanded:-rotate-40" />
                            </NavbarToggler>
                        </div>
                    </nav>
                </div>
            </header>
        </NavbarProvider>
    )
}


const HeroSection = () => {
    return (
        <section className="relative pt-32 lg:pt-36">
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-16">
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                    <span className="absolute right-4 bottom-12 size-24 rounded-3xl bg-primary blur-xl opacity-40" />
                </div>
                <span className="w-4/12 lg:w-2/12 aspect-square bg-linear-to-tr from-primary to-accent absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-30 skew-x-12 rotate-90" />
                <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                    <span className="px-2 py-0.5 rounded-xl ui-outline ui-outline-gray ">
                        Special Social
                    </span>
                    <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight font-bold text-foreground mt-8">
                        Revolutionize <span className="text-transparent bg-clip-text bg-linear-to-br from-primary from-20% via-secondary via-30% to-accent">
                            Your Brand</span> with Powerful Marketing!
                    </h1>
                    <p className="mt-8 text-foreground max-w-md">
                        Boost your brand’s visibility, engage your audience, and drive real results with cutting-edge social
                        media marketing strategies. It’s time to stand out and grow like never before!
                    </p>
                    <div className="mt-10 w-full flex max-w-md mx-aauto lg:mx-0 lg:max-w-none gap-3 items-center flex-wrap justify-center lg:justify-start">
                        <a href="#" className="justify-center btn btn-lg btn-solid btn-solid-primary text-white rounded-xl">
                            Get In Touch
                        </a>
                        <a href="#" className="justify-center btn btn-lg btn-outline btn-outline-gray text-foreground rounded-xl">
                            See our work
                        </a>
                    </div>
                </div>
                <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    <img src="/images/image1.webp" alt="Hero image" width={2350} height={2359} className="lg:absolute lg:w-full lg:h-full rounded-xl object-cover lg:max-h-none max-h-96" />
                    <div className="absolute w-64 left-1/2 -translate-x-1/2 -bottom-6 p-2 bg-background/80 backdrop-blur-md border border-border/50 rounded-xl shadow-sm shadow-bg-muted/40 dark-shadow-transparent flex items-center before:absolute before:inset-x-3 before:h-2 before:flex before:bg-background/80 before:border before:border-border/50 before:border-t-none before:rounded-b-xl before:-bottom-2 before:shadow-sm before:shadow-bg-muted/40 before:shadow-transparent">
                        <span aria-hidden="true" className="size-12 flex items-center justify-center rounded-lg ui-soft ui-soft-primary mr-4">
                            <span className="flex iconify ph--person text-2xl" />
                        </span>
                        <div className="flex flex-col">
                            <span className="font-semibold text-xl text-foreground">+20</span>
                            <span className="text-sm text-muted-foreground">Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Hero03 = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
        </>
    )
}
