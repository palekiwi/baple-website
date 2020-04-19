export const frontmatter = {
  template: "SolutionsTemplate",
  publish: true,
  title: "Solutions",
  sections: {
    products: {
      productList: [
        {
          heading: "Baple E-Scooters",
          image: "../../../images/energy/Scooter_FutureAwaken_0827.jpg",
          subheading: "The future awakens, let's get it on!",
          body: ["El despertar del futuro, vamos a por él!"],
          link: {
            to: "/energy/e-scooter",
            label: "Más Info",
          },
        },
        {
          heading: "Baple Powerwalls",
          image: "../../../images/background/Powerwall_Half.jpg",
          subheading:
            "Da la bienvenida al futuro: energía limpia y de autoconsumo!",
          body: [],
          link: {
            to: "/energy/powerwall",
            label: "Más Info",
          },
        },
        {
          heading: "Baple Energy Storage",
          image: "../../../images/background/Storage_Half.jpg",
          subheading: "Da la bienvenida al futuro: energía limpia y económica",
          body: [],
          link: {
            to: "/energy/energy-storage",
            label: "Más Info",
          },
        },
      ],
    },
  },
}
