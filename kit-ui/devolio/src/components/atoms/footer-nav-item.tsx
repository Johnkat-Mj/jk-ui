export const FooterNavItem = (props: { href: string; text: string }) => {
  return (
    <li>
      <a
        href={props.href}
        className="text-sm md:text-base transition text-foreground hover:text-primary leading-6"
      >
        {props.text}
      </a>
    </li>
  )
}