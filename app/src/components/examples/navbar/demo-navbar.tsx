import { Button } from "@/components/jk/button"
import { NavbarBase, NavbarProvider, NavbarToggler } from "@/components/jk/navbar"

export const DemoNavbar = () => {
    return (
        <NavbarProvider>
            <header className="absolute left-0 top-0 w-full flex items-center h-24 z-40">
                <nav
                    className="relative mx-auto lg:max-w-7xl w-full flex gap-x-5 px-5 sm:px-10 md:px-12 lg:px-5 justify-between items-center">
                    <div className="flex items-center min-w-max relative">
                        <a href="#" className="font-semibold flex items-center gap-x-2">
                            
                            <span className="text-lg text-foreground">App name</span>
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
                            <Button variant="ghost" radius="circle"
                                className="justify-center w-full sm:w-max rounded-full">
                                Login
                            </Button>
                            <Button intent="neutral" radius="circle"
                                className=" justify-center w-full sm:w-max rounded-full">
                                Sign-up
                            </Button>
                        </div>
                    </NavbarBase>
                    <div className="flex items-center lg:hidden border-l border-border-strong pl-1.5">
                        <NavbarToggler radius="none" size="none"
                            className="flex-col focus:outline-none relative py-3 px-1.5 bg-transparent group">
                            <span className="sr-only">Toggle navbar</span>
                            <div id="line-1" aria-hidden="true"
                                className="h-0.5 w-6 rounded transition duration-300 bg-foreground in-aria-expanded:rotate-45 in-aria-expanded:translate-y-1.5">
                            </div>
                            <div id="line-2" aria-hidden="true"
                                className="mt-2 h-0.5 w-6 rounded transition duration-300 bg-foreground in-aria-expanded:-rotate-45 in-aria-expanded:-translate-y-1">
                            </div>
                        </NavbarToggler>
                    </div>
                </nav>
            </header>
        </NavbarProvider>
    )
}
