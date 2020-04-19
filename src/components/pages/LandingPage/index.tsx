import * as React from "react"
import { AppData } from "../../../types"
import DivisionsList from "../../DivisionsList"
import Hero from "../../sections/Hero"
import { graphql, useStaticQuery } from "gatsby"
import { FluidObject } from "gatsby-image"

interface Props {
  divisions: {
    node: {
      frontmatter: {
        division: AppData
      }
    }
  }[]
}

interface Data {
  background: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const LandingTemplate: React.SFC<Props> = ({ divisions }) => {
  const data: Data = useStaticQuery(graphql`
    query {
      background: file(
        relativePath: { regex: "/baple-group-background.jpeg/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Hero image={data.background.childImageSharp.fluid}>
      <DivisionsList divisions={divisions} />
    </Hero>
  )
}

export default LandingTemplate
