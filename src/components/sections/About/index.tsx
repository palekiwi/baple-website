import * as React from "react"
import SectionImage from "../SectionImage"
import Logo from "../../LogoSVG"
import { DivisionName } from "../../../types"
import useStyles from "./styles"
import { FluidObject } from "gatsby-image"

interface Props {
  domain?: DivisionName
  logo?: boolean
  reverse?: boolean
  heading?: string
  subheading?: string
  image?: FluidObject
  body?: string[]
}

const About: React.FC<Props> = ({
  domain,
  reverse,
  logo,
  heading,
  subheading,
  image,
  body,
}) => {
  const classes = useStyles()
  return (
    <SectionImage
      reverse={reverse}
      heading={heading}
      subheading={subheading}
      body={body}
      image={image}
      before={
        logo && (
          <div className={classes.logo}>
            <Logo domain={domain} />
          </div>
        )
      }
    />
  )
}

export default About
