import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "2rem 0",
    },
    bes: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      borderRadius: 4,
      padding: theme.spacing(3),
      border: "1px solid gray",
      borderColor: theme.palette.grey[400],
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        margin: 0,
      },
    },
    heading: {
      marginBottom: "1rem",
    },
    image: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      opacity: 0.8,
      width: "80%",
      margin: "0 auto",
    },
    besItem: {},
    link: {
      margin: "1.4em 0",
    },
    divider: {
      margin: theme.spacing(3),
    },
  })
)

export default useStyles
