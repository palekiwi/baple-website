export const frontmatter = {
  template: "DivisionIndexTemplate",
  publish: false,
  title: "Baple Plastics",
  sections: {
    welcome: {
      heading:
        "Because innovation sells packaging and packaging sells products",
      subheading:
        "Porque innovación vende packaging y el packaging vende productos",
      logo: "../../../images/logos/baple-plastics-logo.png",
      image: "../../../images/plastics/Products_Welcome.jpg",
    },
    categories: {
      heading: "Soluciones de Plástico para usos generales",
      categoryLinks: [
        {
          label: "Pulverizadores",
          image: "../../../images/plastics/icons/pulverizadores-logo.png",
          to: "/plastics/pulverizadores",
        },
        {
          label: "Bombas de locion",
          image: "../../../images/plastics/icons/bombas-locion-logo.png",
          to: "/plastics/bombas-de-locion",
        },
        {
          label: "Micropulverizadores",
          image: "../../../images/plastics/icons/micropulverizador-logo.png",
          to: "/plastics/micropulverizadores",
        },
        {
          label: "Tapones",
          image: "../../../images/plastics/icons/tapones-de-plastico-logo.png",
          to: "/plastics/tapones",
        },
        {
          label: "Botellas",
          image: "../../../images/plastics/icons/botes-de-plastico-logo.png",
          to: "/plastics/botellas",
        },
      ],
    },
  },
}
