const NavItem = (props: { text: string; href: string }) => {
  const { text, href } = props
  return (
    <li>
      <a
        href={href}
        className="text-lg text-foreground ease-linear duration-300 hover:text-primary"
      >
        {text}
      </a>
    </li>
  )
}

export default NavItem
