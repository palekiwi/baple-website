import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    snackbar: {
      width: "100%",
      borderRadius: 0,
    },
    content: {
      maxWidth: 800,
      color: theme.palette.common.white,
    },
  })
)

export default useStyles
