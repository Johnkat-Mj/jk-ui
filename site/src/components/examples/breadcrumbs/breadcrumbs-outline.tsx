import { Breadcrumbs, BreadcrumbsItem } from "@/components/jk/breadcrumbs"


export const BreadcrumbsOutline = () => {
    return (
        <div className="w-full flex flex-col gap-6">
            <Breadcrumbs wrapper="py-2 px-4 rounded-md border border-border-strong">
                <BreadcrumbsItem href="#">
                    Home
                </BreadcrumbsItem>
                <BreadcrumbsItem href="#">
                    Navigation
                </BreadcrumbsItem>
                <BreadcrumbsItem>
                    Current Page
                </BreadcrumbsItem>
            </Breadcrumbs>
            <Breadcrumbs wrapper="border-y py-2 px-4 border-border-strong" className="text-fg-muted">
                <BreadcrumbsItem href="#">
                    <span aria-hidden="true" className="flex iconify ph--house text-xl"></span>
                    Home
                </BreadcrumbsItem>
                <BreadcrumbsItem href="#">
                    <span aria-hidden="true" className="flex iconify ph--link-break text-xl"></span>
                    Navigation
                </BreadcrumbsItem>
                <BreadcrumbsItem>
                    <span aria-hidden="true" className="flex iconify ph--link-simple-horizontal"></span>
                    <span aria-current="page" className="flex">Current Page</span>
                </BreadcrumbsItem>
            </Breadcrumbs>
        </div>

    )
}
