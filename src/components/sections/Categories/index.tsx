import React from "react"
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core"
import { Link } from "gatsby"
import { CategoriesSection } from "../../../types"

import useStyles from "./styles"

type Props = CategoriesSection

const Categories: React.FC<Props> = props => {
  const classes = useStyles()
  return (
    <Grid container spacing={3} className={classes.cards}>
      {props.categoryLinks.map(x => (
        <Grid key={x.to} item xs={12} sm={6} md={4} lg={3}>
          <Link to={x.to}>
            <Card className={classes.card}>
              <CardActionArea className={classes.cardAction}>
                <CardContent className={classes.content}>
                  <img
                    className={classes.image}
                    src={x.image.childImageSharp.fluid.src}
                  />
                  <Typography color="inherit" className={classes.label}>
                    {x.label}
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

export default Categories
