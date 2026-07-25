import { Breadcrumbs, BreadcrumbsItem } from "@/components/jk/breadcrumbs"
import { Button } from "@/components/jk/button"

export const Header02 = () => {
    return (
        <header className="h-14 bg-background border-b border-border flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4">
                <div className="flex md:hidden border-r border-border pr-2">
                    <Button variant="soft" size="sm" iconOnly className="">
                        <span aria-hidden="true" className="iconify ph--door-open"></span>
                    </Button>
                </div>
                <Breadcrumbs className="text-xs sm:text-sm text-muted-foreground">
                    <BreadcrumbsItem href="#">
                        Core
                    </BreadcrumbsItem>
                    <BreadcrumbsItem>
                        Dashboard
                    </BreadcrumbsItem>
                </Breadcrumbs>
            </div>
            <div className="flex items-center gap-1">
                <div className="h-6 w-px bg-border mx-2 hidden sm:block"></div>
                <Button variant="ghost" iconOnly size="sm">
                    <span aria-hidden="true" className="iconify ph--magnifying-glass"></span>
                </Button>
                <Button variant="ghost" iconOnly size="sm">
                    <span aria-hidden="true" className="iconify ph--mailbox"></span>
                </Button>
            </div>
        </header>

    )
}
