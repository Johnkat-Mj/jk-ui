import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import GithubSlugger from "github-slugger";
import { rehypeShiki } from "./src/lib/rehype-shiki";

type TocItem = { depth: number; value: string; url: string };

const linkSchema = z.array(z.record(z.string())).optional();

const baseTransform = async (
  doc: { content: string; _meta: Record<string, unknown> },
  context: { cache: unknown }
) => {
  const toc = extractToc(doc.content);
  const mdx = await compileMDX(context as any, doc as any, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeShiki],
  });
  return { ...doc, mdx, toc };
};

const docs = defineCollection({
  name: "docs",
  directory: "content/docs",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    keywords: z.string().optional(),
    links: linkSchema,
  }),
  transform: baseTransform,
});

const components = defineCollection({
  name: "components",
  directory: "content/components",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    keywords: z.string().optional(),
    links: linkSchema,
  }),
  transform: baseTransform,
});

export default defineConfig({
  content: [docs, components],
});

function extractToc(content: string): TocItem[] {
  const slugger = new GithubSlugger();
  const tree = unified().use(remarkParse).parse(content);
  const toc: TocItem[] = [];
  visit(tree, "heading", (node: any) => {
    const value = toString(node);
    const url = `#${slugger.slug(value)}`;
    toc.push({ depth: node.depth, value, url });
  });
  return toc;
}
