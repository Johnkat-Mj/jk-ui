import { createFileRoute, notFound } from '@tanstack/react-router'
import { allDocs } from 'content-collections'
import { MDXContent } from '@content-collections/mdx/react'
import { mdxComponents } from '@/mdx-components'
import { DocsWrapper } from '@/components/docs/docs-wrapper'
import { getPagger } from '@/lib/pager'
import { groupHeadings, splitSlugUrl } from '@/lib/index'

export const Route = createFileRoute('/_docs/docs/$')({
  component: DocsPage,
  loader: ({ params }) => {
    const slug = params._splat || 'introduction'
    const doc = allDocs.find((d) => d._meta.path === slug) as any
    if (!doc) throw notFound()
    return doc
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData.title },
      { name: 'description', content: loaderData.description },
    ],
  }),
})

function DocsPage() {
  const doc = Route.useLoaderData() as any
  const pagger = getPagger('/docs/' + doc._meta.path)
  const groupedToc = groupHeadings(doc.toc || [])

  return (
    <DocsWrapper
      title={doc.title}
      description={doc.description}
      links={doc.links}
      filePath={doc._meta.filePath}
      words={splitSlugUrl(doc._meta.path)}
      toc={groupedToc}
      prevSlug={pagger.prev}
      nextSlug={pagger.next}
    >
      <MDXContent code={doc.mdx} components={mdxComponents} />
    </DocsWrapper>
  )
}
