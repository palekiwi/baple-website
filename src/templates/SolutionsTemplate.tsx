import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { DivisionName, CategoriesSection, ProductsSection } from "../types"
import Categories from "../components/sections/Categories"
import Products from "../components/sections/Products"
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
          products: ProductsSection
        }
      }
    }
  }
}

const DivisionIndexTemplate: React.FC<Props> = ({ data }) => {
  const {
    categories,
    products,
  } = data.javascriptFrontmatter.frontmatter.sections
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
      {products && (
        <Container>
          <Products products={products.productList} />
        </Container>
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
          products {
            productList {
              heading
              subheading
              body
              link {
                to
                label
              }
              image {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
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
