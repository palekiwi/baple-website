import { useStaticQuery, graphql } from "gatsby"
import { AppData, ContactInfo } from "../../types"

interface Data {
  site: {
    siteMetadata: {
      contact: ContactInfo
    }
  }
  javascriptFrontmatter: { frontmatter: { domains: AppData[] } }
}

type Fn = () => Data

export const useLayoutQuery: Fn = () => {
  return useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
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
      }
      javascriptFrontmatter(fileAbsolutePath: { regex: "/domains/" }) {
        frontmatter {
          domains {
            name
            home
            title
            logo {
              childImageSharp {
                fixed(width: 250) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
}
