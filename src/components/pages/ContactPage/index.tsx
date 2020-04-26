import * as React from "react"
import { ContactInfo, DivisionName } from "../../../types"
import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"
import { Container, Grid, Paper, Typography } from "@material-ui/core"
import useStyles from "./styles"
import SectionFeatured from "../../sections/SectionFeatured"
import Logo from "../../LogoSVG"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import HomeIcon from "@material-ui/icons/Home"

interface Props {
  contact: ContactInfo
  domain: DivisionName
}

interface Data {
  background: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const ContactPage: React.SFC<Props> = ({ contact, domain }) => {
  const classes = useStyles()
  const data: Data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { regex: "/contact-us-1.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <SectionFeatured
        gradient="linear-gradient(60deg, #ded, #fef)"
        image={data.background.childImageSharp.fluid}
        before={
          <div className={classes.logo}>
            <Logo domain={domain} />
          </div>
        }
      />
      <section className={classes.section}>
        <Container>
          <div className={classes.details}>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <Paper className={classes.detailPane}>
                  <PhoneIcon className={classes.icon} />
                  <div className={classes.textContent}>
                    <Typography className={classes.detailText} variant="h5">
                      {contact.phone}
                    </Typography>
                  </div>
                </Paper>
              </Grid>

              <Grid item md={4} xs={12}>
                <Paper className={classes.detailPane}>
                  <EmailIcon className={classes.icon} />
                  <div className={classes.textContent}>
                    <Typography className={classes.detailText} variant="h5">
                      {contact.email}
                    </Typography>
                  </div>
                </Paper>
              </Grid>

              <Grid item md={4} xs={12}>
                <Paper className={classes.detailPane}>
                  <HomeIcon className={classes.icon} />
                  <div className={classes.textContent}>
                    <div className={classes.address}>
                      {contact.address.map((y, i) => (
                        <Typography
                          key={i}
                          className={classes.detailText}
                          variant="h5"
                        >
                          {y}
                        </Typography>
                      ))}
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ContactPage
