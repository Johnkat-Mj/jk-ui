import { Alert } from "@/components/jk/alert"

export const AlertDemo = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            <Alert variant="solid" intent="solid-primary">
                This is a primary alert with solid variant.
            </Alert>
            <Alert variant="soft" intent="soft-success">
                This is a success alert with soft variant.
            </Alert>
            <Alert variant="outline" intent="outline-danger">
                This is a danger alert with outline variant.
            </Alert>
            <Alert variant="subtle" intent="subtle-warning">
                This is a warning alert with subtle variant.
            </Alert>
        </div>
    )
}

