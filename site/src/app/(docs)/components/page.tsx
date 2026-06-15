import { DocsWrapper } from '@/components/docs/docs-wrapper'
import { absoluteUrl, groupHeadings, splitSlugUrl } from '@/lib'
import { getPagger } from '@/lib/pager'
import { compSource } from '@/lib/source'
import fm from 'front-matter'
import { notFound } from 'next/navigation'
import z from 'zod'
import { mdxComponents } from '../../../../mdx-components'

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateMetadata() {
  const page = compSource.getPage([])

  if (!page) {
    notFound()
  }

  const title = page.data.title
  const description = page.data.description

  return {
    title: `JK-UI | ${title}`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      url: absoluteUrl('/components'),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            title
          )}&description=${encodeURIComponent(description || '')}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            title
          )}&description=${encodeURIComponent(description || '')}`,
        },
      ],
      creator: "johnkat-mj",
    },
  }
}

export default async function Page() {
  const page = compSource.getPage([])

  if (!page) {
    notFound()
  }

  const doc = page.data
  const MDX = doc.body

  const raw = await page.data.getText("raw")
  const { attributes } = fm(raw)
  const { links } = z
    .object({
      links: z.array(z.record(z.string(), z.string().trim())).optional(),
    })
    .parse(attributes)
  const fullPath = page.data.info.fullPath
  const title = page.data.title
  const description = page.data.description
  const toc = groupHeadings(page.data.toc)

  const {
    next: nextSlug,
    prev: prevSlug,
  } = getPagger(`/components`);

  const words = ['Components']

  return (
    <>
      <DocsWrapper
        nextSlug={nextSlug}
        prevSlug={prevSlug}
        title={title}
        description={description ?? ""}
        links={links}
        words={words}
        filePath={`/${fullPath}`}
        toc={toc}
      >
        <MDX components={mdxComponents} />
      </DocsWrapper>
    </>
  )
}
