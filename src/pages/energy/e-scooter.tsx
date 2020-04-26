import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import About from "../../components/sections/About"
import BES from "../../components/sections/BES"
import { FluidObject } from "gatsby-image"
import { Container, Grid, Box } from "@material-ui/core"
import ItemSpec from "../../components/sections/ItemSpec"

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          about1: {
            heading: string
            body: string[]
            image: { childImageSharp: { fluid: FluidObject } }
          }
          about2: {
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

const EScooterPage: React.SFC<Props> = ({ data }) => {
  const {
    about1,
    about2,
    categoryList,
  } = data.javascriptFrontmatter.frontmatter.sections
  return (
    <Layout domain="energy">
      <Container>
        <About
          image={about1.image.childImageSharp.fluid}
          heading={about1.heading}
          body={about1.body}
        />

        <About
          reverse
          image={about2.image.childImageSharp.fluid}
          heading={about2.heading}
          body={about2.body}
        />
        <BES />
        <Box my={2}>
          <Grid container spacing={2}>
            {categoryList.categoryItems.map(x => (
              <Grid key={x.heading} item xs={12} xl={6}>
                <ItemSpec domain="energy" key={x.heading} item={x} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

export default EScooterPage

export const query = graphql`
  query EScooterPageQuery {
    javascriptFrontmatter(
      fileAbsolutePath: { regex: "/products/energy/e-scooter.ts/" }
    ) {
      frontmatter {
        sections {
          about1 {
            heading
            body
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          about2 {
            heading
            body
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
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
