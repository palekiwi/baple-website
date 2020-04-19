import * as React from "react"
import { ContactInfo, DivisionName } from "../../../types"
import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"
import { Container, Grid, Paper, Typography } from "@material-ui/core"
import useStyles from "./styles"
import SectionFeatured from "../../sections/SectionFeatured"
import Logo from "../../Logo"
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
      <SectionImage
        reverse={reverse}
        heading={heading}
        subheading={subheading}
        body={body}
        image={image}
        before={
          logo && (
            <Img className={classes.logo} fluid={logo.childImageSharp.fluid} />
          )
        }
      />
    </div>
  )
}

export default ContactPage
