import { useStaticQuery, graphql } from "gatsby"
import { AppData, ContactInfo } from "../../types"

interface Data {
  site: {
    siteMetadata: {
      contact: ContactInfo
    }
  }
  allJavascriptFrontmatter: {
    edges: { node: { frontmatter: { division: AppData } } }[]
  }
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
      allJavascriptFrontmatter(
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
                      fixed(width: 250) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
}
