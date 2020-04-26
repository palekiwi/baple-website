import { graphql } from "gatsby"

export const AboutFragment = graphql`
  fragment AboutFragment on JavascriptFrontmatter {
    frontmatter {
      sections {
        about1 {
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          body
        }
        about2 {
          image {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          body
        }
      }
    }
  }
`
