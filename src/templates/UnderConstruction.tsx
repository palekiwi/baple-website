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

const UnderConstructionTemplate: React.SFC<Props> = ({ data }) => {
  return (
    <Layout domain="group">
      <div>
        <div>Under Construction</div>
        {data.javascriptFrontmatter.fields.domain}
      </div>
    </Layout>
  )
}

export default UnderConstructionTemplate

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      fields {
        domain
      }
    }
  }
`
