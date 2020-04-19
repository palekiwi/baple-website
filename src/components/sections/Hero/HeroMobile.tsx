import * as React from "react"
import Image from "gatsby-image"
import { Props } from "./index"
import { useMobileStyles } from "./styles"
import { Typography } from "@material-ui/core"

const HeroMobile: React.SFC<Props> = ({
  before,
  heading,
  subheading,
  image,
  children,
}) => {
  const classes = useMobileStyles()
  return (
    <section className={classes.section}>
      <div className={classes.header}>
        {image && (
          <div className={classes.image}>
            <Image className={classes.img} fluid={image} />
          </div>
        )}
        <div className={classes.headerContent}>
          <div className={classes.container}>
            <div className={classes.overlay} />
            {before && before}
            <Typography className={classes.heading} variant="h2">
              {heading}
            </Typography>
            <Typography variant="h5">{subheading}</Typography>
          </div>
        </div>
      </div>
      <div className={classes.content}>{children}</div>
    </section>
  )
}

export default HeroMobile
