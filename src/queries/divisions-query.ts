import { graphql } from "gatsby"

export const DivisionsFragment = graphql`
  fragment DivisionsFragment on JavascriptFrontmatterEdge {
    node {
      frontmatter {
        division {
          name
          home
          title
          navLinks {
            to
            label
            links {
              to
              label
            }
          }
          logo {
            text {
              childImageSharp {
                fluid(maxWidth: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            notext {
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
`
