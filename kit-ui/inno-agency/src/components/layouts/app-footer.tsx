import { Button } from "@/components/jk/button"
import { Input, InputGroup } from "@/components/jk/input"
import { Link } from "@/components/jk/link"
import {ThemeSwitcher} from "./theme-switcher"

export const AppFooter = () => {
    return (
        <footer className="bg-background text-muted-foreground text-sm">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 py-20 border-t border-border-strong border-dashed">
                <div className="space-y-6 col-span-2">
                    <a href="/" className="relative flex items-center gap-3">
                        <div className="relative size-7 overflow-hidden flex rounded-lg">
                            <span className="absolute size-4 -top-1 -right-1 bg-secondary/60 rounded-md rotate-45" />
                            <span className="absolute size-4 -top-1 -left-1 bg-primary rounded-md rotate-45" />
                            <span className="absolute size-4 -bottom-1 -right-1 bg-primary rounded-md rotate-45" />
                            <span className="absolute size-4 -bottom-1 -left-1 bg-primary/60 rounded-md rotate-45" />
                            <span className="absolute size-2 rounded-full bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <div className="inline-flex text-lg font-semibold text-foreground">
                            InnoAgency
                        </div>
                    </a>
                    <p className="max-w-lg text-muted-foreground">
                        We are a team of passionate designers and developers who are always
                        looking for new ways to create beautiful and functional websites.
                    </p>
                    <ThemeSwitcher />
                </div>
                <div className="space-y-6">
                    <h1 className="text-sm font-medium text-foreground">Links</h1>
                    <ul className="space-y-3">
                        <li>
                            <Link href="#" asButton={false} className="duration-200 hover:text-primary text-muted-foreground">Home</Link>
                        </li>
                        <li>
                            <Link href="#" asButton={false} className="duration-200 hover:text-primary text-muted-foreground">About</Link>
                        </li>
                        <li>
                            <Link href="#" asButton={false} className="duration-200 hover:text-primary text-muted-foreground">Contact</Link>
                        </li>
                        <li>
                            <Link href="#" asButton={false} className="duration-200 hover:text-primary text-muted-foreground">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="#" asButton={false} className="duration-200 hover:text-primary text-muted-foreground">Services</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h1 className="text-sm font-medium text-foreground">Resources</h1>
                    <ul className="space-y-3">
                        <li>
                            <Link href="#" asButton={false} className="duration-200 hover:text-primary text-muted-foreground">Blog</Link>
                        </li>
                        <li>
                            <Link href="#" asButton={false} className="duration-200 hover:text-primary text-muted-foreground">Privacy</Link>
                        </li>
                        <li>
                            <Link href="#" asButton={false} className="duration-200 hover:text-primary text-muted-foreground">Terms</Link>
                        </li>
                        <li>
                            <Link href="#" asButton={false} className="duration-200 hover:text-primary text-muted-foreground">Career</Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-6 col-span-2">
                    <h1 className="text-sm font-medium text-foreground">Newsletter</h1>
                    <InputGroup size="none" className="w-full max-w-2xl flex flex-col sm:flex-row gap-3 p-0.5">
                        <Input type="email" variant="unstyled" placeholder="johndoe@gmail.com" className="px-3" />
                        <Button >
                            Subscribe
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-border text-foreground">
                    <div className="flex text-center sm:text-left sm:min-w-max max-w-full">
                        <p>© {new Date().getFullYear()} Inno Agency. All right reserved</p>
                    </div>
                    <div className="flex justify-center sm:justify-end w-full gap-3">
                        <Link href="#" aria-label="Link to Linkedin" asButton variant="outline" iconOnly>
                            <span className="flex iconify ph--linkedin-logo" />
                        </Link>
                        <Link href="#" aria-label="Link to X" asButton variant="outline" iconOnly>
                            <span className="flex iconify ph--x-logo" />
                        </Link>
                        <Link href="#" aria-label="Link to GitHub" asButton variant="outline" iconOnly>
                            <span className="flex iconify ph--github-logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
