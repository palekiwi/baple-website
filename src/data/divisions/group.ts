import { DivisionData } from "../../types"

export const frontmatter: { division: DivisionData } = {
  division: {
    name: "group",
    title: "Baple Group",
    index: 0,
    logo: {
      text: "../../images/logos/baple-group-logo.png",
      notext: "../../images/logos/NoText/baple-group-no-text.png",
    },
    home: "/",
    navLinks: [
      {
        label: "Inicio",
        to: "/",
        links: [],
      },
      {
        label: "Divisions",
        to: "/",
        links: [
          {
            label: "Baple Plastics",
            to: "/plastics",
          },
          {
            label: "Baple Metal Packaging",
            to: "/metal-packaging",
          },
          {
            label: "Baple Energy",
            to: "/energy",
          },
          {
            label: "Baple Engineering",
            to: "/engineering",
          },
        ],
      },
      {
        label: "Contacto",
        to: "/contact",
        links: [],
      },
    ],
  },
}
