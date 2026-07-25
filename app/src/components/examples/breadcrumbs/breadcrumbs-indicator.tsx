import { Breadcrumbs, BreadcrumbsItem } from '@/components/jk/breadcrumbs'


export const BreadcrumbsIndicator = () => {
    return (
        <div className="flex flex-col w-full space-y-6">
            <Breadcrumbs className=" text-muted-foreground" activeClass="px-1.5 py-px rounded-full border border-border-strong bg-bg-subtle text-fg-title font-semibold">
                <BreadcrumbsItem href="#"
                    className="ease-linear hover:text-fg-subtitle px-1.5 py-px border border-border rounded-full">
                    Home
                </BreadcrumbsItem>
                <BreadcrumbsItem href="#"
                    className="ease-linear hover:text-fg-subtitle px-1.5 py-px border border-border rounded-full">
                    Navigation
                </BreadcrumbsItem>
                <BreadcrumbsItem>
                    Current Page
                </BreadcrumbsItem>
            </Breadcrumbs>
            <Breadcrumbs className="text-muted-foreground" activeClass="px-1.5 py-px rounded-full border text-white bg-primary border-primary font-semibold">
                <BreadcrumbsItem href="#"
                    className="ease-linear hover:text-fg-subtitle px-1.5 py-px border border-border rounded-full">
                    Home
                </BreadcrumbsItem>
                <BreadcrumbsItem href="#"
                    className="ease-linear hover:text-fg-subtitle px-1.5 py-px border border-border rounded-full">
                    Navigation
                </BreadcrumbsItem>
                <BreadcrumbsItem>
                    Current Page
                </BreadcrumbsItem>
            </Breadcrumbs>
            <Breadcrumbs className="text-muted-foreground" activeClass="gap-x-1.5 text-bg font-semibold px-1.5 py-px rounded-full bg-fg-title">
                <BreadcrumbsItem href="#"
                    className="ease-linear hover:text-fg-subtitle gap-x-1.5 px-1.5 py-px rounded-full bg-bg-subtle hover:bg-bg-muted">
                    <span aria-hidden="true" className="flex iconify ph--house text-xl"></span>
                    Home
                </BreadcrumbsItem>
                <BreadcrumbsItem href="#"
                    className="ease-linear hover:text-fg-subtitle gap-x-1.5 px-1.5 py-px rounded-full bg-bg-subtle hover:bg-bg-muted">
                    <span aria-hidden="true" className="flex iconify ph--link-break text-xl"></span>
                    Navigation
                </BreadcrumbsItem>
                <BreadcrumbsItem >
                    <span aria-hidden="true" className="flex iconify ph--link-simple-horizontal"></span>
                    Current Page
                </BreadcrumbsItem>
            </Breadcrumbs>

        </div>

    )
}
