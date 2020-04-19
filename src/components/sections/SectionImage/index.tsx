import * as React from "react"
import HorizontalSplit from "../HorizontalSplit"
import Typography from "@material-ui/core/Typography"
import Img, { FluidObject } from "gatsby-image"
import useStyles from "./styles"

export interface Props {
  reverse?: boolean
  image?: FluidObject
  heading?: string
  subheading?: string
  body?: string[]
  before?: React.ReactNode
}

const SectionImage: React.FC<Props> = ({
  before,
  children,
  reverse,
  heading,
  subheading,
  body,
  image,
}) => {
  const classes = useStyles()
  return (
    <HorizontalSplit
      reverse={reverse}
      left={image && <Img className={classes.image} fluid={image} />}
      right={
        <div className={classes.content}>
          {before && <div className={classes.before}>{before}</div>}
          {heading && (
            <Typography
              color="primary"
              variant="h4"
              className={classes.heading}
            >
              {heading}
            </Typography>
          )}
          {subheading && (
            <Typography variant="h6" className={classes.subheading}>
              {subheading}
            </Typography>
          )}
          {body && (
            <div className={classes.body}>
              {body.map((t, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  className={classes.paragraph}
                >
                  {t}
                </Typography>
              ))}
            </div>
          )}
          <div className={classes.after}>{children}</div>
        </div>
      }
    />
  )
}

export default SectionImage
