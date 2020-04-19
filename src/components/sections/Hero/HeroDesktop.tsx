import * as React from "react"
import { Container, Typography } from "@material-ui/core"
import clsx from "clsx"
import Image from "gatsby-image"
import { useDesktopStyles } from "./styles"
import { Props } from "./index"

const HeroDesktop: React.SFC<Props> = ({
  before,
  children,
  heading,
  subheading,
  image,
  fullHeight,
  padding,
}) => {
  const classes = useDesktopStyles({ padding })
  return (
    <section
      className={clsx(classes.section, fullHeight && classes.fullHeight)}
    >
      <div className={classes.image}>
        {image && <Image className={classes.img} fluid={image} />}
      </div>
      <div className={classes.container}>
        <div className={classes.overlay} />
        {before && before}
        <Container>
          <div className={classes.header}>
            {heading && (
              <Typography variant="h2" className={classes.heading}>
                {heading}
              </Typography>
            )}
            {subheading && (
              <Typography variant="h6" className={classes.subheading}>
                {subheading}
              </Typography>
            )}
          </div>
          {children}
        </Container>
      </div>
    </section>
  )
}

export default HeroDesktop
