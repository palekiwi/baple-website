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
    item: {
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
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
      opacity: 0.9,
    },
    image: {
      height: 260,
      width: "100%",
      verticalAlign: "middle",
    },
  })
)

export default useStyles
