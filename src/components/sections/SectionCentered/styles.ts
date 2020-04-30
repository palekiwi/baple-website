import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      width: "100%",
      background: theme.palette.common.white,
    },
    pane: {
      width: "100%",
      height: "100%",
    },
    before: {
      width: "100%",
    },
    after: {
      width: "100%",
      marginTop: "1em",
    },
    content: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    text: {},
    link: {
      marginTop: 24,
    },
    heading: {
      marginBottom: "0.4em",
      color: theme.palette.primary.main,
    },
    subheading: {},
    paragraph: {},
    image: {
      height: "100%",
      width: "100%",
    },
  })
)

export default useStyles
