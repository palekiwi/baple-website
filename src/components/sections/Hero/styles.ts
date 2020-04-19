import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Props } from "./index"

export const useDesktopStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: (props: Props) =>
        theme.spacing(props.padding ? props.padding : 0),
      paddingBottom: (props: Props) =>
        theme.spacing(props.padding ? props.padding : 0),
    },
    image: {
      position: "absolute",
      width: "100%",
      height: "100%",
    },
    img: {
      width: "100%",
      height: "100%",
    },
    fullHeight: {
      minHeight: "calc(100vh - 64px)",
    },
    container: {
      textAlign: "center",
      position: "relative",
      width: "100%",
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingRight: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      borderTop: `1px solid ${theme.palette.common.white}`,
      borderBottom: `1px solid ${theme.palette.common.white}`,
      zIndex: 1,
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.8,
      background: "linear-gradient(60deg, #fff, #eee)",
      zIndex: -1,
    },
    text: {},
    header: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    heading: {},
    subheading: {
      marginTop: "1rem",
    },
    paragraph: {},
  })
)

export const useMobileStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
    fullHeight: {
      minHeight: "calc(100vh - 64px)",
    },
    header: {
      position: "relative",
      height: "100%",
      width: "100%",
    },
    image: {
      position: "absolute",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
    },
    img: {
      height: "100%",
      width: "100%",
    },
    headerContent: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    container: {
      position: "relative",
      width: "100%",
      padding: theme.spacing(3),
      borderTop: `1px solid ${theme.palette.common.white}`,
      borderBottom: `1px solid ${theme.palette.common.white}`,
      zIndex: 1,
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.6,
      background: "linear-gradient(60deg, #fff, #eee)",
      zIndex: -1,
    },
    heading: {
      color: theme.palette.primary.main,
    },
    subheading: {
      color: theme.palette.secondary.main,
      marginTop: "1rem",
    },
    content: {
      padding: theme.spacing(3),
    },
    text: {},
    paragraph: {},
  })
)
