import { Button } from "@/components/jk/button"
import { Input, InputGroup, InputLeading, InputTrailing } from "@/components/jk/input"
import { Keyboard } from "@/components/jk/keyboard"


export const Header01 = () => {
    return (
        <header className="sticky top-0 z-50 px-2 md:px-4 pt-2">
            <nav className="bg-background border border-border rounded-lg p-4 h-16 flex items-center">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4">
                        <div className="flex lg:hidden border-r border-border pr-2">
                            <button className="rounded-md btn btn-icon-sm btn-ghost btn-ghost-gray" data-testid="button-menu">
                                <span aria-hidden="true" className="iconify ph--door-open"></span>
                            </button>
                        </div>
                        <h1 className="font-semibold text-foreground hidden truncate sm:inline-flex" data-testid="header-title">
                            Dashboard Overview
                        </h1>
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

                        <div
                            className="items-center space-x-2 p-2 btn btn-ghost btn-ghost-gray rounded-md cursor-pointer transition-colors">
                            <img src="https://avatars.githubusercontent.com/u/34010260?v=4" alt="User avatar" width="200"
                                height="200" className="size-8 rounded-full" />
                            <div className="hidden md:flex flex-col flex-1">
                                <p className="text-sm font-medium text-foreground line-clamp-1">
                                    Tresor Kasenda
                                </p>
                                <p className="text-xs text-muted-foreground line-clamp-1">
                                    Software Developer
                                </p>
                            </div>
                            <span aria-hidden="true" className="iconify ph--caret-down text-xs text-muted-foreground"></span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
