import { Input, InputGroup, InputLeading } from "@/components/jk/input"


export const InputGroupLeading = () => {
    return (
        <form className="space-y-4 w-full max-w-xs text-fg">
            <InputGroup>
                <Input variant="unstyled" type="email" placeholder="Your email here" className="ps-11 px-3" />
                <InputLeading absolute className="text-fg">
                    <span className="flex text-lg iconify ph--at"></span>
                </InputLeading>
            </InputGroup>
            <InputGroup>
                <Input variant="unstyled" type="text" placeholder="Your email here" className="ps-13 px-3" />
                <InputLeading absolute
                    className="text-sm text-fg">
                    CDF
                </InputLeading>
            </InputGroup>
            <InputGroup>
                <Input variant="unstyled" type="text" placeholder="my-website.com" className="ps-16 px-3" />
                <InputLeading absolute
                    className="text-sm text-fg">
                    https://
                </InputLeading>
            </InputGroup>
            <InputGroup className="flex">
                <InputLeading aria-hidden="true"
                    className="px-3 text-fg bg-bg-muted/80 rounded-l-ui">
                    <span className="flex text-lg iconify ph--at"></span>
                </InputLeading>
                <Input variant="unstyled" type="text" placeholder="Your email here" className="px-3" />
            </InputGroup>
        </form>

    )
}
