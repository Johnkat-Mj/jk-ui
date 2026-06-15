import { defineConfig, defineDocs } from "fumadocs-mdx/config"
import rehypePrettyCode from "rehype-pretty-code"
// import z from "zod/v4"


// const linkSchema = z.array(z.record(z.string().trim()));

export const docs = defineDocs({
  dir: "content/docs",
  // docs: {
  //   schema: frontmatterSchema.extend({
  //     title: z.string(),
  //     description: z.string(),
  //     hideTableOfContent: z.boolean().optional(),
  //     links: linkSchema.optional(),
  //   }),
  // },
})


export const components = defineDocs({
  dir: "content/components",
  // docs: {
  //   schema: frontmatterSchema.extend({
  //     title: z.string(),
  //     description: z.string(),
  //     hideTableOfContent: z.boolean().optional(),
  //     links: linkSchema.optional(),
  //   }),
  // },
})
export default defineConfig({
  mdxOptions: {
    
  },
})
