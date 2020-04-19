import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FixedObject } from "gatsby-image"

interface LogoImage {
  childImageSharp: {
    fixed: FixedObject
  }
}

type Data = {
  group: LogoImage
}

const LogoHeader: React.FC<{}> = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      group: file(
        relativePath: { eq: "logos/NoText/baple-group-no-text.png" }
      ) {
        childImageSharp {
          fixed(width: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      loading="eager"
      fadeIn={false}
      fixed={data.group.childImageSharp.fixed}
    />
  )
}

export default LogoHeader
