import * as React from "react"
import { Typography } from "@material-ui/core"
import { Props } from "./index"
import Hero from "../Hero"
import { useMobileStyles } from "./styles"
import Logo from "../../LogoSVG"

const WelcomeMobile: React.SFC<Props> = ({
  heading,
  subheading,
  domain,
  image,
  quotes,
}) => {
  const classes = useMobileStyles()
  return (
    <Hero
      fullHeight
      image={image && image}
      before={
        <div className={classes.logo}>
          <Logo domain={domain} />
        </div>
      }
    >
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
    </Hero>
  )
}

export default WelcomeMobile
