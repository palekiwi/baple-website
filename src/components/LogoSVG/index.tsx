import React from "react"
import { DivisionName } from "../../types"
import BapleGroupLogo from "./BapleGroupLogo"
import BapleEngineeringLogo from "./BapleEngineeringLogo"
import BaplePlasticsLogo from "./BaplePlasticsLogo"
import BapleEnergyLogo from "./BapleEnergyLogo"
import BapleMetalPackagingLogo from "./BapleMetalPackagingLogo"

export interface Props {
  domain: DivisionName
  text?: boolean
  width?: string
}

export interface LogoProps {
  width?: string
  text?: boolean
}

const Logo: React.FC<Props> = ({ domain, text = true, ...props }) => {
  switch (domain) {
    case "plastics":
      return <BaplePlasticsLogo text={text} {...props} />
    case "metalPackaging":
      return <BapleMetalPackagingLogo text={text} {...props} />
    case "energy":
      return <BapleEnergyLogo text={text} {...props} />
    case "engineering":
      return <BapleEngineeringLogo text={text} {...props} />
    default:
      return <BapleGroupLogo text={text} {...props} />
  }
}

export default Logo
