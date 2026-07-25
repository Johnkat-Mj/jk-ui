import { createFileRoute } from '@tanstack/react-router'
import { AllTemplates } from '@/components/templates/all-templates'
import { SitePageHeader } from '@/components/pages/site-page-header'

export const Route = createFileRoute('/_site/templates')({
  component: TemplatesPage,
  head: () => ({
    meta: [
      { title: 'Templates - jk-ui' },
      {
        name: 'description',
        content: 'Production-ready templates built with jk-ui components. Download and customize for your next project.',
      },
    ],
  }),
})

function TemplatesPage() {
  return (
      <main>
        <SitePageHeader
          tagline="Templates"
          title="Production-Ready Templates"
          description="Download full application layouts, marketing pages, and dashboards built with jk-ui components."
        />
        <AllTemplates />
      </main>
  )
}
