
export const ColorifySpan = (props: { text: string; className?: string }) => {
  return (
    <span
      className={`text-transparent bg-clip-text bg-linear-to-tl from-primary to-purple-400 ${props.className}`}
    >
      {props.text}
    </span>
  )
}

