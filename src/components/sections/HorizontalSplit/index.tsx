import * as React from "react"
import { Grid } from "@material-ui/core"
import useStyles from "./styles"

interface Props {
  left: React.ReactNode
  right: React.ReactNode
  reverse?: boolean
}

const HorizontalSplit: React.FC<Props> = ({ left, right, reverse }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.container}
      direction={reverse ? "row-reverse" : "row"}
    >
      <Grid item xs={12} md={6} className={classes.item}>
        {left}
      </Grid>
      <Grid item xs={12} md={6} className={classes.item}>
        {right}
      </Grid>
    </Grid>
  )
}

export default HorizontalSplit
