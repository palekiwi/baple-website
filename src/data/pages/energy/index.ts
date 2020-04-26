export const frontmatter = {
  template: "DivisionIndexTemplate",
  publish: false,
  title: "Baple Energy",
  sections: {
    welcome: {
      quotes: [
        {
          quote:
            "I'd put my money on the sun and solar energy, what a source of power. I hope we don´t have to wait until oil and coal run out, before we tackle that.",
          author: "Thomas Edison, 1931",
        },
        {
          quote:
            "Pondría mi dinero en el sol y la energía solar, qué fuente de energía. Espero que no tengamos que esperar hasta que se agoten el petróleo y el carbón para abordar eso.",
          author: "Thomas Edison, 1931",
        },
      ],
      image: "../../../images/background/Powerwall.jpg",
    },
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
