import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      background: theme.palette.common.white,
    },
    item: {
      width: "100%",
    },
  })
)

export default useStyles
