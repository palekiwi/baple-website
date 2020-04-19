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
  const { contact } = data.site.siteMetadata
  const div = data.allJavascriptFrontmatter.edges.find(
    x => x.node.frontmatter.division.name === domain
  )

  if (!div) return <div>error</div>

  return (
    <div className={classes.layout}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header division={div.node.frontmatter.division} contact={contact} />
        <main className={classes.main}>{children}</main>
        <Footer
          divisions={data.allJavascriptFrontmatter.edges}
          contact={contact}
          logo={div.node.frontmatter.division.logo.text.childImageSharp.fixed}
          title={div.node.frontmatter.division.title}
        />
      </ThemeProvider>
    </div>
  )
}

export default Layout
