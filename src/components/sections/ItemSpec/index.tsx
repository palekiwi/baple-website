import * as React from "react"
import useStyles from "./styles"
import { DivisionName } from "../../../types"
import { homeFromDomain } from "../../../utils"
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core"
import { Link } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  item: {
    heading: string
    body: string[]
    image: { childImageSharp: { fluid: FluidObject } }
    spec: { heading: string; params: { key: string; value: string }[] }[]
  }
  domain: DivisionName
}

const ItemSpec: React.SFC<Props> = ({ item, domain }) => {
  const classes = useStyles()
  return (
    <Card key={item.heading} className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Img
              className={classes.media}
              fluid={item.image.childImageSharp.fluid}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <div className={classes.cardText}>
              <div className={classes.header}>
                <Typography variant="h4" className={classes.heading}>
                  {item.heading}
                </Typography>

                <div className={classes.text}>
                  {item.body.map((t, n) => (
                    <Typography
                      key={n}
                      variant="body2"
                      className={classes.paragraph}
                    >
                      {t}
                    </Typography>
                  ))}
                </div>
                <Link to={`${homeFromDomain(domain)}contact`}>
                  <Button color="primary" variant="outlined">
                    ¡Contáctanos!
                  </Button>
                </Link>
              </div>

              {item.spec.map((s, j) => (
                <div key={j} className={classes.spec}>
                  <Typography variant="h5">{s.heading}</Typography>
                  <Table className={classes.table}>
                    <TableBody>
                      {s.params.map((c, k) => (
                        <TableRow key={k}>
                          <TableCell className={classes.key}>{c.key}</TableCell>
                          <TableCell>{c.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ItemSpec
