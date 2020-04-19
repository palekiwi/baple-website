import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { DivisionName, CategoriesSection } from "../types"
import Categories from "../components/sections/Categories"
import SEO from "../components/seo"
import Hero from "../components/sections/Hero"
import { Container } from "@material-ui/core"
import More from "../components/sections/More"

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: DivisionName
      }
      frontmatter: {
        title: string
        sections: {
          categories: CategoriesSection
        }
      }
    }
  }
}

const DivisionIndexTemplate: React.FC<Props> = ({ data }) => {
  const { categories } = data.javascriptFrontmatter.frontmatter.sections
  const domain = data.javascriptFrontmatter.fields.domain
  return (
    <Layout domain={domain}>
      <SEO title={data.javascriptFrontmatter.frontmatter.title} />
      {categories && (
        <Hero heading={categories.heading}>
          <Container>
            <Categories
              heading={categories.heading}
              subheading={categories.subheading}
              image={categories.image}
              categoryLinks={categories.categoryLinks}
            />
          </Container>
        </Hero>
      )}
      <More domain={domain} />
    </Layout>
  )
}

export default DivisionIndexTemplate

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      fields {
        domain
      }
      frontmatter {
        title
        sections {
          categories {
            heading
            categoryLinks {
              label
              image {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              to
            }
          }
        }
      }
    }
  }
`
