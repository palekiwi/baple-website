import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { ContactInfo, DivisionName } from "../types"
import SEO from "../components/seo"
import ContactPage from "../components/pages/ContactPage"

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: DivisionName
      }
    }
    site: {
      siteMetadata: {
        contact: ContactInfo
      }
    }
  }
}

const ContactPageTemplate: React.FC<Props> = ({ data }) => {
  const domain = data.javascriptFrontmatter.fields.domain
  return (
    <Layout domain={domain}>
      <SEO title="Contact Us" />
      <ContactPage domain={domain} contact={data.site.siteMetadata.contact} />
    </Layout>
  )
}

export default ContactPageTemplate

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      fields {
        domain
      }
    }
    site {
      siteMetadata {
        ...ContactInfoFragment
      }
    }
  }
`
