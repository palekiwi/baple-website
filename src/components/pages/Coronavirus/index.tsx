import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import useStyles from "./styles"
import Img, { FluidObject } from "gatsby-image"
import { Grid, Container, Button, Typography } from "@material-ui/core"
import DownloadIcon from "@material-ui/icons/InsertDriveFile"
import Section from "../../sections/SectionFeatured"

type Image = { childImageSharp: { fluid: FluidObject } }

interface Data {
  file: {
    publicURL: string
  }
  javascriptFrontmatter: {
    frontmatter: {
      sections: {
        gridList: {
          items: { heading: string; image: Image }[]
        }
      }
    }
  }
  image: Image
}

const Coronavirus: React.FC<{}> = () => {
  const classes = useStyles()

  const data: Data = useStaticQuery(graphql`
    query {
      javascriptFrontmatter(
        fileAbsolutePath: { regex: "/products/coronavirus/promo.ts/" }
      ) {
        frontmatter {
          sections {
            gridList {
              items {
                heading
                image {
                  childImageSharp {
                    fluid(maxWidth: 1200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      file(relativePath: { eq: "files/suministro-proyecto-coronavirus.pdf" }) {
        publicURL
      }
    }
  `)
  return (
    <section style={{ background: "#fff" }}>
      <Container>
        <Section
          heading="Let's fight COVID-19 together!"
          subheading="Baple Protective Equipment"
        >
          <Grid container justify="center" spacing={1}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                href={data.file.publicURL}
              >
                <DownloadIcon />
                Download Catalog
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                to="/coronavirus"
                component={Link}
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Section>
      </Container>
      <Grid container spacing={0}>
        {data.javascriptFrontmatter.frontmatter.sections.gridList.items.map(
          (x, i) => (
            <Grid item key={i} xs={12} sm={4} md={4} lg={2}>
              <div className={classes.item}>
                <Img fluid={x.image.childImageSharp.fluid} />
                <div className={classes.itemHeading}>
                  <Typography>{x.heading}</Typography>
                </div>
              </div>
            </Grid>
          )
        )}
      </Grid>
    </section>
  )
}

export default Coronavirus
