import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { DivisionName } from "../types"
import SEO from "../components/seo"
import SectionImage from "../components/sections/SectionImage"
import ItemSpec from "../components/sections/ItemSpec"
import { FluidObject } from "gatsby-image"
import { Box, Button, Container, Grid } from "@material-ui/core"
import { Link } from "gatsby"
import { homeFromDomain } from "../utils"

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: DivisionName
      }
      frontmatter: {
        title: string
        sections: {
          intro: {
            heading: string
            body: string[]
            image: { childImageSharp: { fluid: FluidObject } }
          }
          categoryList: {
            categoryItems: {
              heading: string
              body: string[]
              image: { childImageSharp: { fluid: FluidObject } }
              spec: {
                heading: string
                params: { key: string; value: string }[]
              }[]
            }[]
          }
        }
      }
    }
  }
}

const CategoryPageTemplate: React.FC<Props> = ({ data }) => {
  const domain = data.javascriptFrontmatter.fields.domain
  const {
    intro,
    categoryList,
  } = data.javascriptFrontmatter.frontmatter.sections
  return (
    <Layout domain={domain}>
      <SEO title={data.javascriptFrontmatter.frontmatter.title} />
      <Container>
        <SectionImage
          image={intro.image.childImageSharp.fluid}
          heading={intro.heading}
          body={intro.body}
        >
          <Link to={`${homeFromDomain(domain)}/contact`}>
            <Button variant="contained" color="primary">
              ¡Contáctanos!
            </Button>
          </Link>
        </SectionImage>
        <Box my={2}>
          <Grid container spacing={2}>
            {categoryList.categoryItems.map(x => (
              <Grid key={x.heading} item xs={12} xl={6}>
                <ItemSpec domain={domain} key={x.heading} item={x} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

export default CategoryPageTemplate

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      fields {
        domain
      }
      frontmatter {
        title
        sections {
          intro {
            heading
            body
            image {
              childImageSharp {
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          categoryList {
            categoryItems {
              heading
              body
              image {
                childImageSharp {
                  fluid(maxWidth: 1400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              spec {
                heading
                params {
                  key
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`
