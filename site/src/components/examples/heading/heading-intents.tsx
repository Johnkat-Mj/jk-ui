import { Heading } from "@/components/jk/heading"

export const HeadingIntents = () => {
    return (
        <div className="space-y-4">
            <Heading level={3} intent="title">Title intent (default)</Heading>
            <Heading level={3} intent="body">Body intent</Heading>
            <Heading level={3} intent="muted">Muted intent</Heading>
            <Heading level={3} intent="primary">Primary intent</Heading>
            <Heading level={3} intent="secondary">Secondary intent</Heading>
            <Heading level={3} intent="danger">Danger intent</Heading>
            <Heading level={3} intent="warning">Warning intent</Heading>
        </div>
    )
}
