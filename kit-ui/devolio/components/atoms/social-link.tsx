
export const SocialLink = (props: { href: string, text: string, icon: string }) => {
  return (
    <a href={props.href} rel="noreferrer" target="_blank" className="text-fg ease-linear hover:text-primary size-8 flex items-center justify-center relative after:absolute after:inset-0 after:border after:border-transparent after:opacity-0 hover:after:border-primary hover:after:opacity-100 after:duration-300 after:ease-linear hover:after:scale-100 after:scale-75">
      <span className="sr-only">{props.text}</span>
      <span className={`size-4 iconify ${props.icon}`}></span>
    </a>
  )
}