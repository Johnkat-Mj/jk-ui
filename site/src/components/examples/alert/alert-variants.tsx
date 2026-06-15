import { Alert } from "@/components/jk/alert"

export const AlertVariants = () => {
    return (
        <div className="w-full flex flex-col gap-2">
            <Alert variant="soft">
                <p>You can add components to your app using our CLI.</p>
            </Alert>
            <Alert variant="outline">
                <p>You can add components to your app using our CLI.</p>
            </Alert>
            <Alert variant="subtle">
                <p>You can add components to your app using our CLI.</p>
            </Alert>
            <Alert variant="soft" intent="soft-primary">
                <h3 className="font-semibold">With Border</h3>
                <p className="text-sm mt-0.5">
                    You can add components to your app using our CLI.
                </p>
            </Alert>
            <Alert variant="subtle" intent="subtle-danger">
                <h3 className="font-semibold">Danger zone</h3>
                <p className="text-sm mt-0.5">
                    You can add components to your app using our CLI.
                </p>
            </Alert>
        </div>

    )
}

