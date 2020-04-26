import * as React from "react"
import Typography from "@material-ui/core/Typography"
import clsx from "clsx"
import Img, { FluidObject } from "gatsby-image"
import useStyles from "./styles"

export interface Props {
  image?: FluidObject
  gradient?: string
  heading?: string
  subheading?: string
  text?: string[]
  before?: React.ReactNode
  fullHeight?: boolean
}

const SectionFeatured: React.FC<Props> = ({
  before,
  children,
  gradient,
  heading,
  subheading,
  text,
  image,
  fullHeight,
}) => {
  const classes = useStyles()
  return (
    <section
      className={clsx(classes.section, fullHeight && classes.fullHeight)}
    >
      <div className={classes.image}>
        {image && <Img className={classes.img} fluid={image} />}
      </div>
      <div
        style={{
          background: `${gradient ? gradient : ""}`,
        }}
        className={classes.overlay}
      />
      <div className={classes.content}>
        {before && before}
        <div className={classes.header}>
          {heading && (
            <Typography variant="h5" className={classes.heading}>
              {heading}
            </Typography>
          )}
          {subheading && (
            <Typography variant="h6" className={classes.subheading}>
              {subheading}
            </Typography>
          )}
        </div>
        {text && (
          <div className={classes.text}>
            {text.map((t, i) => (
              <Typography
                key={i}
                variant="body2"
                color="inherit"
                className={classes.paragraph}
              >
                {t}
              </Typography>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default SectionFeatured
