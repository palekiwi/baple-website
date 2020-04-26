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
        sort: { fields: frontmatter___division___index, order: ASC }
      ) {
        edges {
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
                      fixed(width: 250) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                  notext {
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
