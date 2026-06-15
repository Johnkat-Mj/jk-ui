import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/empty-route')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/empty-route"!</div>
}
