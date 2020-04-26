import * as React from "react"
import HorizontalSplit from "../HorizontalSplit"
import useStyles from "./styles"
import { Typography } from "@material-ui/core"

const Point: React.FC<{}> = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.point}>
      <Typography color="inherit" variant="h6" className={classes.pointText}>
        {children}
      </Typography>
    </div>
  )
}

const Advantages: React.FC<{}> = () => {
  const classes = useStyles()
  return (
    <div className={classes.section}>
      <HorizontalSplit
        left={
          <div className={classes.pane}>
            <Typography className={classes.heading} variant="h4">
              Ventajas de Baple
            </Typography>
            <div className={classes.text}>
              <Typography
                variant="body2"
                className={classes.paragraph}
                color="inherit"
              >
                Innovación y Tecnología es la base para poder suministrar
                productos con los niveles de calidad exigidos por el mercado
                internacional, ofreciendo soluciones cada vez más modernas y más
                personalizadas a nuestros partners.
              </Typography>
              <Typography
                variant="body2"
                className={classes.paragraph}
                color="inherit"
              >
                Debido a los múltiples centros de fabricación, tenemos la
                capacidad de ofrecer una gran flexibilidad en la personalización
                de productos y servicios adicionales que aporten valor añadido
                al consumidor.
              </Typography>
            </div>
          </div>
        }
        right={
          <div className={classes.pane}>
            <Point>Innovacción y Tecnología</Point>
            <Point>Servicio Personalizado</Point>
            <Point>Baple TCS System</Point>
          </div>
        }
      />
    </div>
  )
}

export default Advantages
