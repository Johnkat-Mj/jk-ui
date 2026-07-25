import { createFileRoute, Outlet } from '@tanstack/react-router'
import { DocsLayoutClient } from '@/components/organisms/docs-layout-client'

export const Route = createFileRoute('/_docs')({
  component: DocsLayout,
})

function DocsLayout() {
  return (
    <DocsLayoutClient>
      <Outlet />
    </DocsLayoutClient>
  )
}
