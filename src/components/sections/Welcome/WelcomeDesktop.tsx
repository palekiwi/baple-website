import * as React from "react"
import { Grid, Typography } from "@material-ui/core"
import Hero from "../../sections/Hero"
import { Props } from "./index"
import { useDesktopStyles } from "./styles"
import Logo from "../../LogoSVG"

const WelcomeDesktop: React.SFC<Props> = ({
  heading,
  subheading,
  image,
  domain,
  quotes,
}) => {
  const classes = useDesktopStyles()
  return (
    <Hero fullHeight image={image && image}>
      <div className={classes.section}>
        <Grid container>
          <Grid item xs={12} md={4} className={classes.logoPane}>
            <div className={classes.logo}>
              <Logo domain={domain} />
            </div>
          </Grid>
          <Grid item xs={12} md={8} className={classes.textPane}>
            <div className={classes.text}>
              {heading && (
                <Typography
                  className={classes.heading}
                  variant="h3"
                  component="h1"
                >
                  {heading}
                </Typography>
              )}
              {subheading && (
                <Typography className={classes.subheading} variant="h4">
                  {subheading}
                </Typography>
              )}
              {quotes && (
                <div className={classes.quotes}>
                  {quotes.map((q, i) => (
                    <blockquote key={i} className={classes.blockquote}>
                      <Typography variant="h5" className={classes.quote}>
                        {q.quote}
                      </Typography>
                      <Typography className={classes.author} variant="h6">
                        {q.author}
                      </Typography>
                    </blockquote>
                  ))}
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </Hero>
  )
}

export default WelcomeDesktop
