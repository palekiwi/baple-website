import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import LandingPage from "../components/pages/LandingPage"
import { AppData } from "../types"

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
  }
}
const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout domain="group">
      <SEO title="Baple Group" />
      <LandingPage divisions={data.divisions.edges} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    divisions: allJavascriptFrontmatter(
      filter: {
        fileAbsolutePath: { regex: "/divisions/" }
        frontmatter: { division: { index: { ne: 0 } } }
      }
      sort: { fields: frontmatter___division___index, order: ASC }
    ) {
      edges {
        ...DivisionsFragment
      }
    }
  }
`
