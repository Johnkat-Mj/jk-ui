import { createFileRoute } from '@tanstack/react-router'
import { ThemePlaygroundProvider } from '#/components/themes/theme-playground-provider'
import { ThemePreview } from '#/components/themes/theme-preview'

export const Route = createFileRoute('/_themes/themes')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ThemePlaygroundProvider>
      <ThemePreview />
    </ThemePlaygroundProvider>
  )
}
