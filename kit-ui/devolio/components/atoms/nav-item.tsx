import Link from "next/link";


const NavItem = (props: { text: string; href: string }) => {
  const { text, href } = props
  return (
    <li>
      <Link
        href={href}
        className="text-lg text-fg ease-linear duration-300 hover:text-primary"
      >
        {text}
      </Link>
    </li>
  )
}

export default NavItem
