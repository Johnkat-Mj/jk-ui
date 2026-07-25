import { NavbarBase, NavbarOverlayElement, NavbarProvider, NavbarToggler } from "@/components/jk/navbar"


const Navbar = () => {
    return (
        <NavbarProvider>
            <NavbarOverlayElement aria-hidden="true" className="fixed bg-gray-800/40 inset-0 z30 hidden fx-open:flex lg:hidden" />
            <header className="sticky top-0 w-full flex items-center h-16 z-40 border-b border-border/50 bg-background/20 backdrop-blur-xl">
                <nav className="px-5 sm:px-10 lg:px-5 relative mx-auto max-w-7xl w-full flex gap-x-5 justify-between items-center">
                    <div className="flex items-center min-w-max">
                        <a href="#" className="text-xl font-semibold text-foreground flex items-center gap-x-2">
                            <span className="flex">
                                <span className="w-3 h-6 rounded-l-full flex bg-linear-to-br from-primary to-secondary" />
                                <span className="w-3 h-6 rounded-r-full flex bg-linear-to-tl from-secondary to-primary mt-2" />
                            </span>
                            <span className="text-transparent bg-clip-text bg-linear-to-t from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400">skySoft</span>
                        </a>
                    </div>
                    <NavbarBase className="top-16 lg:top-0 left-0 bg-background lg:bg-transparent
                            border-b border-border lg:border-none py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 w-full fixed lg:relative
                            lg:flex gap-6 lg:justify-between duration-300 ease-linear translate-y-10 opacity-0 invisible lg:visible 
                            lg:translate-y-0 lg:opacity-100 fx-open:visible fx-open:opacity-100 fx-open:translate-y-0">
                        <ul className="text-foreground flex flex-col gap-6 lg:flex-row lg:items-center lg:w-full lg:justify-center">
                            <li>
                                <a href="#" className="relative py-2.5 duration-300 ease-linear hover:text-primary">Solutions</a>
                            </li>
                            <li>
                                <a href="#" className="relative py-2.5 duration-300 ease-linear hover:text-primary">Company</a>
                            </li>
                            <li>
                                <a href="#" className="relative py-2.5 duration-300 ease-linear hover:text-primary">Plateform</a>
                            </li>
                            <li>
                                <a href="#" className="relative py-2.5 duration-300 ease-linear hover:text-primary">Resources</a>
                            </li>
                            <li>
                                <a href="#" className="relative py-2.5 duration-300 ease-linear hover:text-primary">Contact</a>
                            </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
                            <a href="#" className="btn btn-sm btn-outline btn-outline-gray ease-linear duration-200 rounded-lg justify-center sm:w-max">
                                Request trial
                            </a>
                        </div>
                    </NavbarBase>
                    <div className="pl-3 flex items-center lg:hidden">
                        <NavbarToggler aria-label="toggle navbar" className="outline-none relative bg-transparent border-l border-border group flex flex-col">
                            <div id="line-1" aria-hidden="true" className="h-0.5 w-6 rounded transition duration-300 bg-fg-title group-aria-expanded:rotate-45 group-aria-expanded:translate-y-1.5">
                            </div>
                            <div id="line-2" aria-hidden="true" className="mt-2 h-0.5 w-6 rounded transition duration-300 bg-fg-title group-aria-expanded:-rotate-45 group-aria-expanded:-translate-y-1.5" />
                        </NavbarToggler>
                    </div>
                </nav>
            </header>
        </NavbarProvider>
    )
}

const HeroSection = () => {
    return (
        <section className="bg-primary-50/30 dark:bg-background">
            <div className="absolute left-0 top-20 w-40 aspect-video bg-linear-to-br from-primary to-accent rounded-full blur-3xl opacity-60">
            </div>
            <div className="relative mx-auto max-w-7xl w-full flex flex-col lg:flex-row gap-10 px-5 sm:px-10 md:px-12 lg:px-5 py-24 lg:py-3 lg:pb-4">
                <div className="lg:w-1/2 max-w-2xl md:max-w-3xl mx-auto flex flex-col md:justify-center text-center lg:text-left lg:py-24">
                    <a href="#" className="flex items-center w-max pl-0.5 pr-3 py-0.5 rounded-lg ui-subtle ui-subtle-gray mb-6 mx-auto lg:mx-0 text-sm">
                        <span className="ui-solid ui-solid-primary text-xs px-2 py-0.5 rounded-md mr-1">News</span>
                        Faster than ever
                    </a>
                    <h1 className="text-primary-950 dark:text-white text-4xl md:text-5xl lg:text-6xl/tight text-balance font-semibold">
                        Manage with better <span className="bg-clip-text text-transparent bg-linear-to-br from-primary to-accent">experience</span> your Studio!
                    </h1>
                    <p className="text-foreground mt-7 mx-auto lg:mx-0 max-w-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, beatae omnis ipsa magnam neque ut
                    </p>
                    <div className="mt-8 flex flex-col lg:flex-row justify-center items-center lg:justify-start gap-4">
                        <a href="#" className="justify-center btn btn-md btn-solid btn-solid-primary text-white rounded-lg">
                            Get Started
                        </a>
                    </div>
                    <div className="flex items-center gap-1 gap-x-2 mt-6 justify-center lg:justify-start py5">
                        <div className="flex items-center -space-x-1 *:size-8 *:object-cover *:rounded-lg *:ring-2 *:ring-bg">
                            <img src="/images/podCast.webp" width={2250} alt="listener avatar" />
                            <img src="/images/podCast.webp" width={2250} alt="listener avatar" />
                            <img src="/images/podCast.webp" width={2250} alt="listener avatar" />
                        </div>
                        <div className="flex flex-col justify-start items-start -space-y-1">
                            <span className="font-semibold text-foreground">+12k</span>
                            <span className="text-sm text-muted-foreground">Lovely users</span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 relative lg:h-auto max-w-2xl md:max-w-3xl mx-auto flex justify-end">
                    <div className="relative size-full flex items-center aspect-square overflow-hidden lg:aspect-auto">
                        <img src="/images/woman-at-meet-up.webp" width={1266} height={1224} alt="woman at virtual meetup" className="w-full relative hauto" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Hero02 = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
        </>
    )
}
