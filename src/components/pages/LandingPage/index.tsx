import * as React from "react"
import { AppData } from "../../../types"
import DivisionsList from "../../DivisionsList"
import Hero from "../../sections/Hero"

interface Props {
  divisions: {
    node: {
      frontmatter: {
        division: AppData
      }
    }
  }[]
}

const LandingTemplate: React.SFC<Props> = ({ divisions }) => {
  return (
    <Hero>
      <DivisionsList divisions={divisions} />
    </Hero>
  )
}

export default LandingTemplate
