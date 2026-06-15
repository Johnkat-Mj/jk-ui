
import { Input, InputGroup, InputTrailing } from "@/components/jk/input"


export const InputGroupTrailling = () => {
    return (
        <form className="space-y-4 w-full max-w-xs text-fg">
            <InputGroup>
                <Input variant="unstyled" type="email" placeholder="Your email here" className="pe-11 px-3" />
                <InputTrailing absolute className="text-fg">
                    <span className="flex text-lg iconify ph--at"></span>
                </InputTrailing>
            </InputGroup>
            <InputGroup>
                <Input variant="unstyled" type="text" placeholder="Your email here" className="pe-13 px-3" />
                <InputTrailing absolute className="text-sm text-fg">
                    CDF
                </InputTrailing>
            </InputGroup>
            <InputGroup>
                <Input variant="unstyled" type="text" placeholder="Your email here" className="pe-16 px-3" />
                <InputTrailing absolute className="text-sm text-fg">
                    @gmail.com
                </InputTrailing>
            </InputGroup>
            <InputGroup>
                <Input variant="unstyled" type="text" placeholder="Your email here" className="rounded-r-none px-3 flex-1" />
                <InputTrailing className="px-3 text-fg bg-bg-muted/80 rounded-r-ui">
                    <span className="flex text-lg iconify ph--at"></span>
                </InputTrailing>
            </InputGroup>
        </form>

    )
}
