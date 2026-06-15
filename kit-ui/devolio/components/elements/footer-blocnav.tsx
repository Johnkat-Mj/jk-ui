import { FooterNavItem } from "../atoms/footer-nav-item"

type Props = {
  title: string
  navitems: {
    id: number
    href: string
    text: string
  }[]
}
export const FooterBlocNav = (props: Props) => {
  const { title, navitems } = props
  return (
    <div>
      <h2 className="font-semibold text-fg-title md:text-lg">{title}</h2>
      <ul role="list" className="pt-6 flex flex-col gap-4">
        {navitems.map((navitem) => (
          <FooterNavItem key={navitem.id} {...navitem} />
        ))}
      </ul>
    </div>
  )
}
