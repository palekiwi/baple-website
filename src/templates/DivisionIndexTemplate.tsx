import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { DivisionName } from "../types"
import Welcome from "../components/sections/Welcome"

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: DivisionName
      }
      frontmatter: {
        sections: {
          welcome: any
          categories: any
          products: any
        }
      }
    }
  }
}

const DivisionIndexTemplate: React.FC<Props> = ({ data }) => {
  const { welcome } = data.javascriptFrontmatter.frontmatter.sections
  return (
    <Layout domain={data.javascriptFrontmatter.fields.domain}>
      {welcome && (
        <Welcome
          heading={welcome.heading}
          subheading={welcome.subheading}
          logo={welcome.logo.childImageSharp.fluid}
          image={welcome.image.childImageSharp.fluid}
          quotes={welcome.quotes}
        />
      )}
    </Layout>
  )
}

export default DivisionIndexTemplate

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      fields {
        domain
      }
      frontmatter {
        sections {
          welcome {
            heading
            subheading
            quotes {
              quote
              author
            }
            logo {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image {
              childImageSharp {
                fluid(maxWidth: 1920) {
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
