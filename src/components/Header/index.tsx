import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Nav from "../Nav"
import { AppBar, IconButton, Typography, Toolbar } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

import useStyles from "./styles"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  const classes = useStyles()
  const [menu, setMenu] = React.useState(false)
  const closeMenu = () => setMenu(false)

  return (
    <header>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <Link to="/">
            <Typography
              variant="subtitle1"
              color="primary"
              className={classes.title}
            >
              {siteTitle}
            </Typography>
          </Link>
          <div className={classes.grow} />
          <IconButton color="primary" onClick={() => setMenu(!menu)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Nav title={siteTitle} open={menu} handleClose={closeMenu} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
