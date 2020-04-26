import { DivisionData } from "../../types"

export const frontmatter: { division: DivisionData } = {
  division: {
    name: "engineering",
    title: "Baple Engineering",
    index: 4,
    logo: {
      text: "../../images/logos/baple-plastics-logo.png",
      notext: "../../images/logos/NoText/baple-group-no-text.png",
    },
    home: "/engineering/",
    navLinks: [
      {
        label: "Inicio",
        to: "/engineering",
        links: [],
      },
      {
        label: "Sobre Nosotros",
        to: "/engineering/about",
        links: [],
      },
      {
        label: "Contacto",
        to: "/engineering/contact",
        links: [],
      },
    ],
  },
}
