import { Breadcrumbs, BreadcrumbsItem } from "@/components/jk/breadcrumbs"

export const BreadcrumbsWithIcon = () => {
    return (
        <Breadcrumbs>
            <BreadcrumbsItem href="#">
                <span aria-hidden="true" className="flex iconify ph--house text-xl"></span>
                Home
            </BreadcrumbsItem >
            <BreadcrumbsItem href="#">
                <span aria-hidden="true" className="flex iconify ph--link-break text-xl"></span>
                Navigation
            </BreadcrumbsItem >
            <BreadcrumbsItem >
                <span aria-hidden="true" className="flex iconify ph--link-simple-horizontal"></span>
                <span aria-current="page" className="flex">Current Page</span>
            </BreadcrumbsItem >
        </Breadcrumbs>

    )
}
