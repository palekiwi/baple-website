import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { DivisionName } from "../types"
import SEO from "../components/seo"
import About from "../components/sections/About"
import Advantages from "../components/sections/Advantages"
import TCS from "../components/sections/TCS"
import { FluidObject } from "gatsby-image"
import { Container } from "@material-ui/core"

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: DivisionName
      }
      frontmatter: {
        sections: {
          about1: {
            image: { childImageSharp: { fluid: FluidObject } }
            heading: string
            body: string[]
          }
          about2: {
            image: { childImageSharp: { fluid: FluidObject } }
            body: string[]
          }
        }
      }
    }
  }
}

const AboutPageTemplate: React.FC<Props> = ({ data }) => {
  const domain = data.javascriptFrontmatter.fields.domain
  const { about1, about2 } = data.javascriptFrontmatter.frontmatter.sections
  return (
    <Layout domain={domain}>
      <SEO title="Contact Us" />
      <Container>
        {about1 && (
          <About
            logo
            domain={domain}
            image={about1.image.childImageSharp.fluid}
            heading={about1.heading}
            body={about1.body}
          />
        )}
        {about2 && (
          <About
            domain={domain}
            reverse
            image={about2.image.childImageSharp.fluid}
            body={about2.body}
          />
        )}
        <Advantages />
        <TCS />
      </Container>
    </Layout>
  )
}

export default AboutPageTemplate

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      fields {
        domain
      }
      ...AboutFragment
    }
  }
`
