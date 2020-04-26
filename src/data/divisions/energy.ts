import { DivisionData } from "../../types"

export const frontmatter: { division: DivisionData } = {
  division: {
    name: "energy",
    title: "Baple Energy",
    index: 3,
    logo: {
      text: "../../images/logos/baple-energy-logo.png",
      notext: "../../images/logos/NoText/baple-energy-logo-no-text.png",
    },
    home: "/energy/",
    navLinks: [
      {
        label: "Inicio",
        to: "/energy",
        links: [],
      },
      {
        label: "Soluciones",
        to: "/energy/solutions",
        links: [
          {
            label: "E-Scooter",
            to: "/energy/e-scooter",
          },
          {
            label: "Powerwall",
            to: "/energy/powerwall",
          },
          {
            label: "Energy Storage",
            to: "/energy/energy-storage",
          },
        ],
      },
      {
        label: "Sobre Nosotros",
        to: "/energy/about",
        links: [],
      },
      {
        label: "Contacto",
        to: "/energy/contact",
        links: [],
      },
    ],
  },
}
