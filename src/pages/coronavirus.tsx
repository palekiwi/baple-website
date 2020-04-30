import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import More from "../components/sections/More"
import Coronavirus from "../components/pages/Coronavirus"

const CoronavirusPage: React.FC<{}> = () => {
  return (
    <Layout domain="group">
      <SEO title="Coronavirus" />
      <Coronavirus />
      <More domain="group" />
    </Layout>
  )
}

export default CoronavirusPage
