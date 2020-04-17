export const frontmatter = {
  template: "IndexTemplate",
  publish: false,
  sections: {
    categories: {
      heading: "Bienvenido a Baple Group",
      image: "../img/background/baple-group-background.jpeg",
      categoryLinks: [
        {
          label: "Baple Plastics",
          image: "../img/logos/baple-plastics-logo.png",
          to: "/plastics",
        },
        {
          label: "Baple Metal Packaging",
          image: "../img/logos/baple-metal-packaging-logo.png",
          to: "/metal-packaging",
        },
        {
          label: "Baple Energy",
          image: "../img/logos/baple-energy-logo.png",
          to: "/energy",
        },
        {
          label: "Baple Engineering",
          image: "../img/logos/baple-engineering-logo.png",
          to: "/engineering",
        },
      ],
    },
  },
}
