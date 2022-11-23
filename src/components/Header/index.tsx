import React from "react"
import { Link } from "gatsby"
import Nav from "../Nav"
import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Typography,
  Toolbar,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { AppData, ContactInfo } from "../../types"
import LogoHeader from "../LogoSVG"

import useStyles from "./styles"

interface Props {
  contact: ContactInfo
  division: AppData
}

const Header: React.FC<Props> = ({ division: d, contact }) => {
  const classes = useStyles()
  const [state, setState] = React.useState(false)
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    setState(open)
  }

  return (
    <header>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <Link to={"/"}>
            <div className={classes.brand}>
              <div className={classes.logo}>
                <LogoHeader domain={d.name} text={false} />
              </div>
              <Hidden xsDown>
                <Typography color="primary" className={classes.title}>
                  {d.title}
                </Typography>
              </Hidden>
            </div>
          </Link>
          <div className={classes.grow} />
          <Hidden smDown>
            <div>
              {d.navLinks.map((x) => (
                <Link key={x.label} to={x.to}>
                  <Button className={classes.link}>{x.label}</Button>
                </Link>
              ))}
            </div>
          </Hidden>
          <IconButton color="primary" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Nav
        contact={contact}
        division={d}
        open={state}
        handleClose={toggleDrawer(false)}
      />
    </header>
  )
}

export default Header
