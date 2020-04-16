import React from "react"
import { Link as MuiLink, LinkProps } from "@material-ui/core"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"

type Props = GatsbyLinkProps<{}> & LinkProps

const Link: React.FC<Props> = props => {
  return <MuiLink component={GatsbyLink} {...props} />
}
export default Link
