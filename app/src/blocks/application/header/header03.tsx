import { Avatar } from "@/components/jk/avatar"
import { Button } from "@/components/jk/button"
import { Input, InputGroup, InputLeading, InputTrailing } from "@/components/jk/input"
import { Keyboard } from "@/components/jk/keyboard"

export const Header03 = () => {
    return (
        <header className="sticky top-0 z-50 px-2 md:px-4 pt-2">
            <nav className="bg-background border border-border rounded-lg p-4 h-16 flex items-center">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                        <div className="flex lg:hidden pr-2 border-r border-border">
                            <button className="rounded-md btn btn-icon-sm btn-ghost btn-ghost-gray">
                                <span aria-hidden="true" className="iconify ph--door-open"></span>
                            </button>
                        </div>
                        <a href="#" className="flex items-center space-x-3">
                            <div className="size-8 bg-primary text-white rounded-lg d-flex-place-center">
                                <span aria-hidden="true" className="iconify ph--lightning"></span>
                            </div>
                            <h1 className="text-lg font-semibold text-foreground hidden sm:inline-flex">
                                WorkSpace
                            </h1>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
                        <form className="w-full relative">
                            <InputGroup>
                                <Input placeholder="Type something..." variant="unstyled" className="ps-9" />
                                <InputTrailing absolute className="flex items-center gap-0.5 text-xs font-light">
                                    <Keyboard variant="subtle" size="none" className="size-5 d-flex-place-center">
                                        <span className="iconify ph--command"></span>
                                    </Keyboard>
                                    <Keyboard variant="subtle" size="none" className="size-5 d-flex-place-center">
                                        k
                                    </Keyboard>
                                </InputTrailing>
                                <InputLeading absolute>
                                    <span className="iconify ph--magnifying-glass text-xs text-muted-foreground"></span>
                                </InputLeading>
                            </InputGroup>

                        </form>
                    </div>

                    <div className="flex items-center space-x-3">
                        <Button size="sm" iconOnly variant="ghost" className="relative">
                            <span aria-hidden="true" className="iconify ph--bell"></span>
                            <span
                                className="absolute -top-1 -right-1 size-4 bg-destructive text-white text-xs rounded-full flex items-center justify-center"
                                data-testid="notification-badge">3</span>
                        </Button>

                        <Button size="sm" iconOnly variant="ghost" className="relative">
                            <span aria-hidden="true" className="iconify ph--envelope"></span>
                        </Button>

                        <Button size="none" variant="ghost"
                            className="items-center space-x-2 cursor-pointer transition-colors">
                            <Avatar src="https://avatars.githubusercontent.com/u/34010260?v=4" alt="User avatar" width="200"
                                height="200" className="size-8 rounded-full" />
                            <span aria-hidden="true" className="iconify ph--caret-down text-xs text-muted-foreground"></span>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>

    )
}
