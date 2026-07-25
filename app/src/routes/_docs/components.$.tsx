import { createFileRoute, notFound } from '@tanstack/react-router'
import { allComponents } from 'content-collections'
import { MDXContent } from '@content-collections/mdx/react'
import { mdxComponents } from '@/mdx-components'
import { DocsWrapper } from '@/components/docs/docs-wrapper'
import { getPagger } from '@/lib/pager'
import { groupHeadings } from '@/lib/index'

function toTitle(slug: string) {
  return slug === 'index' ? 'Components' : slug.charAt(0).toUpperCase() + slug.slice(1)
}

function pagerPath(slug: string) {
  return slug === 'index' ? '/components' : `/components/${slug}`
}

export const Route = createFileRoute('/_docs/components/$')({
  component: ComponentsPage,
  loader: ({ params }) => {
    const slug = params._splat || 'index'
    const doc = allComponents.find((d) => d._meta.path === slug) as any
    if (!doc) throw notFound()
    return { doc, slug }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData.doc.title },
      { name: 'description', content: loaderData.doc.description },
    ],
  }),
})

function ComponentsPage() {
  const { doc, slug } = Route.useLoaderData() as any
  const pagger = getPagger(pagerPath(slug))
  const groupedToc = groupHeadings(doc.toc || [])

  return (
    <DocsWrapper
      title={doc.title}
      description={doc.description}
      links={doc.links}
      filePath={doc._meta.filePath}
      words={[toTitle(slug)]}
      toc={groupedToc}
      prevSlug={pagger.prev}
      nextSlug={pagger.next}
    >
      <MDXContent code={doc.mdx} components={mdxComponents} />
    </DocsWrapper>
  )
}
