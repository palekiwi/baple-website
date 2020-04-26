import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { DivisionName } from "../../types"
import { FluidObject } from "gatsby-image"

interface Props {
  domain: DivisionName
}

interface LogoImage {
  childImageSharp: {
    fluid: FluidObject
  }
}

type Data = { [Key in DivisionName]: string }

const Logo: React.FC<Props> = ({ domain }) => {
  const data = useStaticQuery(graphql`
    query {
      group: file(relativePath: { eq: "logos/baple-group-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plastics: file(relativePath: { eq: "logos/baple-plastics-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      metalPackaging: file(
        relativePath: { eq: "logos/baple-metal-packaging-logo.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      energy: file(relativePath: { eq: "logos/baple-energy-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      engineering: file(
        relativePath: { eq: "logos/baple-engineering-logo.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img loading="eager" fluid={data[domain].childImageSharp.fluid} />
}

export default Logo
