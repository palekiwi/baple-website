import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "100%",
      height: "100%",
    },
    content: {
      background: theme.palette.background.paper,
      height: "100%",
      width: "100%",
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(6),
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    before: {
      width: "100%",
    },
    after: {
      width: "100%",
      marginTop: "1em",
    },
    body: {},
    heading: {
      marginBottom: "0.4em",
    },
    subheading: {
      marginBottom: "1em",
    },
    paragraph: {
      marginBottom: "1em",
      ["&:last-child"]: {
        marginBottom: 0,
      },
    },
  })
)

export default useStyles
