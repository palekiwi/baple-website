import * as React from "react"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import SectionCentered from "../SectionCentered"
import Logo from "../../LogoSVG"
import { DivisionName } from "../../../types"
import useStyles from "./styles"
import { homeFromDomain } from "../../../utils"

interface Props {
  domain: DivisionName
}
const More: React.FC<Props> = ({ domain }) => {
  const classes = useStyles()
  return (
    <SectionCentered
      heading="¿Quieres saber más sobre nosotros?"
      before={
        <div className={classes.logo}>
          <Logo domain={domain} />
        </div>
      }
    >
      <Link to={`${homeFromDomain(domain)}contact`}>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          size="large"
        >
          ¡Contáctanos!
        </Button>
      </Link>
    </SectionCentered>
  )
}

export default More
