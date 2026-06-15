import { ReactNode } from "react"

export const SectionTitle = (props: {
  htext: string
  boxClassName?: string
  children: ReactNode
}) => {
  const { htext, boxClassName, children } = props
  return (
    <div className={`${boxClassName}`}>
      <span className="text-primary font-medium">{htext}</span>
      <h2 className="text-2xl md:text-3xl lg:text-4xl/tight xl:text-5xl/tight text-balance font-semibold text-fg-title mt-6">
        {children}
      </h2>
    </div>
  )
}

