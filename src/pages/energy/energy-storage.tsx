import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SectionCentered from "../../components/sections/SectionCentered"
import { FluidObject } from "gatsby-image"
import { Container } from "@material-ui/core"

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          about: {
            heading: string
            body: string[]
            image: { childImageSharp: { fluid: FluidObject } }
          }
          infographic: {
            heading: string
            image: { childImageSharp: { fluid: FluidObject } }
          }
        }
      }
    }
  }
}

const EnergyStoragePage: React.SFC<Props> = ({ data }) => {
  const { about, infographic } = data.javascriptFrontmatter.frontmatter.sections
  return (
    <Layout domain="energy">
      <Container>
        <SectionCentered
          reverse
          image={about.image.childImageSharp.fluid}
          heading={about.heading}
          body={about.body}
        />
        <SectionCentered image={infographic.image.childImageSharp.fluid} />
      </Container>
    </Layout>
  )
}

export default EnergyStoragePage

export const query = graphql`
  query EnergyStoragePageQuery {
    javascriptFrontmatter(
      fileAbsolutePath: { regex: "/products/energy/energy-storage.ts/" }
    ) {
      frontmatter {
        sections {
          about {
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
          infographic {
            heading
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
