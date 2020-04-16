import { createMuiTheme } from "@material-ui/core/styles"

const primary = "#336699"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: "#757475",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    h1: {
      color: primary,
    },
    h2: {
      color: primary,
    },
  },
})

export default theme
