import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionCentered from "../SectionCentered"
import useStyles from "./styles"
import { FluidObject } from "gatsby-image"
import { Divider } from "@material-ui/core"

interface Data {
  tsc: { childImageSharp: { fluid: FluidObject } }
  qa: { childImageSharp: { fluid: FluidObject } }
}

const TCS: React.FC<{}> = () => {
  const classes = useStyles()

  const data: Data = useStaticQuery(graphql`
    query {
      tsc: file(relativePath: { regex: "/Baple_Company_TCS_system.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      qa: file(relativePath: { regex: "/Baple_Company_QA_system.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionCentered
        before={<Divider className={classes.divider} />}
        image={data.tsc.childImageSharp.fluid}
      />
      <SectionCentered
        before={<Divider className={classes.divider} />}
        image={data.tsc.childImageSharp.fluid}
      />
    </>
  )
}

export default TCS
