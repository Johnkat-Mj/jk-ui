
export const TextBadge = ({ text }: { text: string }) => {
  return (
    <span className="bg-gray-100/40 dark:bg-gray-950 text-fg-muted text-sm px-2 py-px border border-border/50">
      {text}
    </span>
  )
}
