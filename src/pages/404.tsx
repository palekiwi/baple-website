import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SectionCentered from "../components/sections/SectionCentered"

const NotFoundPage = () => (
  <Layout domain="group">
    <SEO title="404" />
    <SectionCentered
      heading={"404"}
      subheading={"This page is not available."}
    />
  </Layout>
)

export default NotFoundPage
