import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      a: {
        textDecoration: "none",
        color: "inherit",
      },
    },
    layout: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    main: {
      flex: 1,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      paddingTop: 64,
      margin: "0 auto",
      maxWidth: 1400,
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
    },
  })
)

export default useStyles
