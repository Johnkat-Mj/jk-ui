import { DevolioLogoLink } from "../atoms/devolio-logo-link"
import { ConnectOnSocial } from "../elements/connect-on-social"
import { FooterBlocNav } from "../elements/footer-blocnav"


const footerNavitems = [
  {
    id: 1,
    title: "Services",
    navitems: [
      {
        id: 1,
        href: "/",
        text: "Web Development",
      },
      {
        id: 2,
        href: "/#about-us",
        text: "UI/UX Design",
      },
      {
        id: 3,
        href: "/#portfolio",
        text: "Mobile Apps",
      },
      {
        id: 4,
        href: "/#blog",
        text: "Digital Marketing",
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    navitems: [
      {
        id: 1,
        href: "#",
        text: "About Us",
      },
      {
        id: 2,
        href: "#",
        text: "Our Process",
      },
      {
        id: 3,
        href: "#",
        text: "Case Studies",
      },
      {
        id: 4,
        href: "#",
        text: "Careers",
      },
    ],
  },
]

export const SiteFooter = () => {
  return (
    <footer className="pt-24 md:pt-32 bg-box flex flex-col">
      <div
        className="w-full max-w-7xl px-5 sm:px-10 xl:px-14 mx-auto grid xl:grid-cols-3 gap-12 lg:gap-10 xl:gap-14 pb-16 md:pb-20"
      >
        <div className="flex flex-col">
          <DevolioLogoLink />
          <div className="pt-8 space-y-6">
            <p className="text-foreground md:text-lg leading-6">
              Full-service digital agency delivering innovative solutions that drive business growth and digital transformation.
            </p>
            <ConnectOnSocial />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
          {
            footerNavitems.map(footerBlock => <FooterBlocNav key={footerBlock.id} {...footerBlock} />)
          }
          <div className="col-span-2 sm:col-span-1">
            <div>
              <h2 className="font-semibold text-foreground md:text-lg">Contact Us</h2>
              <ul
                role="list"
                className="pt-6 flex flex-col gap-4"
              >
                <li>
                  <a
                    className="text-sm md:text-base transition text-foreground hover:text-primary leading-6"
                    href="#">
                    hello@agency.com
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm md:text-base transition text-foreground hover:text-primary leading-6"
                    href="tel:+243972444966">
                    + (243) 97 244 49 66
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 bg-background">
        <div
          className="w-full max-w-7xl px-5 sm:px-10 xl:px-14 mx-auto flex items-center justify-between gap-8 text-foreground"
        >
          <div>
            © {new Date().getFullYear()} Creative Digital Agency. All rights reserved.
          </div>
          <div>
            Designed by <a
              href="https://x.com/johnkat_Mj"
              rel="noreferrer"
              target="_blank"
              className="text-primary">
              Sky Agency Team
            </a>.
          </div>
        </div>
      </div>
    </footer>
  )
}
