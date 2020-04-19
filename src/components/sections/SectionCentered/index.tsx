import * as React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import { FluidObject } from "gatsby-image"
import useStyles from "./styles"

interface Props {
  reverse?: boolean
  image?: FluidObject
  gradient?: string
  heading?: string
  link?: { label: string; to: string }
  subheading?: string
  body?: string[]
  before?: React.ReactNode
}

const SectionCentered: React.SFC<Props> = ({
  before,
  heading,
  link,
  subheading,
  body,
  image,
  reverse,
  children,
}) => {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Grid
        container
        className={classes.pane}
        direction={reverse ? "column-reverse" : "column"}
      >
        <Grid item xs={12}>
          <div className={classes.content}>
            {before && <div className={classes.before}>{before}</div>}
            {heading && (
              <Typography variant="h3" className={classes.heading}>
                {heading}
              </Typography>
            )}
            {subheading && (
              <Typography variant="h6" className={classes.subheading}>
                {subheading}
              </Typography>
            )}
            {body && (
              <div className={classes.text}>
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
            {link && (
              <div className={classes.link}>
                <Link to={link.to}>
                  <Button variant="outlined">{link.label}</Button>
                </Link>
              </div>
            )}
            {children}
          </div>
        </Grid>
        {image && (
          <Grid item xs={12} className={classes.pane}>
            <div className={classes.image}>
              <Img fluid={image} />
            </div>
          </Grid>
        )}
      </Grid>
    </section>
  )
}

export default SectionCentered
