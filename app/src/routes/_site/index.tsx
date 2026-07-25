import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/pages/hero-section'
import { BlockListHome } from '@/components/pages/block-list-home'
import { SiteCta } from '@/components/organisms/site-cta'

export const Route = createFileRoute('/_site/')({
  component: Home,
  head: () => ({
    meta: [
      {
        title: 'jk-ui - Composable UI Blocks for Modern React Apps',
      },
      {
        name: 'description',
        content:
          'Production-ready UI blocks and templates for React developers. Build faster with composable, accessible components designed for modern applications.',
      },
      {
        name: 'keywords',
        content:
          'React UI, UI components, React blocks, web development, frontend, UI library, composable UI',
      },
      { property: 'og:title', content: 'jk-ui - Composable UI Blocks for Modern React Apps' },
      {
        property: 'og:description',
        content:
          'Production-ready UI blocks and templates for React developers. Build faster with composable, accessible components.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://jk-ui.com' },
      { property: 'og:image', content: '/cover-image.webp' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'jk-ui - Composable UI Blocks for Modern React Apps',
      },
      {
        name: 'twitter:description',
        content:
          'Production-ready UI blocks and templates for React developers. Build faster with composable, accessible components.',
      },
      { name: 'twitter:image', content: '/cover-image.webp' },
    ],
  }),
})

function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'jk-ui',
    description:
      'Production-ready UI blocks and templates for React developers. Build faster with composable, accessible components designed for modern applications.',
    url: 'https://jk-ui.com',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    creator: {
      '@type': 'Organization',
      name: 'unoForge',
      url: 'https://github.com/johnkat-mj/jk-ui',
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <BlockListHome />
      <SiteCta />
    </main>
  )
}
