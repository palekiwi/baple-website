export const frontmatter = {
  template: "DivisionIndexTemplate",
  publish: false,
  title: "Baple Metal Packaging",
  sections: {
    welcome: {
      heading:
        "Because innovation sells packaging and packaging sells products",
      subheading:
        "Porque innovación vende packaging y el packaging vende productos",
      logo: "../../../images/logos/baple-metal-packaging-logo.png",
      image: "../../../images/background/MetalPackaging.jpg",
    },
    categories: {
      heading: "Soluciones de Aerosol",
      categoryLinks: [
        {
          label: "Botes de Aerosol",
          image: "../../../images/metal-packaging/aerosol tin cans icon.png",
          to: "/metal-packaging/botes-de-aerosol",
        },
        {
          label: "Válvulas de Aerosol",
          image: "../../../images/metal-packaging/aerosol valves icon.png",
          to: "/metal-packaging/valvulas-de-aerosol",
        },
        {
          label: "Tapas",
          image: "../../../images/metal-packaging/tapa-icon-new.png",
          to: "/metal-packaging/tapas",
        },
      ],
    },
  },
}
