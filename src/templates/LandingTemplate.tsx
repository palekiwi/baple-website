import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { DivisionName } from "../types"
import { Link } from "gatsby"

import { FluidObject } from "gatsby-image"

interface Props {
  data: {
    divisions: {
      edges: {
        node: {
          frontmatter: {
            division: {
              title: string
              to: string
              logo: { text: { childImageSharp: { fluid: FluidObject } } }
            }
          }
        }
      }[]
    }
    javascriptFrontmatter: {
      fields: {
        domain: DivisionName
      }
    }
  }
}

const LandingTemplate: React.SFC<Props> = ({ data }) => {
  return (
    <Layout domain={data.javascriptFrontmatter.fields.domain}>
      <div>
        <div>
          {data.divisions.edges.map(
            ({
              node: {
                frontmatter: { division },
              },
            }) => (
              <div key={division.title}>
                <Link to={division.to}>
                  <div>
                    <img src={division.logo.text.childImageSharp.fluid.src} />
                  </div>
                </Link>
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
    divisions: allJavascriptFrontmatter(
      filter: { fileAbsolutePath: { regex: "/divisions/" } }
    ) {
      edges {
        node {
          frontmatter {
            division {
              name
              home
              title
              logo {
                text {
                  childImageSharp {
                    fluid {
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
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      fields {
        domain
      }
    }
  }
`
