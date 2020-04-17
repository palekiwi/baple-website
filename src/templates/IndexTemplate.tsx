import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: string
      }
    }
  }
}

const IndexTemplate: React.SFC<Props> = ({ data }) => {
  return (
    <Layout>
      <div>
        <div>Index</div>
        {data.javascriptFrontmatter.fields.domain}
      </div>
    </Layout>
  )
}

export default IndexTemplate

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      fields {
        domain
      }
    }
  }
`
