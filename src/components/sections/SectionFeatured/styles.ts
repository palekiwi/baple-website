import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      position: "relative",
      padding: "3em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    image: {
      position: "absolute",
      width: "100%",
      height: "100%",
    },
    img: {
      width: "100%",
      height: "100%",
    },
    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: 0.6,
    },
    fullHeight: {
      minHeight: "calc(100vh - 64px)",
    },
    content: {
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    text: {},
    header: {
      marginBottom: "1em",
    },
    heading: {
      marginBottom: "0.4em",
    },
    subheading: {
      marginBottom: "1em",
    },
    paragraph: {},
  })
)

export default useStyles
