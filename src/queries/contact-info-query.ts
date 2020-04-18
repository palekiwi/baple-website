import { graphql } from "gatsby"

export const ContactInfoFragment = graphql`
  fragment ContactInfo on JavascriptFrontmatter {
    frontmatter {
      sections {
        contactUs {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
