import * as React from "react"
import Hidden from "@material-ui/core/Hidden"
import WelcomeDesktop from "./WelcomeDesktop"
import WelcomeMobile from "./WelcomeMobile"
import { FluidObject } from "gatsby-image"

export interface Props {
  heading?: string
  subheading?: string
  logo?: FluidObject
  image?: FluidObject
  quotes?: Array<{ quote: string; author: string }>
  gradient?: string
}

const Welcome: React.SFC<Props> = props => (
  <>
    <Hidden smUp>
      <WelcomeMobile {...props} />
    </Hidden>

    <Hidden xsDown>
      <WelcomeDesktop {...props} />
    </Hidden>
  </>
)

export default Welcome
