import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      backgroundColor: "white",
      height: 64,
    },
    grow: {
      flexGrow: 1,
    },
    logo: {
      marginTop: 5,
      marginRight: 10,
      width: 48,
      height: 48,
      alignSelf: "center",
    },
    link: {
      color: theme.palette.primary.main,
    },
    brand: {
      display: "flex",
      alignItems: "center",
    },
    title: {},
  })
)

export default useStyles
