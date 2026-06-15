import { Input } from "@/components/jk/input"


export const InputWithLabel = () => {
    return (
        <form className="space-y-4 w-full">
            <Input type="email" placeholder="Start typing..." label="Your Email" />
            <Input type="email" placeholder="Start typing..." inlinedLabel label="Your Email" labelClass="min-w-max" />
        </form>
    )
}
