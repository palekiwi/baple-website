import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useDesktopStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      position: "relative",
      height: "100%",
      width: "100%",
      justifyConent: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(3),
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
      borderRadius: 4,
      border: `1px solid transparent`,
    },
    logoPane: {
      display: "flex",
      alignItems: "center",
      zIndex: 1,
    },
    logo: {
      margin: "0 auto",
      maxWidth: 300,
      width: "100%",
      height: "auto",
    },
    textPane: {
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      marginTop: "1rem",
      textAlign: "center",
    },
    heading: {
      fontFamily: "Cedarville Cursive, sans-serif",
      color: theme.palette.primary.main,
      marginBottom: "1.2em",
    },
    subheading: {
      color: theme.palette.secondary.main,
      fontWeight: 300,
    },
    quotes: {
      maxWidth: 600,
    },
    blockquote: {
      marginBottom: "0.2em",
    },
    quote: {
      fontStyle: "italic",
      marginBottom: "0.4em",
      color: theme.palette.primary.main,
    },
    author: {
      color: theme.palette.secondary.main,
    },
  })
)

export const useMobileStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      position: "relative",
      height: "100%",
      width: "100%",
      justifyConent: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(3),
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
      borderRadius: 4,
      border: `1px solid transparent`,
    },
    logo: {
      textAlign: "center",
      width: "50%",
    },
    textPane: {
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      marginTop: "1rem",
      textAlign: "center",
    },
    heading: {
      fontFamily: "Cedarville Cursive, sans-serif",
      color: theme.palette.primary.main,
      marginBottom: "1.2em",
    },
    subheading: {
      color: theme.palette.secondary.main,
      fontWeight: 300,
    },
    quotes: {},
    blockquote: {
      margin: 0,
      marginBottom: "1rem",
      padding: 0,
      ["&:last-child"]: {
        marginBottom: 0,
      },
    },
    quote: {
      fontStyle: "italic",
      marginBottom: "0.4em",
      color: theme.palette.primary.main,
    },
    author: {
      color: theme.palette.secondary.main,
    },
  })
)
