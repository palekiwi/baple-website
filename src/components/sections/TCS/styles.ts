import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      marginTop: theme.spacing(3),
      margin: "0 auto",
      maxWidth: 800,
    },
    divider: {
      marginBottom: theme.spacing(3),
    },
    header: {
      backgroundColor: theme.palette.primary.light,
      color: "#fff",
    },
    title: {
      color: theme.palette.common.white,
    },
    content: {},
    image: {
      width: "100%",
    },
  })
)

export default useStyles
