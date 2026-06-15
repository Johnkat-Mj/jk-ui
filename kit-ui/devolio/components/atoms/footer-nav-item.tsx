import Link from "next/link";


export const FooterNavItem = (props: { href: string; text: string }) => {
  return (
    <li>
      <Link
        href={props.href}
        className="text-sm md:text-base transition text-fg hover:text-primary leading-6"
      >
        {props.text}
      </Link>
    </li>
  )
}