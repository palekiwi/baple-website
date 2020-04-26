import * as React from "react"
import { Button, Snackbar, Typography } from "@material-ui/core"
import useStyles from "./styles"

const Policy: React.FC<{}> = () => {
  const classes = useStyles()
  const [state, setState] = React.useState(false)

  React.useEffect(() => {
    const policy = window.localStorage.getItem("cookies-policy")
    console.log("policy:", policy)
    if (!(policy && policy === "accepted")) {
      setState(true)
    }
  })

  const handleClose = () => {
    setState(false)
  }

  const handleAccept = () => {
    window.localStorage.setItem("cookies-policy", "accepted")
    setState(false)
  }

  return (
    <div>
      <Snackbar
        className={classes.snackbar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={state}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={
          <div className={classes.content}>
            <Typography variant="body2" color="inherit">
              Utilizamos cookies propias y de terceros para realizar análisis de
              uso y medición de nuestra web para mejorar nuestros servicios.
            </Typography>
          </div>
        }
        action={[
          <Button
            key="undo"
            color="secondary"
            size="small"
            onClick={handleAccept}
          >
            Acepto
          </Button>,
        ]}
      />
    </div>
  )
}

export default Policy
