import React from "react"
import Drawer from "@material-ui/core/Drawer"
import { Typography, IconButton, List, ListItem } from "@material-ui/core"
import { Link } from "gatsby"
import { AppData, ContactInfo } from "../../types"
import CloseIcon from "@material-ui/icons/Close"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import Logo from "../Logo"

import useStyles from "./styles"

interface Props {
  handleClose: (event: React.KeyboardEvent | React.MouseEvent) => void
  open: boolean
  contact: ContactInfo
  division: AppData
}

const Nav: React.FC<Props> = ({ division: d, contact, open, handleClose }) => {
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
        <div className={classes.logo}>
          <Logo domain={d.name} />
        </div>
        <Typography variant="h5" className={classes.title}>
          {d.title}
        </Typography>
        <List className={classes.list}>
          {d.navLinks.map(x => {
            return x.links ? (
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
                  {x.links.map(y => (
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
        {contact && (
          <div className={classes.contact}>
            <div className={classes.details}>
              <PhoneIcon className={classes.icon} />
              <Typography color="inherit" gutterBottom>
                {contact.phone}
              </Typography>
            </div>
            <div className={classes.details}>
              <EmailIcon className={classes.icon} />
              <Typography color="inherit">{contact.email}</Typography>
            </div>
          </div>
        )}
      </div>
    </Drawer>
  )
}

export default Nav
