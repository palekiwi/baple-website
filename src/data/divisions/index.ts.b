import { DomainData } from "../../types"

export const frontmatter: { domains: DomainData[] } = {
  domains: [
    {
      name: "group",
      title: "Baple Group",
      logo: {
        text: "../../images/logos/baple-group-logo.png",
        notext: "../../images/logos/baple-group-logo.png",
      },
      home: "/",
      navLinks: [
        {
          label: "Inicio",
          to: "/",
          links: [],
        },
        {
          label: "Contacto",
          to: "/contact",
          links: [],
        },
      ],
    },
    {
      name: "energy",
      title: "Baple Energy",
      logo: "../../images/logos/baple-plastics-logo.png",
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
    {
      name: "engineering",
      title: "Baple Engineering",
      logo: "../../images/logos/baple-plastics-logo.png",
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
    {
      name: "metalPackaging",
      title: "Baple Metal Packaging",
      logo: "../../images/logos/baple-plastics-logo.png",
      home: "/metal-packaging/",
      navLinks: [
        {
          label: "Inicio",
          to: "/metal-packaging",
        },
        {
          label: "Soluciones",
          to: "/metal-packaging/solutions",
          links: [
            {
              label: "Botes de Aerosol",
              to: "/metal-packaging/botes-de-aerosol",
            },
            {
              label: "Válvulas de Aerosol",
              to: "/metal-packaging/valvulas-de-aerosol",
            },
            {
              label: "Tapas",
              to: "/metal-packaging/tapas",
            },
          ],
        },
        {
          label: "Sobre Nosotros",
          to: "/metal-packaging/about",
        },
        {
          label: "Contacto",
          to: "/metal-packaging/contact",
          links: [],
        },
      ],
    },
    {
      name: "plastics",
      title: "Baple Plastics",
      logo: "../../images/logos/baple-plastics-logo.png",
      home: "/plastics/",
      navLinks: [
        {
          label: "Inicio",
          to: "/plastics/",
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
  ],
}
