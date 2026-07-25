import { Heading } from "@/components/jk/heading"

export const HeadingLevels = () => {
    return (
        <div className="space-y-4">
            <Heading level={1}>H1 - Page Title</Heading>
            <Heading level={2}>H2 - Section Title</Heading>
            <Heading level={3}>H3 - Subsection</Heading>
            <Heading level={4}>H4 - Card Title</Heading>
            <Heading level={5}>H5 - Small Heading</Heading>
        </div>
    )
}
