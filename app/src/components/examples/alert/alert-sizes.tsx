import { Alert } from "@/components/jk/alert"

export const AlertSizes = () => {
    return (
        <div className="flex flex-col gap-4">
            <Alert variant="solid" intent="primary" size="xs">
                Extra Small Alert - This is a compact alert message.
            </Alert>
            <Alert variant="solid" intent="primary" size="sm">
                Small Alert - This is a small alert message.
            </Alert>
            <Alert variant="solid" intent="primary" size="md">
                Medium Alert - This is a medium alert message (default size).
            </Alert>
            <Alert variant="solid" intent="primary" size="lg">
                Large Alert - This is a large alert message with more padding.
            </Alert>
        </div>
    )
}

