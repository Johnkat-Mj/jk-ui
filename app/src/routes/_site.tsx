import { SiteFooter } from '#/components/organisms/site-footer'
import { SiteNavbar } from '#/components/organisms/site-navbar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_site')({
    component: RouteComponent,
})

function RouteComponent() {
    return <>
        <SiteNavbar />
        <Outlet />
        <SiteFooter />
    </>
}
