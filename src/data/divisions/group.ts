import { DivisionData } from "../../types"

export const frontmatter: { appData: DivisionData } = {
  division: {
    name: "group",
    title: "Baple Group",
    logo: {
      text: "../../images/logos/baple-group-logo.png",
      notext: "../../images/logos/baple-group-logo.png",
    },
    home: "/",
    navLinks: [
      {
        label: "Inicio",
        to: "/",
        links: [],
      },
      {
        label: "Contacto",
        to: "/contact",
        links: [],
      },
    ],
  },
}
