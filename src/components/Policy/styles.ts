import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    snackbar: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      borderRadius: 0,
    },
    content: {
      maxWidth: 800,
      color: theme.palette.common.white,
    },
  })
)

export default useStyles
