import React from "react"
import clsx from "clsx"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import { Link } from "gatsby"
import FacebookIcon from "mdi-material-ui/Facebook"
import TwitterIcon from "mdi-material-ui/Twitter"
import InstagramIcon from "mdi-material-ui/Instagram"
import { FixedObject } from "gatsby-image"
import { ContactInfo } from "../../types"

const divisions = [
  ["/", "Baple Group"],
  ["/plastics", "Baple Plastics"],
  ["/energy", "Baple Energy"],
  ["/metal-packaging", "Baple Metal Packaging"],
  ["/engineering", "Baple Engineering"],
]

import useStyles from "./styles"

interface Props {
  title: string
  logo?: FixedObject
  contact: ContactInfo
}

const Footer: React.FC<Props> = ({ contact, title, logo }) => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <div className={classes.footerAddress}>
        <div className={classes.addressInner}>
          {logo && <img className={classes.logo} src={logo.src} />}
          <div className={classes.contact}>
            <Typography color="inherit" gutterBottom>
              {title}
            </Typography>
            <Typography color="inherit" gutterBottom>
              {contact.contactName}
            </Typography>
            <Typography variant="caption" color="inherit">
              {contact.phone}
            </Typography>
            <Typography variant="caption" color="inherit">
              {contact.email}
            </Typography>
          </div>
        </div>
        <div className={classes.footerDivisions}>
          <Divider />
          {divisions.map(x => (
            <Link to={x[0]} key={x[0]}>
              <Button color="secondary">{x[1]}</Button>
            </Link>
          ))}
        </div>
      </div>
      <div className={clsx(classes.footerSocial, classes.layout)}>
        {contact.socialMedia.facebook && (
          <a href={contact.socialMedia.facebook}>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </a>
        )}
        {contact.socialMedia.instagram && (
          <a href={contact.socialMedia.instagram}>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </a>
        )}
        {contact.socialMedia.twitter && (
          <a href={contact.socialMedia.twitter}>
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </a>
        )}
      </div>
      <div className={clsx(classes.footerCopy, classes.layout)}>
        <Typography variant="caption" color="secondary">
          © {new Date().getFullYear()} Copyright:{" "}
          <span className={classes.white}>Baple Group</span>
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
