import React from "react"
import Drawer from "@material-ui/core/Drawer"
import { Typography, IconButton, List, ListItem } from "@material-ui/core"
import { Link } from "gatsby"
import CloseIcon from "@material-ui/icons/Close"

import useStyles from "./styles"

interface Props {
  handleClose: () => void
  open: boolean
  title: string
}

export interface NavLink {
  to: string
  label: string
  sublinks?: NavLink[]
}

const navLinks: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/", label: "Products", sublinks: [{ to: "/", label: "Subproduct" }] },
]

const Nav: React.FC<Props> = ({ title, open, handleClose }) => {
  const classes = useStyles()
  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <div
        tabIndex={0}
        role="button"
        onClick={handleClose}
        onKeyDown={handleClose}
        className={classes.nav}
      >
        <IconButton className={classes.close}>
          <CloseIcon color="secondary" />
        </IconButton>
        <Typography variant="subtitle1" className={classes.title}>
          {title}
        </Typography>
        <List className={classes.list}>
          {navLinks.map(x => {
            return x.sublinks ? (
              <ListItem key={x.to} className={classes.listItem}>
                <List className={classes.list}>
                  <ListItem button className={classes.listItem}>
                    <Link to={x.to} className={classes.link}>
                      <Typography
                        variant="body1"
                        color="inherit"
                        className={classes.linkText}
                      >
                        {x.label}
                      </Typography>
                    </Link>
                  </ListItem>
                  {x.sublinks.map(y => (
                    <ListItem button key={y.to} className={classes.listItem}>
                      <Link to={y.to} className={classes.linkNested}>
                        <Typography
                          variant="body1"
                          color="inherit"
                          className={classes.linkNestedText}
                        >
                          {y.label}
                        </Typography>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </ListItem>
            ) : (
              <ListItem key={x.to} button className={classes.listItem}>
                <Link to={x.to} className={classes.link}>
                  <Typography
                    variant="body1"
                    color="inherit"
                    className={classes.linkText}
                  >
                    {x.label}
                  </Typography>
                </Link>
              </ListItem>
            )
          })}
        </List>
      </div>
    </Drawer>
  )
}

export default Nav
