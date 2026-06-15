import { blocksSourceData } from "@/generated/blocks-data";
import { notFound } from "next/navigation";



interface BlockPageProps {
    params: Promise<{
        slug: string
    }>
}



export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const params: { slug: string }[] = []
    for (const item of blocksSourceData) {
        params.push({ slug: item.path })
    }
    return params
}

export default async function BlockPage({ params }: BlockPageProps) {
    const { slug } = await params

    const block = blocksSourceData.find(item => item.path === slug)

    if (!block) {
        return notFound()
    }

    const Component = block.Component

    return (
        <>
            <Component />
        </>
    )
}
