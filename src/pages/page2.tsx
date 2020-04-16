import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Link as GatsbyLink } from "gatsby"

import { Button } from "@material-ui/core"

const Page2: React.FC<{}> = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Page2</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button component={GatsbyLink} color="secondary" to="/">
      Go to page 1
    </Button>
  </Layout>
)

export default Page2
