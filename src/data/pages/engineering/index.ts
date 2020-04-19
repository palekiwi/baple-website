export const frontmatter = {
  template: "LandingTemplate",
  publish: false,
  sections: {
    categories: {
      heading: "Bienvenido a Baple Group",
      image: "../images/background/baple-group-background.jpeg",
      categoryLinks: [
        {
          label: "Baple Plastics",
          image: "../../images/logos/baple-plastics-logo.png",
          to: "/plastics",
        },
        {
          label: "Baple Metal Packaging",
          image: "../../images/logos/baple-plastics-logo.png",
          to: "/metal-packaging",
        },
        {
          label: "Baple Energy",
          image: "../../images/logos/baple-plastics-logo.png",
          to: "/energy",
        },
        {
          label: "Baple Engineering",
          image: "../../images/logos/baple-plastics-logo.png",
          to: "/engineering",
        },
      ],
    },
  },
}
