import React from "react"
import { useLayoutQuery } from "./query"
import theme from "../../theme"
import { DivisionName } from "../../types"

import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core"
import Header from "../Header"
import useStyles from "./styles"

import Footer from "../Footer"

interface Props {
  domain: DivisionName
}

const Layout: React.FC<Props> = ({ children, domain }) => {
  const classes = useStyles()
  const data = useLayoutQuery()
  const sm = data.site.siteMetadata
  const d = data.javascriptFrontmatter.frontmatter.domains.find(
    x => x.name === domain
  )

  if (!d) return <div>error</div>

  return (
    <div className={classes.layout}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header siteTitle={d.title} />
        <div>
          <main className={classes.main}>{children}</main>
          <Footer
            contact={sm.contact}
            logo={d.logo.childImageSharp.fixed}
            title={d.title}
          />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Layout
