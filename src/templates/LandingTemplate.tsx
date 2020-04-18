import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import { FluidObject } from "gatsby-image"

interface CategoryLink {
  label: string
  to: string
  image: {
    childImageSharp: { fluid: FluidObject }
  }
}

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: string
      }
      frontmatter: {
        sections: { categories: { categoryLinks: CategoryLink[] } }
      }
    }
  }
}

const LandingTemplate: React.SFC<Props> = ({ data }) => {
  return (
    <Layout domain={data.javascriptFrontmatter.fields.domain}>
      <div>
        <div>Index</div>
        <div>
          {data.javascriptFrontmatter.frontmatter.sections.categories.categoryLinks.map(
            x => (
              <div key={x.label}>
                <div>
                  <img src={x.image.childImageSharp.fluid.src} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  )
}

export default LandingTemplate

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      fields {
        domain
      }
      frontmatter {
        sections {
          categories {
            categoryLinks {
              label
              to
              image {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
