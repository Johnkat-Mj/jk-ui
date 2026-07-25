import { Callout, CalloutTitle, CalloutDescription } from "@/components/jk/callout"

export const CalloutCustom = () => {
    return (
        <div className="space-y-8">
            {/* With Custom Children */}
            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-muted-foreground">Custom Content</h3>
                <Callout type="note">
                    <CalloutTitle>Custom Title Component</CalloutTitle>
                    <CalloutDescription>
                        This callout uses custom children with CalloutTitle and CalloutDescription components.
                        You can add any content here, including lists, links, and more.
                    </CalloutDescription>
                </Callout>
            </div>

            {/* Without Icon */}
            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-muted-foreground">Without Icon</h3>
                <Callout type="warning" title="No Icon" message="This callout has no icon." noIcon />
            </div>

            {/* Different Sizes */}
            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-muted-foreground">Different Sizes</h3>
                <div className="flex flex-col gap-3">
                    <Callout type="note" title="Small Size" message="This is a small callout." size="sm" />
                    <Callout type="note" title="Medium Size" message="This is a medium callout (default)." size="md" />
                    <Callout type="note" title="Large Size" message="This is a large callout." size="lg" />
                </div>
            </div>

            {/* Complex Content */}
            <div className="space-y-3">
                <h3 className="text-sm font-semibold text-muted-foreground">Complex Content</h3>
                <Callout type="important" variant="soft">
                    <CalloutTitle>Breaking Changes in v2.0</CalloutTitle>
                    <CalloutDescription>
                        <p className="mb-2">The following breaking changes have been introduced:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Removed deprecated API endpoints</li>
                            <li>Updated authentication flow</li>
                            <li>Changed default configuration values</li>
                        </ul>
                        <p className="mt-2">Please review the migration guide for more details.</p>
                    </CalloutDescription>
                </Callout>
            </div>
        </div>
    )
}

