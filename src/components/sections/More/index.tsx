import * as React from "react"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import SectionCentered from "./SectionCentered"
import Image from "gatsby-image"

const More: React.SFC<Props> = ({ heading, image, logo, link, classes }) => (
  <SectionCentered
    heading={heading}
    before={
      logo && (
        <div className={classes.logo}>
          <Image fluid={logo.childImageSharp.fluid} />
        </div>
      )
    }
    after={
      <Link to={link.to}>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          size="large"
        >
          {link.label}
        </Button>
      </Link>
    }
  />
)

export default withStyles(styles)(More)
