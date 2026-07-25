import { createFileRoute } from '@tanstack/react-router'
import { SiteNavbar } from '@/components/organisms/site-navbar'
import { SiteFooter } from '@/components/organisms/site-footer'
import { SitePageHeader } from '@/components/pages/site-page-header'
import { ListAllBlocks } from '@/components/blocks/list-all-blocks'

export const Route = createFileRoute('/blocks/')({
  component: BlocksPage,
  head: () => ({
    meta: [
      { title: 'UI Blocks - jk-ui' },
      {
        name: 'description',
        content:
          'Explore our collection of production-ready UI blocks for React applications. From hero sections to feature lists, build faster with composable components.',
      },
      {
        name: 'keywords',
        content:
          'React UI blocks, UI components, React templates, web components, frontend development, UI library',
      },
      { property: 'og:title', content: 'UI Blocks - jk-ui' },
      {
        property: 'og:description',
        content:
          'Explore our collection of production-ready UI blocks for React applications. Build faster with composable components.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://jk-ui.com/blocks' },
      { property: 'og:image', content: '/cover-image.webp' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'UI Blocks - jk-ui' },
      {
        name: 'twitter:description',
        content:
          'Explore our collection of production-ready UI blocks for React applications. Build faster with composable components.',
      },
      { name: 'twitter:image', content: '/cover-image.webp' },
    ],
  }),
})

function BlocksPage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <SitePageHeader
          tagline="Blocks"
          title="Production-Ready UI Blocks for Modern React Apps"
          description="Start with fully structured application and marketing templates built on composable React UI blocks. Install, customize, and ship faster."
        />
        <ListAllBlocks />
      </main>
      <SiteFooter />
    </>
  )
}
