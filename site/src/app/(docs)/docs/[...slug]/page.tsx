import { DocsWrapper } from '@/components/docs/docs-wrapper'
import { absoluteUrl, groupHeadings, splitSlugUrl } from '@/lib'
import { getPagger } from '@/lib/pager'
import { source } from '@/lib/source'
import fm from 'front-matter'
import { notFound } from 'next/navigation'
import z from 'zod'
import { mdxComponents } from '../../../../../mdx-components'

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return source.generateParams()
}


export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>
}) {
  const params = await props.params
  const {
    current
  } = getPagger(`/docs/${params.slug.join('/')}`);


  if (!current) {
    notFound()
  }

  return {
    title: `JK-UI | ${current.title}`,
    description: current.description,
    keywords: current.keywords,
    openGraph: {
      title: current.title,
      description: current.description,
      type: "article",
      url: absoluteUrl(current.slug),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            current.title
          )}&description=${encodeURIComponent(current.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: current.title,
      description: current.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            current.title
          )}&description=${encodeURIComponent(current.description)}`,
        },
      ],
      creator: "johnkat-mj",
    },
  }
}

export default async function Page(props: {
  params: Promise<{ slug: string[] }>
}) {

  const params = await props.params
  const page = source.getPage(params.slug)
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
    // current,
  } = getPagger(`/docs/${params.slug.join('/')}`);

  const words = splitSlugUrl(params.slug.join("/") ?? '')
  return (
    <>
      <DocsWrapper
        nextSlug={nextSlug}
        prevSlug={prevSlug}
        title={title} description={description ?? ""}
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
