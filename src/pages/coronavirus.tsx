import React from "react"

import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import More from "../components/sections/More"
import Hero from "../components/sections/Hero"
import { Grid, Button } from "@material-ui/core"
import Img, { FluidObject } from "gatsby-image"
import DownloadIcon from "@material-ui/icons/InsertDriveFile"

type Image = { childImageSharp: { fluid: FluidObject } }
interface Props {
  data: {
    file: {
      publicURL: string
    }
    images: {
      edges: {
        node: Image
      }[]
    }
  }
}
const CoronavirusPage: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <Layout domain="group">
      <SEO title="Coronavirus" />
      <Hero
        heading="Let's fight coronavirus together!"
        subheading="Baple Protective Gear"
      >
        <Button variant="contained" color="primary" href={data.file.publicURL}>
          <DownloadIcon />
          Download Catalog
        </Button>
      </Hero>
      <Grid container spacing={0}>
        {data.images.edges.map((x, i) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={2}>
            <Img fluid={x.node.childImageSharp.fluid} />
          </Grid>
        ))}
      </Grid>
      <More domain="group" />
    </Layout>
  )
}

export default CoronavirusPage

export const query = graphql`
  query CoronavirusPageQuery {
    file(relativePath: { eq: "files/suministro-proyecto-coronavirus.pdf" }) {
      publicURL
    }
    images: allFile(
      filter: {
        extension: { eq: "jpeg" }
        relativePath: { regex: "/coronavirus/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
