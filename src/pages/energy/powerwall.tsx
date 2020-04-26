import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SectionCentered from "../../components/sections/SectionCentered"
import { FluidObject } from "gatsby-image"
import BES from "../../components/sections/BES"
import More from "../../components/sections/More"
import { Container } from "@material-ui/core"
import SEO from "../../components/seo"

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        title: string
        sections: {
          about1: {
            heading: string
            body: string[]
            image: { childImageSharp: { fluid: FluidObject } }
          }
          about2: {
            heading: string
            body: string[]
            image: { childImageSharp: { fluid: FluidObject } }
          }
          about3: {
            heading: string
            body: string[]
            image: { childImageSharp: { fluid: FluidObject } }
          }
        }
      }
    }
  }
}

const EnergyStoragePage: React.SFC<Props> = ({ data }) => {
  const {
    about1,
    about2,
    about3,
  } = data.javascriptFrontmatter.frontmatter.sections
  return (
    <Layout domain="energy">
      <SEO title={data.javascriptFrontmatter.frontmatter.title} />
      <Container>
        <SectionCentered
          reverse
          image={about1.image.childImageSharp.fluid}
          heading={about1.heading}
          body={about1.body}
        />
        <BES />
        <SectionCentered
          image={about2.image.childImageSharp.fluid}
          heading={about2.heading}
          body={about2.body}
        />
        <SectionCentered
          image={about3.image.childImageSharp.fluid}
          heading={about3.heading}
          body={about3.body}
        />
        <More domain="energy" />
      </Container>
    </Layout>
  )
}

export default EnergyStoragePage

export const query = graphql`
  query PowerwallPageQuery {
    javascriptFrontmatter(
      fileAbsolutePath: { regex: "/products/energy/powerwall.ts/" }
    ) {
      frontmatter {
        title
        sections {
          about1 {
            heading
            body
            image {
              childImageSharp {
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          about2 {
            heading
            body
            image {
              childImageSharp {
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          about3 {
            heading
            body
            image {
              childImageSharp {
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
