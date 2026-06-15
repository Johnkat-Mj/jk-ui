import { Text } from "@/components/jk/text"

export const TextIntents = () => {
    return (
        <div className="space-y-2">
            <Text intent="muted">Muted text for secondary information</Text>
            <Text intent="body">Body text for main content</Text>
            <Text intent="title">Title text for headings context</Text>
            <Text intent="caption" elementType="span">Caption text in gray</Text>
            <Text intent="primary">Primary colored text</Text>
            <Text intent="secondary">Secondary colored text</Text>
            <Text intent="warning">Warning colored text</Text>
            <Text intent="danger">Danger colored text</Text>
        </div>
    )
}
