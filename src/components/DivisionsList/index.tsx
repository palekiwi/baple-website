import React from "react"
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core"
import { Link } from "gatsby"
import { AppData } from "../../types"

import useStyles from "./styles"

interface Props {
  divisions: { node: { frontmatter: { division: AppData } } }[]
}

const DivisionsList: React.FC<Props> = ({ divisions }) => {
  console.log(divisions)
  const classes = useStyles()
  return (
    <Grid container spacing={3} className={classes.cards}>
      {divisions
        .filter(x => x.node.frontmatter.division.home !== "/")
        .map(({ node: { frontmatter: { division } } }) => (
          <Grid key={division.home} item xs={12} sm={6} md={3}>
            <Link to={division.home}>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardAction}>
                  <CardContent className={classes.content}>
                    <img
                      className={classes.image}
                      src={division.logo.text.childImageSharp.fluid.src}
                    />
                    <Typography color="inherit" className={classes.label}>
                      {division.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
    </Grid>
  )
}

export default DivisionsList
