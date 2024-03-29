import * as React from "react"
import SectionImage from "../SectionImage"
import { FluidObject } from "gatsby-image"
import { Link } from "gatsby"
import { Button } from "@material-ui/core"

interface Product {
  heading?: string
  subheading?: string
  body?: string[]
  image?: { childImageSharp: { fluid: FluidObject } }
  link: {
    to: string
    label: string
  }
}

interface Props {
  products: Product[]
}
const Products: React.FC<Props> = ({ products }) => {
  return (
    <div>
      {products.map((p, i) => (
        <SectionImage
          reverse={i % 2 === 0}
          key={i}
          heading={p.heading}
          subheading={p.subheading}
          body={p.body}
          image={p.image && p.image.childImageSharp.fluid}
        >
          <Link to={p.link.to}>
            <Button variant="outlined">{p.link.label}</Button>
          </Link>
        </SectionImage>
      ))}
    </div>
  )
}

export default Products
