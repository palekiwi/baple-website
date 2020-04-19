import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      background: theme.palette.common.white,
      paddingBottom: theme.spacing(3),
    },
    heading: {
      width: "100%",
      marginBottom: "1.2em",
      textAlign: "center",
      color: theme.palette.primary.main,
    },
    pane: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      margin: "0 auto",
      maxWidth: 1000,
    },
    text: {},
    paragraph: {
      marginBottom: "1em",
      textAlign: "center",
    },
    point: {
      borderRadius: 4,
      border: `1px solid ${theme.palette.grey.A200}`,
      padding: "1.2em",
      margin: "0.4em",
    },
    pointText: {
      color: theme.palette.primary.main,
      textAlign: "center",
    },
  })
)

export default useStyles
