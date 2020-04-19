import { graphql } from "gatsby"

export const ContactInfoFragment = graphql`
  fragment ContactInfoFragment on SiteSiteMetadata {
    contact {
      email
      phone
      address
      socialMedia {
        facebook
        twitter
        instagram
      }
    }
  }
`
