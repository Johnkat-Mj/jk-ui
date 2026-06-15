import { Text } from "@/components/jk/text"

export const TextDemo = () => {
    return (
        <div className="space-y-2">
            <Text>Default muted text</Text>
            <Text intent="body">Body text for paragraphs</Text>
            <Text intent="title">Title text for emphasis</Text>
        </div>
    )
}
