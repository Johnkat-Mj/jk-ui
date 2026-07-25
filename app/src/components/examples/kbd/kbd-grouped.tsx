import { Keyboard } from "@/components/jk/keyboard"


export const KbdGrouped = () => {
    return (
        <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-x-2">
                <Keyboard className="flex items-center gap-0.5">
                    <span aria-hidden="true" className="flex iconify ph--command"></span> K
                </Keyboard>
                <span className="text-foreground">
                    And
                </span>
                <Keyboard className="flex items-center gap-0.5">
                    <span aria-hidden="true" className="flex iconify ph--command"></span> + R
                </Keyboard>
            </div>
        </div>

    )
}
