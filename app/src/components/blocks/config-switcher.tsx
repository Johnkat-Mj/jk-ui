import { Button } from "../jk/button"
import { Icon } from "../jk/icon"
import { Popover, PopoverContent } from "../jk/popover"


export const ConfigSwitcher = () => {
    return (
        <Popover>
            <Button variant="none" size="none" className="btn-icon-md btn rd-lg text-foreground hover-text-fg-title hover-bg-bg-muted/60"
            >
                <Icon name="ph--paint-brush" />
            </Button>
            <PopoverContent>

            </PopoverContent>
        </Popover >
    )
}
