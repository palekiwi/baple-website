import React from "react"
import clsx from "clsx"
import { Button, Divider, IconButton, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import FacebookIcon from "mdi-material-ui/Facebook"
import TwitterIcon from "mdi-material-ui/Twitter"
import InstagramIcon from "mdi-material-ui/Instagram"
import { AppData, ContactInfo, DivisionName } from "../../types"
import Logo from "../../components/LogoSVG"

import useStyles from "./styles"

interface Props {
  title: string
  domain: DivisionName
  contact: ContactInfo
  divisions: { node: { frontmatter: { division: AppData } } }[]
}

const Footer: React.FC<Props> = ({ contact, title, divisions, domain }) => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <div className={classes.footerAddress}>
        <div className={classes.addressInner}>
          <div className={classes.logo}>
            <Logo domain={domain} />
          </div>
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
          {divisions.map(({ node: { frontmatter: { division } } }) => (
            <Link to={division.home} key={division.home}>
              <Button color="secondary">{division.title}</Button>
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
