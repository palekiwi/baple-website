import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Props } from "./index"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      "& path": {
        fill: (props: Props) => (props.fill ? props.fill : "red"),
      },
    },
  })
)

export default useStyles
