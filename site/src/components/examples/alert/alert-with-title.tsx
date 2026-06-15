import { Alert } from "@/components/jk/alert"


export const AlertWithTitle = () => {
    return (
        <div className="w-full flex flex-col gap-2">
            <Alert>
                <h3 className="font-semibold text-fg-title">
                    Alert with title : default
                </h3>
                <p>
                    You can add components to your app using our CLI.
                </p>
            </Alert>
            <Alert className="flex items-start gap-x-4">
                <div className="w-max">
                    <span aria-hidden="true" className="flex iconify ph--info text-xl"></span>
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-fg-title">
                        Alert with title & Icon
                    </h3>
                    <p>
                        You can add components to your app using our CLI.
                    </p>
                </div>
            </Alert>
            <Alert className="p-4 flex items-start gap-x-4">
                <span aria-hidden="true" className="flex iconify ph--info text-xl"></span>
                <div className="flex-1 flex flex-col">
                    <h3 className="font-semibold text-fg-title">
                        Alert with title & Icon : default Reverse
                    </h3>
                    <p>
                        You can add components to your app using our CLI.
                    </p>
                </div>
            </Alert>
        </div>

    )
}
