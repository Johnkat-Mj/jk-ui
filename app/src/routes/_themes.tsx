import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_themes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="">
    <Outlet/>
  </div>
}
