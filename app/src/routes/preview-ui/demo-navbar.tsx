import { createFileRoute } from '@tanstack/react-router'
import { DemoNavbar } from '@/components/examples/navbar/demo-navbar'

export const Route = createFileRoute('/preview-ui/demo-navbar')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DemoNavbar />
}
