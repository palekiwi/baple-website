import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    footer: {
      marginTop: theme.spacing(3),
    },
    footerSocial: {
      backgroundColor: theme.palette.primary.light,
      textAlign: "center",
    },
    addressInner: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      display: "flex",
      marginBottom: "1em",
    },
    footerAddress: {
      paddingTop: theme.spacing(3),
      backgroundColor: theme.palette.secondary.dark,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    footerDivisions: {
      width: "100%",
      textAlign: "center",
    },
    footerCopy: {
      backgroundColor: theme.palette.primary.dark,
      textAlign: "center",
    },
    white: {
      color: "#fff",
    },
    logo: {
      width: 150,
      height: 150,
      marginRight: "1em",
    },
    contact: {
      borderColor: theme.palette.secondary.light,
      color: "#ccc",
    },
  })
)

export default useStyles
