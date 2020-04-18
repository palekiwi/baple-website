import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { DivisionName, AppData } from "../types"
import DivisionsList from "../components/DivisionsList"
import { Link } from "gatsby"

interface Props {
  data: {
    divisions: {
      edges: {
        node: {
          frontmatter: {
            division: AppData
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
        <DivisionsList divisions={data.divisions.edges} />
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
                    fluid(maxWidth: 250) {
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
