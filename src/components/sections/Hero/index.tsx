import * as React from "react"
import Hidden from "@material-ui/core/Hidden"
import HeroDesktop from "./HeroDesktop"
import HeroMobile from "./HeroMobile"
import { FluidObject } from "gatsby-image"

export interface Props {
  image?: FluidObject
  gradient?: string
  heading?: string
  padding?: number
  subheading?: string
  before?: React.ReactNode
  after?: React.ReactNode
  fullHeight?: boolean
}

const Hero: React.SFC<Props> = props => (
  <>
    <Hidden smUp>
      <HeroMobile {...props} />
    </Hidden>

    <Hidden xsDown>
      <HeroDesktop {...props} />
    </Hidden>
  </>
)

export default Hero
