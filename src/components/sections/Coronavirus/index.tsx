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
    <section style={{ background: "#fff" }} className={classes.section}>
      <div className={classes.images}>
        <Grid container spacing={0} alignItems="center">
          {data.javascriptFrontmatter.frontmatter.sections.gridList.items.map(
            (x, i) => (
              <Grid
                item
                key={i}
                xs={6}
                sm={4}
                md={4}
                lg={2}
                className={classes.item}
              >
                <Img fluid={x.image.childImageSharp.fluid} />
              </Grid>
            )
          )}
        </Grid>
        <div className={classes.content}>
          <div className={classes.overlay} />
          <div className={classes.text}>
            <Container>
              <div>
                <Typography className={classes.heading} variant="h4">
                  Let's fight COVID-19 toghter!
                </Typography>
                <Typography className={classes.subheading} variant="h6">
                  Equipo de Protección. Envíos a nivel mundial
                </Typography>
                <Typography className={classes.compras} variant="subtitle1">
                  Compras con garantia legal
                </Typography>
              </div>
              <Grid container justify="center" spacing={1}>
                <Grid item>
                  <Button
                    className={classes.download}
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
                    className={classes.more}
                    variant="contained"
                    to="/coronavirus"
                    component={Link}
                  >
                    Aprende más
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coronavirus
