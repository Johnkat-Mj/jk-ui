import {Paragraph }from "../atoms/paragraph"
import {ConnectOnSocial} from "./connect-on-social"
import { DevolioLogoLink } from "../atoms/devolio-logo-link"

const FooterBlocAbout = () => {
  return (
    <div className="flex flex-col">
      <DevolioLogoLink />
      <div className="pt-8 space-y-6">
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Paragraph>
        <ConnectOnSocial />
      </div>
    </div>
  )
}

export default FooterBlocAbout
