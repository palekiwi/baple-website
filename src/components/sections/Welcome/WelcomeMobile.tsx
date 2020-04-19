import * as React from "react"
import { Typography } from "@material-ui/core"
import { Props } from "./index"
import Hero from "../Hero"
import { useMobileStyles } from "./styles"

const WelcomeMobile: React.SFC<Props> = ({
  heading,
  subheading,
  logo,
  image,
  quotes,
}) => {
  const classes = useMobileStyles()
  return (
    <Hero
      fullHeight
      image={image && image}
      before={logo && <img className={classes.logo} src={logo.src} />}
      after={
        <div className={classes.text}>
          {heading && (
            <Typography className={classes.heading} variant="h4">
              {heading}
            </Typography>
          )}
          {subheading && (
            <Typography className={classes.subheading} variant="h6">
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
      }
    />
  )
}

export default WelcomeMobile
