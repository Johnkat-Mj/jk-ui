import { Button } from "@/components/jk/button"
import { Input, InputGroup } from "@/components/jk/input"
import { NavbarBase, NavbarProvider, NavbarToggler } from "@/components/jk/navbar"

const Navbar = () => {
    return (
        <NavbarProvider>
            <header className="absolute left-0 top-0 w-full flex items-center h-24 z-40">
                <nav
                    className="relative mx-auto lg:max-w-7xl w-full flex gap-x-5 px-5 sm:px-10 md:px-12 lg:px-5 justify-between items-center">
                    <div className="flex items-center min-w-max relative">
                        <a href="#" className="font-semibold flex items-center gap-x-2">
                            <svg aria-hidden="true" width="488" height="488" className="size-8" viewBox="0 0 488 488"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_13_164)">
                                    <path
                                        d="M71.5342 71L416.602 416.068V416.068C321.314 511.356 166.822 511.356 71.5342 416.068V416.068C-23.7537 320.78 -23.7537 166.288 71.5342 71V71Z"
                                        fill="currentColor" className="text-foreground"></path>
                                    <path
                                        d="M483.659 249.5C483.659 274.629 436.788 344.5 411.659 344.5C386.53 344.5 392.659 274.629 392.659 249.5C392.659 224.371 413.03 204 438.159 204C463.288 204 483.659 224.371 483.659 249.5Z"
                                        fill="currentColor" className="text-foreground"></path>
                                    <circle cx="243.429" cy="243.759" r="110" transform="rotate(48.3973 243.429 243.759)"
                                        fill="black" stroke="white" strokeWidth="80" className="fill-fg-title stroke-bg">
                                    </circle>
                                    <path
                                        d="M309 71C309 96.129 212.629 101 187.5 101C162.371 101 142 80.629 142 55.5C142 30.371 162.371 10 187.5 10C212.629 10 309 45.871 309 71Z"
                                        fill="currentColor" className="text-foreground"></path>
                                    <path
                                        d="M417 101.5C417 126.629 415.129 215.5 390 215.5C364.871 215.5 326 126.629 326 101.5C326 76.371 346.371 56 371.5 56C396.629 56 417 76.371 417 101.5Z"
                                        fill="currentColor" className="text-foreground"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_13_164">
                                        <rect width="488" height="488" fill="currentColor" className="text-background"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="text-lg text-foreground">mySto</span>
                        </a>
                    </div>

                    <NavbarBase
                        className="fixed inset-x-0 h-dvh lg:h-max bg-background lg:bg-transparent top-0 -translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100 fx-open:opacity-100 fx-open:visible fx-open:translate-y-0 left-0 w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear py-32 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0">
                        <ul className="flex text-foreground flex-col lg:flex-row gap-6 lg:items-center lg:w-full lg:pl-10">
                            <li className="">
                                <a href="#"
                                    className="relative py-2.5 duration-300 ease-linear hover:text-primary">Features</a>
                            </li>
                            <li className="">
                                <a href="#"
                                    className="relative py-2.5 duration-300 ease-linear hover:text-primary">Company</a>
                            </li>
                            <li className="">
                                <a href="#"
                                    className="relative py-2.5 duration-300 ease-linear hover:text-primary">Plateform</a>
                            </li>
                            <li className="">
                                <a href="#"
                                    className="relative py-2.5 duration-300 ease-linear hover:text-primary">Resources</a>
                            </li>
                            <li className="">
                                <a href="#"
                                    className="relative py-2.5 duration-300 ease-linear hover:text-primary">Contact</a>
                            </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
                            <Button variant="ghost" circle
                                className="justify-center w-full sm:w-max rounded-full">
                                Login
                            </Button>
                            <Button intent="neutral" circle
                                className=" justify-center w-full sm:w-max rounded-full">
                                Sign-up
                            </Button>
                        </div>
                    </NavbarBase>
                    <div className="flex items-center lg:hidden border-l border-border pl-1.5">
                        <NavbarToggler radius="none" size="none"
                            className="flex-col focus:outline-none relative py-3 px-1.5 bg-transparent group">
                            <span className="sr-only">Toggle navbar</span>
                            <div id="line-1" aria-hidden="true"
                                className="h-0.5 w-6 rounded transition duration-300 bg-fg in-aria-expanded:rotate-45 in-aria-expanded:translate-y-1.5">
                            </div>
                            <div id="line-2" aria-hidden="true"
                                className="mt-2 h-0.5 w-6 rounded transition duration-300 bg-fg in-aria-expanded:-rotate-45 in-aria-expanded:-translate-y-1">
                            </div>
                        </NavbarToggler>
                    </div>
                </nav>
            </header>
        </NavbarProvider>
    )
}

const HeroSection = () => {
    return (
        <section>
            <div className="w-full flex items-center relative">
                <div
                    className="min-h-max relative mx-auto pt-32 lg:pt-40 px-5 sm:px-10 md:px-12 lg:px-5 lg:max-w-7xl w-full text-center space-y-10">
                    <a href="#"
                        className="flex items-center gap-x-2 mx-auto w-max px-2 pr-1 py-1 rounded-full bg-card border border-border/40 text-sm text-foreground">
                        mySto v2.1 is out
                        <span className="pr-1">
                            <span className="iconify ph--caret-right text-sm flex"></span>
                        </span>
                    </a>
                    <h1 className="mx-auto max-w-5xl font-semibold text-foreground text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight">
                        The Tool that lets you have full control on your stock & sales
                    </h1>
                    <p className="mx-auto max-w-2xl text-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe atque enim quasi a ipsum
                        asperiores necessitatibus deleniti, sint quo vel corporis dignissimos
                    </p>
                    <div className="flex flex-col items-center gap-5 w-full mx-auto max-w-md">
                        <InputGroup radius={false} size="none" className="pl-6 w-full pr-0.5 py-0.5 gap-3 items-center rounded-full">
                            <Input variant="unstyled" type="email" name="email" id="email" placeholder="johndoe@gmail.com"
                                className="w-full flex-1" />
                            <Button radius="circle" aria-label="sign up"
                                className="min-w-max rounded-full relative overflow-hidden duration-300 ease-linear">
                                <span>
                                    Try for free
                                </span>
                            </Button>
                        </InputGroup>
                        <span className="text-center text-sm text-muted-foreground inline-flex items-center">
                            Powerfull, AI Integreted <span className="iconify ph--sparkle inline-flex"></span>
                        </span>
                    </div>
                    <div
                        className="mx-auto max-w-6xl aspect-[5/2.3] overflow-hidden bg-fg-title  ui-card [--card-radius:20px] [--card-padding:--spacing(3)] rounded-b-none pb-0">
                        <img src="/images/dash-light.webp" width="1440" height="1024" alt="product image"
                            className="inner-radius w-full h-auto dark:hidden" />
                        <img src="/images/dash-dark.webp" width="1440" height="1024" alt="product image"
                            className="inner-radius w-full h-auto hidden dark:flex" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Hero01 = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
        </>
    )
}
