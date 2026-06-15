import { Breadcrumbs, BreadcrumbsItem } from "@/components/jk/breadcrumbs"



export const BreadcrumbsDemo = () => {
    return (
        <>
            <div className="space-y-6 w-full flex flex-col items-center">
                <Breadcrumbs>
                    <BreadcrumbsItem href="#">
                        Home
                    </BreadcrumbsItem>
                    <BreadcrumbsItem href="#">
                        Navigation
                    </BreadcrumbsItem>
                    <BreadcrumbsItem >
                        Current Page
                    </BreadcrumbsItem>
                </Breadcrumbs>
                <Breadcrumbs activeClass="text-primary font-semibold">
                    <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
                    <BreadcrumbsItem href="#">Navigation</BreadcrumbsItem>
                    <BreadcrumbsItem>
                        Current Page
                    </BreadcrumbsItem>
                </Breadcrumbs>
            </div>

        </>
    )
}
