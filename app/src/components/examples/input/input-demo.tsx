import { Input } from "@/components/jk/input"


export const InputDemo = () => {
    return (
        <form className="space-y-4 w-full">
            <Input placeholder="Start typing..." />
            <Input placeholder="Start typing..." variant="flush" className="bg-muted" />
        </form>
    )
}
