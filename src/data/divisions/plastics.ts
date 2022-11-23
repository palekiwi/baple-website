import { DivisionData } from "../../types"

export const frontmatter: { division: DivisionData } = {
  division: {
    name: "plastics",
    title: "Baple Plastics",
    index: 1,
    logo: {
      text: "../../images/logos/baple-plastics-logo.png",
      notext: "../../images/logos/NoText/baple-group-no-text.png",
    },
    home: "/plastics/",
    navLinks: [
      {
        label: "Inicio",
        to: "/",
      },
      {
        label: "Soluciones",
        to: "/plastics/solutions",
        links: [
          {
            label: "Pulverizadores",
            to: "/plastics/pulverizadores",
          },
          {
            label: "Bombas de loción",
            to: "/plastics/bombas-de-locion",
          },
          {
            label: "Micropulverizadores",
            to: "/plastics/micropulverizadores",
          },
          {
            label: "Botellas",
            to: "/plastics/botellas",
          },
          {
            label: "Tapones",
            to: "/plastics/tapones",
          },
        ],
      },
      {
        label: "Sobre Nosotros",
        to: "/plastics/about",
      },
      {
        label: "Contacto",
        to: "/plastics/contact",
      },
    ],
  },
}
