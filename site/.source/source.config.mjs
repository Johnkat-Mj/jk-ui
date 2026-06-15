// source.config.ts
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
var docs = defineDocs({
  dir: "content/docs"
  // docs: {
  //   schema: frontmatterSchema.extend({
  //     title: z.string(),
  //     description: z.string(),
  //     hideTableOfContent: z.boolean().optional(),
  //     links: linkSchema.optional(),
  //   }),
  // },
});
var components = defineDocs({
  dir: "content/components"
  // docs: {
  //   schema: frontmatterSchema.extend({
  //     title: z.string(),
  //     description: z.string(),
  //     hideTableOfContent: z.boolean().optional(),
  //     links: linkSchema.optional(),
  //   }),
  // },
});
var source_config_default = defineConfig({
  mdxOptions: {}
});
export {
  components,
  source_config_default as default,
  docs
};
