import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      position: "relative",
    },
    content: {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1,
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
    },
    overlay: {
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      background: theme.palette.primary.main,
      opacity: 0.75,
      position: "absolute",
      zIndex: -1,
    },
    item: {
      position: "relative",
      height: "100%",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: theme.spacing(2),
      color: "#fff",
    },
    subheading: {
      color: "#fff",
      textTransform: "uppercase",
      marginBottom: theme.spacing(2),
    },
    compras: {
      color: "#fff",
      fontWeight: "bold",
      marginBottom: theme.spacing(1),
    },
    certification: {
      color: "#fff",
      marginBottom: theme.spacing(2),
    },
    itemHeading: {
      color: theme.palette.background.default,
      textTransform: "uppercase",
      width: "100%",
      position: "absolute",
      textAlign: "center",
      left: 0,
      bottom: 0,
      padding: theme.spacing(2),
      background: theme.palette.primary.main,
    },
    images: {
      zIndex: 1,
      position: "relative",
    },
    text: {
      justifyContent: "center",
      padding: theme.spacing(3),
      textAlign: "center",
    },
    download: {},
    more: {},
  })
)

export default useStyles
