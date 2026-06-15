import { docs, components } from "fumadocs-mdx:collections/server"
import { loader } from "fumadocs-core/source"

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
})

export const compSource = loader({
  baseUrl: "/components",
  source: components.toFumadocsSource(),
})




