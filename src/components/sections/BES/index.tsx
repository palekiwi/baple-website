import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import HorizontalSplit from "../HorizontalSplit"
import useStyles from "./styles"
import { FluidObject } from "gatsby-image"
import { Button, Typography, Divider } from "@material-ui/core"
import Img from "gatsby-image"

interface Data {
  image: { childImageSharp: { fluid: FluidObject } }
}

const besItems = [
  {
    heading: "Brillante",
    subheading: "Una genial solución para crear su independencia de movilidad.",
  },
  {
    heading: "Economizador",
    subheading: "Permite reducir la factura de transporte.",
  },
  {
    heading: "Sostenibilidad",
    subheading: "Medio de transporte libre de CO2",
  },
]

const BES: React.FC<{}> = () => {
  const classes = useStyles()

  const data: Data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { regex: "/BES-Concept-Black.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <HorizontalSplit
      left={
        <div className={classes.image}>
          <Img fluid={data.image.childImageSharp.fluid} />
        </div>
      }
      right={
        <div className={classes.content}>
          <Typography variant="h3" className={classes.heading}>
            Concepto BES
          </Typography>
          <div className={classes.bes}>
            {besItems.map((x, i) => (
              <div className={classes.besItem} key={i}>
                <Typography variant="h5" color="primary" gutterBottom>
                  {x.heading}
                </Typography>
                <Typography variant="h6">{x.subheading}</Typography>
                {i !== besItems.length - 1 && (
                  <Divider className={classes.divider} />
                )}
              </div>
            ))}
          </div>

          <div className={classes.link}>
            <Button
              to="/energy/contact"
              component={Link}
              variant="contained"
              color="primary"
              size="large"
            >
              ¡Contáctanos!
            </Button>
          </div>
        </div>
      }
    />
  )
}

export default BES
